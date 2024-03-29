// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: github.com/metaprov/modelaapi/services/predictionstore/v1/predictionstore.proto

package v1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// PredictionStoreServiceClient is the client API for PredictionStoreService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PredictionStoreServiceClient interface {
	// upload the current prediction database to the cloud.
	// The archived prediction will turn into a predicted dataset.
	Ingest(ctx context.Context, in *PredictionsIngestRequest, opts ...grpc.CallOption) (*PredictionIngestResponse, error)
}

type predictionStoreServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPredictionStoreServiceClient(cc grpc.ClientConnInterface) PredictionStoreServiceClient {
	return &predictionStoreServiceClient{cc}
}

func (c *predictionStoreServiceClient) Ingest(ctx context.Context, in *PredictionsIngestRequest, opts ...grpc.CallOption) (*PredictionIngestResponse, error) {
	out := new(PredictionIngestResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.predictionstore.v1.PredictionStoreService/Ingest", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PredictionStoreServiceServer is the server API for PredictionStoreService service.
// All implementations must embed UnimplementedPredictionStoreServiceServer
// for forward compatibility
type PredictionStoreServiceServer interface {
	// upload the current prediction database to the cloud.
	// The archived prediction will turn into a predicted dataset.
	Ingest(context.Context, *PredictionsIngestRequest) (*PredictionIngestResponse, error)
	mustEmbedUnimplementedPredictionStoreServiceServer()
}

// UnimplementedPredictionStoreServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPredictionStoreServiceServer struct {
}

func (UnimplementedPredictionStoreServiceServer) Ingest(context.Context, *PredictionsIngestRequest) (*PredictionIngestResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Ingest not implemented")
}
func (UnimplementedPredictionStoreServiceServer) mustEmbedUnimplementedPredictionStoreServiceServer() {
}

// UnsafePredictionStoreServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PredictionStoreServiceServer will
// result in compilation errors.
type UnsafePredictionStoreServiceServer interface {
	mustEmbedUnimplementedPredictionStoreServiceServer()
}

func RegisterPredictionStoreServiceServer(s grpc.ServiceRegistrar, srv PredictionStoreServiceServer) {
	s.RegisterService(&PredictionStoreService_ServiceDesc, srv)
}

func _PredictionStoreService_Ingest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PredictionsIngestRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PredictionStoreServiceServer).Ingest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.predictionstore.v1.PredictionStoreService/Ingest",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PredictionStoreServiceServer).Ingest(ctx, req.(*PredictionsIngestRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PredictionStoreService_ServiceDesc is the grpc.ServiceDesc for PredictionStoreService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PredictionStoreService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.predictionstore.v1.PredictionStoreService",
	HandlerType: (*PredictionStoreServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Ingest",
			Handler:    _PredictionStoreService_Ingest_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/predictionstore/v1/predictionstore.proto",
}
