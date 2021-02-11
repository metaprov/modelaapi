/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"k8s.io/apimachinery/pkg/api/resource"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// CloudName
//==============================================================================
// +genclient
// +genclient:noStatus
// +kubebuilder:object:root=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:resource:path=clouds,singular=cloud,categories={catalog,modeld,all}
// Cloud represent a cloud provider. A cloud contains RegionName, machines
type Cloud struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              CloudSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status CloudStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// CloudList contains a list of CloudName
type CloudList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Cloud `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type CloudSpec struct {
	DefaultRegionName       string         `json:"defaultRegionRef,omitempty" protobuf:"bytes,1,opt,name=defaultRegionName"`
	DefaultMachineClassName string         `json:"defaultMachineClassRef,omitempty" protobuf:"bytes,2,opt,name=defaultMachineClassName"`
	DefaultGpuClassName     string         `json:"defaultGpuClassRef,omitempty" protobuf:"bytes,3,opt,name=defaultGpuClassName"`
	MachineClasses          []MachineClass `json:"machineClasses,omitempty" protobuf:"bytes,4,rep,name=machineClasses"`
	GpuClasses              []GpuClass     `json:"gpuClasses,omitempty" protobuf:"bytes,5,rep,name=gpuClasses"`
	Regions                 []Region       `json:"regions,omitempty" protobuf:"bytes,6,rep,name=regions"`
}

type MachineClass struct {
	//+optional
	CloudName string `json:"cloudName" protobuf:"bytes,1,opt,name=cloudName"`
	//+optional
	RegionName string `json:"regionName" protobuf:"bytes,2,opt,name=regionName"`
	//+optional
	Mem *resource.Quantity `json:"mem" protobuf:"bytes,3,opt,name=mem"`
	//+optional
	Vcpu *int32 `json:"vcpu" protobuf:"varint,4,opt,name=vcpu"`
	//+optional
	Storage string `json:"storage" protobuf:"bytes,5,opt,name=storage"`
}

type GpuClass struct {
	CloudName  string            `json:"cloudName" protobuf:"bytes,1,opt,name=cloudName"`
	RegionName string            `json:"regionName" protobuf:"bytes,2,opt,name=regionName"`
	Mem        resource.Quantity `json:"mem,omitempty" protobuf:"bytes,3,opt,name=mem"`
	// +kubebuilder:validation:Minimum=0

	Vcpu int32 `json:"vcpu,omitempty" protobuf:"varint,4,opt,name=vcpu"`

	Gpumem *resource.Quantity `json:"gpumem,omitempty" protobuf:"bytes,5,opt,name=gpumem"`

	Storage string `json:"storage,omitempty" protobuf:"bytes,6,opt,name=storage"`
}

type Region struct {
	CloudName string `json:"cloudName,omitempty" protobuf:"bytes,1,opt,name=cloudName"`
	// The default datacenter for a region
	//+optional
	DefaultDatacenterName string `json:"defaultDatacenterName,omitempty" protobuf:"bytes,2,opt,name=defaultDatacenterName"`
	// The location of the region
	Location string `json:"location,omitempty" protobuf:"bytes,3,opt,name=location"`
	// The billing code of the region
	BillingCode string `json:"billingCode,omitempty" protobuf:"bytes,4,opt,name=billingCode"`

	Datacenters []DataCenter `json:"datacenters,omitempty" protobuf:"bytes,5,rep,name=datacenters"`
}

type DataCenter struct {
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	Code string `json:"code,omitempty" protobuf:"bytes,2,opt,name=code"`
}

type MachineClassCost struct {
	Region        string             `json:"region,omitempty" protobuf:"bytes,1,opt,name=region"`
	CostPerMinute *resource.Quantity `json:"costPerMinute,omitempty" protobuf:"bytes,2,opt,name=costPerMinute"`
	CostSpot      *resource.Quantity `json:"costSpot,omitempty" protobuf:"bytes,3,opt,name=costSpot"`
}

type GpuClassCost struct {
	Region        string             `json:"region,omitempty" protobuf:"bytes,1,opt,name=region"`
	CostPerMinute *resource.Quantity `json:"costPerMinute,omitempty" protobuf:"bytes,2,opt,name=costPerMinute"`
	CostSpot      *resource.Quantity `json:"costSpot,omitempty" protobuf:"bytes,3,opt,name=costSpot"`
}

// CloudStatus defines the observed state of Cloud.
type CloudStatus struct {
	MachineCosts []MachineClassCost `json:"machineCosts,omitempty" protobuf:"bytes,1,rep,name=machineCosts"`
	GpuCosts     []GpuClassCost     `json:"gpuCosts,omitempty" protobuf:"bytes,2,rep,name=gpuCosts"`
}
