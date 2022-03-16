package v1alpha1

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestInfraObjects(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "infra objects specs")
}
