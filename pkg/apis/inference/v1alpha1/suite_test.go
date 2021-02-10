package v1alpha1

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	"testing"
)

func TestInferenceObjects(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "inference objects specs")
}
