package v1alpha1

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestK8sStatus(t *testing.T) {
	first := K8sObjectStatus{
		Namespace: "modela-system",
		Name:      "control-plane",
		Kind:      "Serving",
		Age:       nil,
		Status:    K8sObjectStatusHealthy,
	}
	statuses := make([]K8sObjectStatus, 0)
	statuses = AddOrUpdateK8sStatuses(statuses, first)
	assert.Equal(t, len(statuses), 1)
	assert.Equal(t, statuses[0].Status, K8sObjectStatusHealthy)
	first.Status = K8sObjectStatusError
	statuses = AddOrUpdateK8sStatuses(statuses, first)
	assert.Equal(t, len(statuses), 1)
	assert.Equal(t, statuses[0].Status, K8sObjectStatusError)

	second := K8sObjectStatus{
		Namespace: "modela-system",
		Name:      "control-plane",
		Kind:      "Service",
		Age:       nil,
		Status:    K8sObjectStatusHealthy,
	}
	statuses = AddOrUpdateK8sStatuses(statuses, second)
	assert.Equal(t, 2, len(statuses))

}
