#! /usr/bin/env bash

# This script auto-generates protobuf related files. It is intended to be run manually when either
# API types are added/modified, or server gRPC calls are added. The generated files should then
# be checked into source control.

set -x
set -o errexit
set -o nounset
set -o pipefail

PROJECT_ROOT=$(cd $(dirname ${BASH_SOURCE})/..; pwd)
CODEGEN_PKG=${CODEGEN_PKG:-$(cd ${PROJECT_ROOT}; ls -d -1 ./vendor/k8s.io/code-generator 2>/dev/null || echo ../code-generator)}
PATH="${PROJECT_ROOT}/dist:${PATH}"
GIT_ROOT=$(cd $(dirname ${BASH_SOURCE})/../../../../; pwd)

echo $PROJECT_ROOT
echo $GIT_ROOT
# Generate server/<service>/(<service>.pb.go|<service>.pb.gw.go)
PROTO_FILES=$(find $PROJECT_ROOT \( -name "*.proto" -and -path '*/pkg/apis/*' \))


GOOGLE_PROTO_API_PATH=${PROJECT_ROOT}/common-protos
GOGO_PROTOBUF_PATH=${PROJECT_ROOT}/common-protos/github.com/gogo/protobuf


go build -i -o dist/protoc-gen-gogofast ./vendor/github.com/gogo/protobuf/protoc-gen-gogofast
GOPROTOBINARY=gogofast

# generate the api objects
     protoc \
        --experimental_allow_proto3_optional \
        -I${PROJECT_ROOT}/../../.. \
        -I${PROJECT_ROOT} \
        -I/usr/local/include \
        -I$GOPATH/src \
        -I${GOOGLE_PROTO_API_PATH} \
        -I${GOGO_PROTOBUF_PATH} \
        --gofast_out=plugins=grpc:$GIT_ROOT \
         google/api/annotations.proto \
         google/api/http.proto \
         k8s.io/apimachinery/pkg/apis/meta/v1/generated.proto \
         k8s.io/apimachinery/pkg/util/intstr/generated.proto \
         k8s.io/api/core/v1/generated.proto \
         k8s.io/api/rbac/v1/generated.proto \
         k8s.io/apimachinery/pkg/api/resource/generated.proto \
         k8s.io/apimachinery/pkg/runtime/schema/generated.proto \
         k8s.io/apimachinery/pkg/runtime/generated.proto \
         github.com/gogo/protobuf/gogoproto/gogo.proto \
         github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated.proto 
        #--go_out=plugins=grpc:$GOPATH/src \
        # \

