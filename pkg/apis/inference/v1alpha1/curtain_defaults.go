package v1alpha1

import (
	"github.com/metaprov/modeld-api/pkg/util"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Curtain{}

func (cur *Curtain) Default() {
	if cur.Spec.Description == nil {
		cur.Spec.Description = util.StrPtr("")
	}

}
