// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: github.com/metaprov/modelaapi/services/predictor/v1/predictor.proto

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

// PredictorServiceClient is the client API for PredictorService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PredictorServiceClient interface {
	ListPredictors(ctx context.Context, in *ListPredictorsRequest, opts ...grpc.CallOption) (*ListPredictorsResponse, error)
	CreatePredictor(ctx context.Context, in *CreatePredictorRequest, opts ...grpc.CallOption) (*CreatePredictorResponse, error)
	GetPredictor(ctx context.Context, in *GetPredictorRequest, opts ...grpc.CallOption) (*GetPredictorResponse, error)
	UpdatePredictor(ctx context.Context, in *UpdatePredictorRequest, opts ...grpc.CallOption) (*UpdatePredictorResponse, error)
	RollBack(ctx context.Context, in *RollbackRequest, opts ...grpc.CallOption) (*RollbackResponse, error)
	DeletePredictor(ctx context.Context, in *DeletePredictorRequest, opts ...grpc.CallOption) (*DeletePredictorResponse, error)
	PredictOne(ctx context.Context, in *PredictOneRequest, opts ...grpc.CallOption) (*PredictOneResponse, error)
}

type predictorServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPredictorServiceClient(cc grpc.ClientConnInterface) PredictorServiceClient {
	return &predictorServiceClient{cc}
}

func (c *predictorServiceClient) ListPredictors(ctx context.Context, in *ListPredictorsRequest, opts ...grpc.CallOption) (*ListPredictorsResponse, error) {
	out := new(ListPredictorsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/ListPredictors", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *predictorServiceClient) CreatePredictor(ctx context.Context, in *CreatePredictorRequest, opts ...grpc.CallOption) (*CreatePredictorResponse, error) {
	out := new(CreatePredictorResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/CreatePredictor", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *predictorServiceClient) GetPredictor(ctx context.Context, in *GetPredictorRequest, opts ...grpc.CallOption) (*GetPredictorResponse, error) {
	out := new(GetPredictorResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/GetPredictor", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *predictorServiceClient) UpdatePredictor(ctx context.Context, in *UpdatePredictorRequest, opts ...grpc.CallOption) (*UpdatePredictorResponse, error) {
	out := new(UpdatePredictorResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/UpdatePredictor", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *predictorServiceClient) RollBack(ctx context.Context, in *RollbackRequest, opts ...grpc.CallOption) (*RollbackResponse, error) {
	out := new(RollbackResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/RollBack", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *predictorServiceClient) DeletePredictor(ctx context.Context, in *DeletePredictorRequest, opts ...grpc.CallOption) (*DeletePredictorResponse, error) {
	out := new(DeletePredictorResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/DeletePredictor", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *predictorServiceClient) PredictOne(ctx context.Context, in *PredictOneRequest, opts ...grpc.CallOption) (*PredictOneResponse, error) {
	out := new(PredictOneResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/PredictOne", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PredictorServiceServer is the server API for PredictorService service.
// All implementations must embed UnimplementedPredictorServiceServer
// for forward compatibility
type PredictorServiceServer interface {
	ListPredictors(context.Context, *ListPredictorsRequest) (*ListPredictorsResponse, error)
	CreatePredictor(context.Context, *CreatePredictorRequest) (*CreatePredictorResponse, error)
	GetPredictor(context.Context, *GetPredictorRequest) (*GetPredictorResponse, error)
	UpdatePredictor(context.Context, *UpdatePredictorRequest) (*UpdatePredictorResponse, error)
	RollBack(context.Context, *RollbackRequest) (*RollbackResponse, error)
	DeletePredictor(context.Context, *DeletePredictorRequest) (*DeletePredictorResponse, error)
	PredictOne(context.Context, *PredictOneRequest) (*PredictOneResponse, error)
	mustEmbedUnimplementedPredictorServiceServer()
}

// UnimplementedPredictorServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPredictorServiceServer struct {
}

func (UnimplementedPredictorServiceServer) ListPredictors(context.Context, *ListPredictorsRequest) (*ListPredictorsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListPredictors not implemented")
}
func (UnimplementedPredictorServiceServer) CreatePredictor(context.Context, *CreatePredictorRequest) (*CreatePredictorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePredictor not implemented")
}
func (UnimplementedPredictorServiceServer) GetPredictor(context.Context, *GetPredictorRequest) (*GetPredictorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPredictor not implemented")
}
func (UnimplementedPredictorServiceServer) UpdatePredictor(context.Context, *UpdatePredictorRequest) (*UpdatePredictorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdatePredictor not implemented")
}
func (UnimplementedPredictorServiceServer) RollBack(context.Context, *RollbackRequest) (*RollbackResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RollBack not implemented")
}
func (UnimplementedPredictorServiceServer) DeletePredictor(context.Context, *DeletePredictorRequest) (*DeletePredictorResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeletePredictor not implemented")
}
func (UnimplementedPredictorServiceServer) PredictOne(context.Context, *PredictOneRequest) (*PredictOneResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PredictOne not implemented")
}
func (UnimplementedPredictorServiceServer) mustEmbedUnimplementedPredictorServiceServer() {}

// UnsafePredictorServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PredictorServiceServer will
// result in compilation errors.
type UnsafePredictorServiceServer interface {
	mustEmbedUnimplementedPredictorServiceServer()
}

func RegisterPredictorServiceServer(s grpc.ServiceRegistrar, srv PredictorServiceServer) {
	s.RegisterService(&PredictorService_ServiceDesc, srv)
}

func _PredictorService_ListPredictors_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPredictorsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PredictorServiceServer).ListPredictors(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/ListPredictors",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PredictorServiceServer).ListPredictors(ctx, req.(*ListPredictorsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PredictorService_CreatePredictor_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreatePredictorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PredictorServiceServer).CreatePredictor(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/CreatePredictor",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PredictorServiceServer).CreatePredictor(ctx, req.(*CreatePredictorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PredictorService_GetPredictor_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPredictorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PredictorServiceServer).GetPredictor(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/GetPredictor",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PredictorServiceServer).GetPredictor(ctx, req.(*GetPredictorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PredictorService_UpdatePredictor_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdatePredictorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PredictorServiceServer).UpdatePredictor(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/UpdatePredictor",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PredictorServiceServer).UpdatePredictor(ctx, req.(*UpdatePredictorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PredictorService_RollBack_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RollbackRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PredictorServiceServer).RollBack(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/RollBack",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PredictorServiceServer).RollBack(ctx, req.(*RollbackRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PredictorService_DeletePredictor_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeletePredictorRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PredictorServiceServer).DeletePredictor(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/DeletePredictor",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PredictorServiceServer).DeletePredictor(ctx, req.(*DeletePredictorRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PredictorService_PredictOne_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PredictOneRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PredictorServiceServer).PredictOne(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.predictor.v1.PredictorService/PredictOne",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PredictorServiceServer).PredictOne(ctx, req.(*PredictOneRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PredictorService_ServiceDesc is the grpc.ServiceDesc for PredictorService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PredictorService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.predictor.v1.PredictorService",
	HandlerType: (*PredictorServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListPredictors",
			Handler:    _PredictorService_ListPredictors_Handler,
		},
		{
			MethodName: "CreatePredictor",
			Handler:    _PredictorService_CreatePredictor_Handler,
		},
		{
			MethodName: "GetPredictor",
			Handler:    _PredictorService_GetPredictor_Handler,
		},
		{
			MethodName: "UpdatePredictor",
			Handler:    _PredictorService_UpdatePredictor_Handler,
		},
		{
			MethodName: "RollBack",
			Handler:    _PredictorService_RollBack_Handler,
		},
		{
			MethodName: "DeletePredictor",
			Handler:    _PredictorService_DeletePredictor_Handler,
		},
		{
			MethodName: "PredictOne",
			Handler:    _PredictorService_PredictOne_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/predictor/v1/predictor.proto",
}
