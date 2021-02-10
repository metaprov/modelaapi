package v1alpha1

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	"testing"
)

func TestStudyReconciler(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "data specs")
}
