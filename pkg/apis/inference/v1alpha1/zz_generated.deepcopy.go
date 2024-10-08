//go:build !ignore_autogenerated
// +build !ignore_autogenerated

/**
*
* Copyright (C) 2017 modela authors
* For license information, see LICENSE.txt
 */

// Code generated by controller-gen. DO NOT EDIT.

package v1alpha1

import (
	catalogv1alpha1 "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	datav1alpha1 "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
)

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *AutoScalingSpec) DeepCopyInto(out *AutoScalingSpec) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
	if in.MinReplicas != nil {
		in, out := &in.MinReplicas, &out.MinReplicas
		*out = new(int32)
		**out = **in
	}
	if in.MaxReplicas != nil {
		in, out := &in.MaxReplicas, &out.MaxReplicas
		*out = new(int32)
		**out = **in
	}
	if in.CpuAvgUtilization != nil {
		in, out := &in.CpuAvgUtilization, &out.CpuAvgUtilization
		*out = new(int32)
		**out = **in
	}
	if in.MemAvgUtilization != nil {
		in, out := &in.MemAvgUtilization, &out.MemAvgUtilization
		*out = new(int32)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new AutoScalingSpec.
func (in *AutoScalingSpec) DeepCopy() *AutoScalingSpec {
	if in == nil {
		return nil
	}
	out := new(AutoScalingSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *BackwardCurtainSpec) DeepCopyInto(out *BackwardCurtainSpec) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
	if in.AccountRef != nil {
		in, out := &in.AccountRef, &out.AccountRef
		*out = new(corev1.ObjectReference)
		**out = **in
	}
	if in.ConfidenceLow != nil {
		in, out := &in.ConfidenceLow, &out.ConfidenceLow
		*out = new(float64)
		**out = **in
	}
	if in.ConfidenceHigh != nil {
		in, out := &in.ConfidenceHigh, &out.ConfidenceHigh
		*out = new(float64)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new BackwardCurtainSpec.
func (in *BackwardCurtainSpec) DeepCopy() *BackwardCurtainSpec {
	if in == nil {
		return nil
	}
	out := new(BackwardCurtainSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CustomAppSpec) DeepCopyInto(out *CustomAppSpec) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
	if in.Title != nil {
		in, out := &in.Title, &out.Title
		*out = new(string)
		**out = **in
	}
	if in.Pages != nil {
		in, out := &in.Pages, &out.Pages
		*out = make([]datav1alpha1.PageSpec, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CustomAppSpec.
func (in *CustomAppSpec) DeepCopy() *CustomAppSpec {
	if in == nil {
		return nil
	}
	out := new(CustomAppSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *DataApp) DeepCopyInto(out *DataApp) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
	in.Status.DeepCopyInto(&out.Status)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new DataApp.
func (in *DataApp) DeepCopy() *DataApp {
	if in == nil {
		return nil
	}
	out := new(DataApp)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *DataApp) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *DataAppList) DeepCopyInto(out *DataAppList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]DataApp, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new DataAppList.
func (in *DataAppList) DeepCopy() *DataAppList {
	if in == nil {
		return nil
	}
	out := new(DataAppList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *DataAppList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *DataAppSpec) DeepCopyInto(out *DataAppSpec) {
	*out = *in
	if in.Owner != nil {
		in, out := &in.Owner, &out.Owner
		*out = new(string)
		**out = **in
	}
	if in.VersionName != nil {
		in, out := &in.VersionName, &out.VersionName
		*out = new(string)
		**out = **in
	}
	if in.ModelClassName != nil {
		in, out := &in.ModelClassName, &out.ModelClassName
		*out = new(string)
		**out = **in
	}
	if in.Description != nil {
		in, out := &in.Description, &out.Description
		*out = new(string)
		**out = **in
	}
	if in.ModelName != nil {
		in, out := &in.ModelName, &out.ModelName
		*out = new(string)
		**out = **in
	}
	in.Access.DeepCopyInto(&out.Access)
	if in.Replicas != nil {
		in, out := &in.Replicas, &out.Replicas
		*out = new(int32)
		**out = **in
	}
	in.Resources.DeepCopyInto(&out.Resources)
	out.ServingSiteRef = in.ServingSiteRef
	in.Custom.DeepCopyInto(&out.Custom)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new DataAppSpec.
func (in *DataAppSpec) DeepCopy() *DataAppSpec {
	if in == nil {
		return nil
	}
	out := new(DataAppSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *DataAppStatus) DeepCopyInto(out *DataAppStatus) {
	*out = *in
	if in.UpdatedAt != nil {
		in, out := &in.UpdatedAt, &out.UpdatedAt
		*out = (*in).DeepCopy()
	}
	out.DeploymentRef = in.DeploymentRef
	in.ServiceStatus.DeepCopyInto(&out.ServiceStatus)
	if in.FailureReason != nil {
		in, out := &in.FailureReason, &out.FailureReason
		*out = new(catalogv1alpha1.StatusError)
		**out = **in
	}
	if in.FailureMessage != nil {
		in, out := &in.FailureMessage, &out.FailureMessage
		*out = new(string)
		**out = **in
	}
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]v1.Condition, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new DataAppStatus.
func (in *DataAppStatus) DeepCopy() *DataAppStatus {
	if in == nil {
		return nil
	}
	out := new(DataAppStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *DriftDetectionSpec) DeepCopyInto(out *DriftDetectionSpec) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
	if in.GenDriftTests != nil {
		in, out := &in.GenDriftTests, &out.GenDriftTests
		*out = new(bool)
		**out = **in
	}
	if in.MinPredictions != nil {
		in, out := &in.MinPredictions, &out.MinPredictions
		*out = new(int32)
		**out = **in
	}
	if in.Columns != nil {
		in, out := &in.Columns, &out.Columns
		*out = make([]string, len(*in))
		copy(*out, *in)
	}
	if in.DriftThresholds != nil {
		in, out := &in.DriftThresholds, &out.DriftThresholds
		*out = make([]datav1alpha1.DriftThreshold, len(*in))
		copy(*out, *in)
	}
	in.Schedule.DeepCopyInto(&out.Schedule)
	out.OutlierDetectionModelRef = in.OutlierDetectionModelRef
	if in.MaxHistograms != nil {
		in, out := &in.MaxHistograms, &out.MaxHistograms
		*out = new(int32)
		**out = **in
	}
	if in.PeriodSeconds != nil {
		in, out := &in.PeriodSeconds, &out.PeriodSeconds
		*out = new(int32)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new DriftDetectionSpec.
func (in *DriftDetectionSpec) DeepCopy() *DriftDetectionSpec {
	if in == nil {
		return nil
	}
	out := new(DriftDetectionSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *FastSlowModelSpec) DeepCopyInto(out *FastSlowModelSpec) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
	out.FastModelRef = in.FastModelRef
	out.SlowModelRef = in.SlowModelRef
	if in.ProbaLowPct != nil {
		in, out := &in.ProbaLowPct, &out.ProbaLowPct
		*out = new(int32)
		**out = **in
	}
	if in.ProbaHighPct != nil {
		in, out := &in.ProbaHighPct, &out.ProbaHighPct
		*out = new(int32)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new FastSlowModelSpec.
func (in *FastSlowModelSpec) DeepCopy() *FastSlowModelSpec {
	if in == nil {
		return nil
	}
	out := new(FastSlowModelSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *FeedbackTestSpec) DeepCopyInto(out *FeedbackTestSpec) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
	in.Tests.DeepCopyInto(&out.Tests)
	in.Schedule.DeepCopyInto(&out.Schedule)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new FeedbackTestSpec.
func (in *FeedbackTestSpec) DeepCopy() *FeedbackTestSpec {
	if in == nil {
		return nil
	}
	out := new(FeedbackTestSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ForecastPredictionSpec) DeepCopyInto(out *ForecastPredictionSpec) {
	*out = *in
	if in.HierarchyValues != nil {
		in, out := &in.HierarchyValues, &out.HierarchyValues
		*out = make(map[string]string, len(*in))
		for key, val := range *in {
			(*out)[key] = val
		}
	}
	in.Horizon.DeepCopyInto(&out.Horizon)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ForecastPredictionSpec.
func (in *ForecastPredictionSpec) DeepCopy() *ForecastPredictionSpec {
	if in == nil {
		return nil
	}
	out := new(ForecastPredictionSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ForecastRun) DeepCopyInto(out *ForecastRun) {
	*out = *in
	in.Horizon.DeepCopyInto(&out.Horizon)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ForecastRun.
func (in *ForecastRun) DeepCopy() *ForecastRun {
	if in == nil {
		return nil
	}
	out := new(ForecastRun)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ForecastSpec) DeepCopyInto(out *ForecastSpec) {
	*out = *in
	if in.Runs != nil {
		in, out := &in.Runs, &out.Runs
		*out = make(map[string]ForecastRun, len(*in))
		for key, val := range *in {
			(*out)[key] = *val.DeepCopy()
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ForecastSpec.
func (in *ForecastSpec) DeepCopy() *ForecastSpec {
	if in == nil {
		return nil
	}
	out := new(ForecastSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ForecastStatus) DeepCopyInto(out *ForecastStatus) {
	*out = *in
	out.ForecastLocation = in.ForecastLocation
	if in.WorkerResults != nil {
		in, out := &in.WorkerResults, &out.WorkerResults
		*out = make([]catalogv1alpha1.WorkerRunResult, len(*in))
		copy(*out, *in)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ForecastStatus.
func (in *ForecastStatus) DeepCopy() *ForecastStatus {
	if in == nil {
		return nil
	}
	out := new(ForecastStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ForwardCurtainSpec) DeepCopyInto(out *ForwardCurtainSpec) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
	if in.AccountRef != nil {
		in, out := &in.AccountRef, &out.AccountRef
		*out = new(corev1.ObjectReference)
		**out = **in
	}
	if in.Percent != nil {
		in, out := &in.Percent, &out.Percent
		*out = new(int32)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ForwardCurtainSpec.
func (in *ForwardCurtainSpec) DeepCopy() *ForwardCurtainSpec {
	if in == nil {
		return nil
	}
	out := new(ForwardCurtainSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MetricHistory) DeepCopyInto(out *MetricHistory) {
	*out = *in
	if in.History != nil {
		in, out := &in.History, &out.History
		*out = make([]float64, len(*in))
		copy(*out, *in)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MetricHistory.
func (in *MetricHistory) DeepCopy() *MetricHistory {
	if in == nil {
		return nil
	}
	out := new(MetricHistory)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ModelDeploymentRecord) DeepCopyInto(out *ModelDeploymentRecord) {
	*out = *in
	if in.DeployedAt != nil {
		in, out := &in.DeployedAt, &out.DeployedAt
		*out = (*in).DeepCopy()
	}
	if in.RetiredAt != nil {
		in, out := &in.RetiredAt, &out.RetiredAt
		*out = (*in).DeepCopy()
	}
	if in.FailureMessage != nil {
		in, out := &in.FailureMessage, &out.FailureMessage
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ModelDeploymentRecord.
func (in *ModelDeploymentRecord) DeepCopy() *ModelDeploymentRecord {
	if in == nil {
		return nil
	}
	out := new(ModelDeploymentRecord)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ModelDeploymentStatus) DeepCopyInto(out *ModelDeploymentStatus) {
	*out = *in
	if in.DeploymentRef != nil {
		in, out := &in.DeploymentRef, &out.DeploymentRef
		*out = new(corev1.ObjectReference)
		**out = **in
	}
	if in.ServiceRef != nil {
		in, out := &in.ServiceRef, &out.ServiceRef
		*out = new(corev1.ObjectReference)
		**out = **in
	}
	if in.HPARef != nil {
		in, out := &in.HPARef, &out.HPARef
		*out = new(corev1.ObjectReference)
		**out = **in
	}
	if in.FailureMessage != nil {
		in, out := &in.FailureMessage, &out.FailureMessage
		*out = new(string)
		**out = **in
	}
	if in.DeployedAt != nil {
		in, out := &in.DeployedAt, &out.DeployedAt
		*out = (*in).DeepCopy()
	}
	out.LastFeedbackDatasetRef = in.LastFeedbackDatasetRef
	if in.LastFeedbackTestAt != nil {
		in, out := &in.LastFeedbackTestAt, &out.LastFeedbackTestAt
		*out = (*in).DeepCopy()
	}
	if in.LastFeedbackTestResults != nil {
		in, out := &in.LastFeedbackTestResults, &out.LastFeedbackTestResults
		*out = make([]catalogv1alpha1.Measurement, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	if in.MetricHistory != nil {
		in, out := &in.MetricHistory, &out.MetricHistory
		*out = make(map[catalogv1alpha1.Metric]MetricHistory, len(*in))
		for key, val := range *in {
			(*out)[key] = *val.DeepCopy()
		}
	}
	if in.Endpoint != nil {
		in, out := &in.Endpoint, &out.Endpoint
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ModelDeploymentStatus.
func (in *ModelDeploymentStatus) DeepCopy() *ModelDeploymentStatus {
	if in == nil {
		return nil
	}
	out := new(ModelDeploymentStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ModelServingSpec) DeepCopyInto(out *ModelServingSpec) {
	*out = *in
	if in.Serverless != nil {
		in, out := &in.Serverless, &out.Serverless
		*out = new(bool)
		**out = **in
	}
	in.UnitTestsTemplate.DeepCopyInto(&out.UnitTestsTemplate)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ModelServingSpec.
func (in *ModelServingSpec) DeepCopy() *ModelServingSpec {
	if in == nil {
		return nil
	}
	out := new(ModelServingSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ModelSpec) DeepCopyInto(out *ModelSpec) {
	*out = *in
	if in.Name != nil {
		in, out := &in.Name, &out.Name
		*out = new(string)
		**out = **in
	}
	if in.StudyRun != nil {
		in, out := &in.StudyRun, &out.StudyRun
		*out = new(catalogv1alpha1.StudyRunReference)
		(*in).DeepCopyInto(*out)
	}
	if in.Location != nil {
		in, out := &in.Location, &out.Location
		*out = new(catalogv1alpha1.FileLocation)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ModelSpec.
func (in *ModelSpec) DeepCopy() *ModelSpec {
	if in == nil {
		return nil
	}
	out := new(ModelSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *OnlineFeatureStoreSpec) DeepCopyInto(out *OnlineFeatureStoreSpec) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
	if in.Hostname != nil {
		in, out := &in.Hostname, &out.Hostname
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new OnlineFeatureStoreSpec.
func (in *OnlineFeatureStoreSpec) DeepCopy() *OnlineFeatureStoreSpec {
	if in == nil {
		return nil
	}
	out := new(OnlineFeatureStoreSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *OnlineStoreStatus) DeepCopyInto(out *OnlineStoreStatus) {
	*out = *in
	if in.LastAccessed != nil {
		in, out := &in.LastAccessed, &out.LastAccessed
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new OnlineStoreStatus.
func (in *OnlineStoreStatus) DeepCopy() *OnlineStoreStatus {
	if in == nil {
		return nil
	}
	out := new(OnlineStoreStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Prediction) DeepCopyInto(out *Prediction) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
	in.Status.DeepCopyInto(&out.Status)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Prediction.
func (in *Prediction) DeepCopy() *Prediction {
	if in == nil {
		return nil
	}
	out := new(Prediction)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *Prediction) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictionCacheSpec) DeepCopyInto(out *PredictionCacheSpec) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
	if in.InMemory != nil {
		in, out := &in.InMemory, &out.InMemory
		*out = new(bool)
		**out = **in
	}
	if in.Redis != nil {
		in, out := &in.Redis, &out.Redis
		*out = new(bool)
		**out = **in
	}
	if in.ConnectionRef != nil {
		in, out := &in.ConnectionRef, &out.ConnectionRef
		*out = new(corev1.ObjectReference)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictionCacheSpec.
func (in *PredictionCacheSpec) DeepCopy() *PredictionCacheSpec {
	if in == nil {
		return nil
	}
	out := new(PredictionCacheSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictionList) DeepCopyInto(out *PredictionList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]Prediction, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictionList.
func (in *PredictionList) DeepCopy() *PredictionList {
	if in == nil {
		return nil
	}
	out := new(PredictionList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *PredictionList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictionLoggingSpec) DeepCopyInto(out *PredictionLoggingSpec) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
	if in.SamplePercent != nil {
		in, out := &in.SamplePercent, &out.SamplePercent
		*out = new(int32)
		**out = **in
	}
	if in.Rows != nil {
		in, out := &in.Rows, &out.Rows
		*out = new(int32)
		**out = **in
	}
	if in.BackupFreqSeconds != nil {
		in, out := &in.BackupFreqSeconds, &out.BackupFreqSeconds
		*out = new(int32)
		**out = **in
	}
	out.BackupConnectionRef = in.BackupConnectionRef
	in.Location.DeepCopyInto(&out.Location)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictionLoggingSpec.
func (in *PredictionLoggingSpec) DeepCopy() *PredictionLoggingSpec {
	if in == nil {
		return nil
	}
	out := new(PredictionLoggingSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictionRun) DeepCopyInto(out *PredictionRun) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
	in.Status.DeepCopyInto(&out.Status)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictionRun.
func (in *PredictionRun) DeepCopy() *PredictionRun {
	if in == nil {
		return nil
	}
	out := new(PredictionRun)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *PredictionRun) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictionRunList) DeepCopyInto(out *PredictionRunList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]PredictionRun, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictionRunList.
func (in *PredictionRunList) DeepCopy() *PredictionRunList {
	if in == nil {
		return nil
	}
	out := new(PredictionRunList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *PredictionRunList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictionRunSpec) DeepCopyInto(out *PredictionRunSpec) {
	*out = *in
	if in.Owner != nil {
		in, out := &in.Owner, &out.Owner
		*out = new(string)
		**out = **in
	}
	if in.Model != nil {
		in, out := &in.Model, &out.Model
		*out = new(ModelSpec)
		(*in).DeepCopyInto(*out)
	}
	if in.Timeout != nil {
		in, out := &in.Timeout, &out.Timeout
		*out = new(int32)
		**out = **in
	}
	if in.Pause != nil {
		in, out := &in.Pause, &out.Pause
		*out = new(bool)
		**out = **in
	}
	if in.Abort != nil {
		in, out := &in.Abort, &out.Abort
		*out = new(bool)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictionRunSpec.
func (in *PredictionRunSpec) DeepCopy() *PredictionRunSpec {
	if in == nil {
		return nil
	}
	out := new(PredictionRunSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictionRunStatus) DeepCopyInto(out *PredictionRunStatus) {
	*out = *in
	out.PredictionManifestLocation = in.PredictionManifestLocation
	in.UnitTestResults.DeepCopyInto(&out.UnitTestResults)
	if in.FailureMessage != nil {
		in, out := &in.FailureMessage, &out.FailureMessage
		*out = new(string)
		**out = **in
	}
	if in.Logs != nil {
		in, out := &in.Logs, &out.Logs
		*out = make(catalogv1alpha1.Logs, len(*in))
		copy(*out, *in)
	}
	in.Forecast.DeepCopyInto(&out.Forecast)
	out.Usage = in.Usage
	if in.UpdatedAt != nil {
		in, out := &in.UpdatedAt, &out.UpdatedAt
		*out = (*in).DeepCopy()
	}
	if in.CompletedAt != nil {
		in, out := &in.CompletedAt, &out.CompletedAt
		*out = (*in).DeepCopy()
	}
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]v1.Condition, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictionRunStatus.
func (in *PredictionRunStatus) DeepCopy() *PredictionRunStatus {
	if in == nil {
		return nil
	}
	out := new(PredictionRunStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictionSpec) DeepCopyInto(out *PredictionSpec) {
	*out = *in
	if in.Owner != nil {
		in, out := &in.Owner, &out.Owner
		*out = new(string)
		**out = **in
	}
	if in.Description != nil {
		in, out := &in.Description, &out.Description
		*out = new(string)
		**out = **in
	}
	in.Run.DeepCopyInto(&out.Run)
	if in.ArtifactBucketName != nil {
		in, out := &in.ArtifactBucketName, &out.ArtifactBucketName
		*out = new(string)
		**out = **in
	}
	if in.ServingSiteName != nil {
		in, out := &in.ServingSiteName, &out.ServingSiteName
		*out = new(string)
		**out = **in
	}
	in.Model.DeepCopyInto(&out.Model)
	in.Input.DeepCopyInto(&out.Input)
	in.Output.DeepCopyInto(&out.Output)
	if in.Labeled != nil {
		in, out := &in.Labeled, &out.Labeled
		*out = new(bool)
		**out = **in
	}
	in.UnitTests.DeepCopyInto(&out.UnitTests)
	in.Resources.DeepCopyInto(&out.Resources)
	in.Forecast.DeepCopyInto(&out.Forecast)
	if in.ModelClassName != nil {
		in, out := &in.ModelClassName, &out.ModelClassName
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictionSpec.
func (in *PredictionSpec) DeepCopy() *PredictionSpec {
	if in == nil {
		return nil
	}
	out := new(PredictionSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictionStatus) DeepCopyInto(out *PredictionStatus) {
	*out = *in
	if in.Active != nil {
		in, out := &in.Active, &out.Active
		*out = make(catalogv1alpha1.RunReferenceList, len(*in))
		copy(*out, *in)
	}
	if in.AvailableRuns != nil {
		in, out := &in.AvailableRuns, &out.AvailableRuns
		*out = make(catalogv1alpha1.RunReferenceList, len(*in))
		copy(*out, *in)
	}
	if in.LastRunAt != nil {
		in, out := &in.LastRunAt, &out.LastRunAt
		*out = (*in).DeepCopy()
	}
	if in.LastFailureMessage != nil {
		in, out := &in.LastFailureMessage, &out.LastFailureMessage
		*out = new(string)
		**out = **in
	}
	in.Schedule.DeepCopyInto(&out.Schedule)
	if in.UpdatedAt != nil {
		in, out := &in.UpdatedAt, &out.UpdatedAt
		*out = (*in).DeepCopy()
	}
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]v1.Condition, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictionStatus.
func (in *PredictionStatus) DeepCopy() *PredictionStatus {
	if in == nil {
		return nil
	}
	out := new(PredictionStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Predictor) DeepCopyInto(out *Predictor) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
	in.Status.DeepCopyInto(&out.Status)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Predictor.
func (in *Predictor) DeepCopy() *Predictor {
	if in == nil {
		return nil
	}
	out := new(Predictor)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *Predictor) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictorList) DeepCopyInto(out *PredictorList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]Predictor, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictorList.
func (in *PredictorList) DeepCopy() *PredictorList {
	if in == nil {
		return nil
	}
	out := new(PredictorList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *PredictorList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictorSpec) DeepCopyInto(out *PredictorSpec) {
	*out = *in
	if in.ModelClassName != nil {
		in, out := &in.ModelClassName, &out.ModelClassName
		*out = new(string)
		**out = **in
	}
	if in.Description != nil {
		in, out := &in.Description, &out.Description
		*out = new(string)
		**out = **in
	}
	if in.ProductRef != nil {
		in, out := &in.ProductRef, &out.ProductRef
		*out = new(corev1.ObjectReference)
		**out = **in
	}
	if in.Template != nil {
		in, out := &in.Template, &out.Template
		*out = new(bool)
		**out = **in
	}
	out.ServingSiteRef = in.ServingSiteRef
	if in.Models != nil {
		in, out := &in.Models, &out.Models
		*out = make([]catalogv1alpha1.ModelDeploymentSpec, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	if in.Progressive != nil {
		in, out := &in.Progressive, &out.Progressive
		*out = new(ProgressiveSpec)
		(*in).DeepCopyInto(*out)
	}
	in.Access.DeepCopyInto(&out.Access)
	if in.Replicas != nil {
		in, out := &in.Replicas, &out.Replicas
		*out = new(int32)
		**out = **in
	}
	in.AutoScaling.DeepCopyInto(&out.AutoScaling)
	if in.Owner != nil {
		in, out := &in.Owner, &out.Owner
		*out = new(string)
		**out = **in
	}
	in.Resources.DeepCopyInto(&out.Resources)
	in.Cache.DeepCopyInto(&out.Cache)
	in.Store.DeepCopyInto(&out.Store)
	in.Serving.DeepCopyInto(&out.Serving)
	if in.Task != nil {
		in, out := &in.Task, &out.Task
		*out = new(catalogv1alpha1.MLTask)
		**out = **in
	}
	in.Drift.DeepCopyInto(&out.Drift)
	in.Feedback.DeepCopyInto(&out.Feedback)
	if in.Notification != nil {
		in, out := &in.Notification, &out.Notification
		*out = new(catalogv1alpha1.NotificationSpec)
		(*in).DeepCopyInto(*out)
	}
	in.PredictionLogging.DeepCopyInto(&out.PredictionLogging)
	in.ForwardCurtain.DeepCopyInto(&out.ForwardCurtain)
	in.BackwardCurtain.DeepCopyInto(&out.BackwardCurtain)
	in.FastSlow.DeepCopyInto(&out.FastSlow)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictorSpec.
func (in *PredictorSpec) DeepCopy() *PredictorSpec {
	if in == nil {
		return nil
	}
	out := new(PredictorSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictorStatus) DeepCopyInto(out *PredictorStatus) {
	*out = *in
	if in.History != nil {
		in, out := &in.History, &out.History
		*out = make([]ModelDeploymentRecord, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	if in.ModelStatus != nil {
		in, out := &in.ModelStatus, &out.ModelStatus
		*out = make([]ModelDeploymentStatus, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	in.PredictorletStatus.DeepCopyInto(&out.PredictorletStatus)
	in.OnlineStore.DeepCopyInto(&out.OnlineStore)
	if in.UpdatedAt != nil {
		in, out := &in.UpdatedAt, &out.UpdatedAt
		*out = (*in).DeepCopy()
	}
	if in.FailureMessage != nil {
		in, out := &in.FailureMessage, &out.FailureMessage
		*out = new(string)
		**out = **in
	}
	if in.LoadBalancerStatus != nil {
		in, out := &in.LoadBalancerStatus, &out.LoadBalancerStatus
		*out = new(corev1.LoadBalancerStatus)
		(*in).DeepCopyInto(*out)
	}
	out.LastPredictionDataset = in.LastPredictionDataset
	in.ServingTestResult.DeepCopyInto(&out.ServingTestResult)
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]v1.Condition, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictorStatus.
func (in *PredictorStatus) DeepCopy() *PredictorStatus {
	if in == nil {
		return nil
	}
	out := new(PredictorStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictorletStatus) DeepCopyInto(out *PredictorletStatus) {
	*out = *in
	if in.DeploymentRef != nil {
		in, out := &in.DeploymentRef, &out.DeploymentRef
		*out = new(corev1.ObjectReference)
		**out = **in
	}
	if in.ServiceRef != nil {
		in, out := &in.ServiceRef, &out.ServiceRef
		*out = new(corev1.ObjectReference)
		**out = **in
	}
	if in.DeployedAt != nil {
		in, out := &in.DeployedAt, &out.DeployedAt
		*out = (*in).DeepCopy()
	}
	if in.LastPredictionTime != nil {
		in, out := &in.LastPredictionTime, &out.LastPredictionTime
		*out = (*in).DeepCopy()
	}
	if in.FailureMessage != nil {
		in, out := &in.FailureMessage, &out.FailureMessage
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictorletStatus.
func (in *PredictorletStatus) DeepCopy() *PredictorletStatus {
	if in == nil {
		return nil
	}
	out := new(PredictorletStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ProgressiveSpec) DeepCopyInto(out *ProgressiveSpec) {
	*out = *in
	if in.Warmup != nil {
		in, out := &in.Warmup, &out.Warmup
		*out = new(int32)
		**out = **in
	}
	if in.TrafficIncrement != nil {
		in, out := &in.TrafficIncrement, &out.TrafficIncrement
		*out = new(int32)
		**out = **in
	}
	if in.CanaryMetrics != nil {
		in, out := &in.CanaryMetrics, &out.CanaryMetrics
		*out = make([]catalogv1alpha1.Metric, len(*in))
		copy(*out, *in)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ProgressiveSpec.
func (in *ProgressiveSpec) DeepCopy() *ProgressiveSpec {
	if in == nil {
		return nil
	}
	out := new(ProgressiveSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ValidationError) DeepCopyInto(out *ValidationError) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ValidationError.
func (in *ValidationError) DeepCopy() *ValidationError {
	if in == nil {
		return nil
	}
	out := new(ValidationError)
	in.DeepCopyInto(out)
	return out
}
