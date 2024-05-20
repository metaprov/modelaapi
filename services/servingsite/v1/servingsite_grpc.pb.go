// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: github.com/metaprov/modelaapi/services/servingsite/v1/servingsite.proto

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

// ServingSiteServiceClient is the client API for ServingSiteService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ServingSiteServiceClient interface {
	ListServingSites(ctx context.Context, in *ListServingSitesRequest, opts ...grpc.CallOption) (*ListServingSitesResponse, error)
	CreateServingSite(ctx context.Context, in *CreateServingSiteRequest, opts ...grpc.CallOption) (*CreateServingSiteResponse, error)
	GetServingSite(ctx context.Context, in *GetServingSiteRequest, opts ...grpc.CallOption) (*GetServingSiteResponse, error)
	UpdateServingSite(ctx context.Context, in *UpdateServingSiteRequest, opts ...grpc.CallOption) (*UpdateServingSiteResponse, error)
	DeleteServingSite(ctx context.Context, in *DeleteServingSiteRequest, opts ...grpc.CallOption) (*DeleteServingSiteResponse, error)
	GetPublicKey(ctx context.Context, in *GetPublicKeyRequest, opts ...grpc.CallOption) (*GetPublicKeyResponse, error)
}

type servingSiteServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewServingSiteServiceClient(cc grpc.ClientConnInterface) ServingSiteServiceClient {
	return &servingSiteServiceClient{cc}
}

func (c *servingSiteServiceClient) ListServingSites(ctx context.Context, in *ListServingSitesRequest, opts ...grpc.CallOption) (*ListServingSitesResponse, error) {
	out := new(ListServingSitesResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/ListServingSites", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servingSiteServiceClient) CreateServingSite(ctx context.Context, in *CreateServingSiteRequest, opts ...grpc.CallOption) (*CreateServingSiteResponse, error) {
	out := new(CreateServingSiteResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/CreateServingSite", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servingSiteServiceClient) GetServingSite(ctx context.Context, in *GetServingSiteRequest, opts ...grpc.CallOption) (*GetServingSiteResponse, error) {
	out := new(GetServingSiteResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/GetServingSite", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servingSiteServiceClient) UpdateServingSite(ctx context.Context, in *UpdateServingSiteRequest, opts ...grpc.CallOption) (*UpdateServingSiteResponse, error) {
	out := new(UpdateServingSiteResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/UpdateServingSite", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servingSiteServiceClient) DeleteServingSite(ctx context.Context, in *DeleteServingSiteRequest, opts ...grpc.CallOption) (*DeleteServingSiteResponse, error) {
	out := new(DeleteServingSiteResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/DeleteServingSite", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servingSiteServiceClient) GetPublicKey(ctx context.Context, in *GetPublicKeyRequest, opts ...grpc.CallOption) (*GetPublicKeyResponse, error) {
	out := new(GetPublicKeyResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/GetPublicKey", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ServingSiteServiceServer is the server API for ServingSiteService service.
// All implementations must embed UnimplementedServingSiteServiceServer
// for forward compatibility
type ServingSiteServiceServer interface {
	ListServingSites(context.Context, *ListServingSitesRequest) (*ListServingSitesResponse, error)
	CreateServingSite(context.Context, *CreateServingSiteRequest) (*CreateServingSiteResponse, error)
	GetServingSite(context.Context, *GetServingSiteRequest) (*GetServingSiteResponse, error)
	UpdateServingSite(context.Context, *UpdateServingSiteRequest) (*UpdateServingSiteResponse, error)
	DeleteServingSite(context.Context, *DeleteServingSiteRequest) (*DeleteServingSiteResponse, error)
	GetPublicKey(context.Context, *GetPublicKeyRequest) (*GetPublicKeyResponse, error)
	mustEmbedUnimplementedServingSiteServiceServer()
}

// UnimplementedServingSiteServiceServer must be embedded to have forward compatible implementations.
type UnimplementedServingSiteServiceServer struct {
}

func (UnimplementedServingSiteServiceServer) ListServingSites(context.Context, *ListServingSitesRequest) (*ListServingSitesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListServingSites not implemented")
}
func (UnimplementedServingSiteServiceServer) CreateServingSite(context.Context, *CreateServingSiteRequest) (*CreateServingSiteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateServingSite not implemented")
}
func (UnimplementedServingSiteServiceServer) GetServingSite(context.Context, *GetServingSiteRequest) (*GetServingSiteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetServingSite not implemented")
}
func (UnimplementedServingSiteServiceServer) UpdateServingSite(context.Context, *UpdateServingSiteRequest) (*UpdateServingSiteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateServingSite not implemented")
}
func (UnimplementedServingSiteServiceServer) DeleteServingSite(context.Context, *DeleteServingSiteRequest) (*DeleteServingSiteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteServingSite not implemented")
}
func (UnimplementedServingSiteServiceServer) GetPublicKey(context.Context, *GetPublicKeyRequest) (*GetPublicKeyResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPublicKey not implemented")
}
func (UnimplementedServingSiteServiceServer) mustEmbedUnimplementedServingSiteServiceServer() {}

// UnsafeServingSiteServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ServingSiteServiceServer will
// result in compilation errors.
type UnsafeServingSiteServiceServer interface {
	mustEmbedUnimplementedServingSiteServiceServer()
}

func RegisterServingSiteServiceServer(s grpc.ServiceRegistrar, srv ServingSiteServiceServer) {
	s.RegisterService(&ServingSiteService_ServiceDesc, srv)
}

func _ServingSiteService_ListServingSites_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListServingSitesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServingSiteServiceServer).ListServingSites(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/ListServingSites",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServingSiteServiceServer).ListServingSites(ctx, req.(*ListServingSitesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServingSiteService_CreateServingSite_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateServingSiteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServingSiteServiceServer).CreateServingSite(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/CreateServingSite",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServingSiteServiceServer).CreateServingSite(ctx, req.(*CreateServingSiteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServingSiteService_GetServingSite_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetServingSiteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServingSiteServiceServer).GetServingSite(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/GetServingSite",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServingSiteServiceServer).GetServingSite(ctx, req.(*GetServingSiteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServingSiteService_UpdateServingSite_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateServingSiteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServingSiteServiceServer).UpdateServingSite(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/UpdateServingSite",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServingSiteServiceServer).UpdateServingSite(ctx, req.(*UpdateServingSiteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServingSiteService_DeleteServingSite_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteServingSiteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServingSiteServiceServer).DeleteServingSite(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/DeleteServingSite",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServingSiteServiceServer).DeleteServingSite(ctx, req.(*DeleteServingSiteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServingSiteService_GetPublicKey_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPublicKeyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServingSiteServiceServer).GetPublicKey(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService/GetPublicKey",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServingSiteServiceServer).GetPublicKey(ctx, req.(*GetPublicKeyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ServingSiteService_ServiceDesc is the grpc.ServiceDesc for ServingSiteService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ServingSiteService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.servingsite.v1.ServingSiteService",
	HandlerType: (*ServingSiteServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListServingSites",
			Handler:    _ServingSiteService_ListServingSites_Handler,
		},
		{
			MethodName: "CreateServingSite",
			Handler:    _ServingSiteService_CreateServingSite_Handler,
		},
		{
			MethodName: "GetServingSite",
			Handler:    _ServingSiteService_GetServingSite_Handler,
		},
		{
			MethodName: "UpdateServingSite",
			Handler:    _ServingSiteService_UpdateServingSite_Handler,
		},
		{
			MethodName: "DeleteServingSite",
			Handler:    _ServingSiteService_DeleteServingSite_Handler,
		},
		{
			MethodName: "GetPublicKey",
			Handler:    _ServingSiteService_GetPublicKey_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/servingsite/v1/servingsite.proto",
}
