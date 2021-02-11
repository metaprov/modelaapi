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
#go build -o dist/protoc-gen-grpc-gateway ./vendor/github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
# protoc-gen-swagger is used to build swagger.json
#go build -o dist/protoc-gen-swagger ./vendor/github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger

# generate the api objects



#go build -o dist/protoc-gen-go ./vendor/github.com/golang/protobuf/protoc-gen-go

#go build -o protoc-gen-gogo ./vendor/github.com/gogo/protobuf/protoc-gen-gogo
#GOPROTOBINARY=protoc-gen-gogo
echo $PROJECT_ROOT
echo $GIT_ROOT
# Generate server/<service>/(<service>.pb.go|<service>.pb.gw.go)
PROTO_FILES=$(find $PROJECT_ROOT \( -name "*.proto" -and -path '*/services/*' -or -path '*/modeldapi/pkg/apis/*' -and -name "*.proto" \))

# generate the api objects
GOOGLE_PROTO_API_PATH=${PROJECT_ROOT}/common-protos
GOGO_PROTOBUF_PATH=${PROJECT_ROOT}/common-protos/github.com/gogo/protobuf


for i in ${PROTO_FILES}; do
     protoc \
        -I${PROJECT_ROOT} \
        -I/usr/local/include \
        -I$GOPATH/src \
        -I${GOOGLE_PROTO_API_PATH} \
        -I${GOGO_PROTOBUF_PATH} \
        --gogo_out=plugins=grpc:$GIT_ROOT \
        $i
        #--go_out=plugins=grpc:$GOPATH/src \

done

