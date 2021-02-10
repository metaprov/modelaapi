package v1alpha1

import (
	catalog "github.com/metaprov/modeld-api/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modeld-api/pkg/util"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func OneStudy() Study {
	res := Study{
		TypeMeta: metav1.TypeMeta{
			Kind:       "StudyName",
			APIVersion: "v1alpha1",
		},
		ObjectMeta: metav1.ObjectMeta{
			Name:                       "iris",
			GenerateName:               "",
			Namespace:                  "lab",
			SelfLink:                   "",
			UID:                        "",
			ResourceVersion:            "",
			Generation:                 0,
			CreationTimestamp:          metav1.Time{},
			DeletionTimestamp:          nil,
			DeletionGracePeriodSeconds: nil,
			Labels:                     nil,
			Annotations:                nil,
			OwnerReferences:            nil,
			Finalizers:                 nil,
			ClusterName:                "",
			ManagedFields:              nil,
		},
		Spec: StudySpec{
			VersionName: "iris",
			Description: util.StrPtr(""),
			LabRef: &v1.ObjectReference{
				Kind:       "TenantRef",
				Namespace:  "modeld-infra",
				Name:       "lab",
				APIVersion: "v1alpha1",
			},
			DatasetName:   "iris",
			Task:          catalog.BinaryClassification,
			Objective:     nil,
			Search:        nil,
			Preprocessing: nil,
			Training:      nil,
			Aborted:       nil,
			Reported:      nil,
			Paused:        nil,
			Profiled:      nil,
		},
	}
	res.Default()
	return res
}
