/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by client-gen. DO NOT EDIT.

package v1alpha1

import (
	v1alpha1 "github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1"
	"github.com/metaprov/modeldapi/pkg/client/clientset/versioned/scheme"
	rest "k8s.io/client-go/rest"
)

type InfraV1alpha1Interface interface {
	RESTClient() rest.Interface
	AccountsGetter
	ConnectionsGetter
	LabsGetter
	LicensesGetter
	NotifiersGetter
	ServingSitesGetter
	TenantsGetter
	VirtualBucketsGetter
	VirtualClustersGetter
	VirtualVolumesGetter
}

// InfraV1alpha1Client is used to interact with features provided by the infra.modeld.io group.
type InfraV1alpha1Client struct {
	restClient rest.Interface
}

func (c *InfraV1alpha1Client) Accounts(namespace string) AccountInterface {
	return newAccounts(c, namespace)
}

func (c *InfraV1alpha1Client) Connections(namespace string) ConnectionInterface {
	return newConnections(c, namespace)
}

func (c *InfraV1alpha1Client) Labs(namespace string) LabInterface {
	return newLabs(c, namespace)
}

func (c *InfraV1alpha1Client) Licenses(namespace string) LicenseInterface {
	return newLicenses(c, namespace)
}

func (c *InfraV1alpha1Client) Notifiers(namespace string) NotifierInterface {
	return newNotifiers(c, namespace)
}

func (c *InfraV1alpha1Client) ServingSites(namespace string) ServingSiteInterface {
	return newServingSites(c, namespace)
}

func (c *InfraV1alpha1Client) Tenants(namespace string) TenantInterface {
	return newTenants(c, namespace)
}

func (c *InfraV1alpha1Client) VirtualBuckets(namespace string) VirtualBucketInterface {
	return newVirtualBuckets(c, namespace)
}

func (c *InfraV1alpha1Client) VirtualClusters(namespace string) VirtualClusterInterface {
	return newVirtualClusters(c, namespace)
}

func (c *InfraV1alpha1Client) VirtualVolumes(namespace string) VirtualVolumeInterface {
	return newVirtualVolumes(c, namespace)
}

// NewForConfig creates a new InfraV1alpha1Client for the given config.
func NewForConfig(c *rest.Config) (*InfraV1alpha1Client, error) {
	config := *c
	if err := setConfigDefaults(&config); err != nil {
		return nil, err
	}
	client, err := rest.RESTClientFor(&config)
	if err != nil {
		return nil, err
	}
	return &InfraV1alpha1Client{client}, nil
}

// NewForConfigOrDie creates a new InfraV1alpha1Client for the given config and
// panics if there is an error in the config.
func NewForConfigOrDie(c *rest.Config) *InfraV1alpha1Client {
	client, err := NewForConfig(c)
	if err != nil {
		panic(err)
	}
	return client
}

// New creates a new InfraV1alpha1Client for the given RESTClient.
func New(c rest.Interface) *InfraV1alpha1Client {
	return &InfraV1alpha1Client{c}
}

func setConfigDefaults(config *rest.Config) error {
	gv := v1alpha1.SchemeGroupVersion
	config.GroupVersion = &gv
	config.APIPath = "/apis"
	config.NegotiatedSerializer = scheme.Codecs.WithoutConversion()

	if config.UserAgent == "" {
		config.UserAgent = rest.DefaultKubernetesUserAgent()
	}

	return nil
}

// RESTClient returns a RESTClient that is used to communicate
// with API server by this client implementation.
func (c *InfraV1alpha1Client) RESTClient() rest.Interface {
	if c == nil {
		return nil
	}
	return c.restClient
}
