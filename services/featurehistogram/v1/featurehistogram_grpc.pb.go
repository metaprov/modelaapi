// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: github.com/metaprov/modelaapi/services/featurehistogram/v1/featurehistogram.proto

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

// FeatureHistogramServiceClient is the client API for FeatureHistogramService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type FeatureHistogramServiceClient interface {
	ListFeatureHistograms(ctx context.Context, in *ListFeatureHistogramsRequest, opts ...grpc.CallOption) (*ListFeatureHistogramsResponse, error)
	CreateFeatureHistogram(ctx context.Context, in *CreateFeatureHistogramRequest, opts ...grpc.CallOption) (*CreateFeatureHistogramResponse, error)
	GetFeatureHistogram(ctx context.Context, in *GetFeatureHistogramRequest, opts ...grpc.CallOption) (*GetFeatureHistogramResponse, error)
	UpdateFeatureHistogram(ctx context.Context, in *UpdateFeatureHistogramRequest, opts ...grpc.CallOption) (*UpdateFeatureHistogramResponse, error)
	DeleteFeatureHistogram(ctx context.Context, in *DeleteFeatureHistogramRequest, opts ...grpc.CallOption) (*DeleteFeatureHistogramResponse, error)
}

type featureHistogramServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewFeatureHistogramServiceClient(cc grpc.ClientConnInterface) FeatureHistogramServiceClient {
	return &featureHistogramServiceClient{cc}
}

func (c *featureHistogramServiceClient) ListFeatureHistograms(ctx context.Context, in *ListFeatureHistogramsRequest, opts ...grpc.CallOption) (*ListFeatureHistogramsResponse, error) {
	out := new(ListFeatureHistogramsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/ListFeatureHistograms", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *featureHistogramServiceClient) CreateFeatureHistogram(ctx context.Context, in *CreateFeatureHistogramRequest, opts ...grpc.CallOption) (*CreateFeatureHistogramResponse, error) {
	out := new(CreateFeatureHistogramResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/CreateFeatureHistogram", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *featureHistogramServiceClient) GetFeatureHistogram(ctx context.Context, in *GetFeatureHistogramRequest, opts ...grpc.CallOption) (*GetFeatureHistogramResponse, error) {
	out := new(GetFeatureHistogramResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/GetFeatureHistogram", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *featureHistogramServiceClient) UpdateFeatureHistogram(ctx context.Context, in *UpdateFeatureHistogramRequest, opts ...grpc.CallOption) (*UpdateFeatureHistogramResponse, error) {
	out := new(UpdateFeatureHistogramResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/UpdateFeatureHistogram", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *featureHistogramServiceClient) DeleteFeatureHistogram(ctx context.Context, in *DeleteFeatureHistogramRequest, opts ...grpc.CallOption) (*DeleteFeatureHistogramResponse, error) {
	out := new(DeleteFeatureHistogramResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/DeleteFeatureHistogram", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FeatureHistogramServiceServer is the server API for FeatureHistogramService service.
// All implementations must embed UnimplementedFeatureHistogramServiceServer
// for forward compatibility
type FeatureHistogramServiceServer interface {
	ListFeatureHistograms(context.Context, *ListFeatureHistogramsRequest) (*ListFeatureHistogramsResponse, error)
	CreateFeatureHistogram(context.Context, *CreateFeatureHistogramRequest) (*CreateFeatureHistogramResponse, error)
	GetFeatureHistogram(context.Context, *GetFeatureHistogramRequest) (*GetFeatureHistogramResponse, error)
	UpdateFeatureHistogram(context.Context, *UpdateFeatureHistogramRequest) (*UpdateFeatureHistogramResponse, error)
	DeleteFeatureHistogram(context.Context, *DeleteFeatureHistogramRequest) (*DeleteFeatureHistogramResponse, error)
	mustEmbedUnimplementedFeatureHistogramServiceServer()
}

// UnimplementedFeatureHistogramServiceServer must be embedded to have forward compatible implementations.
type UnimplementedFeatureHistogramServiceServer struct {
}

func (UnimplementedFeatureHistogramServiceServer) ListFeatureHistograms(context.Context, *ListFeatureHistogramsRequest) (*ListFeatureHistogramsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListFeatureHistograms not implemented")
}
func (UnimplementedFeatureHistogramServiceServer) CreateFeatureHistogram(context.Context, *CreateFeatureHistogramRequest) (*CreateFeatureHistogramResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateFeatureHistogram not implemented")
}
func (UnimplementedFeatureHistogramServiceServer) GetFeatureHistogram(context.Context, *GetFeatureHistogramRequest) (*GetFeatureHistogramResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFeatureHistogram not implemented")
}
func (UnimplementedFeatureHistogramServiceServer) UpdateFeatureHistogram(context.Context, *UpdateFeatureHistogramRequest) (*UpdateFeatureHistogramResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateFeatureHistogram not implemented")
}
func (UnimplementedFeatureHistogramServiceServer) DeleteFeatureHistogram(context.Context, *DeleteFeatureHistogramRequest) (*DeleteFeatureHistogramResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteFeatureHistogram not implemented")
}
func (UnimplementedFeatureHistogramServiceServer) mustEmbedUnimplementedFeatureHistogramServiceServer() {
}

// UnsafeFeatureHistogramServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to FeatureHistogramServiceServer will
// result in compilation errors.
type UnsafeFeatureHistogramServiceServer interface {
	mustEmbedUnimplementedFeatureHistogramServiceServer()
}

func RegisterFeatureHistogramServiceServer(s grpc.ServiceRegistrar, srv FeatureHistogramServiceServer) {
	s.RegisterService(&FeatureHistogramService_ServiceDesc, srv)
}

func _FeatureHistogramService_ListFeatureHistograms_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListFeatureHistogramsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeatureHistogramServiceServer).ListFeatureHistograms(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/ListFeatureHistograms",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeatureHistogramServiceServer).ListFeatureHistograms(ctx, req.(*ListFeatureHistogramsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FeatureHistogramService_CreateFeatureHistogram_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateFeatureHistogramRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeatureHistogramServiceServer).CreateFeatureHistogram(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/CreateFeatureHistogram",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeatureHistogramServiceServer).CreateFeatureHistogram(ctx, req.(*CreateFeatureHistogramRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FeatureHistogramService_GetFeatureHistogram_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetFeatureHistogramRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeatureHistogramServiceServer).GetFeatureHistogram(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/GetFeatureHistogram",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeatureHistogramServiceServer).GetFeatureHistogram(ctx, req.(*GetFeatureHistogramRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FeatureHistogramService_UpdateFeatureHistogram_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateFeatureHistogramRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeatureHistogramServiceServer).UpdateFeatureHistogram(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/UpdateFeatureHistogram",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeatureHistogramServiceServer).UpdateFeatureHistogram(ctx, req.(*UpdateFeatureHistogramRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FeatureHistogramService_DeleteFeatureHistogram_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteFeatureHistogramRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeatureHistogramServiceServer).DeleteFeatureHistogram(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService/DeleteFeatureHistogram",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeatureHistogramServiceServer).DeleteFeatureHistogram(ctx, req.(*DeleteFeatureHistogramRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// FeatureHistogramService_ServiceDesc is the grpc.ServiceDesc for FeatureHistogramService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var FeatureHistogramService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.featurehistogram.v1.FeatureHistogramService",
	HandlerType: (*FeatureHistogramServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListFeatureHistograms",
			Handler:    _FeatureHistogramService_ListFeatureHistograms_Handler,
		},
		{
			MethodName: "CreateFeatureHistogram",
			Handler:    _FeatureHistogramService_CreateFeatureHistogram_Handler,
		},
		{
			MethodName: "GetFeatureHistogram",
			Handler:    _FeatureHistogramService_GetFeatureHistogram_Handler,
		},
		{
			MethodName: "UpdateFeatureHistogram",
			Handler:    _FeatureHistogramService_UpdateFeatureHistogram_Handler,
		},
		{
			MethodName: "DeleteFeatureHistogram",
			Handler:    _FeatureHistogramService_DeleteFeatureHistogram_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/featurehistogram/v1/featurehistogram.proto",
}
