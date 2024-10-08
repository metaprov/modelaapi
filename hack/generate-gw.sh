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
PROTO_FILES=$(find $PROJECT_ROOT \( -name "*.proto" -and -not -path */gen/* -and -path '*/services/*' -or -path '*/pkg/apis/*' -and -not -path */gen/* -and -name "*.proto" \))

# generate the api objects
GOOGLE_PROTO_API_PATH=${PROJECT_ROOT}/common-protos
GOGO_PROTOBUF_PATH=${PROJECT_ROOT}/common-protos/github.com/gogo/protobuf


#for i in ${PROTO_FILES}; do
#     protoc \
#        -I${PROJECT_ROOT} \
#        -I/usr/local/include \
#        -I${PROJECT_ROOT}/hack \
#        -I${PROJECT_ROOT}/hack/gen \
#        -I${GOOGLE_PROTO_API_PATH} \
#        -I${GOGO_PROTOBUF_PATH} \
#        --grpc-gateway_out=logtostderr=true,allow_delete_body=true:${PROJECT_ROOT} \
#        $i
#        #--go_out=plugins=grpc:$GOPATH/src \
#
#done


#rsync -av gateway/github.com/metaprov/modelaapi/services/* services/

protoc \
        -I${PROJECT_ROOT}/../../.. \
        -I${PROJECT_ROOT} \
        -I${PROJECT_ROOT}/vendor \
        -I${GOOGLE_PROTO_API_PATH} \
        -I$GOPATH/src \
        -I${GOGO_PROTOBUF_PATH} \
        --grpc-gateway_out=paths=source_relative,logtostderr=true,allow_delete_body=true:${GIT_ROOT} \
         google/api/annotations.proto \
         google/api/http.proto \
         k8s.io/apimachinery/pkg/apis/meta/v1/generated.proto \
         k8s.io/apimachinery/pkg/util/intstr/generated.proto \
         k8s.io/api/core/v1/generated.proto \
         k8s.io/api/apps/v1/generated.proto \
         k8s.io/api/rbac/v1/generated.proto \
         k8s.io/apimachinery/pkg/api/resource/generated.proto \
         k8s.io/apimachinery/pkg/runtime/schema/generated.proto \
         k8s.io/apimachinery/pkg/runtime/generated.proto \
         github.com/gogo/protobuf/gogoproto/gogo.proto \
         github.com/metaprov/modelaapi/services/common/v1/common.proto \
         github.com/metaprov/modelaapi/services/grpc/health/v1/health.proto \
         github.com/metaprov/modelaapi/services/account/v1/account.proto \
         github.com/metaprov/modelaapi/services/userroleclass/v1/userroleclass.proto \
         github.com/metaprov/modelaapi/services/alert/v1/alert.proto \
         github.com/metaprov/modelaapi/services/attachment/v1/attachment.proto \
         github.com/metaprov/modelaapi/services/todo/v1/todo.proto \
         github.com/metaprov/modelaapi/services/fileservices/v1/fileservices.proto \
         github.com/metaprov/modelaapi/services/modelasystem/v1/modelasystem.proto \
         github.com/metaprov/modelaapi/services/catalog/v1/catalog.proto \
         github.com/metaprov/modelaapi/services/cloudproxyd/v1/cloudproxyd.proto \
         github.com/metaprov/modelaapi/services/batchpredictord/v1/batchpredictord.proto \
         github.com/metaprov/modelaapi/services/connection/v1/connection.proto \
         github.com/metaprov/modelaapi/services/data/v1/data.proto \
         github.com/metaprov/modelaapi/services/datapipeline/v1/datapipeline.proto \
         github.com/metaprov/modelaapi/services/datapipelinerun/v1/datapipelinerun.proto \
         github.com/metaprov/modelaapi/services/dataproduct/v1/dataproduct.proto \
         github.com/metaprov/modelaapi/services/dataset/v1/dataset.proto \
         github.com/metaprov/modelaapi/services/datasetsnapshot/v1/datasetsnapshot.proto \
         github.com/metaprov/modelaapi/services/datasource/v1/datasource.proto \
         github.com/metaprov/modelaapi/services/dataapp/v1/dataapp.proto \
         github.com/metaprov/modelaapi/services/entity/v1/entity.proto \
         github.com/metaprov/modelaapi/services/featurehistogram/v1/featurehistogram.proto \
         github.com/metaprov/modelaapi/services/featuregroup/v1/featuregroup.proto \
         github.com/metaprov/modelaapi/services/k8score/v1/k8score.proto \
         github.com/metaprov/modelaapi/services/lab/v1/lab.proto \
         github.com/metaprov/modelaapi/services/license/v1/license.proto \
         github.com/metaprov/modelaapi/services/model/v1/model.proto \
         github.com/metaprov/modelaapi/services/modelclass/v1/modelclass.proto \
         github.com/metaprov/modelaapi/services/modelclassrun/v1/modelclassrun.proto \
         github.com/metaprov/modelaapi/services/notifier/v1/notifier.proto \
         github.com/metaprov/modelaapi/services/objectstored/v1/objectstored.proto \
         github.com/metaprov/modelaapi/services/onlinefeaturestored/v1/onlinefeaturestored.proto \
         github.com/metaprov/modelaapi/services/offlinefeaturestored/v1/offlinefeaturestored.proto \
         github.com/metaprov/modelaapi/services/postmortem/v1/postmortem.proto \
         github.com/metaprov/modelaapi/services/review/v1/review.proto \
         github.com/metaprov/modelaapi/services/runbook/v1/runbook.proto \
         github.com/metaprov/modelaapi/services/prediction/v1/prediction.proto \
         github.com/metaprov/modelaapi/services/predictionrun/v1/predictionrun.proto \
         github.com/metaprov/modelaapi/services/predictionstore/v1/predictionstore.proto \
         github.com/metaprov/modelaapi/services/grpcinferenceservice/v1/grpcinferenceservice.proto \
         github.com/metaprov/modelaapi/services/predictor/v1/predictor.proto \
         github.com/metaprov/modelaapi/services/publisherd/v1/publisherd.proto \
         github.com/metaprov/modelaapi/services/recipe/v1/recipe.proto \
         github.com/metaprov/modelaapi/services/reciperun/v1/reciperun.proto \
         github.com/metaprov/modelaapi/services/report/v1/report.proto \
         github.com/metaprov/modelaapi/services/servingsite/v1/servingsite.proto \
         github.com/metaprov/modelaapi/services/study/v1/study.proto \
         github.com/metaprov/modelaapi/services/studyrun/v1/studyrun.proto \
         github.com/metaprov/modelaapi/services/tenant/v1/tenant.proto \
         github.com/metaprov/modelaapi/services/trainerd/v1/trainerd.proto \
         github.com/metaprov/modelaapi/services/virtualbucket/v1/virtualbucket.proto \
         github.com/metaprov/modelaapi/services/watcherd/v1/watcherd.proto \

