#!/bin/bash

# Copyright 2019 The Kubernetes Authors.
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

#set -o errexit
set -o nounset
set -o pipefail

## find or download controller-gen
CONTROLLER_GEN=$(which controller-gen)

if [ "$CONTROLLER_GEN" = "" ]
then
  export GO111MODULE=on
  go get sigs.k8s.io/controller-tools/cmd/controller-gen@v0.4.1
fi

if [ "$CONTROLLER_GEN" = "" ]
then
  echo "ERROR: failed to get controller-gen";
  exit 1;
fi

CONTROLLER_GEN="./hack/bin/controller-gen"

SCRIPT_ROOT=$(unset CDPATH && cd $(dirname "${BASH_SOURCE[0]}")/.. && pwd)


$CONTROLLER_GEN crd:trivialVersions=true paths=${SCRIPT_ROOT}/pkg/apis/catalog/v1alpha1 output:crd:artifacts:config=manifests/base/crd
$CONTROLLER_GEN crd:trivialVersions=true paths=${SCRIPT_ROOT}/pkg/apis/infra/v1alpha1 output:crd:artifacts:config=manifests/base/crd
$CONTROLLER_GEN crd:trivialVersions=true paths=${SCRIPT_ROOT}/pkg/apis/data/v1alpha1 output:crd:artifacts:config=manifests/base/crd
$CONTROLLER_GEN crd:trivialVersions=true paths=${SCRIPT_ROOT}/pkg/apis/training/v1alpha1 output:crd:artifacts:config=manifests/base/crd
$CONTROLLER_GEN crd:trivialVersions=true paths=${SCRIPT_ROOT}/pkg/apis/inference/v1alpha1 output:crd:artifacts:config=manifests/base/crd
$CONTROLLER_GEN crd:trivialVersions=true paths=${SCRIPT_ROOT}/pkg/apis/team/v1alpha1 output:crd:artifacts:config=manifests/base/crd
# To use your own boilerplate text use:
#   --go-header-file ${SCRIPT_ROOT}/hack/custom-boilerplate.go.txt

# gen to the installer
$CONTROLLER_GEN crd:trivialVersions=true paths=${SCRIPT_ROOT}/pkg/apis/catalog/v1alpha1 output:crd:artifacts:config=charts/modeld/crds
$CONTROLLER_GEN crd:trivialVersions=true paths=${SCRIPT_ROOT}/pkg/apis/infra/v1alpha1 output:crd:artifacts:config=charts/modeld/crds
$CONTROLLER_GEN crd:trivialVersions=true paths=${SCRIPT_ROOT}/pkg/apis/data/v1alpha1 output:crd:artifacts:config=charts/modeld/crds
$CONTROLLER_GEN crd:trivialVersions=true paths=${SCRIPT_ROOT}/pkg/apis/training/v1alpha1 output:crd:artifacts:config=charts/modeld/crds
$CONTROLLER_GEN crd:trivialVersions=true paths=${SCRIPT_ROOT}/pkg/apis/inference/v1alpha1 output:crd:artifacts:config=charts/modeld/crds
$CONTROLLER_GEN crd:trivialVersions=true paths=${SCRIPT_ROOT}/pkg/apis/team/v1alpha1 output:crd:artifacts:config=charts/modeld/crds

