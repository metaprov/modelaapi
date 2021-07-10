package v1alpha1

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestModelAddFinalizer(t *testing.T) {
	model := Model{}
	model.AddFinalizer()
	model.Default()
	assert.True(t, model.HasFinalizer())
	model.RemoveFinalizer()
	assert.False(t, model.HasFinalizer())
}

func TestParseHyperParameterListOneParam(t *testing.T) {
	paramsJson := "{ \"a\":1}"
	parsed, err := ParseHyperParametersFromJson(paramsJson)
	assert.NoError(t, err)
	assert.Equal(t, len(parsed), 1)
}

func TestNotebookAddFinalizer(t *testing.T) {
	nb := Notebook{}
	nb.Default()
	nb.AddFinalizer()
	assert.True(t, nb.HasFinalizer())
	nb.RemoveFinalizer()
	assert.False(t, nb.HasFinalizer())
}

// Staging that the image knows how to Add python packages to the container.

// When the there are pip package, there will be added to the image.
func TestNoPythonPackages(t *testing.T) {
	/*
		nb := NotebookName{}
		nb.Default()
		// see that an empty netbook does not Add pip statements.
		file, err := nb.MakeDockerFile()
		assert.Nil(t, err)
		assert.NotContains(t, file, "RUN pip install")

	*/
}

func TestWithPythonPackages(t *testing.T) {
	/*
		nb := NotebookName{}
		nb.Default()
		nb.Spec.Requirements = "tensorflow"
		// see that an empty netbook does not Add pip statements.
		file, err := nb.MakeDockerFile()
		assert.Nil(t, err)
		assert.Contains(t, file, "RUN pip3 install tensorflow")
		// append another 1
		nb.Spec.Requirements = "pytorch"
		file, err = nb.MakeDockerFile()
		assert.Nil(t, err)
		assert.Contains(t, file, "RUN pip3 install tensorflow")
		assert.Contains(t, file, "RUN pip3 install pytorch")
	*/

}

// When the there are pip package, there will be added to the image.
func TestInstallDebPackages(t *testing.T) {
	/*
		nb := NotebookName{}
		nb.Default()
		nb.Spec.Requirements = "tensorflow"
		nb.Spec.DebPackages = "conda"
		// see that an empty netbook does not Add pip statements.
		file, err := nb.MakeDockerFile()
		assert.Nil(t, err)
		assert.Contains(t, file, "RUN pip3 install tensorflow")
		assert.Contains(t, file, "RUN apt-get install conda")

	*/
}

func TestReportAddFinalizer(t *testing.T) {
	report := Report{}
	report.Default()
	report.AddFinalizer()
	assert.True(t, report.HasFinalizer())
	report.RemoveFinalizer()
	assert.False(t, report.HasFinalizer())
}

func TestStudyAddFinalizer(t *testing.T) {
	study := Study{}
	study.Default()
	study.AddFinalizer()
	assert.True(t, study.HasFinalizer())
	study.RemoveFinalizer()
	assert.False(t, study.HasFinalizer())
}
