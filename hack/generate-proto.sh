#! /usr/bin/env bash

set -x
set -o errexit
set -o nounset
set -o pipefail

PROJECT_ROOT=$(cd $(dirname ${BASH_SOURCE})/..; pwd)
CODEGEN_PKG=${CODEGEN_PKG:-$(cd ${PROJECT_ROOT}; ls -d -1 ./vendor/k8s.io/code-generator 2>/dev/null || echo ../code-generator)}
PATH="${PROJECT_ROOT}/dist:${PATH}"

# protbuf tooling required to build .proto files from go annotations from k8s-like api types
##cd && GO111MODULE=on go get k8s.io/code-generator/cmd/go-to-protobuf@v0.20.2
##go install k8s.io/code-generator/cmd/go-to-protobuf/protoc-gen-gogo

PACKAGES=(
    github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1
    github.com/metaprov/modelaapi/pkg/apis/inference/v1alpha1
    github.com/metaprov/modelaapi/pkg/apis/training/v1alpha1
    github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1
    github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1
    github.com/metaprov/modelaapi/pkg/apis/team/v1alpha1
    )

APIMACHINERY_PKGS=(
    +k8s.io/apimachinery/pkg/util/intstr
    +k8s.io/apimachinery/pkg/api/resource
    +k8s.io/apimachinery/pkg/runtime/schema
    +k8s.io/apimachinery/pkg/runtime
    k8s.io/apimachinery/pkg/apis/meta/v1
    k8s.io/api/core/v1
    k8s.io/api/apps/v1
    k8s.io/api/rbac/v1
)

find  ${PROJECT_ROOT}/services -type f -name '*.pb.go' -delete

$GOPATH/bin/go-to-protobuf \
    --proto-import "${PROJECT_ROOT}/vendor,${PROJECT_ROOT}/common-protos" \
    --go-header-file ${PROJECT_ROOT}/hack/custom-boilerplate.go.txt \
     --packages=$(IFS=, ; echo "${PACKAGES[*]}") \
    --apimachinery-packages=$(IFS=, ; echo "${APIMACHINERY_PKGS[*]}") \

rm -rf /tmp/includes    
