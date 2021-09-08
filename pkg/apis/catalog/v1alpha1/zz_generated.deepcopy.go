// +build !ignore_autogenerated

/**
*
* Copyright (C) 2017 modela authors
* For license information, see LICENSE.txt
 */

// Code generated by controller-gen. DO NOT EDIT.

package v1alpha1

import (
	corev1 "k8s.io/api/core/v1"
	rbacv1 "k8s.io/api/rbac/v1"
	"k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
)

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Algorithm) DeepCopyInto(out *Algorithm) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Algorithm.
func (in *Algorithm) DeepCopy() *Algorithm {
	if in == nil {
		return nil
	}
	out := new(Algorithm)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *Algorithm) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *AlgorithmList) DeepCopyInto(out *AlgorithmList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]Algorithm, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new AlgorithmList.
func (in *AlgorithmList) DeepCopy() *AlgorithmList {
	if in == nil {
		return nil
	}
	out := new(AlgorithmList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *AlgorithmList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *AlgorithmSpec) DeepCopyInto(out *AlgorithmSpec) {
	*out = *in
	if in.Description != nil {
		in, out := &in.Description, &out.Description
		*out = new(string)
		**out = **in
	}
	if in.URL != nil {
		in, out := &in.URL, &out.URL
		*out = new(string)
		**out = **in
	}
	if in.Sparse != nil {
		in, out := &in.Sparse, &out.Sparse
		*out = new(bool)
		**out = **in
	}
	if in.IntegerParameters != nil {
		in, out := &in.IntegerParameters, &out.IntegerParameters
		*out = make([]IntParameter, len(*in))
		copy(*out, *in)
	}
	if in.FloatParameters != nil {
		in, out := &in.FloatParameters, &out.FloatParameters
		*out = make([]FloatParameter, len(*in))
		copy(*out, *in)
	}
	if in.CategoricalParameters != nil {
		in, out := &in.CategoricalParameters, &out.CategoricalParameters
		*out = make([]CategoricalParameter, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new AlgorithmSpec.
func (in *AlgorithmSpec) DeepCopy() *AlgorithmSpec {
	if in == nil {
		return nil
	}
	out := new(AlgorithmSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CategoricalParameter) DeepCopyInto(out *CategoricalParameter) {
	*out = *in
	if in.Enums != nil {
		in, out := &in.Enums, &out.Enums
		*out = make([]string, len(*in))
		copy(*out, *in)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CategoricalParameter.
func (in *CategoricalParameter) DeepCopy() *CategoricalParameter {
	if in == nil {
		return nil
	}
	out := new(CategoricalParameter)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Cloud) DeepCopyInto(out *Cloud) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
	in.Status.DeepCopyInto(&out.Status)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Cloud.
func (in *Cloud) DeepCopy() *Cloud {
	if in == nil {
		return nil
	}
	out := new(Cloud)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *Cloud) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CloudList) DeepCopyInto(out *CloudList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]Cloud, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CloudList.
func (in *CloudList) DeepCopy() *CloudList {
	if in == nil {
		return nil
	}
	out := new(CloudList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *CloudList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CloudSpec) DeepCopyInto(out *CloudSpec) {
	*out = *in
	if in.MachineClasses != nil {
		in, out := &in.MachineClasses, &out.MachineClasses
		*out = make([]MachineClass, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	if in.GpuClasses != nil {
		in, out := &in.GpuClasses, &out.GpuClasses
		*out = make([]GpuClass, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	if in.Regions != nil {
		in, out := &in.Regions, &out.Regions
		*out = make([]Region, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CloudSpec.
func (in *CloudSpec) DeepCopy() *CloudSpec {
	if in == nil {
		return nil
	}
	out := new(CloudSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CloudStatus) DeepCopyInto(out *CloudStatus) {
	*out = *in
	if in.MachineCosts != nil {
		in, out := &in.MachineCosts, &out.MachineCosts
		*out = make([]MachineClassCost, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	if in.GpuCosts != nil {
		in, out := &in.GpuCosts, &out.GpuCosts
		*out = make([]GpuClassCost, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CloudStatus.
func (in *CloudStatus) DeepCopy() *CloudStatus {
	if in == nil {
		return nil
	}
	out := new(CloudStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CompilerSpec) DeepCopyInto(out *CompilerSpec) {
	*out = *in
	if in.Enable != nil {
		in, out := &in.Enable, &out.Enable
		*out = new(bool)
		**out = **in
	}
	if in.Compiler != nil {
		in, out := &in.Compiler, &out.Compiler
		*out = new(CompilerName)
		**out = **in
	}
	if in.Targets != nil {
		in, out := &in.Targets, &out.Targets
		*out = make([]HardwareTarget, len(*in))
		copy(*out, *in)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CompilerSpec.
func (in *CompilerSpec) DeepCopy() *CompilerSpec {
	if in == nil {
		return nil
	}
	out := new(CompilerSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *DataCenter) DeepCopyInto(out *DataCenter) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new DataCenter.
func (in *DataCenter) DeepCopy() *DataCenter {
	if in == nil {
		return nil
	}
	out := new(DataCenter)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *FloatParameter) DeepCopyInto(out *FloatParameter) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new FloatParameter.
func (in *FloatParameter) DeepCopy() *FloatParameter {
	if in == nil {
		return nil
	}
	out := new(FloatParameter)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *GithubEvents) DeepCopyInto(out *GithubEvents) {
	*out = *in
	if in.GitConnectionsName != nil {
		in, out := &in.GitConnectionsName, &out.GitConnectionsName
		*out = new(string)
		**out = **in
	}
	if in.Repository != nil {
		in, out := &in.Repository, &out.Repository
		*out = new(string)
		**out = **in
	}
	if in.Branch != nil {
		in, out := &in.Branch, &out.Branch
		*out = new(string)
		**out = **in
	}
	if in.BlobNameRegex != nil {
		in, out := &in.BlobNameRegex, &out.BlobNameRegex
		*out = new(string)
		**out = **in
	}
	if in.Events != nil {
		in, out := &in.Events, &out.Events
		*out = make([]string, len(*in))
		copy(*out, *in)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new GithubEvents.
func (in *GithubEvents) DeepCopy() *GithubEvents {
	if in == nil {
		return nil
	}
	out := new(GithubEvents)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *GpuClass) DeepCopyInto(out *GpuClass) {
	*out = *in
	if in.Gpumem != nil {
		in, out := &in.Gpumem, &out.Gpumem
		x := (*in).DeepCopy()
		*out = &x
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new GpuClass.
func (in *GpuClass) DeepCopy() *GpuClass {
	if in == nil {
		return nil
	}
	out := new(GpuClass)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *GpuClassCost) DeepCopyInto(out *GpuClassCost) {
	*out = *in
	if in.CostPerMinute != nil {
		in, out := &in.CostPerMinute, &out.CostPerMinute
		x := (*in).DeepCopy()
		*out = &x
	}
	if in.CostSpot != nil {
		in, out := &in.CostSpot, &out.CostSpot
		x := (*in).DeepCopy()
		*out = &x
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new GpuClassCost.
func (in *GpuClassCost) DeepCopy() *GpuClassCost {
	if in == nil {
		return nil
	}
	out := new(GpuClassCost)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *IntParameter) DeepCopyInto(out *IntParameter) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new IntParameter.
func (in *IntParameter) DeepCopy() *IntParameter {
	if in == nil {
		return nil
	}
	out := new(IntParameter)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Lib) DeepCopyInto(out *Lib) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Lib.
func (in *Lib) DeepCopy() *Lib {
	if in == nil {
		return nil
	}
	out := new(Lib)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MLFramework) DeepCopyInto(out *MLFramework) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MLFramework.
func (in *MLFramework) DeepCopy() *MLFramework {
	if in == nil {
		return nil
	}
	out := new(MLFramework)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *MLFramework) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MLFrameworkList) DeepCopyInto(out *MLFrameworkList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]MLFramework, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MLFrameworkList.
func (in *MLFrameworkList) DeepCopy() *MLFrameworkList {
	if in == nil {
		return nil
	}
	out := new(MLFrameworkList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *MLFrameworkList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MLFrameworkSpec) DeepCopyInto(out *MLFrameworkSpec) {
	*out = *in
	if in.Description != nil {
		in, out := &in.Description, &out.Description
		*out = new(string)
		**out = **in
	}
	if in.Version != nil {
		in, out := &in.Version, &out.Version
		*out = new(string)
		**out = **in
	}
	if in.Lang != nil {
		in, out := &in.Lang, &out.Lang
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MLFrameworkSpec.
func (in *MLFrameworkSpec) DeepCopy() *MLFrameworkSpec {
	if in == nil {
		return nil
	}
	out := new(MLFrameworkSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MachineClass) DeepCopyInto(out *MachineClass) {
	*out = *in
	if in.Mem != nil {
		in, out := &in.Mem, &out.Mem
		x := (*in).DeepCopy()
		*out = &x
	}
	if in.Vcpu != nil {
		in, out := &in.Vcpu, &out.Vcpu
		*out = new(int32)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MachineClass.
func (in *MachineClass) DeepCopy() *MachineClass {
	if in == nil {
		return nil
	}
	out := new(MachineClass)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MachineClassCost) DeepCopyInto(out *MachineClassCost) {
	*out = *in
	if in.CostPerMinute != nil {
		in, out := &in.CostPerMinute, &out.CostPerMinute
		x := (*in).DeepCopy()
		*out = &x
	}
	if in.CostSpot != nil {
		in, out := &in.CostSpot, &out.CostSpot
		x := (*in).DeepCopy()
		*out = &x
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MachineClassCost.
func (in *MachineClassCost) DeepCopy() *MachineClassCost {
	if in == nil {
		return nil
	}
	out := new(MachineClassCost)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Measurement) DeepCopyInto(out *Measurement) {
	*out = *in
	if in.Metric != nil {
		in, out := &in.Metric, &out.Metric
		*out = new(Metric)
		**out = **in
	}
	if in.Value != nil {
		in, out := &in.Value, &out.Value
		*out = new(float64)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Measurement.
func (in *Measurement) DeepCopy() *Measurement {
	if in == nil {
		return nil
	}
	out := new(Measurement)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ModelDeploymentSpec) DeepCopyInto(out *ModelDeploymentSpec) {
	*out = *in
	if in.ModelName != nil {
		in, out := &in.ModelName, &out.ModelName
		*out = new(string)
		**out = **in
	}
	if in.ModelVersion != nil {
		in, out := &in.ModelVersion, &out.ModelVersion
		*out = new(string)
		**out = **in
	}
	if in.MaxTraffic != nil {
		in, out := &in.MaxTraffic, &out.MaxTraffic
		*out = new(int32)
		**out = **in
	}
	if in.Traffic != nil {
		in, out := &in.Traffic, &out.Traffic
		*out = new(int32)
		**out = **in
	}
	if in.Canary != nil {
		in, out := &in.Canary, &out.Canary
		*out = new(bool)
		**out = **in
	}
	if in.Shadow != nil {
		in, out := &in.Shadow, &out.Shadow
		*out = new(bool)
		**out = **in
	}
	if in.Released != nil {
		in, out := &in.Released, &out.Released
		*out = new(bool)
		**out = **in
	}
	if in.Deployed != nil {
		in, out := &in.Deployed, &out.Deployed
		*out = new(bool)
		**out = **in
	}
	if in.MountTar != nil {
		in, out := &in.MountTar, &out.MountTar
		*out = new(bool)
		**out = **in
	}
	if in.TrafficSelector != nil {
		in, out := &in.TrafficSelector, &out.TrafficSelector
		*out = new(string)
		**out = **in
	}
	if in.CanaryMetrics != nil {
		in, out := &in.CanaryMetrics, &out.CanaryMetrics
		*out = make([]CanaryMetric, len(*in))
		copy(*out, *in)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ModelDeploymentSpec.
func (in *ModelDeploymentSpec) DeepCopy() *ModelDeploymentSpec {
	if in == nil {
		return nil
	}
	out := new(ModelDeploymentSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ModelDeploymentStatus) DeepCopyInto(out *ModelDeploymentStatus) {
	*out = *in
	if in.LastPredictionTime != nil {
		in, out := &in.LastPredictionTime, &out.LastPredictionTime
		*out = (*in).DeepCopy()
	}
	if in.DeployedAt != nil {
		in, out := &in.DeployedAt, &out.DeployedAt
		*out = (*in).DeepCopy()
	}
	if in.ReleasedAt != nil {
		in, out := &in.ReleasedAt, &out.ReleasedAt
		*out = (*in).DeepCopy()
	}
	if in.ApprovedAt != nil {
		in, out := &in.ApprovedAt, &out.ApprovedAt
		*out = (*in).DeepCopy()
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
func (in *PretrainedModel) DeepCopyInto(out *PretrainedModel) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	out.Spec = in.Spec
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PretrainedModel.
func (in *PretrainedModel) DeepCopy() *PretrainedModel {
	if in == nil {
		return nil
	}
	out := new(PretrainedModel)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *PretrainedModel) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PretrainedModelList) DeepCopyInto(out *PretrainedModelList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]PretrainedModel, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PretrainedModelList.
func (in *PretrainedModelList) DeepCopy() *PretrainedModelList {
	if in == nil {
		return nil
	}
	out := new(PretrainedModelList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *PretrainedModelList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PretrainedModelSpec) DeepCopyInto(out *PretrainedModelSpec) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PretrainedModelSpec.
func (in *PretrainedModelSpec) DeepCopy() *PretrainedModelSpec {
	if in == nil {
		return nil
	}
	out := new(PretrainedModelSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PublicDataset) DeepCopyInto(out *PublicDataset) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PublicDataset.
func (in *PublicDataset) DeepCopy() *PublicDataset {
	if in == nil {
		return nil
	}
	out := new(PublicDataset)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *PublicDataset) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PublicDatasetList) DeepCopyInto(out *PublicDatasetList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]PublicDataset, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PublicDatasetList.
func (in *PublicDatasetList) DeepCopy() *PublicDatasetList {
	if in == nil {
		return nil
	}
	out := new(PublicDatasetList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *PublicDatasetList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PublicDatasetSpec) DeepCopyInto(out *PublicDatasetSpec) {
	*out = *in
	if in.Description != nil {
		in, out := &in.Description, &out.Description
		*out = new(string)
		**out = **in
	}
	if in.Task != nil {
		in, out := &in.Task, &out.Task
		*out = new(MLTask)
		**out = **in
	}
	if in.OpenMLID != nil {
		in, out := &in.OpenMLID, &out.OpenMLID
		*out = new(string)
		**out = **in
	}
	if in.DataUrl != nil {
		in, out := &in.DataUrl, &out.DataUrl
		*out = new(string)
		**out = **in
	}
	if in.Citation != nil {
		in, out := &in.Citation, &out.Citation
		*out = new(string)
		**out = **in
	}
	if in.Rows != nil {
		in, out := &in.Rows, &out.Rows
		*out = new(int32)
		**out = **in
	}
	if in.Columns != nil {
		in, out := &in.Columns, &out.Columns
		*out = new(int32)
		**out = **in
	}
	if in.FileSize != nil {
		in, out := &in.FileSize, &out.FileSize
		*out = new(int32)
		**out = **in
	}
	if in.TargetColumn != nil {
		in, out := &in.TargetColumn, &out.TargetColumn
		*out = new(string)
		**out = **in
	}
	if in.Imbalanced != nil {
		in, out := &in.Imbalanced, &out.Imbalanced
		*out = new(bool)
		**out = **in
	}
	if in.DatasourceCR != nil {
		in, out := &in.DatasourceCR, &out.DatasourceCR
		*out = new(string)
		**out = **in
	}
	if in.DatasetCR != nil {
		in, out := &in.DatasetCR, &out.DatasetCR
		*out = new(string)
		**out = **in
	}
	if in.StudyCR != nil {
		in, out := &in.StudyCR, &out.StudyCR
		*out = new(string)
		**out = **in
	}
	if in.DataProductCR != nil {
		in, out := &in.DataProductCR, &out.DataProductCR
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PublicDatasetSpec.
func (in *PublicDatasetSpec) DeepCopy() *PublicDatasetSpec {
	if in == nil {
		return nil
	}
	out := new(PublicDatasetSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Region) DeepCopyInto(out *Region) {
	*out = *in
	if in.Datacenters != nil {
		in, out := &in.Datacenters, &out.Datacenters
		*out = make([]DataCenter, len(*in))
		copy(*out, *in)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Region.
func (in *Region) DeepCopy() *Region {
	if in == nil {
		return nil
	}
	out := new(Region)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *RunSchedule) DeepCopyInto(out *RunSchedule) {
	*out = *in
	if in.Enabled != nil {
		in, out := &in.Enabled, &out.Enabled
		*out = new(bool)
		**out = **in
	}
	if in.StartTime != nil {
		in, out := &in.StartTime, &out.StartTime
		*out = (*in).DeepCopy()
	}
	if in.EndTime != nil {
		in, out := &in.EndTime, &out.EndTime
		*out = new(v1.Timestamp)
		**out = **in
	}
	if in.Cron != nil {
		in, out := &in.Cron, &out.Cron
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new RunSchedule.
func (in *RunSchedule) DeepCopy() *RunSchedule {
	if in == nil {
		return nil
	}
	out := new(RunSchedule)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *UserRoleClass) DeepCopyInto(out *UserRoleClass) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new UserRoleClass.
func (in *UserRoleClass) DeepCopy() *UserRoleClass {
	if in == nil {
		return nil
	}
	out := new(UserRoleClass)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *UserRoleClass) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *UserRoleClassList) DeepCopyInto(out *UserRoleClassList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]UserRoleClass, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new UserRoleClassList.
func (in *UserRoleClassList) DeepCopy() *UserRoleClassList {
	if in == nil {
		return nil
	}
	out := new(UserRoleClassList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *UserRoleClassList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *UserRoleClassSpec) DeepCopyInto(out *UserRoleClassSpec) {
	*out = *in
	if in.Rules != nil {
		in, out := &in.Rules, &out.Rules
		*out = make([]rbacv1.PolicyRule, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new UserRoleClassSpec.
func (in *UserRoleClassSpec) DeepCopy() *UserRoleClassSpec {
	if in == nil {
		return nil
	}
	out := new(UserRoleClassSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *VizUri) DeepCopyInto(out *VizUri) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new VizUri.
func (in *VizUri) DeepCopy() *VizUri {
	if in == nil {
		return nil
	}
	out := new(VizUri)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *WorkloadClass) DeepCopyInto(out *WorkloadClass) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new WorkloadClass.
func (in *WorkloadClass) DeepCopy() *WorkloadClass {
	if in == nil {
		return nil
	}
	out := new(WorkloadClass)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *WorkloadClass) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *WorkloadClassList) DeepCopyInto(out *WorkloadClassList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]WorkloadClass, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new WorkloadClassList.
func (in *WorkloadClassList) DeepCopy() *WorkloadClassList {
	if in == nil {
		return nil
	}
	out := new(WorkloadClassList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *WorkloadClassList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *WorkloadClassSpec) DeepCopyInto(out *WorkloadClassSpec) {
	*out = *in
	if in.Vcpu != nil {
		in, out := &in.Vcpu, &out.Vcpu
		*out = new(float64)
		**out = **in
	}
	if in.Mem != nil {
		in, out := &in.Mem, &out.Mem
		x := (*in).DeepCopy()
		*out = &x
	}
	if in.Gpu != nil {
		in, out := &in.Gpu, &out.Gpu
		*out = new(int32)
		**out = **in
	}
	if in.Template != nil {
		in, out := &in.Template, &out.Template
		*out = new(corev1.PodTemplateSpec)
		(*in).DeepCopyInto(*out)
	}
	if in.Frameworks != nil {
		in, out := &in.Frameworks, &out.Frameworks
		*out = make([]string, len(*in))
		copy(*out, *in)
	}
	if in.Libs != nil {
		in, out := &in.Libs, &out.Libs
		*out = make([]Lib, len(*in))
		copy(*out, *in)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new WorkloadClassSpec.
func (in *WorkloadClassSpec) DeepCopy() *WorkloadClassSpec {
	if in == nil {
		return nil
	}
	out := new(WorkloadClassSpec)
	in.DeepCopyInto(out)
	return out
}
