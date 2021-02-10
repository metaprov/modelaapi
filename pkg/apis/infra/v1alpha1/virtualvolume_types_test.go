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

func TestVirtualVolumeAddFinalizer(t *testing.T) {
	bucket := VirtualVolume{}
	bucket.Default()
	assert.True(t, bucket.HasFinalizer())
	bucket.RemoveFinalizer()
	assert.False(t, bucket.HasFinalizer())
}
