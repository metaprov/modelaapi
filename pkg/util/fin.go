package util

import metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

func AddFin(m *metav1.ObjectMeta, GroupName string) {
	m.Finalizers = append(m.Finalizers, GroupName)
}

func RemoveFin(m *metav1.ObjectMeta, GroupName string) {
	fset := make([]string, 0)
	for _, item := range m.Finalizers {
		if item == GroupName {
			continue
		}
		fset = append(fset, item)
	}
	if len(fset) == 0 {
		fset = nil
	}
	m.Finalizers = fset
}

func HasFin(m *metav1.ObjectMeta, GroupName string) bool {
	current := m.Finalizers
	for _, f := range current {
		if f == GroupName {
			return true
		}
	}
	return false
}
