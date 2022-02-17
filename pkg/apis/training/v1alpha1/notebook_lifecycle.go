/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"bytes"
	"fmt"
	"text/template"

	"github.com/metaprov/modelaapi/pkg/apis/training"
	"github.com/metaprov/modelaapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/kubernetes/scheme"
	ctrl "sigs.k8s.io/controller-runtime"
)

//Set up the webhook with the manager.
func (notebook *Notebook) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(notebook).
		Complete()
}

//==============================================================================
// Finializer
//==============================================================================

func (notebook *Notebook) HasFinalizer() bool {
	return util.HasFin(&notebook.ObjectMeta, training.GroupName)
}
func (notebook *Notebook) AddFinalizer()    { util.AddFin(&notebook.ObjectMeta, training.GroupName) }
func (notebook *Notebook) RemoveFinalizer() { util.RemoveFin(&notebook.ObjectMeta, training.GroupName) }

//==============================================================================
// Keys
//==============================================================================

func (notebook *Notebook) GenImageName() string {
	return fmt.Sprintf("modela/%s", notebook.ObjectMeta.Name)
}

func (model *Notebook) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/dataproductversions/%s/notebooks/%s", model.Namespace, *model.Spec.VersionName, model.Name)
}

//    dataproducts/*/notebooks/*/notebook-<name>.yaml

func (notebook *Notebook) ManifestUri() string {
	return fmt.Sprintf("%s/%s-notebook.yaml", notebook.RootUri(), notebook.Name)
}

//    dataproducts/*/notebooks/*/notebook-<name>.jp
func (notebook *Notebook) NotebbokFileUri() string {
	return fmt.Sprintf("%s/%s-notebook.py", notebook.RootUri(), notebook.Name)
}

//==============================================================================
// RunModelJob the notebook docker file
//==============================================================================

const NotebookTpl = `
FROM ubuntu:latest

RUN apt-get update && apt-get install -y python3  python3-pip

RUN pip3 install jupyter

{{range .Requirements}} 
RUN pip3 install {{.}}
{{end}}

{{range .DebPackages}} 
RUN apt-get install {{.}}
{{end}}


COPY pkg.ipynb .

RUN jupyter nbconvert --to python pkg.ipynb
CMD ["python","Hello.py"]
`

func (notebook *Notebook) MakeDockerFile() (string, error) {
	buf := new(bytes.Buffer)
	ts := template.Must(template.New("predictor").Parse(NotebookTpl))
	err := ts.Execute(buf, notebook.Spec)
	if err != nil {
		return "", err
	}
	res := buf.String()
	return res, nil

}

// Merge or update condition
func (notebook *Notebook) CreateOrUpdateCond(cond NotebookCondition) {
	i := notebook.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		notebook.Status.Conditions = append(notebook.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := notebook.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	notebook.Status.Conditions[i] = current
}

func (notebook *Notebook) GetCondIdx(t NotebookConditionType) int {
	for i, v := range notebook.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (notebook *Notebook) GetCond(t NotebookConditionType) NotebookCondition {
	for _, v := range notebook.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return NotebookCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (notebook *Notebook) IsReady() bool {
	return notebook.GetCond(NotebookReady).Status == v1.ConditionTrue
}

func (notebook *Notebook) Key() string {
	return fmt.Sprintf("%s/%s/%s", "notebooks", notebook.Namespace, notebook.Name)
}

func (notebook *Notebook) DepotKey() string {
	return fmt.Sprintf("%s/%s", "modela/depot/notebooks", notebook.Key())
}

func (notebook *Notebook) LiveKey() string {
	return fmt.Sprintf("%s/%s", "modela/live/notebooks", notebook.Key())
}

func (notebook *Notebook) ArchiveKey() string {
	return fmt.Sprintf("%s/%s", "modela/archive/notebooks", notebook.Key())
}

func ParseNotebookYaml(content []byte) (*Notebook, error) {
	requiredObj, err := runtime.Decode(scheme.Codecs.UniversalDecoder(SchemeGroupVersion), content)
	if err != nil {
		return nil, err
	}
	r := requiredObj.(*Notebook)
	return r, nil
}

func (notebook *Notebook) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(notebook)
}

func (notebook *Notebook) MarkReady() {
	notebook.CreateOrUpdateCond(NotebookCondition{
		Type:   NotebookReady,
		Status: v1.ConditionTrue,
	})
}

func (notebook *Notebook) MarkArchived() {
	notebook.CreateOrUpdateCond(NotebookCondition{
		Type:   NotebookSaved,
		Status: v1.ConditionTrue,
	})
}

func (notebook *Notebook) Archived() bool {
	return notebook.GetCond(NotebookSaved).Status == v1.ConditionTrue
}
