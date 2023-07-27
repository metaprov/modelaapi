package v1alpha1

import (
	"encoding/json"
	"fmt"
	"github.com/gogo/protobuf/proto"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	ctrl "sigs.k8s.io/controller-runtime"
)

//==============================================================================
// EntityRef
//==============================================================================

func (datasource *DataSource) AddColumn(
	name string,
	dtype catalog.DataType,
	dformat catalog.DataDomain,
	Ignore bool,
	Target bool,
	Nullable bool) {
	a := Column{}
	a.Name = name
	a.DataType = dtype
	a.Format = &dformat
	a.Ignore = util.BoolPtr(Ignore)
	a.Target = util.BoolPtr(Target)
	a.Nullable = util.BoolPtr(Nullable)
	datasource.Spec.Schema.Columns = append(datasource.Spec.Schema.Columns, a)
}

func (datasource DataSource) HasFinalizer() bool {
	return util.HasFin(&datasource.ObjectMeta, data.GroupName)
}
func (datasource *DataSource) AddFinalizer() { util.AddFin(&datasource.ObjectMeta, data.GroupName) }
func (datasource *DataSource) RemoveFinalizer() {
	util.RemoveFin(&datasource.ObjectMeta, data.GroupName)
}

func (datasource *DataSource) MarkLastFieldAsTarget() {
	targets := datasource.Spec.Schema.Columns
	// last column
	lastCol := targets[len(datasource.Spec.Schema.Columns)-1]
	lastCol.Target = util.BoolPtr(true)
	datasource.Spec.Schema.Columns[len(datasource.Spec.Schema.Columns)-1] = lastCol
}

func (datasource *DataSource) MarkFieldAsTarget(target string) {
	for v, x := range datasource.Spec.Schema.Columns {
		if x.Name == target {
			x.Target = util.BoolPtr(true)
			datasource.Spec.Schema.Columns[v] = x
			break
		}
	}
}

//==============================================================================
// Validate
//==============================================================================

func (datasource DataSource) Validate() (bool, []metav1.StatusCause) {
	var causes []metav1.StatusCause

	// must have one target attribute
	if datasource.CountTargetAttributes() == 0 {
		causes = append(causes, metav1.StatusCause{
			Type:    metav1.CauseTypeFieldValueInvalid,
			Field:   "FeatureColumn",
			Message: "Illegal data definition file. Please specify one of the attributes as target",
		})
	}

	// must have at least one active attribute which is not a target
	if datasource.CountTargetAttributes() > 1 {
		causes = append(causes, metav1.StatusCause{
			Type:    metav1.CauseTypeFieldValueInvalid,
			Field:   "FeatureColumn",
			Message: "Illegal data definition file. More than attribute is defined as target",
		})
	}

	// validate each attribute
	for _, a := range datasource.Spec.Schema.Columns {
		valid, c := a.Validate()
		if !valid {
			for _, each := range c {
				causes = append(causes, each)
			}
		}
	}

	return len(causes) == 0, causes
}

func (column *Column) ValidateColumn() (bool, []metav1.StatusCause) {
	var causes []metav1.StatusCause
	if column.Target != nil && column.Ignore != nil && *column.Target && *column.Ignore {
		causes = append(causes, metav1.StatusCause{
			Type:    metav1.CauseTypeFieldValueInvalid,
			Field:   "FeatureColumn",
			Message: fmt.Sprintf("FeatureColumn %s cannot be ignored and column target", column.Name),
		})
	}

	if err := util.CheckMaxLen(column.Name, "name", 256); err != nil {
		causes = append(causes, metav1.StatusCause{
			Type:    metav1.CauseTypeFieldValueInvalid,
			Field:   "FeatureColumn",
			Message: fmt.Sprintf("FeatureColumn %s length cannot be more than 256 chars", column.Name),
		})
	}

	if err := util.CheckNotEmpty(column.Name, "name"); err != nil {
		causes = append(causes, metav1.StatusCause{
			Type:    metav1.CauseTypeFieldValueInvalid,
			Field:   "FeatureColumn",
			Message: fmt.Sprintf("FeatureColumn %s cannot be empty", column.Name),
		})
	}
	return len(causes) == 0, causes
}

func ParseDataSourceYaml(content []byte) (*DataSource, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*DataSource)
	return r, nil
}

// CountActiveAttributes counts the number of attributes that we should not ignore
func (datasource DataSource) CountActiveAttributes() int {
	count := 0
	for _, a := range datasource.Spec.Schema.Columns {
		if !*a.Ignore {
			count++
		}
	}
	return count
}

// Count the number of attributes that are mark as targets
func (datasource DataSource) CountTargetAttributes() int {
	count := 0
	for _, a := range datasource.Spec.Schema.Columns {
		if a.Target != nil && *a.Target {
			count++
		}
	}
	return count
}

// Merge or update condition
// Merge or update condition
func (datasource *DataSource) CreateOrUpdateCond(cond metav1.Condition) {
	i := datasource.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = now
		datasource.Status.Conditions = append(datasource.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := datasource.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	datasource.Status.Conditions[i] = current
}

func (datasource DataSource) GetCondIdx(t string) int {
	for i, v := range datasource.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (datasource DataSource) GetCond(t string) metav1.Condition {
	for _, v := range datasource.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return metav1.Condition{
		Type:    t,
		Status:  metav1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (datasource DataSource) IsReady() bool {
	return datasource.GetCond(DatasourceReady).Status == metav1.ConditionTrue
}

func (datasource DataSource) Key() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/datasources/%s-datasource.yaml", datasource.Namespace, datasource.Spec.VersionName, datasource.Name)
}

func (datasource DataSource) RootURI() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/datasources/%s", datasource.Namespace, datasource.Spec.VersionName, datasource.Name)
}

func (datasource DataSource) ManifestURI() string {
	return fmt.Sprintf("%s/%s-datasource.yaml", datasource.RootURI(), datasource.Name)
}

func (datasource DataSource) ActiveColumns() (string, error) {
	columns := make([]string, 0)
	for _, v := range datasource.Spec.Schema.Columns {
		if !(v.Ignore != nil && *v.Ignore) && !(v.Target != nil && *v.Target) {
			columns = append(columns, v.Name)
		}
	}
	js, err := json.Marshal(columns)
	if err != nil {
		return "", err
	}
	return string(js), nil
}

func (datasource DataSource) InferTask() catalog.MLTask {
	// get last column
	last := datasource.Spec.Schema.Columns[len(datasource.Spec.Schema.Columns)-1]
	if last.DataType == catalog.DataTypeNumber {
		return catalog.Regression
	} else {
		return catalog.BinaryClassification
	}
}

func (datasource *DataSource) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(datasource).
		Complete()
}

func (datasource *DataSource) MarkReady() {
	datasource.CreateOrUpdateCond(metav1.Condition{
		Type:   DatasourceReady,
		Status: metav1.ConditionTrue,
		Reason: DatasourceReady,
	})

}

func (datasource *DataSource) HaveValidationRules() bool {
	return len(datasource.Spec.UnitTestsTemplate.Tests) > 0

}

func (datasource DataSource) GetStatus() proto.Message {
	return &datasource.Status
}

func (datasource DataSource) GetObservedGeneration() int64 {
	return datasource.Status.ObservedGeneration
}

func (datasource *DataSource) SetObservedGeneration(generation int64) {
	datasource.Status.ObservedGeneration = generation
}

func (datasource *DataSource) SetUpdatedAt(time *metav1.Time) {
	datasource.Status.UpdatedAt = time
}

func (datasource *DataSource) SetStatus(status interface{}) {
	datasource.Status = *status.(*DataSourceStatus)
}
