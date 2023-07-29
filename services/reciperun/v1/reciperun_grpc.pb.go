// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: github.com/metaprov/modelaapi/services/reciperun/v1/reciperun.proto

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

// RecipeRunServiceClient is the client API for RecipeRunService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type RecipeRunServiceClient interface {
	ListRecipeRuns(ctx context.Context, in *ListRecipeRunsRequest, opts ...grpc.CallOption) (*ListRecipeRunsResponse, error)
	CreateRecipeRun(ctx context.Context, in *CreateRecipeRunRequest, opts ...grpc.CallOption) (*CreateRecipeRunResponse, error)
	GetRecipeRun(ctx context.Context, in *GetRecipeRunRequest, opts ...grpc.CallOption) (*GetRecipeRunResponse, error)
	UpdateRecipeRun(ctx context.Context, in *UpdateRecipeRunRequest, opts ...grpc.CallOption) (*UpdateRecipeRunResponse, error)
	DeleteRecipeRun(ctx context.Context, in *DeleteRecipeRunRequest, opts ...grpc.CallOption) (*DeleteRecipeRunResponse, error)
}

type recipeRunServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewRecipeRunServiceClient(cc grpc.ClientConnInterface) RecipeRunServiceClient {
	return &recipeRunServiceClient{cc}
}

func (c *recipeRunServiceClient) ListRecipeRuns(ctx context.Context, in *ListRecipeRunsRequest, opts ...grpc.CallOption) (*ListRecipeRunsResponse, error) {
	out := new(ListRecipeRunsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/ListRecipeRuns", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *recipeRunServiceClient) CreateRecipeRun(ctx context.Context, in *CreateRecipeRunRequest, opts ...grpc.CallOption) (*CreateRecipeRunResponse, error) {
	out := new(CreateRecipeRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/CreateRecipeRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *recipeRunServiceClient) GetRecipeRun(ctx context.Context, in *GetRecipeRunRequest, opts ...grpc.CallOption) (*GetRecipeRunResponse, error) {
	out := new(GetRecipeRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/GetRecipeRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *recipeRunServiceClient) UpdateRecipeRun(ctx context.Context, in *UpdateRecipeRunRequest, opts ...grpc.CallOption) (*UpdateRecipeRunResponse, error) {
	out := new(UpdateRecipeRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/UpdateRecipeRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *recipeRunServiceClient) DeleteRecipeRun(ctx context.Context, in *DeleteRecipeRunRequest, opts ...grpc.CallOption) (*DeleteRecipeRunResponse, error) {
	out := new(DeleteRecipeRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/DeleteRecipeRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// RecipeRunServiceServer is the server API for RecipeRunService service.
// All implementations must embed UnimplementedRecipeRunServiceServer
// for forward compatibility
type RecipeRunServiceServer interface {
	ListRecipeRuns(context.Context, *ListRecipeRunsRequest) (*ListRecipeRunsResponse, error)
	CreateRecipeRun(context.Context, *CreateRecipeRunRequest) (*CreateRecipeRunResponse, error)
	GetRecipeRun(context.Context, *GetRecipeRunRequest) (*GetRecipeRunResponse, error)
	UpdateRecipeRun(context.Context, *UpdateRecipeRunRequest) (*UpdateRecipeRunResponse, error)
	DeleteRecipeRun(context.Context, *DeleteRecipeRunRequest) (*DeleteRecipeRunResponse, error)
	mustEmbedUnimplementedRecipeRunServiceServer()
}

// UnimplementedRecipeRunServiceServer must be embedded to have forward compatible implementations.
type UnimplementedRecipeRunServiceServer struct {
}

func (UnimplementedRecipeRunServiceServer) ListRecipeRuns(context.Context, *ListRecipeRunsRequest) (*ListRecipeRunsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListRecipeRuns not implemented")
}
func (UnimplementedRecipeRunServiceServer) CreateRecipeRun(context.Context, *CreateRecipeRunRequest) (*CreateRecipeRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateRecipeRun not implemented")
}
func (UnimplementedRecipeRunServiceServer) GetRecipeRun(context.Context, *GetRecipeRunRequest) (*GetRecipeRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetRecipeRun not implemented")
}
func (UnimplementedRecipeRunServiceServer) UpdateRecipeRun(context.Context, *UpdateRecipeRunRequest) (*UpdateRecipeRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateRecipeRun not implemented")
}
func (UnimplementedRecipeRunServiceServer) DeleteRecipeRun(context.Context, *DeleteRecipeRunRequest) (*DeleteRecipeRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteRecipeRun not implemented")
}
func (UnimplementedRecipeRunServiceServer) mustEmbedUnimplementedRecipeRunServiceServer() {}

// UnsafeRecipeRunServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to RecipeRunServiceServer will
// result in compilation errors.
type UnsafeRecipeRunServiceServer interface {
	mustEmbedUnimplementedRecipeRunServiceServer()
}

func RegisterRecipeRunServiceServer(s grpc.ServiceRegistrar, srv RecipeRunServiceServer) {
	s.RegisterService(&RecipeRunService_ServiceDesc, srv)
}

func _RecipeRunService_ListRecipeRuns_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListRecipeRunsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecipeRunServiceServer).ListRecipeRuns(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/ListRecipeRuns",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecipeRunServiceServer).ListRecipeRuns(ctx, req.(*ListRecipeRunsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RecipeRunService_CreateRecipeRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateRecipeRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecipeRunServiceServer).CreateRecipeRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/CreateRecipeRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecipeRunServiceServer).CreateRecipeRun(ctx, req.(*CreateRecipeRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RecipeRunService_GetRecipeRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetRecipeRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecipeRunServiceServer).GetRecipeRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/GetRecipeRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecipeRunServiceServer).GetRecipeRun(ctx, req.(*GetRecipeRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RecipeRunService_UpdateRecipeRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateRecipeRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecipeRunServiceServer).UpdateRecipeRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/UpdateRecipeRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecipeRunServiceServer).UpdateRecipeRun(ctx, req.(*UpdateRecipeRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RecipeRunService_DeleteRecipeRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteRecipeRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecipeRunServiceServer).DeleteRecipeRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService/DeleteRecipeRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecipeRunServiceServer).DeleteRecipeRun(ctx, req.(*DeleteRecipeRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// RecipeRunService_ServiceDesc is the grpc.ServiceDesc for RecipeRunService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var RecipeRunService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.reciperun.v1.RecipeRunService",
	HandlerType: (*RecipeRunServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListRecipeRuns",
			Handler:    _RecipeRunService_ListRecipeRuns_Handler,
		},
		{
			MethodName: "CreateRecipeRun",
			Handler:    _RecipeRunService_CreateRecipeRun_Handler,
		},
		{
			MethodName: "GetRecipeRun",
			Handler:    _RecipeRunService_GetRecipeRun_Handler,
		},
		{
			MethodName: "UpdateRecipeRun",
			Handler:    _RecipeRunService_UpdateRecipeRun_Handler,
		},
		{
			MethodName: "DeleteRecipeRun",
			Handler:    _RecipeRunService_DeleteRecipeRun_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/reciperun/v1/reciperun.proto",
}
