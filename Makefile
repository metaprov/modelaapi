

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