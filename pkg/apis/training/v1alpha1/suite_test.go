package v1alpha1

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	"testing"
)

func TestTrainingObjects(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "training")
}
