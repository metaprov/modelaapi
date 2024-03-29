// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: github.com/metaprov/modelaapi/services/offlinefeaturestored/v1/offlinefeaturestored.proto

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

// OfflineFeatureStoreServiceClient is the client API for OfflineFeatureStoreService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OfflineFeatureStoreServiceClient interface {
	// Sync to the online store
	Sync(ctx context.Context, in *SyncRequest, opts ...grpc.CallOption) (*SyncResponse, error)
	// Generate training dataset.
	GenerateTrainingDataset(ctx context.Context, in *GenerateTrainingDatasetRequest, opts ...grpc.CallOption) (*GenerateTrainingDatasetResponse, error)
}

type offlineFeatureStoreServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewOfflineFeatureStoreServiceClient(cc grpc.ClientConnInterface) OfflineFeatureStoreServiceClient {
	return &offlineFeatureStoreServiceClient{cc}
}

func (c *offlineFeatureStoreServiceClient) Sync(ctx context.Context, in *SyncRequest, opts ...grpc.CallOption) (*SyncResponse, error) {
	out := new(SyncResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/Sync", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *offlineFeatureStoreServiceClient) GenerateTrainingDataset(ctx context.Context, in *GenerateTrainingDatasetRequest, opts ...grpc.CallOption) (*GenerateTrainingDatasetResponse, error) {
	out := new(GenerateTrainingDatasetResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GenerateTrainingDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OfflineFeatureStoreServiceServer is the server API for OfflineFeatureStoreService service.
// All implementations must embed UnimplementedOfflineFeatureStoreServiceServer
// for forward compatibility
type OfflineFeatureStoreServiceServer interface {
	// Sync to the online store
	Sync(context.Context, *SyncRequest) (*SyncResponse, error)
	// Generate training dataset.
	GenerateTrainingDataset(context.Context, *GenerateTrainingDatasetRequest) (*GenerateTrainingDatasetResponse, error)
	mustEmbedUnimplementedOfflineFeatureStoreServiceServer()
}

// UnimplementedOfflineFeatureStoreServiceServer must be embedded to have forward compatible implementations.
type UnimplementedOfflineFeatureStoreServiceServer struct {
}

func (UnimplementedOfflineFeatureStoreServiceServer) Sync(context.Context, *SyncRequest) (*SyncResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Sync not implemented")
}
func (UnimplementedOfflineFeatureStoreServiceServer) GenerateTrainingDataset(context.Context, *GenerateTrainingDatasetRequest) (*GenerateTrainingDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GenerateTrainingDataset not implemented")
}
func (UnimplementedOfflineFeatureStoreServiceServer) mustEmbedUnimplementedOfflineFeatureStoreServiceServer() {
}

// UnsafeOfflineFeatureStoreServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OfflineFeatureStoreServiceServer will
// result in compilation errors.
type UnsafeOfflineFeatureStoreServiceServer interface {
	mustEmbedUnimplementedOfflineFeatureStoreServiceServer()
}

func RegisterOfflineFeatureStoreServiceServer(s grpc.ServiceRegistrar, srv OfflineFeatureStoreServiceServer) {
	s.RegisterService(&OfflineFeatureStoreService_ServiceDesc, srv)
}

func _OfflineFeatureStoreService_Sync_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SyncRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OfflineFeatureStoreServiceServer).Sync(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/Sync",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OfflineFeatureStoreServiceServer).Sync(ctx, req.(*SyncRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OfflineFeatureStoreService_GenerateTrainingDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GenerateTrainingDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OfflineFeatureStoreServiceServer).GenerateTrainingDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService/GenerateTrainingDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OfflineFeatureStoreServiceServer).GenerateTrainingDataset(ctx, req.(*GenerateTrainingDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// OfflineFeatureStoreService_ServiceDesc is the grpc.ServiceDesc for OfflineFeatureStoreService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var OfflineFeatureStoreService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.offlinefeaturestored.v1.OfflineFeatureStoreService",
	HandlerType: (*OfflineFeatureStoreServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Sync",
			Handler:    _OfflineFeatureStoreService_Sync_Handler,
		},
		{
			MethodName: "GenerateTrainingDataset",
			Handler:    _OfflineFeatureStoreService_GenerateTrainingDataset_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/offlinefeaturestored/v1/offlinefeaturestored.proto",
}
