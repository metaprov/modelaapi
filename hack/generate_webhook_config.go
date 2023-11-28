package main

import (
	"fmt"
	"gopkg.in/yaml.v3"
	"io"
	"os"
	"path/filepath"
	"strings"
)

type Webhook struct {
	APIVersion string     `yaml:"apiVersion"`
	Kind       string     `yaml:"kind"`
	Metadata   Metadata   `yaml:"metadata"`
	Webhooks   []Webhooks `yaml:"webhooks"`
}
type Annotations struct {
	CertManagerIoInjectCaFrom string `yaml:"cert-manager.io/inject-ca-from"`
}
type Metadata struct {
	Name        string      `yaml:"name"`
	Namespace   string      `yaml:"namespace"`
	Annotations Annotations `yaml:"annotations"`
}
type Rules struct {
	APIGroups   []string `yaml:"apiGroups"`
	APIVersions []string `yaml:"apiVersions"`
	Operations  []string `yaml:"operations"`
	Resources   []string `yaml:"resources"`
}
type Service struct {
	Namespace string `yaml:"namespace"`
	Name      string `yaml:"name"`
	Path      string `yaml:"path"`
}
type ClientConfig struct {
	Service  Service `yaml:"service"`
	CaBundle string  `yaml:"caBundle"`
}
type Webhooks struct {
	Name                    string       `yaml:"name"`
	FailurePolicy           string       `yaml:"failurePolicy"`
	SideEffects             string       `yaml:"sideEffects"`
	TimeoutSeconds          int          `yaml:"timeoutSeconds"`
	AdmissionReviewVersions []string     `yaml:"admissionReviewVersions"`
	Rules                   []Rules      `yaml:"rules"`
	ClientConfig            ClientConfig `yaml:"clientConfig"`
}

func main() {
	path, err := filepath.Abs("./manifests")
	if err != nil {
		panic(err)
	}

	type resource struct {
		name     string
		plural   string
		singular string
	}
	var groupToResources = make(map[string]map[string][]resource)

	err = filepath.Walk(path, func(path string, f os.FileInfo, err error) error {
		if !strings.HasSuffix(path, ".yaml") {
			return nil
		}
		file, err := os.OpenFile(path, os.O_RDONLY, 0666)
		if err != nil {
			fmt.Printf("path %s failed with error %v\n", path, err)
			return nil
		}

		data, err := io.ReadAll(file)
		if err != nil {
			fmt.Printf("path %s failed with error %v\n", path, err)
			return nil
		}

		values := make(map[interface{}]interface{})
		err = yaml.Unmarshal(data, &values)
		if err != nil {
			fmt.Printf("path %s failed with error %v\n", path, err)
			return nil
		}

		pathItems := strings.Split(path, "/")
		version := pathItems[len(pathItems)-4]

		if values["spec"] == nil {
			fmt.Printf("path %s has no spec\n", path)
			return nil
		}
		spec := values["spec"].(map[string]interface{})
		names := spec["names"].(map[string]interface{})
		metadata := values["metadata"].(map[string]interface{})
		group := spec["group"].(string)
		name := metadata["name"].(string)
		if _, ok := groupToResources[version]; !ok {
			groupToResources[version] = make(map[string][]resource)
		}
		groupToResources[version][group] = append(groupToResources[version][group], resource{
			name:     name,
			plural:   names["plural"].(string),
			singular: names["singular"].(string),
		})
		return nil
	})

	for version, data := range groupToResources {
		var validationWebhook = ""
		var mutationWebhook = ""

		for group, resources := range data {
			groupName := strings.Split(group, ".")[0]
			if groupName == "catalog" {
				continue
			}
			var webhooks []Webhooks
			for _, resource := range resources {
				webhooks = append(webhooks, Webhooks{
					Name:                    resource.name,
					FailurePolicy:           "Fail",
					SideEffects:             "None",
					TimeoutSeconds:          5,
					AdmissionReviewVersions: []string{"v1"},
					Rules: []Rules{
						{
							APIGroups:   []string{group},
							APIVersions: []string{version},
							Operations:  []string{"CREATE", "UPDATE"},
							Resources:   []string{resource.plural},
						},
					},
					ClientConfig: ClientConfig{
						Service: Service{
							Namespace: "modela-system",
							Name:      "modela-control-plane-webhook",
							Path:      fmt.Sprintf("/validate-%s-modela-ai-v1alpha1-%s", groupName, resource.singular),
						},
						CaBundle: "CERT",
					},
				})
			}
			mutatingWebhook := Webhook{
				APIVersion: "admissionregistration.k8s.io/v1",
				Kind:       "MutatingWebhookConfiguration",
				Metadata: Metadata{
					Name:        fmt.Sprintf("%s-mutating-webhook-configuration-%s", groupName, version),
					Namespace:   "modela-system",
					Annotations: Annotations{CertManagerIoInjectCaFrom: "modela-system/serving-cert"},
				},
				Webhooks: webhooks,
			}
			raw, err := yaml.Marshal(mutatingWebhook)
			if err != nil {
				panic(err)
			}
			mutationWebhook += string(raw) + "---\n"

			validatingWebhook := Webhook{
				APIVersion: "admissionregistration.k8s.io/v1",
				Kind:       "ValidatingWebhookConfiguration",
				Metadata: Metadata{
					Name:        fmt.Sprintf("%s-validating-webhook-configuration-%s", groupName, version),
					Namespace:   "modela-system",
					Annotations: Annotations{CertManagerIoInjectCaFrom: "modela-system/serving-cert"},
				},
				Webhooks: webhooks,
			}
			raw, err = yaml.Marshal(validatingWebhook)
			if err != nil {
				panic(err)
			}

			validationWebhook += string(raw) + "---\n"
		}

		path, err := filepath.Abs(fmt.Sprintf("./manifests/%s/base/webhook", version))
		if err != nil {
			panic(err)
		}
		if err = os.MkdirAll(path, 0777); err != nil {
			panic(err)
		}
		err = os.WriteFile(path+"/webhook-mutation-configuration.yaml", []byte(mutationWebhook), 0777)
		if err != nil {
			panic(err)
		}

		err = os.WriteFile(path+"/webhook-validation-configuration.yaml", []byte(validationWebhook), 0777)
		if err != nil {
			panic(err)
		}
	}
	if err != nil {
		panic(err)
	}
}
