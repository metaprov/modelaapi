

.PHONY: generate-proto
generate-proto:
	cd hack && ./generate-proto.sh

.PHONY: generate-go
generate-go:
	hack/generate-go.sh

.PHONY: update-codegen
update-codegen:
	hack/update-codegen.sh

.PHONY: generate-gateway
generate-gateway:
	hack/generate-gw.sh

.PHONY: generate-swagger
generate-swagger:
	hack/generate-swagger.sh

.PHONY: generate-api-docs
generate-api-docs:
	hack/generate-api-docs.sh

release: build


.PHONY: test
test:
	go test ./pkg/... $(COVERAGE_OPTS)
	go test ./tests/...

.PHONY: lint
lint:
	$(GOLANGCI_LINT) run --timeout=20m	

.PHONY: modtidy
modtidy:
	go mod tidy



generate-deepcopy:
	$(CONTROLLER_GEN) object:headerFile=./hack/custom-boilerplate.go.txt paths=./pkg/apis/...

generate-crd:
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


install-gen: 
	go install k8s.io/code-generator/cmd/deepcopy-gen	
	go install k8s.io/code-generator/cmd/client-gen      
	go install k8s.io/code-generator/cmd/deepcopy-gen   
	go install k8s.io/code-generator/cmd/go-to-protobuf  
	go install k8s.io/code-generator/cmd/informer-gen  
	go install k8s.io/code-generator/cmd/openapi-gen   
	go install k8s.io/code-generator/cmd/set-gen
	go install k8s.io/code-generator/cmd/conversion-gen  
	go install k8s.io/code-generator/cmd/defaulter-gen  
	go install k8s.io/code-generator/cmd/import-boss     
	go install k8s.io/code-generator/cmd/lister-gen    
	go install k8s.io/code-generator/cmd/register-gen

generate: install-gen generate-proto generate-go generate-crd update-codegen
