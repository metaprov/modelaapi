#! /usr/bin/env bash

# This script auto-generates protobuf related files. It is intended to be run manually when either
# API types are added/modified, or server gRPC calls are added. The generated files should then
# be checked into source control.

set -x
set -o errexit
set -o nounset
set -o pipefail

PROJECT_ROOT=$(cd $(dirname ${BASH_SOURCE})/..; pwd)

protoc \
    -I${PROJECT_ROOT}/../../.. \
    -I${PROJECT_ROOT}/pkg \
    -I${PROJECT_ROOT}/common-protos \
    -I${PROJECT_ROOT}/common-protos/github.com/gogo/protobuf \
    --js_out=import_style=commonjs:./lang/js/src \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:./lang/js/src \
    google/api/annotations.proto \
    protoc-gen-swagger/options/annotations.proto\
    protoc-gen-swagger/options/openapiv2.proto\
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
    github.com/metaprov/modeldapi/services/account/account.proto \
    github.com/metaprov/modeldapi/services/tenant/tenant.proto \
    github.com/metaprov/modeldapi/services/archived/archived.proto \
    github.com/metaprov/modeldapi/services/virtualbucket/virtualbucket.proto \
    github.com/metaprov/modeldapi/services/conversation/conversation.proto \
    github.com/metaprov/modeldapi/services/runbook/runbook.proto \
    github.com/metaprov/modeldapi/services/postmortem/postmortem.proto \
    github.com/metaprov/modeldapi/services/virtualvolume/virtualvolume.proto \
    github.com/metaprov/modeldapi/services/virtualcluster/virtualcluster.proto \
    github.com/metaprov/modeldapi/services/catalog/catalog.proto \
    github.com/metaprov/modeldapi/services/cloudsd/cloudsd.proto \
    github.com/metaprov/modeldapi/services/onlinefeaturestored/onlinefeaturestored.proto \
    github.com/metaprov/modeldapi/services/offlinefeaturestored/offlinefeaturestored.proto \
    github.com/metaprov/modeldapi/services/connection/connection.proto \
    github.com/metaprov/modeldapi/services/dataset/dataset.proto \
    github.com/metaprov/modeldapi/services/dataproduct/dataproduct.proto \
    github.com/metaprov/modeldapi/services/dataproductversion/dataproductversion.proto \
    github.com/metaprov/modeldapi/services/datasource/datasource.proto \
    github.com/metaprov/modeldapi/services/modelautobuilder/modelautobuilder.proto \
    github.com/metaprov/modeldapi/services/common/common.proto \
    github.com/metaprov/modeldapi/services/objectstored/objectstored.proto \
    github.com/metaprov/modeldapi/services/data/data.proto \
    github.com/metaprov/modeldapi/services/curtain/curtain.proto \
    github.com/metaprov/modeldapi/services/entity/entity.proto \
    github.com/metaprov/modeldapi/services/feature/feature.proto \
    github.com/metaprov/modeldapi/services/featureset/featureset.proto \
    github.com/metaprov/modeldapi/services/featurepipeline/featurepipeline.proto \
    github.com/metaprov/modeldapi/services/featurepipelinerun/featurepipelinerun.proto \
    github.com/metaprov/modeldapi/services/labelingpipeline/labelingpipeline.proto \
    github.com/metaprov/modeldapi/services/labelingpipelinerun/labelingpipelinerun.proto \
    github.com/metaprov/modeldapi/services/lab/lab.proto \
    github.com/metaprov/modeldapi/services/license/license.proto \
    github.com/metaprov/modeldapi/services/model/model.proto \
    github.com/metaprov/modeldapi/services/k8score/k8score.proto \
    github.com/metaprov/modeldapi/services/notebook/notebook.proto \
    github.com/metaprov/modeldapi/services/notebookrun/notebookrun.proto \
    github.com/metaprov/modeldapi/services/notifier/notifier.proto \
    github.com/metaprov/modeldapi/services/modelpipeline/modelpipeline.proto \
    github.com/metaprov/modeldapi/services/modelpipelinerun/modelpipelinerun.proto \
    github.com/metaprov/modeldapi/services/predictionpipeline/predictionpipeline.proto \
    github.com/metaprov/modeldapi/services/predictionpipelinerun/predictionpipelinerun.proto \
    github.com/metaprov/modeldapi/services/predictor/predictor.proto \
    github.com/metaprov/modeldapi/services/datapipeline/datapipeline.proto \
    github.com/metaprov/modeldapi/services/datapipelinerun/datapipelinerun.proto \
    github.com/metaprov/modeldapi/services/publisherd/publisherd.proto \
    github.com/metaprov/modeldapi/services/report/report.proto \
    github.com/metaprov/modeldapi/services/servingsite/servingsite.proto \
    github.com/metaprov/modeldapi/services/study/study.proto \
    github.com/metaprov/modeldapi/services/trainerd/trainerd.proto \
    github.com/metaprov/modeldapi/services/recipe/recipe.proto \
    github.com/metaprov/modeldapi/services/reciperun/reciperun.proto

