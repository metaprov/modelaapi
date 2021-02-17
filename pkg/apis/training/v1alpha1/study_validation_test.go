/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestFolds_Valid(t *testing.T) {
	study := DefaultStudy()
	err := study.ValidateCreate()
	assert.NoError(t, err)

}
