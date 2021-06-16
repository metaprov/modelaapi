package v1alpha1

import (
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// +kubebuilder:validation:Enum="last-24-hours";"last-7-days";"last-30-days";"last-90-days";"none"
type ReportRange string

const (
	ReportRangeLast24Hours ReportRange = "last-24-hours"
	ReportRangeLast7Days   ReportRange = "last-7-days"
	ReportRangeLast30Days  ReportRange = "last-30-days"
	ReportRangeLast90Days  ReportRange = "last-90-days"
	ReportRangeNone        ReportRange = "none"
)

// ReportTemplate Condition
type CronReportConditionType string

/// ReportTemplate Condition
const (
	CronReportReady CronReportConditionType = "Ready"
	CronReportSaved CronReportConditionType = "Saved"
)

// ReportCondition describes the state of ReportTemplate
type CronReportCondition struct {
	// Type of  condition.
	Type CronReportConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=CronReportConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Schedule",type="string",JSONPath=".spec.schedule"
// +kubebuilder:printcolumn:name="Last Run",type="date",JSONPath=".status.lastRun",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:resource:path=cronpredictions,shortName=cpred,singular=cronprediction,categories={inference,modeld}
// CronReport represents a run of the summary report.
type CronReport struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              CronReportSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            CronReportStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// CronReportList is a list of CronReport
type CronReportList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []CronReport `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type ReportTemplate struct {
	Spec ReportSpec `json:"spec" protobuf:"bytes,1,opt,name=spec"`
}

// CronReportSpec represent the desired state of CronReport
type CronReportSpec struct {
	// VersionName is the data product version of the data pipeline
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,2,opt,name=owner"`
	// Schedule is the cron schedule
	// Schedule for running the pipeline
	// +kubebuilder:validation:Optional
	Schedule *string `json:"schedule,omitempty" protobuf:"bytes,3,opt,name=schedule"`
	// +kubebuilder:default:=none
	// +kubebuilder:validation:Optional
	Range *ReportRange `json:"range,omitempty" protobuf:"bytes,4,opt,name=range"`
	// Template refer to the prediction template
	Template ReportTemplate `json:"template" protobuf:"bytes,5,opt,name=template"`
}

// CronReportStatus is the observed state of a ReportTemplate
type CronReportStatus struct {
	// Last run is the last time a run was created
	//+kubebuilder:validation:Optional
	LastRun *metav1.Time `json:"lastRun,omitempty" protobuf:"bytes,1,opt,name=lastRun"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,3,opt,name=observedGeneration"`
	// Conditions of the cron predictions
	//+kubebuilder:validation:Optional
	Conditions []CronReportCondition `json:"conditions,omitempty" protobuf:"bytes,4,rep,name=conditions"`
}
