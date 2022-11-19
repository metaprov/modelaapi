// +kubebuilder:object:generate=true
// +groupName=infra.modela.ai

package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/apis/infra"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	k8sruntime "k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/runtime"
	"k8s.io/client-go/kubernetes/scheme"
)

// SchemeGroupVersion is group version used to register these objects
var SchemeGroupVersion = schema.GroupVersion{Group: infra.GroupName, Version: "v1alpha1"}

// Kind takes an unqualified kind and returns back a Group qualified GroupKind
func Kind(kind string) schema.GroupKind {
	return SchemeGroupVersion.WithKind(kind).GroupKind()
}

// Resource takes an unqualified resource and returns a Group qualified GroupResource
func Resource(resource string) schema.GroupResource {
	return SchemeGroupVersion.WithResource(resource).GroupResource()
}

var (
	// SchemeBuilder registers our types
	SchemeBuilder = k8sruntime.NewSchemeBuilder(AddKnownTypes)
	// AddToScheme local alias for SchemeBuilder.AddToScheme
	AddToScheme = SchemeBuilder.AddToScheme
)

func init() {
	runtime.Must(AddToScheme(scheme.Scheme))
}

// Adds the list of known types to api.Scheme.
func AddKnownTypes(scheme *k8sruntime.Scheme) error {
	scheme.AddKnownTypes(SchemeGroupVersion,
		&Account{},
		&AccountList{},
		&ApiToken{},
		&ApiTokenList{},
		&Alert{},
		&AlertList{},
		&Attachment{},
		&AttachmentList{},
		&Commit{},
		&CommitList{},
		&ServingSite{},
		&ServingSiteList{},
		&Lab{},
		&LabList{},
		&VirtualBucket{},
		&VirtualBucketList{},
		&License{},
		&LicenseList{},
		&Connection{},
		&ConnectionList{},
		&ServingSite{},
		&ServingSiteList{},
		&Notifier{},
		&NotifierList{},
		&ModelaSystem{},
		&ModelaSystemList{},
		&Tenant{},
		&TenantList{},
		&UserRoleClass{},
		&UserRoleClassList{},
	)
	metav1.AddToGroupVersion(scheme, SchemeGroupVersion)
	return nil
}
