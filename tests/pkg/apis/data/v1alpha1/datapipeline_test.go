package v1alpha1

import (
	datav1 "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	"testing"
)

func TestDataPipeline(t *testing.T) {
	pipeline := datav1.DataPipeline{}

	datav1.ParseDataPipelineYaml()
}
