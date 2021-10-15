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
	trainingv1alpha1 "github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1"
	"k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/runtime"
)

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *AppSpec) DeepCopyInto(out *AppSpec) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
	if in.Port != nil {
		in, out := &in.Port, &out.Port
		*out = new(int32)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new AppSpec.
func (in *AppSpec) DeepCopy() *AppSpec {
	if in == nil {
		return nil
	}
	out := new(AppSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *AppStatus) DeepCopyInto(out *AppStatus) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new AppStatus.
func (in *AppStatus) DeepCopy() *AppStatus {
	if in == nil {
		return nil
	}
	out := new(AppStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *AutoScaling) DeepCopyInto(out *AutoScaling) {
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

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new AutoScaling.
func (in *AutoScaling) DeepCopy() *AutoScaling {
	if in == nil {
		return nil
	}
	out := new(AutoScaling)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CronPrediction) DeepCopyInto(out *CronPrediction) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
	in.Status.DeepCopyInto(&out.Status)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CronPrediction.
func (in *CronPrediction) DeepCopy() *CronPrediction {
	if in == nil {
		return nil
	}
	out := new(CronPrediction)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *CronPrediction) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CronPredictionCondition) DeepCopyInto(out *CronPredictionCondition) {
	*out = *in
	if in.LastTransitionTime != nil {
		in, out := &in.LastTransitionTime, &out.LastTransitionTime
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CronPredictionCondition.
func (in *CronPredictionCondition) DeepCopy() *CronPredictionCondition {
	if in == nil {
		return nil
	}
	out := new(CronPredictionCondition)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CronPredictionList) DeepCopyInto(out *CronPredictionList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]CronPrediction, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CronPredictionList.
func (in *CronPredictionList) DeepCopy() *CronPredictionList {
	if in == nil {
		return nil
	}
	out := new(CronPredictionList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *CronPredictionList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CronPredictionSpec) DeepCopyInto(out *CronPredictionSpec) {
	*out = *in
	if in.VersionName != nil {
		in, out := &in.VersionName, &out.VersionName
		*out = new(string)
		**out = **in
	}
	if in.Owner != nil {
		in, out := &in.Owner, &out.Owner
		*out = new(string)
		**out = **in
	}
	in.Schedule.DeepCopyInto(&out.Schedule)
	in.Template.DeepCopyInto(&out.Template)
	if in.Priority != nil {
		in, out := &in.Priority, &out.Priority
		*out = new(catalogv1alpha1.PriorityLevel)
		**out = **in
	}
	if in.Paused != nil {
		in, out := &in.Paused, &out.Paused
		*out = new(bool)
		**out = **in
	}
	in.Notification.DeepCopyInto(&out.Notification)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CronPredictionSpec.
func (in *CronPredictionSpec) DeepCopy() *CronPredictionSpec {
	if in == nil {
		return nil
	}
	out := new(CronPredictionSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CronPredictionStatus) DeepCopyInto(out *CronPredictionStatus) {
	*out = *in
	if in.LastRun != nil {
		in, out := &in.LastRun, &out.LastRun
		*out = (*in).DeepCopy()
	}
	if in.LastUpdated != nil {
		in, out := &in.LastUpdated, &out.LastUpdated
		*out = (*in).DeepCopy()
	}
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]CronPredictionCondition, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CronPredictionStatus.
func (in *CronPredictionStatus) DeepCopy() *CronPredictionStatus {
	if in == nil {
		return nil
	}
	out := new(CronPredictionStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Curtain) DeepCopyInto(out *Curtain) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
	in.Status.DeepCopyInto(&out.Status)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Curtain.
func (in *Curtain) DeepCopy() *Curtain {
	if in == nil {
		return nil
	}
	out := new(Curtain)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *Curtain) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CurtainCondition) DeepCopyInto(out *CurtainCondition) {
	*out = *in
	if in.LastTransitionTime != nil {
		in, out := &in.LastTransitionTime, &out.LastTransitionTime
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CurtainCondition.
func (in *CurtainCondition) DeepCopy() *CurtainCondition {
	if in == nil {
		return nil
	}
	out := new(CurtainCondition)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CurtainList) DeepCopyInto(out *CurtainList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]Curtain, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CurtainList.
func (in *CurtainList) DeepCopy() *CurtainList {
	if in == nil {
		return nil
	}
	out := new(CurtainList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *CurtainList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CurtainSpec) DeepCopyInto(out *CurtainSpec) {
	*out = *in
	if in.Description != nil {
		in, out := &in.Description, &out.Description
		*out = new(string)
		**out = **in
	}
	if in.VersionName != nil {
		in, out := &in.VersionName, &out.VersionName
		*out = new(string)
		**out = **in
	}
	if in.ServingSiteName != nil {
		in, out := &in.ServingSiteName, &out.ServingSiteName
		*out = new(string)
		**out = **in
	}
	if in.DatasetName != nil {
		in, out := &in.DatasetName, &out.DatasetName
		*out = new(string)
		**out = **in
	}
	if in.wizards != nil {
		in, out := &in.wizards, &out.wizards
		*out = make([]string, len(*in))
		copy(*out, *in)
	}
	if in.Question != nil {
		in, out := &in.Question, &out.Question
		*out = new(string)
		**out = **in
	}
	if in.NotifierName != nil {
		in, out := &in.NotifierName, &out.NotifierName
		*out = new(string)
		**out = **in
	}
	if in.Owner != nil {
		in, out := &in.Owner, &out.Owner
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CurtainSpec.
func (in *CurtainSpec) DeepCopy() *CurtainSpec {
	if in == nil {
		return nil
	}
	out := new(CurtainSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CurtainStatus) DeepCopyInto(out *CurtainStatus) {
	*out = *in
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]CurtainCondition, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CurtainStatus.
func (in *CurtainStatus) DeepCopy() *CurtainStatus {
	if in == nil {
		return nil
	}
	out := new(CurtainStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CurtainTemplateSpec) DeepCopyInto(out *CurtainTemplateSpec) {
	*out = *in
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CurtainTemplateSpec.
func (in *CurtainTemplateSpec) DeepCopy() *CurtainTemplateSpec {
	if in == nil {
		return nil
	}
	out := new(CurtainTemplateSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ModelRecord) DeepCopyInto(out *ModelRecord) {
	*out = *in
	if in.LiveAt != nil {
		in, out := &in.LiveAt, &out.LiveAt
		*out = (*in).DeepCopy()
	}
	if in.RetiredAt != nil {
		in, out := &in.RetiredAt, &out.RetiredAt
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ModelRecord.
func (in *ModelRecord) DeepCopy() *ModelRecord {
	if in == nil {
		return nil
	}
	out := new(ModelRecord)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MonitorSpec) DeepCopyInto(out *MonitorSpec) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
	if in.SamplePrecent != nil {
		in, out := &in.SamplePrecent, &out.SamplePrecent
		*out = new(int32)
		**out = **in
	}
	in.Schedule.DeepCopyInto(&out.Schedule)
	if in.NotifierName != nil {
		in, out := &in.NotifierName, &out.NotifierName
		*out = new(string)
		**out = **in
	}
	if in.Validations != nil {
		in, out := &in.Validations, &out.Validations
		*out = make([]trainingv1alpha1.ModelValidation, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MonitorSpec.
func (in *MonitorSpec) DeepCopy() *MonitorSpec {
	if in == nil {
		return nil
	}
	out := new(MonitorSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MonitorStatus) DeepCopyInto(out *MonitorStatus) {
	*out = *in
	if in.LastPrediction != nil {
		in, out := &in.LastPrediction, &out.LastPrediction
		*out = (*in).DeepCopy()
	}
	if in.ValidationResult != nil {
		in, out := &in.ValidationResult, &out.ValidationResult
		*out = make([]trainingv1alpha1.ModelValidationResult, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MonitorStatus.
func (in *MonitorStatus) DeepCopy() *MonitorStatus {
	if in == nil {
		return nil
	}
	out := new(MonitorStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *OnlineFeaturestoreSpec) DeepCopyInto(out *OnlineFeaturestoreSpec) {
	*out = *in
	if in.Active != nil {
		in, out := &in.Active, &out.Active
		*out = new(bool)
		**out = **in
	}
	if in.ServiceName != nil {
		in, out := &in.ServiceName, &out.ServiceName
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new OnlineFeaturestoreSpec.
func (in *OnlineFeaturestoreSpec) DeepCopy() *OnlineFeaturestoreSpec {
	if in == nil {
		return nil
	}
	out := new(OnlineFeaturestoreSpec)
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
	if in.Active != nil {
		in, out := &in.Active, &out.Active
		*out = new(bool)
		**out = **in
	}
	if in.ServiceName != nil {
		in, out := &in.ServiceName, &out.ServiceName
		*out = new(string)
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
func (in *PredictionCondition) DeepCopyInto(out *PredictionCondition) {
	*out = *in
	if in.LastTransitionTime != nil {
		in, out := &in.LastTransitionTime, &out.LastTransitionTime
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictionCondition.
func (in *PredictionCondition) DeepCopy() *PredictionCondition {
	if in == nil {
		return nil
	}
	out := new(PredictionCondition)
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
func (in *PredictionSpec) DeepCopyInto(out *PredictionSpec) {
	*out = *in
	if in.VersionName != nil {
		in, out := &in.VersionName, &out.VersionName
		*out = new(string)
		**out = **in
	}
	if in.PredictorName != nil {
		in, out := &in.PredictorName, &out.PredictorName
		*out = new(string)
		**out = **in
	}
	if in.Labeled != nil {
		in, out := &in.Labeled, &out.Labeled
		*out = new(bool)
		**out = **in
	}
	if in.DatasetName != nil {
		in, out := &in.DatasetName, &out.DatasetName
		*out = new(string)
		**out = **in
	}
	if in.Input != nil {
		in, out := &in.Input, &out.Input
		*out = new(datav1alpha1.DataLocation)
		(*in).DeepCopyInto(*out)
	}
	if in.Output != nil {
		in, out := &in.Output, &out.Output
		*out = new(datav1alpha1.DataOutputSpec)
		(*in).DeepCopyInto(*out)
	}
	if in.Tests != nil {
		in, out := &in.Tests, &out.Tests
		*out = make([]catalogv1alpha1.Metric, len(*in))
		copy(*out, *in)
	}
	if in.Owner != nil {
		in, out := &in.Owner, &out.Owner
		*out = new(string)
		**out = **in
	}
	if in.WorkloadClassName != nil {
		in, out := &in.WorkloadClassName, &out.WorkloadClassName
		*out = new(string)
		**out = **in
	}
	if in.ActiveDeadlineSeconds != nil {
		in, out := &in.ActiveDeadlineSeconds, &out.ActiveDeadlineSeconds
		*out = new(int64)
		**out = **in
	}
	if in.Priority != nil {
		in, out := &in.Priority, &out.Priority
		*out = new(catalogv1alpha1.PriorityLevel)
		**out = **in
	}
	if in.Aborted != nil {
		in, out := &in.Aborted, &out.Aborted
		*out = new(bool)
		**out = **in
	}
	if in.TTL != nil {
		in, out := &in.TTL, &out.TTL
		*out = new(int32)
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
	if in.StartTime != nil {
		in, out := &in.StartTime, &out.StartTime
		*out = (*in).DeepCopy()
	}
	if in.EndTime != nil {
		in, out := &in.EndTime, &out.EndTime
		*out = (*in).DeepCopy()
	}
	if in.Results != nil {
		in, out := &in.Results, &out.Results
		*out = make([]catalogv1alpha1.Measurement, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]PredictionCondition, len(*in))
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
func (in *PredictionTemplate) DeepCopyInto(out *PredictionTemplate) {
	*out = *in
	in.Spec.DeepCopyInto(&out.Spec)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictionTemplate.
func (in *PredictionTemplate) DeepCopy() *PredictionTemplate {
	if in == nil {
		return nil
	}
	out := new(PredictionTemplate)
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
func (in *PredictorCondition) DeepCopyInto(out *PredictorCondition) {
	*out = *in
	if in.LastTransitionTime != nil {
		in, out := &in.LastTransitionTime, &out.LastTransitionTime
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictorCondition.
func (in *PredictorCondition) DeepCopy() *PredictorCondition {
	if in == nil {
		return nil
	}
	out := new(PredictorCondition)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PredictorHealth) DeepCopyInto(out *PredictorHealth) {
	*out = *in
	if in.LastDailyPredictions != nil {
		in, out := &in.LastDailyPredictions, &out.LastDailyPredictions
		*out = make([]int32, len(*in))
		copy(*out, *in)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PredictorHealth.
func (in *PredictorHealth) DeepCopy() *PredictorHealth {
	if in == nil {
		return nil
	}
	out := new(PredictorHealth)
	in.DeepCopyInto(out)
	return out
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
	if in.VersionName != nil {
		in, out := &in.VersionName, &out.VersionName
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
		*out = new(v1.ObjectReference)
		**out = **in
	}
	if in.ServingSiteRef != nil {
		in, out := &in.ServingSiteRef, &out.ServingSiteRef
		*out = new(v1.ObjectReference)
		**out = **in
	}
	if in.Template != nil {
		in, out := &in.Template, &out.Template
		*out = new(v1.PodTemplate)
		(*in).DeepCopyInto(*out)
	}
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
	if in.ArtifactsFolder != nil {
		in, out := &in.ArtifactsFolder, &out.ArtifactsFolder
		*out = new(string)
		**out = **in
	}
	if in.Port != nil {
		in, out := &in.Port, &out.Port
		*out = new(int32)
		**out = **in
	}
	if in.Path != nil {
		in, out := &in.Path, &out.Path
		*out = new(string)
		**out = **in
	}
	if in.AccessType != nil {
		in, out := &in.AccessType, &out.AccessType
		*out = new(catalogv1alpha1.AccessType)
		**out = **in
	}
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
	if in.WorkloadClassName != nil {
		in, out := &in.WorkloadClassName, &out.WorkloadClassName
		*out = new(string)
		**out = **in
	}
	if in.Cache != nil {
		in, out := &in.Cache, &out.Cache
		*out = new(PredictionCacheSpec)
		(*in).DeepCopyInto(*out)
	}
	if in.Store != nil {
		in, out := &in.Store, &out.Store
		*out = new(OnlineFeaturestoreSpec)
		(*in).DeepCopyInto(*out)
	}
	if in.ForewardCurtainName != nil {
		in, out := &in.ForewardCurtainName, &out.ForewardCurtainName
		*out = new(string)
		**out = **in
	}
	if in.BackwardCurtainName != nil {
		in, out := &in.BackwardCurtainName, &out.BackwardCurtainName
		*out = new(string)
		**out = **in
	}
	if in.Type != nil {
		in, out := &in.Type, &out.Type
		*out = new(PredictorType)
		**out = **in
	}
	if in.Task != nil {
		in, out := &in.Task, &out.Task
		*out = new(catalogv1alpha1.MLTask)
		**out = **in
	}
	if in.PredictionTreshold != nil {
		in, out := &in.PredictionTreshold, &out.PredictionTreshold
		*out = new(float64)
		**out = **in
	}
	if in.Monitor != nil {
		in, out := &in.Monitor, &out.Monitor
		*out = new(MonitorSpec)
		(*in).DeepCopyInto(*out)
	}
	if in.AppSpec != nil {
		in, out := &in.AppSpec, &out.AppSpec
		*out = new(AppSpec)
		(*in).DeepCopyInto(*out)
	}
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
	if in.ModelStatuses != nil {
		in, out := &in.ModelStatuses, &out.ModelStatuses
		*out = make([]catalogv1alpha1.ModelDeploymentStatus, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	out.MonitorLastAttemptAt = in.MonitorLastAttemptAt
	in.Health.DeepCopyInto(&out.Health)
	if in.History != nil {
		in, out := &in.History, &out.History
		*out = make([]ModelRecord, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	in.MonitorStatus.DeepCopyInto(&out.MonitorStatus)
	if in.LastUpdated != nil {
		in, out := &in.LastUpdated, &out.LastUpdated
		*out = (*in).DeepCopy()
	}
	in.AppStatus.DeepCopyInto(&out.AppStatus)
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]PredictorCondition, len(*in))
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
		*out = make([]catalogv1alpha1.CanaryMetric, len(*in))
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
