// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: github.com/metaprov/modelaapi/services/webrequestrun/v1/webrequestrun.proto

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

// WebRequestRunServiceClient is the client API for WebRequestRunService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type WebRequestRunServiceClient interface {
	ListWebRequestRuns(ctx context.Context, in *ListWebRequestRunsRequest, opts ...grpc.CallOption) (*ListWebRequestRunsResponse, error)
	CreateWebRequestRun(ctx context.Context, in *CreateWebRequestRunRequest, opts ...grpc.CallOption) (*CreateWebRequestRunResponse, error)
	GetWebRequestRun(ctx context.Context, in *GetWebRequestRunRequest, opts ...grpc.CallOption) (*GetWebRequestRunResponse, error)
	UpdateWebRequestRun(ctx context.Context, in *UpdateWebRequestRunRequest, opts ...grpc.CallOption) (*UpdateWebRequestRunResponse, error)
	DeleteWebRequestRun(ctx context.Context, in *DeleteWebRequestRunRequest, opts ...grpc.CallOption) (*DeleteWebRequestRunResponse, error)
}

type webRequestRunServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewWebRequestRunServiceClient(cc grpc.ClientConnInterface) WebRequestRunServiceClient {
	return &webRequestRunServiceClient{cc}
}

func (c *webRequestRunServiceClient) ListWebRequestRuns(ctx context.Context, in *ListWebRequestRunsRequest, opts ...grpc.CallOption) (*ListWebRequestRunsResponse, error) {
	out := new(ListWebRequestRunsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/ListWebRequestRuns", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *webRequestRunServiceClient) CreateWebRequestRun(ctx context.Context, in *CreateWebRequestRunRequest, opts ...grpc.CallOption) (*CreateWebRequestRunResponse, error) {
	out := new(CreateWebRequestRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/CreateWebRequestRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *webRequestRunServiceClient) GetWebRequestRun(ctx context.Context, in *GetWebRequestRunRequest, opts ...grpc.CallOption) (*GetWebRequestRunResponse, error) {
	out := new(GetWebRequestRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/GetWebRequestRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *webRequestRunServiceClient) UpdateWebRequestRun(ctx context.Context, in *UpdateWebRequestRunRequest, opts ...grpc.CallOption) (*UpdateWebRequestRunResponse, error) {
	out := new(UpdateWebRequestRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/UpdateWebRequestRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *webRequestRunServiceClient) DeleteWebRequestRun(ctx context.Context, in *DeleteWebRequestRunRequest, opts ...grpc.CallOption) (*DeleteWebRequestRunResponse, error) {
	out := new(DeleteWebRequestRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/DeleteWebRequestRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// WebRequestRunServiceServer is the server API for WebRequestRunService service.
// All implementations must embed UnimplementedWebRequestRunServiceServer
// for forward compatibility
type WebRequestRunServiceServer interface {
	ListWebRequestRuns(context.Context, *ListWebRequestRunsRequest) (*ListWebRequestRunsResponse, error)
	CreateWebRequestRun(context.Context, *CreateWebRequestRunRequest) (*CreateWebRequestRunResponse, error)
	GetWebRequestRun(context.Context, *GetWebRequestRunRequest) (*GetWebRequestRunResponse, error)
	UpdateWebRequestRun(context.Context, *UpdateWebRequestRunRequest) (*UpdateWebRequestRunResponse, error)
	DeleteWebRequestRun(context.Context, *DeleteWebRequestRunRequest) (*DeleteWebRequestRunResponse, error)
	mustEmbedUnimplementedWebRequestRunServiceServer()
}

// UnimplementedWebRequestRunServiceServer must be embedded to have forward compatible implementations.
type UnimplementedWebRequestRunServiceServer struct {
}

func (UnimplementedWebRequestRunServiceServer) ListWebRequestRuns(context.Context, *ListWebRequestRunsRequest) (*ListWebRequestRunsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListWebRequestRuns not implemented")
}
func (UnimplementedWebRequestRunServiceServer) CreateWebRequestRun(context.Context, *CreateWebRequestRunRequest) (*CreateWebRequestRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateWebRequestRun not implemented")
}
func (UnimplementedWebRequestRunServiceServer) GetWebRequestRun(context.Context, *GetWebRequestRunRequest) (*GetWebRequestRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetWebRequestRun not implemented")
}
func (UnimplementedWebRequestRunServiceServer) UpdateWebRequestRun(context.Context, *UpdateWebRequestRunRequest) (*UpdateWebRequestRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateWebRequestRun not implemented")
}
func (UnimplementedWebRequestRunServiceServer) DeleteWebRequestRun(context.Context, *DeleteWebRequestRunRequest) (*DeleteWebRequestRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteWebRequestRun not implemented")
}
func (UnimplementedWebRequestRunServiceServer) mustEmbedUnimplementedWebRequestRunServiceServer() {}

// UnsafeWebRequestRunServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to WebRequestRunServiceServer will
// result in compilation errors.
type UnsafeWebRequestRunServiceServer interface {
	mustEmbedUnimplementedWebRequestRunServiceServer()
}

func RegisterWebRequestRunServiceServer(s grpc.ServiceRegistrar, srv WebRequestRunServiceServer) {
	s.RegisterService(&WebRequestRunService_ServiceDesc, srv)
}

func _WebRequestRunService_ListWebRequestRuns_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListWebRequestRunsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WebRequestRunServiceServer).ListWebRequestRuns(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/ListWebRequestRuns",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WebRequestRunServiceServer).ListWebRequestRuns(ctx, req.(*ListWebRequestRunsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WebRequestRunService_CreateWebRequestRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateWebRequestRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WebRequestRunServiceServer).CreateWebRequestRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/CreateWebRequestRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WebRequestRunServiceServer).CreateWebRequestRun(ctx, req.(*CreateWebRequestRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WebRequestRunService_GetWebRequestRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetWebRequestRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WebRequestRunServiceServer).GetWebRequestRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/GetWebRequestRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WebRequestRunServiceServer).GetWebRequestRun(ctx, req.(*GetWebRequestRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WebRequestRunService_UpdateWebRequestRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateWebRequestRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WebRequestRunServiceServer).UpdateWebRequestRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/UpdateWebRequestRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WebRequestRunServiceServer).UpdateWebRequestRun(ctx, req.(*UpdateWebRequestRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WebRequestRunService_DeleteWebRequestRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteWebRequestRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WebRequestRunServiceServer).DeleteWebRequestRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService/DeleteWebRequestRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WebRequestRunServiceServer).DeleteWebRequestRun(ctx, req.(*DeleteWebRequestRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// WebRequestRunService_ServiceDesc is the grpc.ServiceDesc for WebRequestRunService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var WebRequestRunService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.webrequestrun.v1.WebRequestRunService",
	HandlerType: (*WebRequestRunServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListWebRequestRuns",
			Handler:    _WebRequestRunService_ListWebRequestRuns_Handler,
		},
		{
			MethodName: "CreateWebRequestRun",
			Handler:    _WebRequestRunService_CreateWebRequestRun_Handler,
		},
		{
			MethodName: "GetWebRequestRun",
			Handler:    _WebRequestRunService_GetWebRequestRun_Handler,
		},
		{
			MethodName: "UpdateWebRequestRun",
			Handler:    _WebRequestRunService_UpdateWebRequestRun_Handler,
		},
		{
			MethodName: "DeleteWebRequestRun",
			Handler:    _WebRequestRunService_DeleteWebRequestRun_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/webrequestrun/v1/webrequestrun.proto",
}
