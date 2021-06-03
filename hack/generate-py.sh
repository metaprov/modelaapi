#! /usr/bin/env bash

# This script auto-generates protobuf related files. It is intended to be run manually when either
# API types are added/modified, or server gRPC calls are added. The generated files should then
# be checked into source control.

set -x
set -o errexit
set -o nounset
set -o pipefail

PROJECT_ROOT=$(cd $(dirname ${BASH_SOURCE})/..; pwd)

#rm -rf ${PROJECT_ROOT}/lang/python/github.com
#rm -rf ${PROJECT_ROOT}/lang/python/github
#rm -rf ${PROJECT_ROOT}/lang/python/google
#rm -rf ${PROJECT_ROOT}/lang/python/k8s
#rm -rf ${PROJECT_ROOT}/lang/python/k8s.io



# Generate the grpc first, since it would be generated under github.com and not github/com
python3 -m pip install grpcio-tools

python3 -m grpc_tools.protoc \
    -I${PROJECT_ROOT}/../../.. \
    -I${PROJECT_ROOT}/pkg \
    -I${PROJECT_ROOT}/common-protos \
    -I${PROJECT_ROOT}/common-protos/github.com/gogo/protobuf \
    --grpc_python_out=${PROJECT_ROOT}/lang/python \
    --python_out=${PROJECT_ROOT}/lang/python \
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
    github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated.proto \
    github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated.proto \
    github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated.proto \
    github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated.proto \
    github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1/generated.proto \
    github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1/generated.proto \
    github.com/metaprov/modeldapi/services/account/v1/account.proto \
    github.com/metaprov/modeldapi/services/apitoken/v1/apitoken.proto \
    github.com/metaprov/modeldapi/services/alert/v1/alert.proto \
    github.com/metaprov/modeldapi/services/taskcard/v1/taskcard.proto \
    github.com/metaprov/modeldapi/services/commit/v1/commit.proto \
    github.com/metaprov/modeldapi/services/modeldsystem/v1/modeldsystem.proto \
    github.com/metaprov/modeldapi/services/dbproxyd/v1/dbproxyd.proto \
    github.com/metaprov/modeldapi/services/catalog/v1/catalog.proto \
    github.com/metaprov/modeldapi/services/cloudproxyd/v1/cloudproxyd.proto \
    github.com/metaprov/modeldapi/services/common/v1/common.proto \
    github.com/metaprov/modeldapi/services/connection/v1/connection.proto \
    github.com/metaprov/modeldapi/services/conversation/v1/conversation.proto \
    github.com/metaprov/modeldapi/services/curtain/v1/curtain.proto \
    github.com/metaprov/modeldapi/services/data/v1/data.proto \
    github.com/metaprov/modeldapi/services/datapipeline/v1/datapipeline.proto \
    github.com/metaprov/modeldapi/services/datapipelinerun/v1/datapipelinerun.proto \
    github.com/metaprov/modeldapi/services/dataproduct/v1/dataproduct.proto \
    github.com/metaprov/modeldapi/services/dataproductversion/v1/dataproductversion.proto \
    github.com/metaprov/modeldapi/services/dataset/v1/dataset.proto \
    github.com/metaprov/modeldapi/services/datasource/v1/datasource.proto \
    github.com/metaprov/modeldapi/services/entity/v1/entity.proto \
    github.com/metaprov/modeldapi/services/feature/v1/feature.proto \
    github.com/metaprov/modeldapi/services/featurepipeline/v1/featurepipeline.proto \
    github.com/metaprov/modeldapi/services/featurepipelinerun/v1/featurepipelinerun.proto \
    github.com/metaprov/modeldapi/services/featureset/v1/featureset.proto \
    github.com/metaprov/modeldapi/services/k8score/v1/k8score.proto \
    github.com/metaprov/modeldapi/services/lab/v1/lab.proto \
    github.com/metaprov/modeldapi/services/labelingpipeline/v1/labelingpipeline.proto \
    github.com/metaprov/modeldapi/services/labelingpipelinerun/v1/labelingpipelinerun.proto \
    github.com/metaprov/modeldapi/services/license/v1/license.proto \
    github.com/metaprov/modeldapi/services/model/v1/model.proto \
    github.com/metaprov/modeldapi/services/modelautobuilder/v1/modelautobuilder.proto \
    github.com/metaprov/modeldapi/services/notebook/v1/notebook.proto \
    github.com/metaprov/modeldapi/services/notebookrun/v1/notebookrun.proto \
    github.com/metaprov/modeldapi/services/notifier/v1/notifier.proto \
    github.com/metaprov/modeldapi/services/objectstored/v1/objectstored.proto \
    github.com/metaprov/modeldapi/services/onlinefeaturestored/v1/onlinefeaturestored.proto \
    github.com/metaprov/modeldapi/services/offlinefeaturestored/v1/offlinefeaturestored.proto \
    github.com/metaprov/modeldapi/services/postmortem/v1/postmortem.proto \
    github.com/metaprov/modeldapi/services/prediction/v1/prediction.proto \
    github.com/metaprov/modeldapi/services/cronprediction/v1/cronprediction.proto \
    github.com/metaprov/modeldapi/services/predictionstore/v1/predictionstore.proto \
    github.com/metaprov/modeldapi/services/grpcinferenceservice/v1/grpcinferenceservice.proto \
    github.com/metaprov/modeldapi/services/predictor/v1/predictor.proto \
    github.com/metaprov/modeldapi/services/publisherd/v1/publisherd.proto \
    github.com/metaprov/modeldapi/services/recipe/v1/recipe.proto \
    github.com/metaprov/modeldapi/services/reciperun/v1/reciperun.proto \
    github.com/metaprov/modeldapi/services/report/v1/report.proto \
    github.com/metaprov/modeldapi/services/runbook/v1/runbook.proto \
    github.com/metaprov/modeldapi/services/servingsite/v1/servingsite.proto \
    github.com/metaprov/modeldapi/services/study/v1/study.proto \
    github.com/metaprov/modeldapi/services/tenant/v1/tenant.proto \
    github.com/metaprov/modeldapi/services/trainerd/v1/trainerd.proto \
    github.com/metaprov/modeldapi/services/virtualbucket/v1/virtualbucket.proto \
    github.com/metaprov/modeldapi/services/virtualcluster/v1/virtualcluster.proto \
    github.com/metaprov/modeldapi/services/virtualvolume/v1/virtualvolume.proto \




# create the google/com
mkdir -p ${PROJECT_ROOT}/lang/python/github/com
mkdir -p ${PROJECT_ROOT}/lang/python/k8s/io
cp -r ${PROJECT_ROOT}/lang/python/github.com/gogo/* ${PROJECT_ROOT}/lang/python/github/com/gogo && rm -R ${PROJECT_ROOT}/lang/python/github.com/gogo/*
cp -r ${PROJECT_ROOT}/lang/python/github.com/metaprov/* ${PROJECT_ROOT}/lang/python/github/com/metaprov && rm -R ${PROJECT_ROOT}/lang/python/github.com/metaprov/*
cp -r ${PROJECT_ROOT}/lang/python/k8s.io/api/* ${PROJECT_ROOT}/lang/python/k8s/io && rm -R ${PROJECT_ROOT}/lang/python/k8s.io/api/*
co -r ${PROJECT_ROOT}/lang/python/k8s.io/apimachinery/* ${PROJECT_ROOT}/lang/python/k8s/io && rm -R ${PROJECT_ROOT}/lang/python/k8s.io/apimachinery/*

#remove the grpc dirs
rm -rf ${PROJECT_ROOT}/lang/python/k8s.io
rm -rf ${PROJECT_ROOT}/lang/python/github.com


#Now we can generate the python code
