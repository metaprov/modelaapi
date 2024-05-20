// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: github.com/metaprov/modelaapi/services/userroleclass/v1/userroleclass.proto

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

// UserRoleClassServiceClient is the client API for UserRoleClassService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type UserRoleClassServiceClient interface {
	ListUserRoleClasses(ctx context.Context, in *ListUserRoleClassesRequest, opts ...grpc.CallOption) (*ListUserRoleClassesResponse, error)
	CreateUserRoleClass(ctx context.Context, in *CreateUserRoleClassRequest, opts ...grpc.CallOption) (*CreateUserRoleClassResponse, error)
	GetUserRoleClass(ctx context.Context, in *GetUserRoleClassRequest, opts ...grpc.CallOption) (*GetUserRoleClassResponse, error)
	UpdateUserRoleClass(ctx context.Context, in *UpdateUserRoleClassRequest, opts ...grpc.CallOption) (*UpdateUserRoleClassResponse, error)
	DeleteUserRoleClass(ctx context.Context, in *DeleteUserRoleClassRequest, opts ...grpc.CallOption) (*DeleteUserRoleClassResponse, error)
}

type userRoleClassServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewUserRoleClassServiceClient(cc grpc.ClientConnInterface) UserRoleClassServiceClient {
	return &userRoleClassServiceClient{cc}
}

func (c *userRoleClassServiceClient) ListUserRoleClasses(ctx context.Context, in *ListUserRoleClassesRequest, opts ...grpc.CallOption) (*ListUserRoleClassesResponse, error) {
	out := new(ListUserRoleClassesResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/ListUserRoleClasses", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userRoleClassServiceClient) CreateUserRoleClass(ctx context.Context, in *CreateUserRoleClassRequest, opts ...grpc.CallOption) (*CreateUserRoleClassResponse, error) {
	out := new(CreateUserRoleClassResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/CreateUserRoleClass", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userRoleClassServiceClient) GetUserRoleClass(ctx context.Context, in *GetUserRoleClassRequest, opts ...grpc.CallOption) (*GetUserRoleClassResponse, error) {
	out := new(GetUserRoleClassResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/GetUserRoleClass", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userRoleClassServiceClient) UpdateUserRoleClass(ctx context.Context, in *UpdateUserRoleClassRequest, opts ...grpc.CallOption) (*UpdateUserRoleClassResponse, error) {
	out := new(UpdateUserRoleClassResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/UpdateUserRoleClass", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userRoleClassServiceClient) DeleteUserRoleClass(ctx context.Context, in *DeleteUserRoleClassRequest, opts ...grpc.CallOption) (*DeleteUserRoleClassResponse, error) {
	out := new(DeleteUserRoleClassResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/DeleteUserRoleClass", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UserRoleClassServiceServer is the server API for UserRoleClassService service.
// All implementations must embed UnimplementedUserRoleClassServiceServer
// for forward compatibility
type UserRoleClassServiceServer interface {
	ListUserRoleClasses(context.Context, *ListUserRoleClassesRequest) (*ListUserRoleClassesResponse, error)
	CreateUserRoleClass(context.Context, *CreateUserRoleClassRequest) (*CreateUserRoleClassResponse, error)
	GetUserRoleClass(context.Context, *GetUserRoleClassRequest) (*GetUserRoleClassResponse, error)
	UpdateUserRoleClass(context.Context, *UpdateUserRoleClassRequest) (*UpdateUserRoleClassResponse, error)
	DeleteUserRoleClass(context.Context, *DeleteUserRoleClassRequest) (*DeleteUserRoleClassResponse, error)
	mustEmbedUnimplementedUserRoleClassServiceServer()
}

// UnimplementedUserRoleClassServiceServer must be embedded to have forward compatible implementations.
type UnimplementedUserRoleClassServiceServer struct {
}

func (UnimplementedUserRoleClassServiceServer) ListUserRoleClasses(context.Context, *ListUserRoleClassesRequest) (*ListUserRoleClassesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListUserRoleClasses not implemented")
}
func (UnimplementedUserRoleClassServiceServer) CreateUserRoleClass(context.Context, *CreateUserRoleClassRequest) (*CreateUserRoleClassResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateUserRoleClass not implemented")
}
func (UnimplementedUserRoleClassServiceServer) GetUserRoleClass(context.Context, *GetUserRoleClassRequest) (*GetUserRoleClassResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserRoleClass not implemented")
}
func (UnimplementedUserRoleClassServiceServer) UpdateUserRoleClass(context.Context, *UpdateUserRoleClassRequest) (*UpdateUserRoleClassResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateUserRoleClass not implemented")
}
func (UnimplementedUserRoleClassServiceServer) DeleteUserRoleClass(context.Context, *DeleteUserRoleClassRequest) (*DeleteUserRoleClassResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteUserRoleClass not implemented")
}
func (UnimplementedUserRoleClassServiceServer) mustEmbedUnimplementedUserRoleClassServiceServer() {}

// UnsafeUserRoleClassServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to UserRoleClassServiceServer will
// result in compilation errors.
type UnsafeUserRoleClassServiceServer interface {
	mustEmbedUnimplementedUserRoleClassServiceServer()
}

func RegisterUserRoleClassServiceServer(s grpc.ServiceRegistrar, srv UserRoleClassServiceServer) {
	s.RegisterService(&UserRoleClassService_ServiceDesc, srv)
}

func _UserRoleClassService_ListUserRoleClasses_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListUserRoleClassesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserRoleClassServiceServer).ListUserRoleClasses(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/ListUserRoleClasses",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserRoleClassServiceServer).ListUserRoleClasses(ctx, req.(*ListUserRoleClassesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserRoleClassService_CreateUserRoleClass_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateUserRoleClassRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserRoleClassServiceServer).CreateUserRoleClass(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/CreateUserRoleClass",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserRoleClassServiceServer).CreateUserRoleClass(ctx, req.(*CreateUserRoleClassRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserRoleClassService_GetUserRoleClass_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetUserRoleClassRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserRoleClassServiceServer).GetUserRoleClass(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/GetUserRoleClass",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserRoleClassServiceServer).GetUserRoleClass(ctx, req.(*GetUserRoleClassRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserRoleClassService_UpdateUserRoleClass_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateUserRoleClassRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserRoleClassServiceServer).UpdateUserRoleClass(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/UpdateUserRoleClass",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserRoleClassServiceServer).UpdateUserRoleClass(ctx, req.(*UpdateUserRoleClassRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserRoleClassService_DeleteUserRoleClass_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteUserRoleClassRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserRoleClassServiceServer).DeleteUserRoleClass(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService/DeleteUserRoleClass",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserRoleClassServiceServer).DeleteUserRoleClass(ctx, req.(*DeleteUserRoleClassRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// UserRoleClassService_ServiceDesc is the grpc.ServiceDesc for UserRoleClassService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var UserRoleClassService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.userroleclass.v1.UserRoleClassService",
	HandlerType: (*UserRoleClassServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListUserRoleClasses",
			Handler:    _UserRoleClassService_ListUserRoleClasses_Handler,
		},
		{
			MethodName: "CreateUserRoleClass",
			Handler:    _UserRoleClassService_CreateUserRoleClass_Handler,
		},
		{
			MethodName: "GetUserRoleClass",
			Handler:    _UserRoleClassService_GetUserRoleClass_Handler,
		},
		{
			MethodName: "UpdateUserRoleClass",
			Handler:    _UserRoleClassService_UpdateUserRoleClass_Handler,
		},
		{
			MethodName: "DeleteUserRoleClass",
			Handler:    _UserRoleClassService_DeleteUserRoleClass_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/userroleclass/v1/userroleclass.proto",
}
