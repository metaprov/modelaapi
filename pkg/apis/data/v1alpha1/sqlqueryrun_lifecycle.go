package v1alpha1

import (
	"fmt"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/inference"
	infra "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

//==============================================================================
// EntityRef
//==============================================================================

func (prediction *SqlQueryRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(prediction).
		Complete()
}

const SqlQueryLabelKey = "sqlquery"

//==============================================================================
// Keys
//==============================================================================

func (prediction *SqlQueryRun) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", prediction.Namespace, prediction.Name)
}

func (prediction *SqlQueryRun) ManifestUri() string {
	return fmt.Sprintf("%s/%s-prediction.yaml", prediction.RootUri(), prediction.Name)
}

//==============================================================================
// Validate
//==============================================================================

func (prediction *SqlQueryRun) SqlQueryName() string {
	return prediction.ObjectMeta.Labels[SqlQueryLabelKey]
}

//==============================================================================
// Finalizer
//==============================================================================

func (prediction *SqlQueryRun) HasFinalizer() bool {
	return util.HasFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *SqlQueryRun) AddFinalizer() {
	util.AddFin(&prediction.ObjectMeta, inference.GroupName)
}
func (prediction *SqlQueryRun) RemoveFinalizer() {
	util.RemoveFin(&prediction.ObjectMeta, inference.GroupName)
}

//==============================================================================
// Trackable
//==============================================================================

// Return the on disk rep location
func (prediction *SqlQueryRun) RepPath(root string) (string, error) {
	return fmt.Sprintf("%s/predictions/%s.yaml", root, prediction.ObjectMeta.Name), nil
}

// Merge or update condition
// Merge or update condition
func (prediction *SqlQueryRun) CreateOrUpdateCond(cond SqlQueryRunCondition) {
	i := prediction.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		prediction.Status.Conditions = append(prediction.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := prediction.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	prediction.Status.Conditions[i] = current
}

func (prediction *SqlQueryRun) GetCondIdx(t SqlQueryRunConditionType) int {
	for i, v := range prediction.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (prediction *SqlQueryRun) GetCond(t SqlQueryRunConditionType) SqlQueryRunCondition {
	for _, v := range prediction.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return SqlQueryRunCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}
}

func (prediction *SqlQueryRun) IsCompleted() bool {
	return prediction.GetCond(SqlQueryRunCompleted).Status == v1.ConditionTrue
}

func (prediction *SqlQueryRun) Key() string {
	return fmt.Sprintf("dataproducts/%s/predictions/%s", prediction.Namespace, prediction.Name)
}

func ParseSqlQueryRunYaml(content []byte) (*SqlQueryRun, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*SqlQueryRun)
	return r, nil
}

func (prediction *SqlQueryRun) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(prediction)
}

func (run *SqlQueryRun) MarkFailed(msg string) {
	run.CreateOrUpdateCond(SqlQueryRunCondition{
		Type:    SqlQueryRunCompleted,
		Status:  v1.ConditionFalse,
		Reason:  string(catalog.Failed),
		Message: msg,
	})
	now := metav1.Now()
	if run.Status.EndTime == nil {
		run.Status.EndTime = &now
	}
}

func (in *SqlQueryRun) IsFailed() bool {
	cond := in.GetCond(SqlQueryRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(SqlQueryRunPhaseFailed)
}

func (prediction *SqlQueryRun) MarkCompleted() {
	prediction.CreateOrUpdateCond(SqlQueryRunCondition{
		Type:   SqlQueryRunCompleted,
		Status: v1.ConditionTrue,
	})
	prediction.Status.Phase = SqlQueryRunPhaseCompleted
	now := metav1.Now()
	if prediction.Status.EndTime == nil {
		prediction.Status.EndTime = &now
	}
}

func (prediction *SqlQueryRun) OpName() string {
	return prediction.Namespace + "-" + prediction.Name
}

func (version *SqlQueryRun) MarkSaved() {
	version.CreateOrUpdateCond(SqlQueryRunCondition{
		Type:   SqlQueryRunSaved,
		Status: v1.ConditionTrue,
	})
}

func (version *SqlQueryRun) IsSaved() bool {
	return version.GetCond(SqlQueryRunSaved).Status == v1.ConditionTrue
}

func (run *SqlQueryRun) MarkRunning() {
	run.CreateOrUpdateCond(SqlQueryRunCondition{
		Status: v1.ConditionFalse,
		Reason: string(catalog.Running),
	})
	run.Status.Phase = SqlQueryRunPhaseRunning
	now := metav1.Now()
	if run.Status.StartTime == nil {
		run.Status.EndTime = &now
	}
}

// Generate a dataset completion alert
func (run *SqlQueryRun) CompletionAlert(tenantRef *v1.ObjectReference, notifierName *string) *infra.Alert {
	level := infra.Info
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr("SQL Query Completed"),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "SqlQueryRun",
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        run.Spec.Owner,
			Fields: map[string]string{
				"Start Time": run.ObjectMeta.CreationTimestamp.GoString(),
				"End Time":   run.Status.EndTime.GoString(),
			},
		},
	}
}

func (run *SqlQueryRun) ErrorAlert(tenantRef *v1.ObjectReference, notifierName *string, err error) *infra.Alert {
	level := infra.Error
	return &infra.Alert{
		ObjectMeta: metav1.ObjectMeta{
			GenerateName: run.Name,
			Namespace:    run.Namespace,
		},
		Spec: infra.AlertSpec{
			Subject: util.StrPtr("SQL Query Error"),
			Level:   &level,
			EntityRef: v1.ObjectReference{
				Kind:      "SqlQueryRun",
				Name:      run.Name,
				Namespace: run.Namespace,
			},
			TenantRef:    tenantRef,
			NotifierName: notifierName,
			Owner:        run.Spec.Owner,
			Fields: map[string]string{
				"Start Time": run.ObjectMeta.CreationTimestamp.GoString(),
				"End Time":   run.Status.EndTime.GoString(),
			},
		},
	}
}

// Return the state of the run as RunStatus
func (run *SqlQueryRun) RunStatus() *catalog.LastRunStatus {
	result := &catalog.LastRunStatus{
		At:             run.Status.StartTime,
		Duration:       int32(run.Status.EndTime.Unix() - run.Status.StartTime.Unix()),
		FailureReason:  run.Status.FailureReason,
		FailureMessage: run.Status.FailureMessage,
	}
	if run.IsFailed() {
		result.Outcome = catalog.RunOutcomeError
	} else {
		result.Outcome = catalog.RunOutcomeSuccess
	}
	return result

}
