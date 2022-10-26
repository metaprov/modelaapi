// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: github.com/metaprov/modelaapi/services/lab/v1/lab.proto

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

// LabServiceClient is the client API for LabService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type LabServiceClient interface {
	ListLabs(ctx context.Context, in *ListLabsRequest, opts ...grpc.CallOption) (*ListLabsResponse, error)
	CreateLab(ctx context.Context, in *CreateLabRequest, opts ...grpc.CallOption) (*CreateLabResponse, error)
	GetLab(ctx context.Context, in *GetLabRequest, opts ...grpc.CallOption) (*GetLabResponse, error)
	UpdateLab(ctx context.Context, in *UpdateLabRequest, opts ...grpc.CallOption) (*UpdateLabResponse, error)
	DeleteLab(ctx context.Context, in *DeleteLabRequest, opts ...grpc.CallOption) (*DeleteLabResponse, error)
}

type labServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewLabServiceClient(cc grpc.ClientConnInterface) LabServiceClient {
	return &labServiceClient{cc}
}

func (c *labServiceClient) ListLabs(ctx context.Context, in *ListLabsRequest, opts ...grpc.CallOption) (*ListLabsResponse, error) {
	out := new(ListLabsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.lab.v1.LabService/ListLabs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *labServiceClient) CreateLab(ctx context.Context, in *CreateLabRequest, opts ...grpc.CallOption) (*CreateLabResponse, error) {
	out := new(CreateLabResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.lab.v1.LabService/CreateLab", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *labServiceClient) GetLab(ctx context.Context, in *GetLabRequest, opts ...grpc.CallOption) (*GetLabResponse, error) {
	out := new(GetLabResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.lab.v1.LabService/GetLab", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *labServiceClient) UpdateLab(ctx context.Context, in *UpdateLabRequest, opts ...grpc.CallOption) (*UpdateLabResponse, error) {
	out := new(UpdateLabResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.lab.v1.LabService/UpdateLab", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *labServiceClient) DeleteLab(ctx context.Context, in *DeleteLabRequest, opts ...grpc.CallOption) (*DeleteLabResponse, error) {
	out := new(DeleteLabResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.lab.v1.LabService/DeleteLab", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// LabServiceServer is the server API for LabService service.
// All implementations must embed UnimplementedLabServiceServer
// for forward compatibility
type LabServiceServer interface {
	ListLabs(context.Context, *ListLabsRequest) (*ListLabsResponse, error)
	CreateLab(context.Context, *CreateLabRequest) (*CreateLabResponse, error)
	GetLab(context.Context, *GetLabRequest) (*GetLabResponse, error)
	UpdateLab(context.Context, *UpdateLabRequest) (*UpdateLabResponse, error)
	DeleteLab(context.Context, *DeleteLabRequest) (*DeleteLabResponse, error)
	mustEmbedUnimplementedLabServiceServer()
}

// UnimplementedLabServiceServer must be embedded to have forward compatible implementations.
type UnimplementedLabServiceServer struct {
}

func (UnimplementedLabServiceServer) ListLabs(context.Context, *ListLabsRequest) (*ListLabsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListLabs not implemented")
}
func (UnimplementedLabServiceServer) CreateLab(context.Context, *CreateLabRequest) (*CreateLabResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateLab not implemented")
}
func (UnimplementedLabServiceServer) GetLab(context.Context, *GetLabRequest) (*GetLabResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLab not implemented")
}
func (UnimplementedLabServiceServer) UpdateLab(context.Context, *UpdateLabRequest) (*UpdateLabResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateLab not implemented")
}
func (UnimplementedLabServiceServer) DeleteLab(context.Context, *DeleteLabRequest) (*DeleteLabResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteLab not implemented")
}
func (UnimplementedLabServiceServer) mustEmbedUnimplementedLabServiceServer() {}

// UnsafeLabServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to LabServiceServer will
// result in compilation errors.
type UnsafeLabServiceServer interface {
	mustEmbedUnimplementedLabServiceServer()
}

func RegisterLabServiceServer(s grpc.ServiceRegistrar, srv LabServiceServer) {
	s.RegisterService(&LabService_ServiceDesc, srv)
}

func _LabService_ListLabs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListLabsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LabServiceServer).ListLabs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.lab.v1.LabService/ListLabs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LabServiceServer).ListLabs(ctx, req.(*ListLabsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LabService_CreateLab_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateLabRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LabServiceServer).CreateLab(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.lab.v1.LabService/CreateLab",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LabServiceServer).CreateLab(ctx, req.(*CreateLabRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LabService_GetLab_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetLabRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LabServiceServer).GetLab(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.lab.v1.LabService/GetLab",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LabServiceServer).GetLab(ctx, req.(*GetLabRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LabService_UpdateLab_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateLabRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LabServiceServer).UpdateLab(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.lab.v1.LabService/UpdateLab",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LabServiceServer).UpdateLab(ctx, req.(*UpdateLabRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LabService_DeleteLab_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteLabRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LabServiceServer).DeleteLab(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.lab.v1.LabService/DeleteLab",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LabServiceServer).DeleteLab(ctx, req.(*DeleteLabRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// LabService_ServiceDesc is the grpc.ServiceDesc for LabService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var LabService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.lab.v1.LabService",
	HandlerType: (*LabServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListLabs",
			Handler:    _LabService_ListLabs_Handler,
		},
		{
			MethodName: "CreateLab",
			Handler:    _LabService_CreateLab_Handler,
		},
		{
			MethodName: "GetLab",
			Handler:    _LabService_GetLab_Handler,
		},
		{
			MethodName: "UpdateLab",
			Handler:    _LabService_UpdateLab_Handler,
		},
		{
			MethodName: "DeleteLab",
			Handler:    _LabService_DeleteLab_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/lab/v1/lab.proto",
}
