package v1alpha1

import (
	"testing"
)

func TestInfraObjects(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "infra objects specs")
}
