// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: github.com/metaprov/modelaapi/services/modelclassrun/v1/modelclassrun.proto

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

// ModelClassRunServiceClient is the client API for ModelClassRunService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ModelClassRunServiceClient interface {
	ListModelClassRuns(ctx context.Context, in *ListModelClassRunsRequest, opts ...grpc.CallOption) (*ListModelClassRunsResponse, error)
	CreateModelClassRun(ctx context.Context, in *CreateModelClassRunRequest, opts ...grpc.CallOption) (*CreateModelClassRunResponse, error)
	GetModelClassRun(ctx context.Context, in *GetModelClassRunRequest, opts ...grpc.CallOption) (*GetModelClassRunResponse, error)
	UpdateModelClassRun(ctx context.Context, in *UpdateModelClassRunRequest, opts ...grpc.CallOption) (*UpdateModelClassRunResponse, error)
	DeleteModelClassRun(ctx context.Context, in *DeleteModelClassRunRequest, opts ...grpc.CallOption) (*DeleteModelClassRunResponse, error)
	ApproveModelClassRun(ctx context.Context, in *ApproveModelClassRunRequest, opts ...grpc.CallOption) (*ApproveModelClassRunResponse, error)
	DenyModelClassRun(ctx context.Context, in *DenyModelClassRunRequest, opts ...grpc.CallOption) (*DenyModelClassRunResponse, error)
	AbortModelClassRun(ctx context.Context, in *AbortModelClassRunRequest, opts ...grpc.CallOption) (*AbortModelClassRunResponse, error)
	PauseModelClassRun(ctx context.Context, in *PauseModelClassRunRequest, opts ...grpc.CallOption) (*PauseModelClassRunResponse, error)
	ResumeModelClassRun(ctx context.Context, in *ResumeModelClassRunRequest, opts ...grpc.CallOption) (*ResumeModelClassRunResponse, error)
}

type modelClassRunServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewModelClassRunServiceClient(cc grpc.ClientConnInterface) ModelClassRunServiceClient {
	return &modelClassRunServiceClient{cc}
}

func (c *modelClassRunServiceClient) ListModelClassRuns(ctx context.Context, in *ListModelClassRunsRequest, opts ...grpc.CallOption) (*ListModelClassRunsResponse, error) {
	out := new(ListModelClassRunsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ListModelClassRuns", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassRunServiceClient) CreateModelClassRun(ctx context.Context, in *CreateModelClassRunRequest, opts ...grpc.CallOption) (*CreateModelClassRunResponse, error) {
	out := new(CreateModelClassRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/CreateModelClassRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassRunServiceClient) GetModelClassRun(ctx context.Context, in *GetModelClassRunRequest, opts ...grpc.CallOption) (*GetModelClassRunResponse, error) {
	out := new(GetModelClassRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/GetModelClassRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassRunServiceClient) UpdateModelClassRun(ctx context.Context, in *UpdateModelClassRunRequest, opts ...grpc.CallOption) (*UpdateModelClassRunResponse, error) {
	out := new(UpdateModelClassRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/UpdateModelClassRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassRunServiceClient) DeleteModelClassRun(ctx context.Context, in *DeleteModelClassRunRequest, opts ...grpc.CallOption) (*DeleteModelClassRunResponse, error) {
	out := new(DeleteModelClassRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/DeleteModelClassRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassRunServiceClient) ApproveModelClassRun(ctx context.Context, in *ApproveModelClassRunRequest, opts ...grpc.CallOption) (*ApproveModelClassRunResponse, error) {
	out := new(ApproveModelClassRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ApproveModelClassRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassRunServiceClient) DenyModelClassRun(ctx context.Context, in *DenyModelClassRunRequest, opts ...grpc.CallOption) (*DenyModelClassRunResponse, error) {
	out := new(DenyModelClassRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/DenyModelClassRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassRunServiceClient) AbortModelClassRun(ctx context.Context, in *AbortModelClassRunRequest, opts ...grpc.CallOption) (*AbortModelClassRunResponse, error) {
	out := new(AbortModelClassRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/AbortModelClassRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassRunServiceClient) PauseModelClassRun(ctx context.Context, in *PauseModelClassRunRequest, opts ...grpc.CallOption) (*PauseModelClassRunResponse, error) {
	out := new(PauseModelClassRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/PauseModelClassRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassRunServiceClient) ResumeModelClassRun(ctx context.Context, in *ResumeModelClassRunRequest, opts ...grpc.CallOption) (*ResumeModelClassRunResponse, error) {
	out := new(ResumeModelClassRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ResumeModelClassRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ModelClassRunServiceServer is the server API for ModelClassRunService service.
// All implementations must embed UnimplementedModelClassRunServiceServer
// for forward compatibility
type ModelClassRunServiceServer interface {
	ListModelClassRuns(context.Context, *ListModelClassRunsRequest) (*ListModelClassRunsResponse, error)
	CreateModelClassRun(context.Context, *CreateModelClassRunRequest) (*CreateModelClassRunResponse, error)
	GetModelClassRun(context.Context, *GetModelClassRunRequest) (*GetModelClassRunResponse, error)
	UpdateModelClassRun(context.Context, *UpdateModelClassRunRequest) (*UpdateModelClassRunResponse, error)
	DeleteModelClassRun(context.Context, *DeleteModelClassRunRequest) (*DeleteModelClassRunResponse, error)
	ApproveModelClassRun(context.Context, *ApproveModelClassRunRequest) (*ApproveModelClassRunResponse, error)
	DenyModelClassRun(context.Context, *DenyModelClassRunRequest) (*DenyModelClassRunResponse, error)
	AbortModelClassRun(context.Context, *AbortModelClassRunRequest) (*AbortModelClassRunResponse, error)
	PauseModelClassRun(context.Context, *PauseModelClassRunRequest) (*PauseModelClassRunResponse, error)
	ResumeModelClassRun(context.Context, *ResumeModelClassRunRequest) (*ResumeModelClassRunResponse, error)
	mustEmbedUnimplementedModelClassRunServiceServer()
}

// UnimplementedModelClassRunServiceServer must be embedded to have forward compatible implementations.
type UnimplementedModelClassRunServiceServer struct {
}

func (UnimplementedModelClassRunServiceServer) ListModelClassRuns(context.Context, *ListModelClassRunsRequest) (*ListModelClassRunsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListModelClassRuns not implemented")
}
func (UnimplementedModelClassRunServiceServer) CreateModelClassRun(context.Context, *CreateModelClassRunRequest) (*CreateModelClassRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateModelClassRun not implemented")
}
func (UnimplementedModelClassRunServiceServer) GetModelClassRun(context.Context, *GetModelClassRunRequest) (*GetModelClassRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetModelClassRun not implemented")
}
func (UnimplementedModelClassRunServiceServer) UpdateModelClassRun(context.Context, *UpdateModelClassRunRequest) (*UpdateModelClassRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateModelClassRun not implemented")
}
func (UnimplementedModelClassRunServiceServer) DeleteModelClassRun(context.Context, *DeleteModelClassRunRequest) (*DeleteModelClassRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteModelClassRun not implemented")
}
func (UnimplementedModelClassRunServiceServer) ApproveModelClassRun(context.Context, *ApproveModelClassRunRequest) (*ApproveModelClassRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ApproveModelClassRun not implemented")
}
func (UnimplementedModelClassRunServiceServer) DenyModelClassRun(context.Context, *DenyModelClassRunRequest) (*DenyModelClassRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DenyModelClassRun not implemented")
}
func (UnimplementedModelClassRunServiceServer) AbortModelClassRun(context.Context, *AbortModelClassRunRequest) (*AbortModelClassRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AbortModelClassRun not implemented")
}
func (UnimplementedModelClassRunServiceServer) PauseModelClassRun(context.Context, *PauseModelClassRunRequest) (*PauseModelClassRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PauseModelClassRun not implemented")
}
func (UnimplementedModelClassRunServiceServer) ResumeModelClassRun(context.Context, *ResumeModelClassRunRequest) (*ResumeModelClassRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ResumeModelClassRun not implemented")
}
func (UnimplementedModelClassRunServiceServer) mustEmbedUnimplementedModelClassRunServiceServer() {}

// UnsafeModelClassRunServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ModelClassRunServiceServer will
// result in compilation errors.
type UnsafeModelClassRunServiceServer interface {
	mustEmbedUnimplementedModelClassRunServiceServer()
}

func RegisterModelClassRunServiceServer(s grpc.ServiceRegistrar, srv ModelClassRunServiceServer) {
	s.RegisterService(&ModelClassRunService_ServiceDesc, srv)
}

func _ModelClassRunService_ListModelClassRuns_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListModelClassRunsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassRunServiceServer).ListModelClassRuns(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ListModelClassRuns",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassRunServiceServer).ListModelClassRuns(ctx, req.(*ListModelClassRunsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassRunService_CreateModelClassRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateModelClassRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassRunServiceServer).CreateModelClassRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/CreateModelClassRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassRunServiceServer).CreateModelClassRun(ctx, req.(*CreateModelClassRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassRunService_GetModelClassRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetModelClassRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassRunServiceServer).GetModelClassRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/GetModelClassRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassRunServiceServer).GetModelClassRun(ctx, req.(*GetModelClassRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassRunService_UpdateModelClassRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateModelClassRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassRunServiceServer).UpdateModelClassRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/UpdateModelClassRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassRunServiceServer).UpdateModelClassRun(ctx, req.(*UpdateModelClassRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassRunService_DeleteModelClassRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteModelClassRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassRunServiceServer).DeleteModelClassRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/DeleteModelClassRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassRunServiceServer).DeleteModelClassRun(ctx, req.(*DeleteModelClassRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassRunService_ApproveModelClassRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ApproveModelClassRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassRunServiceServer).ApproveModelClassRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ApproveModelClassRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassRunServiceServer).ApproveModelClassRun(ctx, req.(*ApproveModelClassRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassRunService_DenyModelClassRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DenyModelClassRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassRunServiceServer).DenyModelClassRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/DenyModelClassRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassRunServiceServer).DenyModelClassRun(ctx, req.(*DenyModelClassRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassRunService_AbortModelClassRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AbortModelClassRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassRunServiceServer).AbortModelClassRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/AbortModelClassRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassRunServiceServer).AbortModelClassRun(ctx, req.(*AbortModelClassRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassRunService_PauseModelClassRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PauseModelClassRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassRunServiceServer).PauseModelClassRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/PauseModelClassRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassRunServiceServer).PauseModelClassRun(ctx, req.(*PauseModelClassRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassRunService_ResumeModelClassRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ResumeModelClassRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassRunServiceServer).ResumeModelClassRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService/ResumeModelClassRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassRunServiceServer).ResumeModelClassRun(ctx, req.(*ResumeModelClassRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ModelClassRunService_ServiceDesc is the grpc.ServiceDesc for ModelClassRunService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ModelClassRunService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.modelclassrun.v1.ModelClassRunService",
	HandlerType: (*ModelClassRunServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListModelClassRuns",
			Handler:    _ModelClassRunService_ListModelClassRuns_Handler,
		},
		{
			MethodName: "CreateModelClassRun",
			Handler:    _ModelClassRunService_CreateModelClassRun_Handler,
		},
		{
			MethodName: "GetModelClassRun",
			Handler:    _ModelClassRunService_GetModelClassRun_Handler,
		},
		{
			MethodName: "UpdateModelClassRun",
			Handler:    _ModelClassRunService_UpdateModelClassRun_Handler,
		},
		{
			MethodName: "DeleteModelClassRun",
			Handler:    _ModelClassRunService_DeleteModelClassRun_Handler,
		},
		{
			MethodName: "ApproveModelClassRun",
			Handler:    _ModelClassRunService_ApproveModelClassRun_Handler,
		},
		{
			MethodName: "DenyModelClassRun",
			Handler:    _ModelClassRunService_DenyModelClassRun_Handler,
		},
		{
			MethodName: "AbortModelClassRun",
			Handler:    _ModelClassRunService_AbortModelClassRun_Handler,
		},
		{
			MethodName: "PauseModelClassRun",
			Handler:    _ModelClassRunService_PauseModelClassRun_Handler,
		},
		{
			MethodName: "ResumeModelClassRun",
			Handler:    _ModelClassRunService_ResumeModelClassRun_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/modelclassrun/v1/modelclassrun.proto",
}
