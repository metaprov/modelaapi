/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import corev1 "k8s.io/api/core/v1"

//==============================================================================
// EntityRef
//==============================================================================

func (w *DataPipeline) IsReady() bool {
	return w.GetCond(DataPipelineReady).Status == corev1.ConditionTrue
}
