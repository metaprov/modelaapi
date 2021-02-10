package v1alpha1

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	"testing"
)

func TestInfraObjects(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "infra objects specs")
}
