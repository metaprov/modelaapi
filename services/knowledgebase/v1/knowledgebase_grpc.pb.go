// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: github.com/metaprov/modelaapi/services/knowledgebase/v1/knowledgebase.proto

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

// KnowledgeBaseServiceClient is the client API for KnowledgeBaseService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type KnowledgeBaseServiceClient interface {
	ListKnowledgeBases(ctx context.Context, in *ListKnowledgeBasesRequest, opts ...grpc.CallOption) (*ListKnowledgeBasesResponse, error)
	CreateKnowledgeBase(ctx context.Context, in *CreateKnowledgeBaseRequest, opts ...grpc.CallOption) (*CreateKnowledgeBaseResponse, error)
	GetKnowledgeBase(ctx context.Context, in *GetKnowledgeBaseRequest, opts ...grpc.CallOption) (*GetKnowledgeBaseResponse, error)
	UpdateKnowledgeBase(ctx context.Context, in *UpdateKnowledgeBaseRequest, opts ...grpc.CallOption) (*UpdateKnowledgeBaseResponse, error)
	DeleteKnowledgeBase(ctx context.Context, in *DeleteKnowledgeBaseRequest, opts ...grpc.CallOption) (*DeleteKnowledgeBaseResponse, error)
	Refresh(ctx context.Context, in *RefreshKnowledgeBaseRequest, opts ...grpc.CallOption) (*RefreshKnowledgeBaseResponse, error)
}

type knowledgeBaseServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewKnowledgeBaseServiceClient(cc grpc.ClientConnInterface) KnowledgeBaseServiceClient {
	return &knowledgeBaseServiceClient{cc}
}

func (c *knowledgeBaseServiceClient) ListKnowledgeBases(ctx context.Context, in *ListKnowledgeBasesRequest, opts ...grpc.CallOption) (*ListKnowledgeBasesResponse, error) {
	out := new(ListKnowledgeBasesResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.knowledgebase.v1.KnowledgeBaseService/ListKnowledgeBases", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *knowledgeBaseServiceClient) CreateKnowledgeBase(ctx context.Context, in *CreateKnowledgeBaseRequest, opts ...grpc.CallOption) (*CreateKnowledgeBaseResponse, error) {
	out := new(CreateKnowledgeBaseResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.knowledgebase.v1.KnowledgeBaseService/CreateKnowledgeBase", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *knowledgeBaseServiceClient) GetKnowledgeBase(ctx context.Context, in *GetKnowledgeBaseRequest, opts ...grpc.CallOption) (*GetKnowledgeBaseResponse, error) {
	out := new(GetKnowledgeBaseResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.knowledgebase.v1.KnowledgeBaseService/GetKnowledgeBase", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *knowledgeBaseServiceClient) UpdateKnowledgeBase(ctx context.Context, in *UpdateKnowledgeBaseRequest, opts ...grpc.CallOption) (*UpdateKnowledgeBaseResponse, error) {
	out := new(UpdateKnowledgeBaseResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.knowledgebase.v1.KnowledgeBaseService/UpdateKnowledgeBase", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *knowledgeBaseServiceClient) DeleteKnowledgeBase(ctx context.Context, in *DeleteKnowledgeBaseRequest, opts ...grpc.CallOption) (*DeleteKnowledgeBaseResponse, error) {
	out := new(DeleteKnowledgeBaseResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.knowledgebase.v1.KnowledgeBaseService/DeleteKnowledgeBase", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *knowledgeBaseServiceClient) Refresh(ctx context.Context, in *RefreshKnowledgeBaseRequest, opts ...grpc.CallOption) (*RefreshKnowledgeBaseResponse, error) {
	out := new(RefreshKnowledgeBaseResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.knowledgebase.v1.KnowledgeBaseService/Refresh", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// KnowledgeBaseServiceServer is the server API for KnowledgeBaseService service.
// All implementations must embed UnimplementedKnowledgeBaseServiceServer
// for forward compatibility
type KnowledgeBaseServiceServer interface {
	ListKnowledgeBases(context.Context, *ListKnowledgeBasesRequest) (*ListKnowledgeBasesResponse, error)
	CreateKnowledgeBase(context.Context, *CreateKnowledgeBaseRequest) (*CreateKnowledgeBaseResponse, error)
	GetKnowledgeBase(context.Context, *GetKnowledgeBaseRequest) (*GetKnowledgeBaseResponse, error)
	UpdateKnowledgeBase(context.Context, *UpdateKnowledgeBaseRequest) (*UpdateKnowledgeBaseResponse, error)
	DeleteKnowledgeBase(context.Context, *DeleteKnowledgeBaseRequest) (*DeleteKnowledgeBaseResponse, error)
	Refresh(context.Context, *RefreshKnowledgeBaseRequest) (*RefreshKnowledgeBaseResponse, error)
	mustEmbedUnimplementedKnowledgeBaseServiceServer()
}

// UnimplementedKnowledgeBaseServiceServer must be embedded to have forward compatible implementations.
type UnimplementedKnowledgeBaseServiceServer struct {
}

func (UnimplementedKnowledgeBaseServiceServer) ListKnowledgeBases(context.Context, *ListKnowledgeBasesRequest) (*ListKnowledgeBasesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListKnowledgeBases not implemented")
}
func (UnimplementedKnowledgeBaseServiceServer) CreateKnowledgeBase(context.Context, *CreateKnowledgeBaseRequest) (*CreateKnowledgeBaseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateKnowledgeBase not implemented")
}
func (UnimplementedKnowledgeBaseServiceServer) GetKnowledgeBase(context.Context, *GetKnowledgeBaseRequest) (*GetKnowledgeBaseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetKnowledgeBase not implemented")
}
func (UnimplementedKnowledgeBaseServiceServer) UpdateKnowledgeBase(context.Context, *UpdateKnowledgeBaseRequest) (*UpdateKnowledgeBaseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateKnowledgeBase not implemented")
}
func (UnimplementedKnowledgeBaseServiceServer) DeleteKnowledgeBase(context.Context, *DeleteKnowledgeBaseRequest) (*DeleteKnowledgeBaseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteKnowledgeBase not implemented")
}
func (UnimplementedKnowledgeBaseServiceServer) Refresh(context.Context, *RefreshKnowledgeBaseRequest) (*RefreshKnowledgeBaseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Refresh not implemented")
}
func (UnimplementedKnowledgeBaseServiceServer) mustEmbedUnimplementedKnowledgeBaseServiceServer() {}

// UnsafeKnowledgeBaseServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to KnowledgeBaseServiceServer will
// result in compilation errors.
type UnsafeKnowledgeBaseServiceServer interface {
	mustEmbedUnimplementedKnowledgeBaseServiceServer()
}

func RegisterKnowledgeBaseServiceServer(s grpc.ServiceRegistrar, srv KnowledgeBaseServiceServer) {
	s.RegisterService(&KnowledgeBaseService_ServiceDesc, srv)
}

func _KnowledgeBaseService_ListKnowledgeBases_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListKnowledgeBasesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(KnowledgeBaseServiceServer).ListKnowledgeBases(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.knowledgebase.v1.KnowledgeBaseService/ListKnowledgeBases",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(KnowledgeBaseServiceServer).ListKnowledgeBases(ctx, req.(*ListKnowledgeBasesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _KnowledgeBaseService_CreateKnowledgeBase_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateKnowledgeBaseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(KnowledgeBaseServiceServer).CreateKnowledgeBase(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.knowledgebase.v1.KnowledgeBaseService/CreateKnowledgeBase",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(KnowledgeBaseServiceServer).CreateKnowledgeBase(ctx, req.(*CreateKnowledgeBaseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _KnowledgeBaseService_GetKnowledgeBase_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetKnowledgeBaseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(KnowledgeBaseServiceServer).GetKnowledgeBase(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.knowledgebase.v1.KnowledgeBaseService/GetKnowledgeBase",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(KnowledgeBaseServiceServer).GetKnowledgeBase(ctx, req.(*GetKnowledgeBaseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _KnowledgeBaseService_UpdateKnowledgeBase_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateKnowledgeBaseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(KnowledgeBaseServiceServer).UpdateKnowledgeBase(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.knowledgebase.v1.KnowledgeBaseService/UpdateKnowledgeBase",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(KnowledgeBaseServiceServer).UpdateKnowledgeBase(ctx, req.(*UpdateKnowledgeBaseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _KnowledgeBaseService_DeleteKnowledgeBase_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteKnowledgeBaseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(KnowledgeBaseServiceServer).DeleteKnowledgeBase(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.knowledgebase.v1.KnowledgeBaseService/DeleteKnowledgeBase",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(KnowledgeBaseServiceServer).DeleteKnowledgeBase(ctx, req.(*DeleteKnowledgeBaseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _KnowledgeBaseService_Refresh_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RefreshKnowledgeBaseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(KnowledgeBaseServiceServer).Refresh(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.knowledgebase.v1.KnowledgeBaseService/Refresh",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(KnowledgeBaseServiceServer).Refresh(ctx, req.(*RefreshKnowledgeBaseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// KnowledgeBaseService_ServiceDesc is the grpc.ServiceDesc for KnowledgeBaseService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var KnowledgeBaseService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.knowledgebase.v1.KnowledgeBaseService",
	HandlerType: (*KnowledgeBaseServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListKnowledgeBases",
			Handler:    _KnowledgeBaseService_ListKnowledgeBases_Handler,
		},
		{
			MethodName: "CreateKnowledgeBase",
			Handler:    _KnowledgeBaseService_CreateKnowledgeBase_Handler,
		},
		{
			MethodName: "GetKnowledgeBase",
			Handler:    _KnowledgeBaseService_GetKnowledgeBase_Handler,
		},
		{
			MethodName: "UpdateKnowledgeBase",
			Handler:    _KnowledgeBaseService_UpdateKnowledgeBase_Handler,
		},
		{
			MethodName: "DeleteKnowledgeBase",
			Handler:    _KnowledgeBaseService_DeleteKnowledgeBase_Handler,
		},
		{
			MethodName: "Refresh",
			Handler:    _KnowledgeBaseService_Refresh_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/knowledgebase/v1/knowledgebase.proto",
}
