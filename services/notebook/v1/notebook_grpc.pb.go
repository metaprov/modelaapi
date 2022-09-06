// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: github.com/metaprov/modelaapi/services/notebook/v1/notebook.proto

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

// NotebookServiceClient is the client API for NotebookService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type NotebookServiceClient interface {
	ListNotebooks(ctx context.Context, in *ListNotebooksRequest, opts ...grpc.CallOption) (*ListNotebooksResponse, error)
	CreateNotebook(ctx context.Context, in *CreateNotebookRequest, opts ...grpc.CallOption) (*CreateNotebookResponse, error)
	GetNotebook(ctx context.Context, in *GetNotebookRequest, opts ...grpc.CallOption) (*GetNotebookResponse, error)
	UpdateNotebook(ctx context.Context, in *UpdateNotebookRequest, opts ...grpc.CallOption) (*UpdateNotebookResponse, error)
	DeleteNotebook(ctx context.Context, in *DeleteNotebookRequest, opts ...grpc.CallOption) (*DeleteNotebookResponse, error)
}

type notebookServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewNotebookServiceClient(cc grpc.ClientConnInterface) NotebookServiceClient {
	return &notebookServiceClient{cc}
}

func (c *notebookServiceClient) ListNotebooks(ctx context.Context, in *ListNotebooksRequest, opts ...grpc.CallOption) (*ListNotebooksResponse, error) {
	out := new(ListNotebooksResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.notebook.v1.NotebookService/ListNotebooks", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notebookServiceClient) CreateNotebook(ctx context.Context, in *CreateNotebookRequest, opts ...grpc.CallOption) (*CreateNotebookResponse, error) {
	out := new(CreateNotebookResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.notebook.v1.NotebookService/CreateNotebook", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notebookServiceClient) GetNotebook(ctx context.Context, in *GetNotebookRequest, opts ...grpc.CallOption) (*GetNotebookResponse, error) {
	out := new(GetNotebookResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.notebook.v1.NotebookService/GetNotebook", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notebookServiceClient) UpdateNotebook(ctx context.Context, in *UpdateNotebookRequest, opts ...grpc.CallOption) (*UpdateNotebookResponse, error) {
	out := new(UpdateNotebookResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.notebook.v1.NotebookService/UpdateNotebook", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *notebookServiceClient) DeleteNotebook(ctx context.Context, in *DeleteNotebookRequest, opts ...grpc.CallOption) (*DeleteNotebookResponse, error) {
	out := new(DeleteNotebookResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.notebook.v1.NotebookService/DeleteNotebook", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// NotebookServiceServer is the server API for NotebookService service.
// All implementations must embed UnimplementedNotebookServiceServer
// for forward compatibility
type NotebookServiceServer interface {
	ListNotebooks(context.Context, *ListNotebooksRequest) (*ListNotebooksResponse, error)
	CreateNotebook(context.Context, *CreateNotebookRequest) (*CreateNotebookResponse, error)
	GetNotebook(context.Context, *GetNotebookRequest) (*GetNotebookResponse, error)
	UpdateNotebook(context.Context, *UpdateNotebookRequest) (*UpdateNotebookResponse, error)
	DeleteNotebook(context.Context, *DeleteNotebookRequest) (*DeleteNotebookResponse, error)
	mustEmbedUnimplementedNotebookServiceServer()
}

// UnimplementedNotebookServiceServer must be embedded to have forward compatible implementations.
type UnimplementedNotebookServiceServer struct {
}

func (UnimplementedNotebookServiceServer) ListNotebooks(context.Context, *ListNotebooksRequest) (*ListNotebooksResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListNotebooks not implemented")
}
func (UnimplementedNotebookServiceServer) CreateNotebook(context.Context, *CreateNotebookRequest) (*CreateNotebookResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateNotebook not implemented")
}
func (UnimplementedNotebookServiceServer) GetNotebook(context.Context, *GetNotebookRequest) (*GetNotebookResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetNotebook not implemented")
}
func (UnimplementedNotebookServiceServer) UpdateNotebook(context.Context, *UpdateNotebookRequest) (*UpdateNotebookResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateNotebook not implemented")
}
func (UnimplementedNotebookServiceServer) DeleteNotebook(context.Context, *DeleteNotebookRequest) (*DeleteNotebookResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteNotebook not implemented")
}
func (UnimplementedNotebookServiceServer) mustEmbedUnimplementedNotebookServiceServer() {}

// UnsafeNotebookServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to NotebookServiceServer will
// result in compilation errors.
type UnsafeNotebookServiceServer interface {
	mustEmbedUnimplementedNotebookServiceServer()
}

func RegisterNotebookServiceServer(s grpc.ServiceRegistrar, srv NotebookServiceServer) {
	s.RegisterService(&NotebookService_ServiceDesc, srv)
}

func _NotebookService_ListNotebooks_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListNotebooksRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotebookServiceServer).ListNotebooks(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.notebook.v1.NotebookService/ListNotebooks",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotebookServiceServer).ListNotebooks(ctx, req.(*ListNotebooksRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotebookService_CreateNotebook_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateNotebookRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotebookServiceServer).CreateNotebook(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.notebook.v1.NotebookService/CreateNotebook",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotebookServiceServer).CreateNotebook(ctx, req.(*CreateNotebookRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotebookService_GetNotebook_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetNotebookRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotebookServiceServer).GetNotebook(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.notebook.v1.NotebookService/GetNotebook",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotebookServiceServer).GetNotebook(ctx, req.(*GetNotebookRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotebookService_UpdateNotebook_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateNotebookRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotebookServiceServer).UpdateNotebook(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.notebook.v1.NotebookService/UpdateNotebook",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotebookServiceServer).UpdateNotebook(ctx, req.(*UpdateNotebookRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NotebookService_DeleteNotebook_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteNotebookRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NotebookServiceServer).DeleteNotebook(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.notebook.v1.NotebookService/DeleteNotebook",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NotebookServiceServer).DeleteNotebook(ctx, req.(*DeleteNotebookRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// NotebookService_ServiceDesc is the grpc.ServiceDesc for NotebookService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var NotebookService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.notebook.v1.NotebookService",
	HandlerType: (*NotebookServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListNotebooks",
			Handler:    _NotebookService_ListNotebooks_Handler,
		},
		{
			MethodName: "CreateNotebook",
			Handler:    _NotebookService_CreateNotebook_Handler,
		},
		{
			MethodName: "GetNotebook",
			Handler:    _NotebookService_GetNotebook_Handler,
		},
		{
			MethodName: "UpdateNotebook",
			Handler:    _NotebookService_UpdateNotebook_Handler,
		},
		{
			MethodName: "DeleteNotebook",
			Handler:    _NotebookService_DeleteNotebook_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/notebook/v1/notebook.proto",
}
