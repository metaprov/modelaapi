package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/util"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Curtain{}

func (cur *Curtain) Default() {
	if cur.Spec.Description == nil {
		cur.Spec.Description = util.StrPtr("")
	}

}

// validation
var _ webhook.Validator = &Curtain{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (cur *Curtain) ValidateCreate() error {
	return cur.validateBucket()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (cur *Curtain) ValidateUpdate(old runtime.Object) error {
	return cur.validateBucket()
}

func (cur *Curtain) validateBucket() error {
	var allErrs field.ErrorList
	if err := cur.validateCurtainName(); err != nil {
		allErrs = append(allErrs, err)
	}
	if err := cur.validateCurtainSpec(); err != nil {
		allErrs = append(allErrs, err)
	}
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "inference.modela.io", Kind: "Curtain"},
		cur.Name, allErrs)
}

func (cur *Curtain) validateCurtainSpec() *field.Error {
	// The field helpers from the kubernetes API machinery help us return nicely
	// structured validation errors.
	return nil
}

func (cur *Curtain) validateCurtainName() *field.Error {
	return nil
}

func (cur *Curtain) ValidateDelete() error {
	panic("implement me")
}
