package v1alpha1

import (
	"fmt"
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func TestInfraObjects(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "infra objects specs")
}

func Test_Date(t *testing.T) {
	now := metav1.Now()
	result := now.Format("01/2/2006 15:04:05")
	fmt.Println(result)
}
