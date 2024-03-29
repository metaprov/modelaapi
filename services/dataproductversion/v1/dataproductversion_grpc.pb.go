// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: github.com/metaprov/modelaapi/services/dataproductversion/v1/dataproductversion.proto

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

// DataProductVersionServiceClient is the client API for DataProductVersionService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DataProductVersionServiceClient interface {
	ListDataProductVersions(ctx context.Context, in *ListDataProductVersionsRequest, opts ...grpc.CallOption) (*ListDataProductVersionsResponse, error)
	CreateDataProductVersion(ctx context.Context, in *CreateDataProductVersionRequest, opts ...grpc.CallOption) (*CreateDataProductVersionResponse, error)
	GetDataProductVersion(ctx context.Context, in *GetDataProductVersionRequest, opts ...grpc.CallOption) (*GetDataProductVersionResponse, error)
	UpdateDataProductVersion(ctx context.Context, in *UpdateDataProductVersionRequest, opts ...grpc.CallOption) (*UpdateDataProductVersionResponse, error)
	DeleteDataProductVersion(ctx context.Context, in *DeleteDataProductVersionRequest, opts ...grpc.CallOption) (*DeleteDataProductVersionResponse, error)
}

type dataProductVersionServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDataProductVersionServiceClient(cc grpc.ClientConnInterface) DataProductVersionServiceClient {
	return &dataProductVersionServiceClient{cc}
}

func (c *dataProductVersionServiceClient) ListDataProductVersions(ctx context.Context, in *ListDataProductVersionsRequest, opts ...grpc.CallOption) (*ListDataProductVersionsResponse, error) {
	out := new(ListDataProductVersionsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/ListDataProductVersions", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataProductVersionServiceClient) CreateDataProductVersion(ctx context.Context, in *CreateDataProductVersionRequest, opts ...grpc.CallOption) (*CreateDataProductVersionResponse, error) {
	out := new(CreateDataProductVersionResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/CreateDataProductVersion", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataProductVersionServiceClient) GetDataProductVersion(ctx context.Context, in *GetDataProductVersionRequest, opts ...grpc.CallOption) (*GetDataProductVersionResponse, error) {
	out := new(GetDataProductVersionResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/GetDataProductVersion", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataProductVersionServiceClient) UpdateDataProductVersion(ctx context.Context, in *UpdateDataProductVersionRequest, opts ...grpc.CallOption) (*UpdateDataProductVersionResponse, error) {
	out := new(UpdateDataProductVersionResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/UpdateDataProductVersion", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataProductVersionServiceClient) DeleteDataProductVersion(ctx context.Context, in *DeleteDataProductVersionRequest, opts ...grpc.CallOption) (*DeleteDataProductVersionResponse, error) {
	out := new(DeleteDataProductVersionResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/DeleteDataProductVersion", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DataProductVersionServiceServer is the server API for DataProductVersionService service.
// All implementations must embed UnimplementedDataProductVersionServiceServer
// for forward compatibility
type DataProductVersionServiceServer interface {
	ListDataProductVersions(context.Context, *ListDataProductVersionsRequest) (*ListDataProductVersionsResponse, error)
	CreateDataProductVersion(context.Context, *CreateDataProductVersionRequest) (*CreateDataProductVersionResponse, error)
	GetDataProductVersion(context.Context, *GetDataProductVersionRequest) (*GetDataProductVersionResponse, error)
	UpdateDataProductVersion(context.Context, *UpdateDataProductVersionRequest) (*UpdateDataProductVersionResponse, error)
	DeleteDataProductVersion(context.Context, *DeleteDataProductVersionRequest) (*DeleteDataProductVersionResponse, error)
	mustEmbedUnimplementedDataProductVersionServiceServer()
}

// UnimplementedDataProductVersionServiceServer must be embedded to have forward compatible implementations.
type UnimplementedDataProductVersionServiceServer struct {
}

func (UnimplementedDataProductVersionServiceServer) ListDataProductVersions(context.Context, *ListDataProductVersionsRequest) (*ListDataProductVersionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListDataProductVersions not implemented")
}
func (UnimplementedDataProductVersionServiceServer) CreateDataProductVersion(context.Context, *CreateDataProductVersionRequest) (*CreateDataProductVersionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateDataProductVersion not implemented")
}
func (UnimplementedDataProductVersionServiceServer) GetDataProductVersion(context.Context, *GetDataProductVersionRequest) (*GetDataProductVersionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDataProductVersion not implemented")
}
func (UnimplementedDataProductVersionServiceServer) UpdateDataProductVersion(context.Context, *UpdateDataProductVersionRequest) (*UpdateDataProductVersionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateDataProductVersion not implemented")
}
func (UnimplementedDataProductVersionServiceServer) DeleteDataProductVersion(context.Context, *DeleteDataProductVersionRequest) (*DeleteDataProductVersionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteDataProductVersion not implemented")
}
func (UnimplementedDataProductVersionServiceServer) mustEmbedUnimplementedDataProductVersionServiceServer() {
}

// UnsafeDataProductVersionServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DataProductVersionServiceServer will
// result in compilation errors.
type UnsafeDataProductVersionServiceServer interface {
	mustEmbedUnimplementedDataProductVersionServiceServer()
}

func RegisterDataProductVersionServiceServer(s grpc.ServiceRegistrar, srv DataProductVersionServiceServer) {
	s.RegisterService(&DataProductVersionService_ServiceDesc, srv)
}

func _DataProductVersionService_ListDataProductVersions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListDataProductVersionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataProductVersionServiceServer).ListDataProductVersions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/ListDataProductVersions",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataProductVersionServiceServer).ListDataProductVersions(ctx, req.(*ListDataProductVersionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataProductVersionService_CreateDataProductVersion_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateDataProductVersionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataProductVersionServiceServer).CreateDataProductVersion(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/CreateDataProductVersion",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataProductVersionServiceServer).CreateDataProductVersion(ctx, req.(*CreateDataProductVersionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataProductVersionService_GetDataProductVersion_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDataProductVersionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataProductVersionServiceServer).GetDataProductVersion(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/GetDataProductVersion",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataProductVersionServiceServer).GetDataProductVersion(ctx, req.(*GetDataProductVersionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataProductVersionService_UpdateDataProductVersion_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateDataProductVersionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataProductVersionServiceServer).UpdateDataProductVersion(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/UpdateDataProductVersion",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataProductVersionServiceServer).UpdateDataProductVersion(ctx, req.(*UpdateDataProductVersionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataProductVersionService_DeleteDataProductVersion_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteDataProductVersionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataProductVersionServiceServer).DeleteDataProductVersion(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService/DeleteDataProductVersion",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataProductVersionServiceServer).DeleteDataProductVersion(ctx, req.(*DeleteDataProductVersionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// DataProductVersionService_ServiceDesc is the grpc.ServiceDesc for DataProductVersionService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DataProductVersionService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.dataproductversion.v1.DataProductVersionService",
	HandlerType: (*DataProductVersionServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListDataProductVersions",
			Handler:    _DataProductVersionService_ListDataProductVersions_Handler,
		},
		{
			MethodName: "CreateDataProductVersion",
			Handler:    _DataProductVersionService_CreateDataProductVersion_Handler,
		},
		{
			MethodName: "GetDataProductVersion",
			Handler:    _DataProductVersionService_GetDataProductVersion_Handler,
		},
		{
			MethodName: "UpdateDataProductVersion",
			Handler:    _DataProductVersionService_UpdateDataProductVersion_Handler,
		},
		{
			MethodName: "DeleteDataProductVersion",
			Handler:    _DataProductVersionService_DeleteDataProductVersion_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/dataproductversion/v1/dataproductversion.proto",
}
