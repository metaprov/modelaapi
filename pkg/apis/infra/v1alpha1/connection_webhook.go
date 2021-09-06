/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	corev1 "k8s.io/api/core/v1"
	v1 "k8s.io/api/core/v1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
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
			Namespace: "modela-system",
			Name:      "default-tenant",
		}
	}
	if connection.Spec.Category == nil {
		general := catalog.ConnectionCategoryGeneral
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
	case catalog.AliCloud:
		return connection.validateAliCloud(vars)
	case catalog.Bitbucket:
		return connection.validateBitBucket(vars)
	case catalog.Gitlab:
		return connection.validateGitLab(vars)
	case catalog.Hetzner:
		return connection.validateHetzner(vars)
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

	if !connection.varIncludes(vars, string(catalog.ApiKeyNameUsername)) || connection.varEmpty(vars, string(catalog.ApiKeyNameUsername)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.ApiKeyNameUsername)),
				"expected github user name value to be populated",
			),
		)
	}

	if !connection.varIncludes(vars, string(catalog.ApiKeyNameToken)) || connection.varEmpty(vars, string(catalog.ApiKeyNameToken)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.ApiKeyNameToken)),
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

	if !connection.varIncludes(vars, string(catalog.ApiKeyNameToken)) || connection.varEmpty(vars, string(catalog.ApiKeyNameToken)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.ApiKeyNameToken)),
				"expected slack token value to be populated",
			),
		)
	}

	if !connection.varIncludes(vars, string(catalog.ApiKeyNameUsername)) || connection.varEmpty(vars, string(catalog.ApiKeyNameUsername)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.ApiKeyNameUsername)),
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

	if !connection.varIncludes(vars, string(catalog.ApiKeyNameAccessKey)) || connection.varEmpty(vars, string(catalog.ApiKeyNameAccessKey)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.ApiKeyNameAccessKey)),
				"expected minio access key value to be populated",
			),
		)
	}

	if !connection.varIncludes(vars, string(catalog.ApiKeyNameSecretKey)) || connection.varEmpty(vars, string(catalog.ApiKeyNameSecretKey)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.ApiKeyNameSecretKey)),
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

	if !connection.varIncludes(vars, string(catalog.ApiKeyNameUsername)) || connection.varEmpty(vars, string(catalog.ApiKeyNameUsername)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.ApiKeyNameUsername)),
				"expected email user name value to be populated",
			),
		)
	}

	if !connection.varIncludes(vars, string(catalog.ApiKeyNamePassword)) || connection.varEmpty(vars, string(catalog.ApiKeyNamePassword)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.ApiKeyNamePassword)),
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

	if !connection.varIncludes(vars, string(catalog.ApiKeyNameAccessKey)) || connection.varEmpty(vars, string(catalog.ApiKeyNameAccessKey)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.ApiKeyNameAccessKey)),
				"expected aws access key value to be populated",
			),
		)
	}

	if !connection.varIncludes(vars, string(catalog.ApiKeyNameSecretKey)) || connection.varEmpty(vars, string(catalog.ApiKeyNameSecretKey)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.ApiKeyNameSecretKey)),
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

	if !connection.varIncludes(vars, string(catalog.ApiKeyNameAccessKey)) || connection.varEmpty(vars, string(catalog.ApiKeyNameAccessKey)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.ApiKeyNameAccessKey)),
				"expected digital ocean space access key value to be populated",
			),
		)
	}

	if !connection.varIncludes(vars, string(catalog.ApiKeyNameSecretKey)) || connection.varEmpty(vars, string(catalog.ApiKeyNameSecretKey)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.ApiKeyNameSecretKey)),
				"expected digital ocean secret key value to be populated",
			),
		)
	}
	if !connection.varIncludes(vars, string(catalog.ApiKeyNameToken)) || connection.varEmpty(vars, string(catalog.ApiKeyNameToken)) {
		allErrs = append(
			allErrs,
			field.Required(
				field.NewPath("secret", "values", string(catalog.ApiKeyNameToken)),
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
		schema.GroupKind{Group: "infra.modela.ai", Kind: "StorageConnection"},
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
