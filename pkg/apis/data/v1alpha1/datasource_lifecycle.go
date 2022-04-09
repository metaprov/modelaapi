package v1alpha1

import (
	"encoding/json"
	"fmt"

	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modelaapi/pkg/apis/data"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	ctrl "sigs.k8s.io/controller-runtime"
)

//==============================================================================
// EntityRef
//==============================================================================

func (sc *DataSource) AddColumn(
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
	sc.Spec.Schema.Columns = append(sc.Spec.Schema.Columns, a)
}

func (sc *DataSource) HasFinalizer() bool { return util.HasFin(&sc.ObjectMeta, data.GroupName) }
func (sc *DataSource) AddFinalizer()      { util.AddFin(&sc.ObjectMeta, data.GroupName) }
func (sc *DataSource) RemoveFinalizer()   { util.RemoveFin(&sc.ObjectMeta, data.GroupName) }

func (sc *DataSource) MarkLastFieldAsTarget() {
	targets := sc.Spec.Schema.Columns
	// last column
	lastCol := targets[len(sc.Spec.Schema.Columns)-1]
	lastCol.Target = util.BoolPtr(true)
	sc.Spec.Schema.Columns[len(sc.Spec.Schema.Columns)-1] = lastCol
}

func (sc *DataSource) MarkFieldAsTarget(target string) {
	for v, x := range sc.Spec.Schema.Columns {
		if x.Name == target {
			x.Target = util.BoolPtr(true)
			sc.Spec.Schema.Columns[v] = x
			break
		}
	}
}

//==============================================================================
// Validate
//==============================================================================

func (sc DataSource) Validate() (bool, []metav1.StatusCause) {
	var causes []metav1.StatusCause

	// must have one target attribute
	if sc.CountTargetAttributes() == 0 {
		causes = append(causes, metav1.StatusCause{
			Type:    metav1.CauseTypeFieldValueInvalid,
			Field:   "FeatureColumn",
			Message: "Illegal data definition file. Please specify one of the attributes as target",
		})
	}

	// must have at least one active attribute which is not a target
	if sc.CountTargetAttributes() > 1 {
		causes = append(causes, metav1.StatusCause{
			Type:    metav1.CauseTypeFieldValueInvalid,
			Field:   "FeatureColumn",
			Message: "Illegal data definition file. More than attribute is defined as target",
		})
	}

	// validate each attribute
	for _, a := range sc.Spec.Schema.Columns {
		valid, c := a.Validate()
		if !valid {
			for _, each := range c {
				causes = append(causes, each)
			}
		}
	}

	return len(causes) == 0, causes
}

func (a *Column) ValidateColumn() (bool, []metav1.StatusCause) {
	var causes []metav1.StatusCause
	if a.Target != nil && a.Ignore != nil && *a.Target && *a.Ignore {
		causes = append(causes, metav1.StatusCause{
			Type:    metav1.CauseTypeFieldValueInvalid,
			Field:   "FeatureColumn",
			Message: fmt.Sprintf("FeatureColumn %s cannot be ignored and a target", a.Name),
		})
	}

	if err := util.CheckMaxLen(a.Name, "name", 256); err != nil {
		causes = append(causes, metav1.StatusCause{
			Type:    metav1.CauseTypeFieldValueInvalid,
			Field:   "FeatureColumn",
			Message: fmt.Sprintf("FeatureColumn %s length cannot be more than 256 chars", a.Name),
		})
	}

	if err := util.CheckNotEmpty(a.Name, "name"); err != nil {
		causes = append(causes, metav1.StatusCause{
			Type:    metav1.CauseTypeFieldValueInvalid,
			Field:   "FeatureColumn",
			Message: fmt.Sprintf("FeatureColumn %s cannot be empty", a.Name),
		})
	}
	return len(causes) == 0, causes
}

// CountActiveAttributes counts the number of attributes that we should not ignore
func (sc DataSource) CountActiveAttributes() int {
	count := 0
	for _, a := range sc.Spec.Schema.Columns {
		if !*a.Ignore {
			count++
		}
	}
	return count
}

// Count the number of attributes that are mark as targets
func (sc DataSource) CountTargetAttributes() int {
	count := 0
	for _, a := range sc.Spec.Schema.Columns {
		if a.Target != nil && *a.Target {
			count++
		}
	}
	return count
}

// Merge or update condition
// Merge or update condition
func (sc *DataSource) CreateOrUpdateCond(cond DataSourceCondition) {
	i := sc.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		sc.Status.Conditions = append(sc.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := sc.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	sc.Status.Conditions[i] = current
}

func (sc *DataSource) GetCondIdx(t DataSourceConditionType) int {
	for i, v := range sc.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (sc *DataSource) GetCond(t DataSourceConditionType) DataSourceCondition {
	for _, v := range sc.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return DataSourceCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (schema *DataSource) IsReady() bool {
	return schema.GetCond(DatasourceReady).Status == v1.ConditionTrue
}

func (sc *DataSource) Key() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/datasources/%s-datasource.yaml", sc.Namespace, *sc.Spec.VersionName, sc.Name)
}

func (schema *DataSource) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/datasources/%s", schema.Namespace, *schema.Spec.VersionName, schema.Name)
}

func (schema *DataSource) ManifestUri() string {
	return fmt.Sprintf("%s/%s-schema.yaml", schema.RootUri(), schema.Name)
}

func (sc *DataSource) Poplulate() {
	sc.ObjectMeta = metav1.ObjectMeta{
		Name:      "binary-classification",
		Namespace: "iris-product",
	}
	sc.Spec = DataSourceSpec{
		VersionName: util.StrPtr("iris"),
	}

	sc.Spec.Schema.Columns = make([]Column, 0)
	sc.AddColumn("a", catalog.DataTypeNumber, catalog.DataDomainNone, false, false, false)
	sc.AddColumn("b", catalog.DataTypeNumber, catalog.DataDomainNone, false, false, false)
	sc.AddColumn("c", catalog.DataTypeNumber, catalog.DataDomainNone, false, false, false)
	sc.AddColumn("d", catalog.DataTypeNumber, catalog.DataDomainNone, false, false, false)
	sc.AddColumn("class", catalog.DataTypeCategorical, catalog.DataDomainNone, false, true, false)

}

func (schema *DataSource) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(schema)
}

func (in *DataSource) ActiveColumns() (string, error) {
	columns := make([]string, 0)
	for _, v := range in.Spec.Schema.Columns {
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

func (sc *DataSource) InferTask() catalog.MLTask {
	// get last column
	last := sc.Spec.Schema.Columns[len(sc.Spec.Schema.Columns)-1]
	if last.DataType == catalog.DataTypeNumber {
		return catalog.Regression
	} else {
		return catalog.BinaryClassification
	}
}

func (sc *DataSource) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(sc).
		Complete()
}

func (sc *DataSource) MarkReady() {
	sc.CreateOrUpdateCond(DataSourceCondition{
		Type:   DatasourceReady,
		Status: v1.ConditionTrue,
	})

}

func (sc *DataSource) MarkSaved() {
	sc.CreateOrUpdateCond(DataSourceCondition{
		Type:   DatasourceSaved,
		Status: v1.ConditionTrue,
	})
}

func (sc *DataSource) Saved() bool {
	return sc.GetCond(DatasourceSaved).Status == v1.ConditionTrue
}

func (sc *DataSource) HaveValidationRules() bool {
	return len(sc.Spec.Schema.Validation.DatasetValidations) > 0 ||
		len(sc.Spec.Schema.Validation.MultiDatasetValidations) > 0 ||
		len(sc.Spec.Schema.Validation.ColumnValidations) > 0 ||
		len(sc.Spec.Schema.Validation.FileValidations) > 0

}
