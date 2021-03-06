#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail

PROJECT_ROOT=$(cd $(dirname ${BASH_SOURCE})/..; pwd)
ROOT_PKG=github.com/metaprov/modeldapi

verify="${VERIFY:-}"

set -x

#Gen client
$GOPATH/bin/client-gen \
  --clientset-name versioned \
  --input-base "${ROOT_PKG}/pkg/apis/" \
  --input "catalog/v1alpha1" \
  --input "data/v1alpha1" \
  --input "inference/v1alpha1" \
  --input "infra/v1alpha1" \
  --input "team/v1alpha1" \
  --input "training/v1alpha1" \
  --output-package "${ROOT_PKG}/pkg/client/clientset" \
  --go-header-file hack/custom-boilerplate.go.txt

# Gen lister
$GOPATH/bin/lister-gen \
  --input-dirs "${ROOT_PKG}/pkg/apis/catalog/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/data/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/inference/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/infra/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/team/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/training/v1alpha1" \
  --output-package "${ROOT_PKG}/pkg/client/listers" \
  --go-header-file hack/custom-boilerplate.go.txt

# Gen informer
$GOPATH/bin/informer-gen \
  --input-dirs "${ROOT_PKG}/pkg/apis/catalog/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/data/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/inference/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/infra/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/team/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/training/v1alpha1" \
  --versioned-clientset-package "${ROOT_PKG}/pkg/client/clientset/versioned" \
  --listers-package "${ROOT_PKG}/pkg/client/listers" \
  --output-package "${ROOT_PKG}/pkg/client/informers" \
  --go-header-file hack/custom-boilerplate.go.txt


#$GOPATH/bin/deepcopy-gen \
#  --input-dirs "${ROOT_PKG}/pkg/apis/catalog/v1alpha1" \
#  --input-dirs "${ROOT_PKG}/pkg/apis/data/v1alpha1" \
#  --input-dirs "${ROOT_PKG}/pkg/apis/inference/v1alpha1" \
#  --input-dirs "${ROOT_PKG}/pkg/apis/infra/v1alpha1" \
#  --input-dirs "${ROOT_PKG}/pkg/apis/team/v1alpha1" \
#  --input-dirs "${ROOT_PKG}/pkg/apis/training/v1alpha1" \
#  -O zz_generated.deepcopy \
#  --go-header-file hack/custom-boilerplate.go.txt

# Generate conversation
$GOPATH/bin/conversion-gen  \
  --input-dirs "${ROOT_PKG}/pkg/apis/catalog/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/data/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/inference/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/infra/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/team/v1alpha1" \
  --input-dirs "${ROOT_PKG}/pkg/apis/training/v1alpha1" \
  -O zz_generated.conversion \
  --go-header-file hack/custom-boilerplate.go.txt

#$GOPATH/bin/openapi-gen  \
#  --input-dirs "${ROOT_PKG}/pkg/apis/catalog/v1alpha1" \
#  --input-dirs "${ROOT_PKG}/pkg/apis/data/v1alpha1" \
#  --input-dirs "${ROOT_PKG}/pkg/apis/inference/v1alpha1" \
#  --input-dirs "${ROOT_PKG}/pkg/apis/infra/v1alpha1" \
#  --input-dirs "${ROOT_PKG}/pkg/apis/team/v1alpha1" \
#  --input-dirs "${ROOT_PKG}/pkg/apis/training/v1alpha1" \
#  --input-dirs "k8s.io/apimachinery/pkg/apis/meta/v1,k8s.io/apimachinery/pkg/runtime,k8s.io/apimachinery/pkg/util/intstr" \
#  --input-dirs "k8s.io/api/core/v1" \
#  --output-package "${ROOT_PKG}/pkg/apiserver/openapi" \
#  -O zz_generated.openapi \
#  --go-header-file hack/custom-boilerplate.go.txt

  