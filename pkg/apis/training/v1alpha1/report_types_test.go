package v1alpha1

import (
	data "github.com/metaprov/modeld-api/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func DatasetReport() Report {
	format := Pdf
	return Report{
		TypeMeta: metav1.TypeMeta{
			Kind:       "",
			APIVersion: "",
		},
		ObjectMeta: metav1.ObjectMeta{
			Name:      "",
			Namespace: "",
		},
		Spec: ReportSpec{
			VersionName: "",
			EntityRef: v1.ObjectReference{
				Kind:       "PublishedModel",
				Namespace:  "lab",
				Name:       "iris",
				APIVersion: "v1alpha1",
			},
			Location:    data.DataLocation{},
			ReportType:  "",
			Format:      &format,
			NotifierRef: nil,
		},
	}
}
