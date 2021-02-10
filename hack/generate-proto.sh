#! /usr/bin/env bash

set -x
set -o errexit
set -o nounset
set -o pipefail

PROJECT_ROOT=$(cd $(dirname ${BASH_SOURCE})/..; pwd)
CODEGEN_PKG=${CODEGEN_PKG:-$(cd ${PROJECT_ROOT}; ls -d -1 ./vendor/k8s.io/code-generator 2>/dev/null || echo ../code-generator)}
PATH="${PROJECT_ROOT}/dist:${PATH}"




#go build -o dist/go-to-protobuf ./vendor/k8s.io/code-generator/cmd/go-to-protobuf
#go build -o dist/protoc-gen-gogo ./vendor/k8s.io/code-generator/cmd/go-to-protobuf/protoc-gen-gogo

PACKAGES=(
    github.com/metaprov/modeld/pkg/apis/infra/v1alpha1
    github.com/metaprov/modeld/pkg/apis/inference/v1alpha1
    github.com/metaprov/modeld/pkg/apis/training/v1alpha1
    github.com/metaprov/modeld/pkg/apis/data/v1alpha1
    github.com/metaprov/modeld/pkg/apis/catalog/v1alpha1
    github.com/metaprov/modeld/pkg/apis/team/v1alpha1
    )

APIMACHINERY_PKGS=(
    +k8s.io/apimachinery/pkg/util/intstr
    +k8s.io/apimachinery/pkg/api/resource
    +k8s.io/apimachinery/pkg/runtime/schema
    +k8s.io/apimachinery/pkg/runtime
    k8s.io/apimachinery/pkg/apis/meta/v1
    k8s.io/api/core/v1
    k8s.io/api/rbac/v1
)

go-to-protobuf \
    --go-header-file=${PROJECT_ROOT}/hack/custom-boilerplate.go.txt \
    --packages=$(IFS=, ; echo "${PACKAGES[*]}") \
    --apimachinery-packages=$(IFS=, ; echo "${APIMACHINERY_PKGS[*]}") \
    --proto-import=${PROJECT_ROOT}/common-protos
