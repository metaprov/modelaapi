// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: github.com/metaprov/modelaapi/services/llmserver/v1/llmserver.proto

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

// LLMServerServiceClient is the client API for LLMServerService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type LLMServerServiceClient interface {
	ListLLMServers(ctx context.Context, in *ListLLMServersRequest, opts ...grpc.CallOption) (*ListLLMServersResponse, error)
	CreateLLMServer(ctx context.Context, in *CreateLLMServerRequest, opts ...grpc.CallOption) (*CreateLLMServerResponse, error)
	GetLLMServer(ctx context.Context, in *GetLLMServerRequest, opts ...grpc.CallOption) (*GetLLMServerResponse, error)
	UpdateLLMServer(ctx context.Context, in *UpdateLLMServerRequest, opts ...grpc.CallOption) (*UpdateLLMServerResponse, error)
	DeleteLLMServer(ctx context.Context, in *DeleteLLMServerRequest, opts ...grpc.CallOption) (*DeleteLLMServerResponse, error)
	RefreshLLMServer(ctx context.Context, in *DeleteLLMServerRequest, opts ...grpc.CallOption) (*RefreshLLMServerResponse, error)
}

type lLMServerServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewLLMServerServiceClient(cc grpc.ClientConnInterface) LLMServerServiceClient {
	return &lLMServerServiceClient{cc}
}

func (c *lLMServerServiceClient) ListLLMServers(ctx context.Context, in *ListLLMServersRequest, opts ...grpc.CallOption) (*ListLLMServersResponse, error) {
	out := new(ListLLMServersResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.llmserver.v1.LLMServerService/ListLLMServers", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *lLMServerServiceClient) CreateLLMServer(ctx context.Context, in *CreateLLMServerRequest, opts ...grpc.CallOption) (*CreateLLMServerResponse, error) {
	out := new(CreateLLMServerResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.llmserver.v1.LLMServerService/CreateLLMServer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *lLMServerServiceClient) GetLLMServer(ctx context.Context, in *GetLLMServerRequest, opts ...grpc.CallOption) (*GetLLMServerResponse, error) {
	out := new(GetLLMServerResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.llmserver.v1.LLMServerService/GetLLMServer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *lLMServerServiceClient) UpdateLLMServer(ctx context.Context, in *UpdateLLMServerRequest, opts ...grpc.CallOption) (*UpdateLLMServerResponse, error) {
	out := new(UpdateLLMServerResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.llmserver.v1.LLMServerService/UpdateLLMServer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *lLMServerServiceClient) DeleteLLMServer(ctx context.Context, in *DeleteLLMServerRequest, opts ...grpc.CallOption) (*DeleteLLMServerResponse, error) {
	out := new(DeleteLLMServerResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.llmserver.v1.LLMServerService/DeleteLLMServer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *lLMServerServiceClient) RefreshLLMServer(ctx context.Context, in *DeleteLLMServerRequest, opts ...grpc.CallOption) (*RefreshLLMServerResponse, error) {
	out := new(RefreshLLMServerResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.llmserver.v1.LLMServerService/RefreshLLMServer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// LLMServerServiceServer is the server API for LLMServerService service.
// All implementations must embed UnimplementedLLMServerServiceServer
// for forward compatibility
type LLMServerServiceServer interface {
	ListLLMServers(context.Context, *ListLLMServersRequest) (*ListLLMServersResponse, error)
	CreateLLMServer(context.Context, *CreateLLMServerRequest) (*CreateLLMServerResponse, error)
	GetLLMServer(context.Context, *GetLLMServerRequest) (*GetLLMServerResponse, error)
	UpdateLLMServer(context.Context, *UpdateLLMServerRequest) (*UpdateLLMServerResponse, error)
	DeleteLLMServer(context.Context, *DeleteLLMServerRequest) (*DeleteLLMServerResponse, error)
	RefreshLLMServer(context.Context, *DeleteLLMServerRequest) (*RefreshLLMServerResponse, error)
	mustEmbedUnimplementedLLMServerServiceServer()
}

// UnimplementedLLMServerServiceServer must be embedded to have forward compatible implementations.
type UnimplementedLLMServerServiceServer struct {
}

func (UnimplementedLLMServerServiceServer) ListLLMServers(context.Context, *ListLLMServersRequest) (*ListLLMServersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListLLMServers not implemented")
}
func (UnimplementedLLMServerServiceServer) CreateLLMServer(context.Context, *CreateLLMServerRequest) (*CreateLLMServerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateLLMServer not implemented")
}
func (UnimplementedLLMServerServiceServer) GetLLMServer(context.Context, *GetLLMServerRequest) (*GetLLMServerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLLMServer not implemented")
}
func (UnimplementedLLMServerServiceServer) UpdateLLMServer(context.Context, *UpdateLLMServerRequest) (*UpdateLLMServerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateLLMServer not implemented")
}
func (UnimplementedLLMServerServiceServer) DeleteLLMServer(context.Context, *DeleteLLMServerRequest) (*DeleteLLMServerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteLLMServer not implemented")
}
func (UnimplementedLLMServerServiceServer) RefreshLLMServer(context.Context, *DeleteLLMServerRequest) (*RefreshLLMServerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RefreshLLMServer not implemented")
}
func (UnimplementedLLMServerServiceServer) mustEmbedUnimplementedLLMServerServiceServer() {}

// UnsafeLLMServerServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to LLMServerServiceServer will
// result in compilation errors.
type UnsafeLLMServerServiceServer interface {
	mustEmbedUnimplementedLLMServerServiceServer()
}

func RegisterLLMServerServiceServer(s grpc.ServiceRegistrar, srv LLMServerServiceServer) {
	s.RegisterService(&LLMServerService_ServiceDesc, srv)
}

func _LLMServerService_ListLLMServers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListLLMServersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LLMServerServiceServer).ListLLMServers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.llmserver.v1.LLMServerService/ListLLMServers",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LLMServerServiceServer).ListLLMServers(ctx, req.(*ListLLMServersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LLMServerService_CreateLLMServer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateLLMServerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LLMServerServiceServer).CreateLLMServer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.llmserver.v1.LLMServerService/CreateLLMServer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LLMServerServiceServer).CreateLLMServer(ctx, req.(*CreateLLMServerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LLMServerService_GetLLMServer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetLLMServerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LLMServerServiceServer).GetLLMServer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.llmserver.v1.LLMServerService/GetLLMServer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LLMServerServiceServer).GetLLMServer(ctx, req.(*GetLLMServerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LLMServerService_UpdateLLMServer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateLLMServerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LLMServerServiceServer).UpdateLLMServer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.llmserver.v1.LLMServerService/UpdateLLMServer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LLMServerServiceServer).UpdateLLMServer(ctx, req.(*UpdateLLMServerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LLMServerService_DeleteLLMServer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteLLMServerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LLMServerServiceServer).DeleteLLMServer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.llmserver.v1.LLMServerService/DeleteLLMServer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LLMServerServiceServer).DeleteLLMServer(ctx, req.(*DeleteLLMServerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LLMServerService_RefreshLLMServer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteLLMServerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LLMServerServiceServer).RefreshLLMServer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.llmserver.v1.LLMServerService/RefreshLLMServer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LLMServerServiceServer).RefreshLLMServer(ctx, req.(*DeleteLLMServerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// LLMServerService_ServiceDesc is the grpc.ServiceDesc for LLMServerService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var LLMServerService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.llmserver.v1.LLMServerService",
	HandlerType: (*LLMServerServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListLLMServers",
			Handler:    _LLMServerService_ListLLMServers_Handler,
		},
		{
			MethodName: "CreateLLMServer",
			Handler:    _LLMServerService_CreateLLMServer_Handler,
		},
		{
			MethodName: "GetLLMServer",
			Handler:    _LLMServerService_GetLLMServer_Handler,
		},
		{
			MethodName: "UpdateLLMServer",
			Handler:    _LLMServerService_UpdateLLMServer_Handler,
		},
		{
			MethodName: "DeleteLLMServer",
			Handler:    _LLMServerService_DeleteLLMServer_Handler,
		},
		{
			MethodName: "RefreshLLMServer",
			Handler:    _LLMServerService_RefreshLLMServer_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/llmserver/v1/llmserver.proto",
}
