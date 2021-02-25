/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modeldapi/pkg/util"
	corev1 "k8s.io/api/core/v1"
	v1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	meta_v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &Connection{}

// No defaults for the current configuration
func (connection *Connection) Default() {
	if connection.Spec.TenantRef == nil {
		connection.Spec.TenantRef = &corev1.ObjectReference{
			Namespace: "modeld-system",
			Name:      "default-tenant",
		}
	}
	if connection.Spec.Category == nil {
		general := catalog.General
		connection.Spec.Category = &general
	}

}

// validation
var _ webhook.Validator = &Connection{}

func (connection *Connection) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(connection).
		Complete()
}

func (connection *Connection) ValidateSecret(s *v1.Secret) field.ErrorList {
	return connection.validateSecret(s.StringData)
}

// create a new secret based on secret fields.
// currently we place all the fields in the connection.
func (connection *Connection) CreateSecret() *v1.Secret {
	secretName := connection.Name
	if *connection.Spec.SecretName != "" {
		secretName = *connection.Spec.SecretName
	}
	result := &v1.Secret{
		ObjectMeta: meta_v1.ObjectMeta{
			Name:      secretName,
			Namespace: connection.Namespace,
		},
	}
	fields := make(map[string]string)
	switch *connection.Spec.Provider {
	case catalog.Aws:
		fields[string(catalog.AccessKey)] = *connection.Spec.Aws.AccessKey
		fields[string(catalog.SecretKey)] = *connection.Spec.Aws.SecretKey
	case catalog.Minio:
		fields[string(catalog.AccessKey)] = *connection.Spec.Minio.AccessKey
		fields[string(catalog.SecretKey)] = *connection.Spec.Minio.SecretKey
	case catalog.DigitalOcean:
		fields[string(catalog.AccessKey)] = *connection.Spec.DigitalOcean.AccessKey
		fields[string(catalog.SecretKey)] = *connection.Spec.DigitalOcean.SecretKey
		fields[string(catalog.Token)] = *connection.Spec.DigitalOcean.Token
	case catalog.Gcp:
		fields[string(catalog.KeyFile)] = *connection.Spec.GcpStorage.KeyFile
	case catalog.Azure:
		fields[string(catalog.AccessKey)] = *connection.Spec.AzureStorage.AccessKey
	case catalog.SmtpProvider:
		fields[string(catalog.Host)] = *connection.Spec.Smtp.Host
		fields[string(catalog.Port)] = util.ItoA(connection.Spec.Smtp.Port)
		fields[string(catalog.Username)] = *connection.Spec.Smtp.Username
		fields[string(catalog.Password)] = *connection.Spec.Smtp.Password
	case catalog.Slack:
		fields[string(catalog.Username)] = *connection.Spec.Slack.Username
		fields[string(catalog.Token)] = *connection.Spec.Slack.Token
	case catalog.ImageRegistry:
		fields[string(catalog.Host)] = *connection.Spec.ImageRegistry.Host
		fields[string(catalog.Username)] = *connection.Spec.ImageRegistry.Username
		fields[string(catalog.Password)] = *connection.Spec.ImageRegistry.Password
	}
	result.StringData = fields
	return result

}

// ask the connection to mask secret fields based on the type of the connection
func (connection *Connection) MaskSecretFields() {
	hiddenPtr := util.StrPtr("[hidden]")
	switch *connection.Spec.Provider {
	case catalog.Aws:
		connection.Spec.Aws.AccessKey = hiddenPtr
		connection.Spec.Aws.SecretKey = hiddenPtr
	case catalog.DigitalOcean:
		connection.Spec.DigitalOcean.AccessKey = hiddenPtr
		connection.Spec.DigitalOcean.SecretKey = hiddenPtr
		connection.Spec.DigitalOcean.Token = hiddenPtr
	case catalog.Gcp:
		connection.Spec.GcpStorage.KeyFile = hiddenPtr
	case catalog.Azure:
		connection.Spec.AzureStorage.AccessKey = hiddenPtr
	case catalog.Minio:
		connection.Spec.Minio.AccessKey = hiddenPtr
		connection.Spec.Minio.SecretKey = hiddenPtr
	case catalog.SmtpProvider:
		connection.Spec.Smtp.Password = hiddenPtr
	case catalog.Slack:
		connection.Spec.Slack.Token = hiddenPtr
	case catalog.ImageRegistry:
		connection.Spec.ImageRegistry.Password = hiddenPtr
	}
}

func (connection *Connection) validateSecret(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	switch *connection.Spec.Provider {
	case catalog.UnknownProvider:
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", "unknown provider"),
				"provider must be specidied",
			),
		)
		return allErrs
	case catalog.Aws:
		return connection.validateAws(vars)
	case catalog.DigitalOcean:
		return connection.validateDo(vars)
	case catalog.Gcp:
		return connection.validateGcp(vars)
	case catalog.Azure:
		return connection.validateAzure(vars)
	case catalog.SmtpProvider:
		return connection.validateEmailProvider(vars)
	case catalog.Slack:
		return connection.validateSlack(vars)
	case catalog.GitHub:
		return connection.validateGithub(vars)
	case catalog.ImageRegistry:
		return connection.validateDockerReg(vars)
	case catalog.License:
		return connection.validateLicense(vars)
	case catalog.AliCloud:
		return connection.validateAliCloud(vars)
	case catalog.Bitbucket:
		return connection.validateBitBucket(vars)
	case catalog.Gitlab:
		return connection.validateGitLab(vars)
	case catalog.Hetzner:
		return connection.validateHetzner(vars)
	case catalog.LocalMachine:
		return connection.validateLocalMachine(vars)
	case catalog.Openstack:
		return connection.validateOpenstack(vars)
	case catalog.Ovh:
		return connection.validateOvh(vars)
	case catalog.Minio:
		return connection.validateMinio(vars)
	default:

	}

	return nil

}

func (connection *Connection) validateAzure(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) validateGcp(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) validateDockerReg(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) validateGithub(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList

	if !connection.varIncludes(vars, string(catalog.Username)) || connection.varEmpty(vars, string(catalog.Username)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.Username)),
				"expected github user name value to be populated",
			),
		)
	}

	if !connection.varIncludes(vars, string(catalog.Token)) || connection.varEmpty(vars, string(catalog.Token)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.Token)),
				"expected github token to be populated",
			),
		)
	}

	if len(allErrs) == 0 {
		return nil
	}

	return allErrs
}

func (connection *Connection) validateSlack(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList

	if !connection.varIncludes(vars, string(catalog.Token)) || connection.varEmpty(vars, string(catalog.Token)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.Token)),
				"expected slack token value to be populated",
			),
		)
	}

	if !connection.varIncludes(vars, string(catalog.Username)) || connection.varEmpty(vars, string(catalog.Username)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.Username)),
				"expected slack user name to be populated",
			),
		)
	}

	if len(allErrs) == 0 {
		return nil
	}

	return allErrs

}

func (connection *Connection) validateMinio(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList

	if !connection.varIncludes(vars, string(catalog.AccessKey)) || connection.varEmpty(vars, string(catalog.AccessKey)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.AccessKey)),
				"expected minio access key value to be populated",
			),
		)
	}

	if !connection.varIncludes(vars, string(catalog.SecretKey)) || connection.varEmpty(vars, string(catalog.SecretKey)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.SecretKey)),
				"expected minio secret key to be populated",
			),
		)
	}

	if len(allErrs) == 0 {
		return nil
	}

	return allErrs

}

func (connection *Connection) validateEmailProvider(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList

	if !connection.varIncludes(vars, string(catalog.Username)) || connection.varEmpty(vars, string(catalog.Username)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.Username)),
				"expected email user name value to be populated",
			),
		)
	}

	if !connection.varIncludes(vars, string(catalog.Password)) || connection.varEmpty(vars, string(catalog.Password)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.Password)),
				"expected email password value to be populated",
			),
		)
	}

	if len(allErrs) == 0 {
		return nil
	}

	return allErrs
}

func (connection *Connection) validateAws(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList

	if !connection.varIncludes(vars, string(catalog.AccessKey)) || connection.varEmpty(vars, string(catalog.AccessKey)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.AccessKey)),
				"expected aws access key value to be populated",
			),
		)
	}

	if !connection.varIncludes(vars, string(catalog.SecretKey)) || connection.varEmpty(vars, string(catalog.SecretKey)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.SecretKey)),
				"expected was secret key value to be populated",
			),
		)
	}

	if len(allErrs) == 0 {
		return nil
	}

	return allErrs

}

// Validat digital ocean
func (connection *Connection) validateDo(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList

	if !connection.varIncludes(vars, string(catalog.AccessKey)) || connection.varEmpty(vars, string(catalog.AccessKey)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.AccessKey)),
				"expected digital ocean space access key value to be populated",
			),
		)
	}

	if !connection.varIncludes(vars, string(catalog.SecretKey)) || connection.varEmpty(vars, string(catalog.SecretKey)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.SecretKey)),
				"expected digital ocean secret key value to be populated",
			),
		)
	}
	if !connection.varIncludes(vars, string(catalog.Token)) || connection.varEmpty(vars, string(catalog.Token)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.Token)),
				"expected digital ocean token key value to be populated",
			),
		)
	}

	if len(allErrs) == 0 {
		return nil
	}

	return allErrs
}

func (connection *Connection) ValidateCreate() error {
	return connection.validate()
}

func (connection *Connection) ValidateUpdate(old runtime.Object) error {
	return connection.validate()
}

func (connection *Connection) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "infra.modeld.io", Kind: "StorageConnection"},
		connection.Name, allErrs)
}

func (connection *Connection) validateConnectionSpec() field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) ValidateDelete() error {
	return nil
}

func (connection *Connection) validateUserAccount(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) validateLicense(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) validateAliCloud(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) validatePostgress(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) validateBitBucket(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) validateGitLab(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) validateHetzner(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) validateLocalMachine(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) validateOpenstack(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) validateOvh(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) validateDockerHub(vars map[string]string) field.ErrorList {
	var allErrs field.ErrorList
	return allErrs
}

func (connection *Connection) varIncludes(vars map[string]string, name string) bool {
	_, ok := vars[name]
	return ok
}

func (connection *Connection) varEmpty(vars map[string]string, name string) bool {
	return vars[name] == ""
}
