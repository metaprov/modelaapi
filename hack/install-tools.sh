set -eux -o pipefail

GO111MODULE=on go get github.com/gogo/protobuf/gogoproto
GO111MODULE=on go get sigs.k8s.io/controller-tools/cmd/controller-gen
GO111MODULE=on go get github.com/golang/protobuf/protoc-gen-go
GO111MODULE=on go get github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
GO111MODULE=on go get github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
GO111MODULE=on go get golang.org/x/tools/cmd/goimports
go install k8s.io/code-generator/cmd/go-to-protobuf@latest
go install k8s.io/code-generator/cmd/go-to-protobuf/protoc-gen-gogo@latest


