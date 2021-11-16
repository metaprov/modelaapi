#!/bin/bash

# Copyright 2017 The Kubernetes Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# usage: generate.sh $LANGUAGE $OUTPUT_DIR
#  current tested languages:
#   * java

set -x
set -o errexit
set -o nounset
set -o pipefail

GIT_ROOT=$(cd $(dirname ${BASH_SOURCE})/../../../../; pwd)

# The format here is <file-name>;<generated-class-name>
files="k8s.io/apimachinery/pkg/api/resource/generated.proto;Resource \
       k8s.io/apimachinery/pkg/apis/meta/v1/generated.proto;Meta \
       k8s.io/apimachinery/pkg/runtime/generated.proto;Runtime \
       k8s.io/apimachinery/pkg/runtime/schema/generated.proto;RuntimeSchema \
       k8s.io/apimachinery/pkg/util/intstr/generated.proto;IntStr \
       k8s.io/api/rbac/v1alpha1/generated.proto;V1alpha1Rbac \
       k8s.io/api/rbac/v1/generated.proto;V1Rbac \
       k8s.io/api/rbac/v1beta1/generated.proto;V1beta1Rbac \
       k8s.io/api/networking/v1/generated.proto;V1Networking \
       k8s.io/api/admissionregistration/v1beta1/generated.proto;V1beta1Admissionregistration \
       k8s.io/api/admissionregistration/v1/generated.proto;V1Admissionregistration \
       k8s.io/api/scheduling/v1alpha1/generated.proto;V1alpha1Scheduling \
       k8s.io/api/scheduling/v1/generated.proto;V1Scheduling \
       k8s.io/api/storage/v1/generated.proto;V1Storage \
       k8s.io/api/storage/v1beta1/generated.proto;V1beta1Storage \
       k8s.io/api/batch/v1/generated.proto;V1Batch \
       k8s.io/api/batch/v1beta1/generated.proto;V1beta1Batch \
       k8s.io/api/apps/v1beta2/generated.proto;V1beta2Apps \
       k8s.io/api/apps/v1/generated.proto;V1Apps \
       k8s.io/api/apps/v1beta1/generated.proto;V1beta1Apps \
       k8s.io/api/authentication/v1/generated.proto;V1Authentication \
       k8s.io/api/authentication/v1beta1/generated.proto;V1beta1Authentication \
       k8s.io/api/admission/v1/generated.proto;V1Admission \
       k8s.io/api/admission/v1beta1/generated.proto;V1beta1Admission \
       k8s.io/api/policy/v1/generated.proto;V1Policy \
       k8s.io/api/policy/v1beta1/generated.proto;V1beta1Policy \
       k8s.io/api/core/v1/generated.proto;V1 \
       k8s.io/api/autoscaling/v1/generated.proto;V1Autoscaling \
       k8s.io/api/autoscaling/v2beta1/generated.proto;V2beta1Autoscaling \
       k8s.io/api/autoscaling/v2beta2/generated.proto;V2beta2Autoscaling \
       k8s.io/api/extensions/v1beta1/generated.proto;V1beta1Extensions \
       k8s.io/api/certificates/v1/generated.proto;V1Certificates \
       k8s.io/api/certificates/v1beta1/generated.proto;V1beta1Certificates \
       k8s.io/api/imagepolicy/v1alpha1/generated.proto;V1alpha1Imagepolicy \
       k8s.io/api/authorization/v1/generated.proto;V1Authorization \
       k8s.io/api/authorization/v1beta1/generated.proto;V1beta1Authorization \
       k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1beta1/generated.proto;V1beta1Apiextensions" 
       

modela_api_files="pkg/apis/catalog/v1alpha1/generated.proto;V1alpha1;catalog; \
       pkg/apis/data/v1alpha1/generated.proto;V1alpha1;data \
       pkg/apis/infra/v1alpha1/generated.proto;V1alpha1;infra \
       pkg/apis/team/v1alpha1/generated.proto;V1alpha1;team \
       pkg/apis/training/v1alpha1/generated.proto;V1alpha1;training \
       pkg/apis/inference/v1alpha1/generated.proto;V1alpha1;inference"

echo 'Munging proto file packages'

# This is a little hacky, but we know the go_package directive is in the
# right place, so add a marker, and then append more package declarations.
# Sorry, I like perl.
for info in ${files}; do
  file=$(echo ${info} | cut -d ";" -f 1)
  class=$(echo ${info} | cut -d ";" -f 2)
  go_package_name=$(dirname "${info}")
  export go_package_name
  echo ${file}
  echo ${go_package_name}
  perl -pi -e 's/option go_package = "(.*)";/option go_package = \"$ENV{'go_package_name'}\";\n/ig' ${GIT_ROOT}/${file} 
  perl -pi -e \
    's/\/\/ PKG/\/\/ PKG\noption java_package = "io.kubernetes.client.proto";/' \
    ${GIT_ROOT}/${file}
  perl -pi -e \
    "s/\/\/ PKG/\/\/ PKG\noption java_outer_classname = \"${class}\";/" \
    ${GIT_ROOT}/${file}
done    


for info in ${modela_api_files}; do
  file=$(echo ${info} | cut -d ";" -f 1)
  go_name=$(dirname ${info})
  echo ${go_name}
  go_package_name="github.com/metaprov/modelaapi/${go_name}"
  echo ${go_package_name}
  export go_package_name
  
  perl -pi -e 's/option go_package = "(.*)";/option go_package = \"$ENV{'go_package_name'}\";/ig' ${file} 
  
  # Other package declarations can go here.
done

#echo "Generating code for $1"
#${proto} -I${dir} ${proto_files} --${1}_out=${2}