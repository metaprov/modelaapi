// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: github.com/metaprov/modelaapi/services/modelclass/v1/modelclass.proto

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

// ModelClassServiceClient is the client API for ModelClassService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ModelClassServiceClient interface {
	ListModelClasses(ctx context.Context, in *ListModelClassRequest, opts ...grpc.CallOption) (*ListModelClassResponse, error)
	CreateModelClass(ctx context.Context, in *CreateModelClassRequest, opts ...grpc.CallOption) (*CreateModelClassResponse, error)
	GetModelClass(ctx context.Context, in *GetModelClassRequest, opts ...grpc.CallOption) (*GetModelClassResponse, error)
	UpdateModelClass(ctx context.Context, in *UpdateModelClassRequest, opts ...grpc.CallOption) (*UpdateModelClassResponse, error)
	DeleteModelClass(ctx context.Context, in *DeleteModelClassRequest, opts ...grpc.CallOption) (*DeleteModelClassResponse, error)
	CreateModelClassProfile(ctx context.Context, in *CreateModelClassProfileRequest, opts ...grpc.CallOption) (*CreateModelClassProfileResponse, error)
	TrainNow(ctx context.Context, in *ModelClassTrainNowRequest, opts ...grpc.CallOption) (*ModelClassTrainNowResponse, error)
	PredictNow(ctx context.Context, in *ModelClassPredictNowRequest, opts ...grpc.CallOption) (*ModelClassPredictNowResponse, error)
}

type modelClassServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewModelClassServiceClient(cc grpc.ClientConnInterface) ModelClassServiceClient {
	return &modelClassServiceClient{cc}
}

func (c *modelClassServiceClient) ListModelClasses(ctx context.Context, in *ListModelClassRequest, opts ...grpc.CallOption) (*ListModelClassResponse, error) {
	out := new(ListModelClassResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/ListModelClasses", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassServiceClient) CreateModelClass(ctx context.Context, in *CreateModelClassRequest, opts ...grpc.CallOption) (*CreateModelClassResponse, error) {
	out := new(CreateModelClassResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/CreateModelClass", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassServiceClient) GetModelClass(ctx context.Context, in *GetModelClassRequest, opts ...grpc.CallOption) (*GetModelClassResponse, error) {
	out := new(GetModelClassResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/GetModelClass", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassServiceClient) UpdateModelClass(ctx context.Context, in *UpdateModelClassRequest, opts ...grpc.CallOption) (*UpdateModelClassResponse, error) {
	out := new(UpdateModelClassResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/UpdateModelClass", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassServiceClient) DeleteModelClass(ctx context.Context, in *DeleteModelClassRequest, opts ...grpc.CallOption) (*DeleteModelClassResponse, error) {
	out := new(DeleteModelClassResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/DeleteModelClass", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassServiceClient) CreateModelClassProfile(ctx context.Context, in *CreateModelClassProfileRequest, opts ...grpc.CallOption) (*CreateModelClassProfileResponse, error) {
	out := new(CreateModelClassProfileResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/CreateModelClassProfile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassServiceClient) TrainNow(ctx context.Context, in *ModelClassTrainNowRequest, opts ...grpc.CallOption) (*ModelClassTrainNowResponse, error) {
	out := new(ModelClassTrainNowResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/TrainNow", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelClassServiceClient) PredictNow(ctx context.Context, in *ModelClassPredictNowRequest, opts ...grpc.CallOption) (*ModelClassPredictNowResponse, error) {
	out := new(ModelClassPredictNowResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/PredictNow", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ModelClassServiceServer is the server API for ModelClassService service.
// All implementations must embed UnimplementedModelClassServiceServer
// for forward compatibility
type ModelClassServiceServer interface {
	ListModelClasses(context.Context, *ListModelClassRequest) (*ListModelClassResponse, error)
	CreateModelClass(context.Context, *CreateModelClassRequest) (*CreateModelClassResponse, error)
	GetModelClass(context.Context, *GetModelClassRequest) (*GetModelClassResponse, error)
	UpdateModelClass(context.Context, *UpdateModelClassRequest) (*UpdateModelClassResponse, error)
	DeleteModelClass(context.Context, *DeleteModelClassRequest) (*DeleteModelClassResponse, error)
	CreateModelClassProfile(context.Context, *CreateModelClassProfileRequest) (*CreateModelClassProfileResponse, error)
	TrainNow(context.Context, *ModelClassTrainNowRequest) (*ModelClassTrainNowResponse, error)
	PredictNow(context.Context, *ModelClassPredictNowRequest) (*ModelClassPredictNowResponse, error)
	mustEmbedUnimplementedModelClassServiceServer()
}

// UnimplementedModelClassServiceServer must be embedded to have forward compatible implementations.
type UnimplementedModelClassServiceServer struct {
}

func (UnimplementedModelClassServiceServer) ListModelClasses(context.Context, *ListModelClassRequest) (*ListModelClassResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListModelClasses not implemented")
}
func (UnimplementedModelClassServiceServer) CreateModelClass(context.Context, *CreateModelClassRequest) (*CreateModelClassResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateModelClass not implemented")
}
func (UnimplementedModelClassServiceServer) GetModelClass(context.Context, *GetModelClassRequest) (*GetModelClassResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetModelClass not implemented")
}
func (UnimplementedModelClassServiceServer) UpdateModelClass(context.Context, *UpdateModelClassRequest) (*UpdateModelClassResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateModelClass not implemented")
}
func (UnimplementedModelClassServiceServer) DeleteModelClass(context.Context, *DeleteModelClassRequest) (*DeleteModelClassResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteModelClass not implemented")
}
func (UnimplementedModelClassServiceServer) CreateModelClassProfile(context.Context, *CreateModelClassProfileRequest) (*CreateModelClassProfileResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateModelClassProfile not implemented")
}
func (UnimplementedModelClassServiceServer) TrainNow(context.Context, *ModelClassTrainNowRequest) (*ModelClassTrainNowResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TrainNow not implemented")
}
func (UnimplementedModelClassServiceServer) PredictNow(context.Context, *ModelClassPredictNowRequest) (*ModelClassPredictNowResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PredictNow not implemented")
}
func (UnimplementedModelClassServiceServer) mustEmbedUnimplementedModelClassServiceServer() {}

// UnsafeModelClassServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ModelClassServiceServer will
// result in compilation errors.
type UnsafeModelClassServiceServer interface {
	mustEmbedUnimplementedModelClassServiceServer()
}

func RegisterModelClassServiceServer(s grpc.ServiceRegistrar, srv ModelClassServiceServer) {
	s.RegisterService(&ModelClassService_ServiceDesc, srv)
}

func _ModelClassService_ListModelClasses_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListModelClassRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassServiceServer).ListModelClasses(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/ListModelClasses",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassServiceServer).ListModelClasses(ctx, req.(*ListModelClassRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassService_CreateModelClass_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateModelClassRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassServiceServer).CreateModelClass(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/CreateModelClass",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassServiceServer).CreateModelClass(ctx, req.(*CreateModelClassRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassService_GetModelClass_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetModelClassRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassServiceServer).GetModelClass(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/GetModelClass",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassServiceServer).GetModelClass(ctx, req.(*GetModelClassRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassService_UpdateModelClass_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateModelClassRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassServiceServer).UpdateModelClass(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/UpdateModelClass",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassServiceServer).UpdateModelClass(ctx, req.(*UpdateModelClassRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassService_DeleteModelClass_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteModelClassRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassServiceServer).DeleteModelClass(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/DeleteModelClass",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassServiceServer).DeleteModelClass(ctx, req.(*DeleteModelClassRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassService_CreateModelClassProfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateModelClassProfileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassServiceServer).CreateModelClassProfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/CreateModelClassProfile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassServiceServer).CreateModelClassProfile(ctx, req.(*CreateModelClassProfileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassService_TrainNow_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ModelClassTrainNowRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassServiceServer).TrainNow(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/TrainNow",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassServiceServer).TrainNow(ctx, req.(*ModelClassTrainNowRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelClassService_PredictNow_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ModelClassPredictNowRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelClassServiceServer).PredictNow(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.study.v1.ModelClassService/PredictNow",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelClassServiceServer).PredictNow(ctx, req.(*ModelClassPredictNowRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ModelClassService_ServiceDesc is the grpc.ServiceDesc for ModelClassService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ModelClassService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.study.v1.ModelClassService",
	HandlerType: (*ModelClassServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListModelClasses",
			Handler:    _ModelClassService_ListModelClasses_Handler,
		},
		{
			MethodName: "CreateModelClass",
			Handler:    _ModelClassService_CreateModelClass_Handler,
		},
		{
			MethodName: "GetModelClass",
			Handler:    _ModelClassService_GetModelClass_Handler,
		},
		{
			MethodName: "UpdateModelClass",
			Handler:    _ModelClassService_UpdateModelClass_Handler,
		},
		{
			MethodName: "DeleteModelClass",
			Handler:    _ModelClassService_DeleteModelClass_Handler,
		},
		{
			MethodName: "CreateModelClassProfile",
			Handler:    _ModelClassService_CreateModelClassProfile_Handler,
		},
		{
			MethodName: "TrainNow",
			Handler:    _ModelClassService_TrainNow_Handler,
		},
		{
			MethodName: "PredictNow",
			Handler:    _ModelClassService_PredictNow_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/modelclass/v1/modelclass.proto",
}
