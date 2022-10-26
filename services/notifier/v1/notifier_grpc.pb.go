// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: github.com/metaprov/modelaapi/services/notifier/v1/notifier.proto

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

// NotifierServiceClient is the client API for NotifierService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type NotifierServiceClient interface {
	ListNotifiers(ctx context.Context, in *ListNotifiersRequest, opts ...grpc.CallOption) (*ListNotifiersResponse, error)
	CreateNotifier(ctx context.Context, in *CreateNotifierRequest, opts ...grpc.CallOption) (*CreateNotifierResponse, error)
	GetNotifier(ctx context.Context, in *GetNotifierRequest, opts ...grpc.CallOption) (*GetNotifierResponse, error)
	UpdateNotifier(ctx context.Context, in *UpdateNotifierRequest, opts ...grpc.CallOption) (*UpdateNotifierResponse, error)
	DeleteNotifier(ctx context.Context, in *DeleteNotifierRequest, opts ...grpc.CallOption) (*DeleteNotifierResponse, error)
}

type notifierServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewNotifierServiceClient(cc grpc.ClientConnInterface) NotifierServiceClient {
	return &notifierServiceClient{cc}
}

func (c *notifierServiceClient) ListNotifiers(ctx context.Context, in *ListNotifiersRequest, opts ...grpc.CallOption) (*ListNotifiersResponse, error) {
	out := new(ListNotifiersResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/ListNotifiers", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notifierServiceClient) CreateNotifier(ctx context.Context, in *CreateNotifierRequest, opts ...grpc.CallOption) (*CreateNotifierResponse, error) {
	out := new(CreateNotifierResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/CreateNotifier", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notifierServiceClient) GetNotifier(ctx context.Context, in *GetNotifierRequest, opts ...grpc.CallOption) (*GetNotifierResponse, error) {
	out := new(GetNotifierResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/GetNotifier", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notifierServiceClient) UpdateNotifier(ctx context.Context, in *UpdateNotifierRequest, opts ...grpc.CallOption) (*UpdateNotifierResponse, error) {
	out := new(UpdateNotifierResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/UpdateNotifier", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notifierServiceClient) DeleteNotifier(ctx context.Context, in *DeleteNotifierRequest, opts ...grpc.CallOption) (*DeleteNotifierResponse, error) {
	out := new(DeleteNotifierResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/DeleteNotifier", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// NotifierServiceServer is the server API for NotifierService service.
// All implementations must embed UnimplementedNotifierServiceServer
// for forward compatibility
type NotifierServiceServer interface {
	ListNotifiers(context.Context, *ListNotifiersRequest) (*ListNotifiersResponse, error)
	CreateNotifier(context.Context, *CreateNotifierRequest) (*CreateNotifierResponse, error)
	GetNotifier(context.Context, *GetNotifierRequest) (*GetNotifierResponse, error)
	UpdateNotifier(context.Context, *UpdateNotifierRequest) (*UpdateNotifierResponse, error)
	DeleteNotifier(context.Context, *DeleteNotifierRequest) (*DeleteNotifierResponse, error)
	mustEmbedUnimplementedNotifierServiceServer()
}

// UnimplementedNotifierServiceServer must be embedded to have forward compatible implementations.
type UnimplementedNotifierServiceServer struct {
}

func (UnimplementedNotifierServiceServer) ListNotifiers(context.Context, *ListNotifiersRequest) (*ListNotifiersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListNotifiers not implemented")
}
func (UnimplementedNotifierServiceServer) CreateNotifier(context.Context, *CreateNotifierRequest) (*CreateNotifierResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateNotifier not implemented")
}
func (UnimplementedNotifierServiceServer) GetNotifier(context.Context, *GetNotifierRequest) (*GetNotifierResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetNotifier not implemented")
}
func (UnimplementedNotifierServiceServer) UpdateNotifier(context.Context, *UpdateNotifierRequest) (*UpdateNotifierResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateNotifier not implemented")
}
func (UnimplementedNotifierServiceServer) DeleteNotifier(context.Context, *DeleteNotifierRequest) (*DeleteNotifierResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteNotifier not implemented")
}
func (UnimplementedNotifierServiceServer) mustEmbedUnimplementedNotifierServiceServer() {}

// UnsafeNotifierServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to NotifierServiceServer will
// result in compilation errors.
type UnsafeNotifierServiceServer interface {
	mustEmbedUnimplementedNotifierServiceServer()
}

func RegisterNotifierServiceServer(s grpc.ServiceRegistrar, srv NotifierServiceServer) {
	s.RegisterService(&NotifierService_ServiceDesc, srv)
}

func _NotifierService_ListNotifiers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListNotifiersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotifierServiceServer).ListNotifiers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/ListNotifiers",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotifierServiceServer).ListNotifiers(ctx, req.(*ListNotifiersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotifierService_CreateNotifier_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateNotifierRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotifierServiceServer).CreateNotifier(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/CreateNotifier",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotifierServiceServer).CreateNotifier(ctx, req.(*CreateNotifierRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotifierService_GetNotifier_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetNotifierRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotifierServiceServer).GetNotifier(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/GetNotifier",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotifierServiceServer).GetNotifier(ctx, req.(*GetNotifierRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotifierService_UpdateNotifier_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateNotifierRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotifierServiceServer).UpdateNotifier(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/UpdateNotifier",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotifierServiceServer).UpdateNotifier(ctx, req.(*UpdateNotifierRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotifierService_DeleteNotifier_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteNotifierRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotifierServiceServer).DeleteNotifier(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.notifier.v1.NotifierService/DeleteNotifier",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotifierServiceServer).DeleteNotifier(ctx, req.(*DeleteNotifierRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// NotifierService_ServiceDesc is the grpc.ServiceDesc for NotifierService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var NotifierService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.notifier.v1.NotifierService",
	HandlerType: (*NotifierServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListNotifiers",
			Handler:    _NotifierService_ListNotifiers_Handler,
		},
		{
			MethodName: "CreateNotifier",
			Handler:    _NotifierService_CreateNotifier_Handler,
		},
		{
			MethodName: "GetNotifier",
			Handler:    _NotifierService_GetNotifier_Handler,
		},
		{
			MethodName: "UpdateNotifier",
			Handler:    _NotifierService_UpdateNotifier_Handler,
		},
		{
			MethodName: "DeleteNotifier",
			Handler:    _NotifierService_DeleteNotifier_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/notifier/v1/notifier.proto",
}
