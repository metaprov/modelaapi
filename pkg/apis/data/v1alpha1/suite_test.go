package v1alpha1

import (
	"fmt"
	"testing"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

func Test_Date(t *testing.T) {
	now := metav1.Now()
	result := now.Format("01/2/2006 15:04:05")
	fmt.Println(result)
}
