

.PHONY: generate-crds
generate-proto:
	cd hack && ./generate-proto.sh

.PHONY: generate-go
generate-go:
	cd hack && ./generate-go.sh

.PHONY: generate-codegen
update-codegen:
	hack/update-codegen.sh

.PHONY: generate-crd
generate-crd:
	cd hack && ./update_crd.sh

generate-deepcopy:
	$(CONTROLLER_GEN) object:headerFile=./hack/custom-boilerplate.go.txt paths=./pkg/apis/...

gen-crd:
	$(CONTROLLER_GEN) crd:trivialVersions=true,allowDangerousTypes=true paths=./pkg/apis/catalog/v1alpha1 output:crd:artifacts:config=manifests/base/crd
	$(CONTROLLER_GEN) crd:trivialVersions=true,allowDangerousTypes=true paths=./pkg/apis/infra/v1alpha1 output:crd:artifacts:config=manifests/base/crd
	$(CONTROLLER_GEN) crd:trivialVersions=true,allowDangerousTypes=true paths=./pkg/apis/data/v1alpha1 output:crd:artifacts:config=manifests/base/crd
	$(CONTROLLER_GEN) crd:trivialVersions=true,allowDangerousTypes=true paths=./pkg/apis/training/v1alpha1 output:crd:artifacts:config=manifests/base/crd
	$(CONTROLLER_GEN) crd:trivialVersions=true,allowDangerousTypes=true paths=./pkg/apis/inference/v1alpha1 output:crd:artifacts:config=manifests/base/crd
	$(CONTROLLER_GEN) crd:trivialVersions=true,allowDangerousTypes=true paths=./pkg/apis/team/v1alpha1 output:crd:artifacts:config=manifests/base/crd

controller-gen:
ifeq (, $(shell which controller-gen))
	@{ \
	set -e ;\
	CONTROLLER_GEN_TMP_DIR=$$(mktemp -d) ;\
	cd $$CONTROLLER_GEN_TMP_DIR ;\
	go mod init tmp ;\
	go get sigs.k8s.io/controller-tools/cmd/controller-gen@v0.2.5 ;\
	rm -rf $$CONTROLLER_GEN_TMP_DIR ;\
	}
CONTROLLER_GEN=$(GOBIN)/controller-gen
else
CONTROLLER_GEN=$(shell which controller-gen)
endif	