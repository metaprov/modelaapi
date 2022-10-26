// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: github.com/metaprov/modelaapi/services/apitoken/v1/apitoken.proto

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

// ApiTokenServiceClient is the client API for ApiTokenService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ApiTokenServiceClient interface {
	ListApiTokens(ctx context.Context, in *ListApiTokensRequest, opts ...grpc.CallOption) (*ListApiTokensResponse, error)
	CreateApiToken(ctx context.Context, in *CreateApiTokenRequest, opts ...grpc.CallOption) (*CreateApiTokenResponse, error)
	GetApiToken(ctx context.Context, in *GetApiTokenRequest, opts ...grpc.CallOption) (*GetApiTokenResponse, error)
	UpdateApiToken(ctx context.Context, in *UpdateApiTokenRequest, opts ...grpc.CallOption) (*UpdateApiTokenResponse, error)
	DeleteApiToken(ctx context.Context, in *DeleteApiTokenRequest, opts ...grpc.CallOption) (*DeleteApiTokenResponse, error)
}

type apiTokenServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewApiTokenServiceClient(cc grpc.ClientConnInterface) ApiTokenServiceClient {
	return &apiTokenServiceClient{cc}
}

func (c *apiTokenServiceClient) ListApiTokens(ctx context.Context, in *ListApiTokensRequest, opts ...grpc.CallOption) (*ListApiTokensResponse, error) {
	out := new(ListApiTokensResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService/ListApiTokens", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *apiTokenServiceClient) CreateApiToken(ctx context.Context, in *CreateApiTokenRequest, opts ...grpc.CallOption) (*CreateApiTokenResponse, error) {
	out := new(CreateApiTokenResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService/CreateApiToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *apiTokenServiceClient) GetApiToken(ctx context.Context, in *GetApiTokenRequest, opts ...grpc.CallOption) (*GetApiTokenResponse, error) {
	out := new(GetApiTokenResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService/GetApiToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *apiTokenServiceClient) UpdateApiToken(ctx context.Context, in *UpdateApiTokenRequest, opts ...grpc.CallOption) (*UpdateApiTokenResponse, error) {
	out := new(UpdateApiTokenResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService/UpdateApiToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *apiTokenServiceClient) DeleteApiToken(ctx context.Context, in *DeleteApiTokenRequest, opts ...grpc.CallOption) (*DeleteApiTokenResponse, error) {
	out := new(DeleteApiTokenResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService/DeleteApiToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ApiTokenServiceServer is the server API for ApiTokenService service.
// All implementations must embed UnimplementedApiTokenServiceServer
// for forward compatibility
type ApiTokenServiceServer interface {
	ListApiTokens(context.Context, *ListApiTokensRequest) (*ListApiTokensResponse, error)
	CreateApiToken(context.Context, *CreateApiTokenRequest) (*CreateApiTokenResponse, error)
	GetApiToken(context.Context, *GetApiTokenRequest) (*GetApiTokenResponse, error)
	UpdateApiToken(context.Context, *UpdateApiTokenRequest) (*UpdateApiTokenResponse, error)
	DeleteApiToken(context.Context, *DeleteApiTokenRequest) (*DeleteApiTokenResponse, error)
	mustEmbedUnimplementedApiTokenServiceServer()
}

// UnimplementedApiTokenServiceServer must be embedded to have forward compatible implementations.
type UnimplementedApiTokenServiceServer struct {
}

func (UnimplementedApiTokenServiceServer) ListApiTokens(context.Context, *ListApiTokensRequest) (*ListApiTokensResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListApiTokens not implemented")
}
func (UnimplementedApiTokenServiceServer) CreateApiToken(context.Context, *CreateApiTokenRequest) (*CreateApiTokenResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateApiToken not implemented")
}
func (UnimplementedApiTokenServiceServer) GetApiToken(context.Context, *GetApiTokenRequest) (*GetApiTokenResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetApiToken not implemented")
}
func (UnimplementedApiTokenServiceServer) UpdateApiToken(context.Context, *UpdateApiTokenRequest) (*UpdateApiTokenResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateApiToken not implemented")
}
func (UnimplementedApiTokenServiceServer) DeleteApiToken(context.Context, *DeleteApiTokenRequest) (*DeleteApiTokenResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteApiToken not implemented")
}
func (UnimplementedApiTokenServiceServer) mustEmbedUnimplementedApiTokenServiceServer() {}

// UnsafeApiTokenServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ApiTokenServiceServer will
// result in compilation errors.
type UnsafeApiTokenServiceServer interface {
	mustEmbedUnimplementedApiTokenServiceServer()
}

func RegisterApiTokenServiceServer(s grpc.ServiceRegistrar, srv ApiTokenServiceServer) {
	s.RegisterService(&ApiTokenService_ServiceDesc, srv)
}

func _ApiTokenService_ListApiTokens_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListApiTokensRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApiTokenServiceServer).ListApiTokens(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService/ListApiTokens",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApiTokenServiceServer).ListApiTokens(ctx, req.(*ListApiTokensRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApiTokenService_CreateApiToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateApiTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApiTokenServiceServer).CreateApiToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService/CreateApiToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApiTokenServiceServer).CreateApiToken(ctx, req.(*CreateApiTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApiTokenService_GetApiToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetApiTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApiTokenServiceServer).GetApiToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService/GetApiToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApiTokenServiceServer).GetApiToken(ctx, req.(*GetApiTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApiTokenService_UpdateApiToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateApiTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApiTokenServiceServer).UpdateApiToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService/UpdateApiToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApiTokenServiceServer).UpdateApiToken(ctx, req.(*UpdateApiTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApiTokenService_DeleteApiToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteApiTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApiTokenServiceServer).DeleteApiToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService/DeleteApiToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApiTokenServiceServer).DeleteApiToken(ctx, req.(*DeleteApiTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ApiTokenService_ServiceDesc is the grpc.ServiceDesc for ApiTokenService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ApiTokenService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.apitoken.v1.ApiTokenService",
	HandlerType: (*ApiTokenServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListApiTokens",
			Handler:    _ApiTokenService_ListApiTokens_Handler,
		},
		{
			MethodName: "CreateApiToken",
			Handler:    _ApiTokenService_CreateApiToken_Handler,
		},
		{
			MethodName: "GetApiToken",
			Handler:    _ApiTokenService_GetApiToken_Handler,
		},
		{
			MethodName: "UpdateApiToken",
			Handler:    _ApiTokenService_UpdateApiToken_Handler,
		},
		{
			MethodName: "DeleteApiToken",
			Handler:    _ApiTokenService_DeleteApiToken_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/apitoken/v1/apitoken.proto",
}
