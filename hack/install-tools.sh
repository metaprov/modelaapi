set -eux -o pipefail

GO111MODULE=on go get github.com/gogo/protobuf/gogoproto@v1.3.2
GO111MODULE=on go get sigs.k8s.io/controller-tools/cmd/controller-gen@v0.4.1
GO111MODULE=on go get github.com/golang/protobuf/protoc-gen-go@v1.3.1
GO111MODULE=on go get github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
GO111MODULE=on go get github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
GO111MODULE=on go get golang.org/x/tools/cmd/goimports
GO111MODULE=on go get k8s.io/code-generator/cmd/go-to-protobuf@v0.17.4
GO111MODULE=on go get k8s.io/code-generator/cmd/go-to-protobuf/protoc-gen-gogo@v0.17.4



#install-jsgrpc:


#curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.11.2/$(PROTOC_ZIP)
#	sudo unzip -o $(PROTOC_ZIP) -d /usr/local bin/protoc
#	sudo unzip -o $(PROTOC_ZIP) -d /usr/local 'include/*'
#	rm -f $(PROTOC_ZIP)/
