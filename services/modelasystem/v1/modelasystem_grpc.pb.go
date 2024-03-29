// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: github.com/metaprov/modelaapi/services/modelasystem/v1/modelasystem.proto

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

// ModelaSystemServiceClient is the client API for ModelaSystemService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ModelaSystemServiceClient interface {
	DownloadLogfile(ctx context.Context, in *DownloadLogFileRequest, opts ...grpc.CallOption) (*DownloadLogFileResponse, error)
	BackupDatabase(ctx context.Context, in *BackupDatabaseRequest, opts ...grpc.CallOption) (*BackupDatabaseResponse, error)
	BackupEtcd(ctx context.Context, in *BackupEtcdRequest, opts ...grpc.CallOption) (*BackupEtcdResponse, error)
}

type modelaSystemServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewModelaSystemServiceClient(cc grpc.ClientConnInterface) ModelaSystemServiceClient {
	return &modelaSystemServiceClient{cc}
}

func (c *modelaSystemServiceClient) DownloadLogfile(ctx context.Context, in *DownloadLogFileRequest, opts ...grpc.CallOption) (*DownloadLogFileResponse, error) {
	out := new(DownloadLogFileResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/DownloadLogfile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelaSystemServiceClient) BackupDatabase(ctx context.Context, in *BackupDatabaseRequest, opts ...grpc.CallOption) (*BackupDatabaseResponse, error) {
	out := new(BackupDatabaseResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/BackupDatabase", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelaSystemServiceClient) BackupEtcd(ctx context.Context, in *BackupEtcdRequest, opts ...grpc.CallOption) (*BackupEtcdResponse, error) {
	out := new(BackupEtcdResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/BackupEtcd", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ModelaSystemServiceServer is the server API for ModelaSystemService service.
// All implementations must embed UnimplementedModelaSystemServiceServer
// for forward compatibility
type ModelaSystemServiceServer interface {
	DownloadLogfile(context.Context, *DownloadLogFileRequest) (*DownloadLogFileResponse, error)
	BackupDatabase(context.Context, *BackupDatabaseRequest) (*BackupDatabaseResponse, error)
	BackupEtcd(context.Context, *BackupEtcdRequest) (*BackupEtcdResponse, error)
	mustEmbedUnimplementedModelaSystemServiceServer()
}

// UnimplementedModelaSystemServiceServer must be embedded to have forward compatible implementations.
type UnimplementedModelaSystemServiceServer struct {
}

func (UnimplementedModelaSystemServiceServer) DownloadLogfile(context.Context, *DownloadLogFileRequest) (*DownloadLogFileResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DownloadLogfile not implemented")
}
func (UnimplementedModelaSystemServiceServer) BackupDatabase(context.Context, *BackupDatabaseRequest) (*BackupDatabaseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BackupDatabase not implemented")
}
func (UnimplementedModelaSystemServiceServer) BackupEtcd(context.Context, *BackupEtcdRequest) (*BackupEtcdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BackupEtcd not implemented")
}
func (UnimplementedModelaSystemServiceServer) mustEmbedUnimplementedModelaSystemServiceServer() {}

// UnsafeModelaSystemServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ModelaSystemServiceServer will
// result in compilation errors.
type UnsafeModelaSystemServiceServer interface {
	mustEmbedUnimplementedModelaSystemServiceServer()
}

func RegisterModelaSystemServiceServer(s grpc.ServiceRegistrar, srv ModelaSystemServiceServer) {
	s.RegisterService(&ModelaSystemService_ServiceDesc, srv)
}

func _ModelaSystemService_DownloadLogfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DownloadLogFileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelaSystemServiceServer).DownloadLogfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/DownloadLogfile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelaSystemServiceServer).DownloadLogfile(ctx, req.(*DownloadLogFileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelaSystemService_BackupDatabase_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BackupDatabaseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelaSystemServiceServer).BackupDatabase(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/BackupDatabase",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelaSystemServiceServer).BackupDatabase(ctx, req.(*BackupDatabaseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelaSystemService_BackupEtcd_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BackupEtcdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelaSystemServiceServer).BackupEtcd(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService/BackupEtcd",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelaSystemServiceServer).BackupEtcd(ctx, req.(*BackupEtcdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ModelaSystemService_ServiceDesc is the grpc.ServiceDesc for ModelaSystemService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ModelaSystemService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.modelasystem.v1.ModelaSystemService",
	HandlerType: (*ModelaSystemServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DownloadLogfile",
			Handler:    _ModelaSystemService_DownloadLogfile_Handler,
		},
		{
			MethodName: "BackupDatabase",
			Handler:    _ModelaSystemService_BackupDatabase_Handler,
		},
		{
			MethodName: "BackupEtcd",
			Handler:    _ModelaSystemService_BackupEtcd_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/modelasystem/v1/modelasystem.proto",
}
