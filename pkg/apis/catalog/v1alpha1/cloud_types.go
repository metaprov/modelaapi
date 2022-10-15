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

// Cloud represent a cloud provider metadata. A cloud contains regions,datacenter,machine classes
// +kubebuilder:object:root=true
// +kubebuilder:storageversion
// +kubebuilder:resource:path=clouds,singular=cloud,categories={catalog,modela,all}
type Cloud struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              CloudSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status CloudStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// CloudList contains a list of Cloud
type CloudList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Cloud `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// CloudSpec define the attribute of a single cloud provider (E.g. AWS)
type CloudSpec struct {
	// DefaultRegionName is the default region.
	// +kubebuilder:validation:Optional
	DefaultRegionName string `json:"defaultRegionName,omitempty" protobuf:"bytes,1,opt,name=defaultRegionName"`
	// DefaultMachineClassName is the default machine class. Used when allocating new machine on this provider
	// +kubebuilder:validation:Optional
	DefaultMachineClassName string `json:"defaultMachineClassName,omitempty" protobuf:"bytes,2,opt,name=defaultMachineClassName"`
	// DefaultGpuClassName is the default gpu class. Used when allocating new gpu on this provider
	// +kubebuilder:validation:Optional
	DefaultGpuClassName string `json:"defaultGpuClassName,omitempty" protobuf:"bytes,3,opt,name=defaultGpuClassName"`
	// MachineClasses defines the types of machines in this provider
	// +kubebuilder:validation:Optional
	MachineClasses []MachineClass `json:"machineClasses,omitempty" protobuf:"bytes,4,rep,name=machineClasses"`
	// GPUClasses define the type of GPUs offered by this provider
	// +kubebuilder:validation:Optional
	GpuClasses []GpuClass `json:"gpuClasses,omitempty" protobuf:"bytes,5,rep,name=gpuClasses"`
	// Regions define the type of regions offered by this provider
	// +kubebuilder:validation:Optional
	Regions []Region `json:"regions,omitempty" protobuf:"bytes,6,rep,name=regions"`
}

// MachineClass define the specific for a machine type of a cloud provider
type MachineClass struct {
	//Code the the code of the machine class within the data provider
	Code string `json:"code" protobuf:"bytes,1,opt,name=code"`
	//+optional
	RegionName string `json:"regionName" protobuf:"bytes,2,opt,name=regionName"`
	//Mem is the amount of memory on this machine
	//+optional
	Mem *resource.Quantity `json:"mem" protobuf:"bytes,3,opt,name=mem"`
	//Vcpu is the number of virtual cpus on this machine
	// +kubebuilder:validation:Minimum=0
	//+optional
	Vcpu *int32 `json:"vcpu" protobuf:"varint,4,opt,name=vcpu"`
	//Storage is the amount of storage on this machine class
	//+optional
	Storage string `json:"storage" protobuf:"bytes,5,opt,name=storage"`
}

// GpuClass define the specific for a machine type of a cloud provider
type GpuClass struct {
	//Code the the code of the gpu class within the data provider
	Code string `json:"code" protobuf:"bytes,1,opt,name=code"`

	RegionName string `json:"regionName" protobuf:"bytes,2,opt,name=regionName"`
	//Vcpu is the number of cores
	// +kubebuilder:validation:Minimum=0
	Vcpu int32 `json:"vcpu,omitempty" protobuf:"varint,3,opt,name=vcpu"`
	//Gpumem is the amount of memory on the gpu
	Gpumem *resource.Quantity `json:"gpumem,omitempty" protobuf:"bytes,4,opt,name=gpumem"`
}

//Region defines a region within the data provider
type Region struct {
	//Code is the code of the region
	Code string `json:"code" protobuf:"bytes,1,opt,name=code"`
	// The default datacenter for a region
	//+optional
	DefaultDatacenterName string `json:"defaultDatacenterName,omitempty" protobuf:"bytes,2,opt,name=defaultDatacenterName"`
	// Location is the location code The location of the region
	Location string `json:"location,omitempty" protobuf:"bytes,3,opt,name=location"`
	// BillingCode is the billing code of the region
	BillingCode string `json:"billingCode,omitempty" protobuf:"bytes,4,opt,name=billingCode"`
	//Datacenters if the list of datacenters
	Datacenters []DataCenter `json:"datacenters,omitempty" protobuf:"bytes,5,rep,name=datacenters"`
}

//Datacenter contains the attribute of a specific data center
type DataCenter struct {
	// Name is the name of the datacenter
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	//Code is the code of the datacenter
	Code string `json:"code,omitempty" protobuf:"bytes,2,opt,name=code"`
}

//MachineClassCost contain the current cost of a machine class in a region
type MachineClassCost struct {
	// Code is the machine class code
	Code string `json:"code,omitempty" protobuf:"bytes,1,opt,name=code"`
	// Region is the code of the region
	Region string `json:"region,omitempty" protobuf:"bytes,2,opt,name=region"`
	// CostPerMinute is the cost per minute in dollar of the machine class
	CostPerMinute *resource.Quantity `json:"costPerMinute,omitempty" protobuf:"bytes,3,opt,name=costPerMinute"`
	// CostSpot is the spot cost of the machine class
	CostSpot *resource.Quantity `json:"costSpot,omitempty" protobuf:"bytes,4,opt,name=costSpot"`
}

//GpuClassCost contain the current cost of a gpu class in a region
type GpuClassCost struct {
	// Code is the machine class code
	Code string `json:"code,omitempty" protobuf:"bytes,1,opt,name=code"`

	Region string `json:"region,omitempty" protobuf:"bytes,2,opt,name=region"`
	// CostPerMinute is the cost per minute in dollar of the machine class
	CostPerMinute *resource.Quantity `json:"costPerMinute,omitempty" protobuf:"bytes,3,opt,name=costPerMinute"`
	// CostSpot is the spot cost of the machine class
	CostSpot *resource.Quantity `json:"costSpot,omitempty" protobuf:"bytes,4,opt,name=costSpot"`
}

// CloudStatus defines the observed state of Cloud.
type CloudStatus struct {
	// Machine cost is the costs of
	MachineCosts []MachineClassCost `json:"machineCosts,omitempty" protobuf:"bytes,1,rep,name=machineCosts"`
	// CostSpot is the spot cost of the machine class
	GpuCosts []GpuClassCost `json:"gpuCosts,omitempty" protobuf:"bytes,2,rep,name=gpuCosts"`
}
