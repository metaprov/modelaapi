// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: github.com/metaprov/modelaapi/services/datapipelinerun/v1/datapipelinerun.proto

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

// DataPipelineRunServiceClient is the client API for DataPipelineRunService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DataPipelineRunServiceClient interface {
	ListDataPipelineRuns(ctx context.Context, in *ListDataPipelineRunRequest, opts ...grpc.CallOption) (*ListDataPipelineRunResponse, error)
	CreateDataPipelineRun(ctx context.Context, in *CreateDataPipelineRunRequest, opts ...grpc.CallOption) (*CreateDataPipelineRunResponse, error)
	GetDataPipelineRun(ctx context.Context, in *GetDataPipelineRunRequest, opts ...grpc.CallOption) (*GetDataPipelineRunResponse, error)
	UpdateDataPipelineRun(ctx context.Context, in *UpdateDataPipelineRunRequest, opts ...grpc.CallOption) (*UpdateDataPipelineRunResponse, error)
	DeleteDataPipelineRun(ctx context.Context, in *DeleteDataPipelineRunRequest, opts ...grpc.CallOption) (*DeleteDataPipelineRunResponse, error)
	AbortDataPipelineRun(ctx context.Context, in *AbortDataPipelineRunRequest, opts ...grpc.CallOption) (*AbortDataPipelineRunResponse, error)
	PauseDataPipelineRun(ctx context.Context, in *PauseDataPipelineRunRequest, opts ...grpc.CallOption) (*PauseDataPipelineRunResponse, error)
	ResumeDataPipelineRun(ctx context.Context, in *ResumeDataPipelineRunRequest, opts ...grpc.CallOption) (*ResumeDataPipelineRunResponse, error)
}

type dataPipelineRunServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDataPipelineRunServiceClient(cc grpc.ClientConnInterface) DataPipelineRunServiceClient {
	return &dataPipelineRunServiceClient{cc}
}

func (c *dataPipelineRunServiceClient) ListDataPipelineRuns(ctx context.Context, in *ListDataPipelineRunRequest, opts ...grpc.CallOption) (*ListDataPipelineRunResponse, error) {
	out := new(ListDataPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/ListDataPipelineRuns", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataPipelineRunServiceClient) CreateDataPipelineRun(ctx context.Context, in *CreateDataPipelineRunRequest, opts ...grpc.CallOption) (*CreateDataPipelineRunResponse, error) {
	out := new(CreateDataPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/CreateDataPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataPipelineRunServiceClient) GetDataPipelineRun(ctx context.Context, in *GetDataPipelineRunRequest, opts ...grpc.CallOption) (*GetDataPipelineRunResponse, error) {
	out := new(GetDataPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/GetDataPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataPipelineRunServiceClient) UpdateDataPipelineRun(ctx context.Context, in *UpdateDataPipelineRunRequest, opts ...grpc.CallOption) (*UpdateDataPipelineRunResponse, error) {
	out := new(UpdateDataPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/UpdateDataPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataPipelineRunServiceClient) DeleteDataPipelineRun(ctx context.Context, in *DeleteDataPipelineRunRequest, opts ...grpc.CallOption) (*DeleteDataPipelineRunResponse, error) {
	out := new(DeleteDataPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/DeleteDataPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataPipelineRunServiceClient) AbortDataPipelineRun(ctx context.Context, in *AbortDataPipelineRunRequest, opts ...grpc.CallOption) (*AbortDataPipelineRunResponse, error) {
	out := new(AbortDataPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/AbortDataPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataPipelineRunServiceClient) PauseDataPipelineRun(ctx context.Context, in *PauseDataPipelineRunRequest, opts ...grpc.CallOption) (*PauseDataPipelineRunResponse, error) {
	out := new(PauseDataPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/PauseDataPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataPipelineRunServiceClient) ResumeDataPipelineRun(ctx context.Context, in *ResumeDataPipelineRunRequest, opts ...grpc.CallOption) (*ResumeDataPipelineRunResponse, error) {
	out := new(ResumeDataPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/ResumeDataPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DataPipelineRunServiceServer is the server API for DataPipelineRunService service.
// All implementations must embed UnimplementedDataPipelineRunServiceServer
// for forward compatibility
type DataPipelineRunServiceServer interface {
	ListDataPipelineRuns(context.Context, *ListDataPipelineRunRequest) (*ListDataPipelineRunResponse, error)
	CreateDataPipelineRun(context.Context, *CreateDataPipelineRunRequest) (*CreateDataPipelineRunResponse, error)
	GetDataPipelineRun(context.Context, *GetDataPipelineRunRequest) (*GetDataPipelineRunResponse, error)
	UpdateDataPipelineRun(context.Context, *UpdateDataPipelineRunRequest) (*UpdateDataPipelineRunResponse, error)
	DeleteDataPipelineRun(context.Context, *DeleteDataPipelineRunRequest) (*DeleteDataPipelineRunResponse, error)
	AbortDataPipelineRun(context.Context, *AbortDataPipelineRunRequest) (*AbortDataPipelineRunResponse, error)
	PauseDataPipelineRun(context.Context, *PauseDataPipelineRunRequest) (*PauseDataPipelineRunResponse, error)
	ResumeDataPipelineRun(context.Context, *ResumeDataPipelineRunRequest) (*ResumeDataPipelineRunResponse, error)
	mustEmbedUnimplementedDataPipelineRunServiceServer()
}

// UnimplementedDataPipelineRunServiceServer must be embedded to have forward compatible implementations.
type UnimplementedDataPipelineRunServiceServer struct {
}

func (UnimplementedDataPipelineRunServiceServer) ListDataPipelineRuns(context.Context, *ListDataPipelineRunRequest) (*ListDataPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListDataPipelineRuns not implemented")
}
func (UnimplementedDataPipelineRunServiceServer) CreateDataPipelineRun(context.Context, *CreateDataPipelineRunRequest) (*CreateDataPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateDataPipelineRun not implemented")
}
func (UnimplementedDataPipelineRunServiceServer) GetDataPipelineRun(context.Context, *GetDataPipelineRunRequest) (*GetDataPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDataPipelineRun not implemented")
}
func (UnimplementedDataPipelineRunServiceServer) UpdateDataPipelineRun(context.Context, *UpdateDataPipelineRunRequest) (*UpdateDataPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateDataPipelineRun not implemented")
}
func (UnimplementedDataPipelineRunServiceServer) DeleteDataPipelineRun(context.Context, *DeleteDataPipelineRunRequest) (*DeleteDataPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteDataPipelineRun not implemented")
}
func (UnimplementedDataPipelineRunServiceServer) AbortDataPipelineRun(context.Context, *AbortDataPipelineRunRequest) (*AbortDataPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AbortDataPipelineRun not implemented")
}
func (UnimplementedDataPipelineRunServiceServer) PauseDataPipelineRun(context.Context, *PauseDataPipelineRunRequest) (*PauseDataPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PauseDataPipelineRun not implemented")
}
func (UnimplementedDataPipelineRunServiceServer) ResumeDataPipelineRun(context.Context, *ResumeDataPipelineRunRequest) (*ResumeDataPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ResumeDataPipelineRun not implemented")
}
func (UnimplementedDataPipelineRunServiceServer) mustEmbedUnimplementedDataPipelineRunServiceServer() {
}

// UnsafeDataPipelineRunServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DataPipelineRunServiceServer will
// result in compilation errors.
type UnsafeDataPipelineRunServiceServer interface {
	mustEmbedUnimplementedDataPipelineRunServiceServer()
}

func RegisterDataPipelineRunServiceServer(s grpc.ServiceRegistrar, srv DataPipelineRunServiceServer) {
	s.RegisterService(&DataPipelineRunService_ServiceDesc, srv)
}

func _DataPipelineRunService_ListDataPipelineRuns_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListDataPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataPipelineRunServiceServer).ListDataPipelineRuns(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/ListDataPipelineRuns",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataPipelineRunServiceServer).ListDataPipelineRuns(ctx, req.(*ListDataPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataPipelineRunService_CreateDataPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateDataPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataPipelineRunServiceServer).CreateDataPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/CreateDataPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataPipelineRunServiceServer).CreateDataPipelineRun(ctx, req.(*CreateDataPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataPipelineRunService_GetDataPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDataPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataPipelineRunServiceServer).GetDataPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/GetDataPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataPipelineRunServiceServer).GetDataPipelineRun(ctx, req.(*GetDataPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataPipelineRunService_UpdateDataPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateDataPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataPipelineRunServiceServer).UpdateDataPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/UpdateDataPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataPipelineRunServiceServer).UpdateDataPipelineRun(ctx, req.(*UpdateDataPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataPipelineRunService_DeleteDataPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteDataPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataPipelineRunServiceServer).DeleteDataPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/DeleteDataPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataPipelineRunServiceServer).DeleteDataPipelineRun(ctx, req.(*DeleteDataPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataPipelineRunService_AbortDataPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AbortDataPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataPipelineRunServiceServer).AbortDataPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/AbortDataPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataPipelineRunServiceServer).AbortDataPipelineRun(ctx, req.(*AbortDataPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataPipelineRunService_PauseDataPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PauseDataPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataPipelineRunServiceServer).PauseDataPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/PauseDataPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataPipelineRunServiceServer).PauseDataPipelineRun(ctx, req.(*PauseDataPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataPipelineRunService_ResumeDataPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ResumeDataPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataPipelineRunServiceServer).ResumeDataPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService/ResumeDataPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataPipelineRunServiceServer).ResumeDataPipelineRun(ctx, req.(*ResumeDataPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// DataPipelineRunService_ServiceDesc is the grpc.ServiceDesc for DataPipelineRunService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DataPipelineRunService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.datapipelinerun.v1.DataPipelineRunService",
	HandlerType: (*DataPipelineRunServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListDataPipelineRuns",
			Handler:    _DataPipelineRunService_ListDataPipelineRuns_Handler,
		},
		{
			MethodName: "CreateDataPipelineRun",
			Handler:    _DataPipelineRunService_CreateDataPipelineRun_Handler,
		},
		{
			MethodName: "GetDataPipelineRun",
			Handler:    _DataPipelineRunService_GetDataPipelineRun_Handler,
		},
		{
			MethodName: "UpdateDataPipelineRun",
			Handler:    _DataPipelineRunService_UpdateDataPipelineRun_Handler,
		},
		{
			MethodName: "DeleteDataPipelineRun",
			Handler:    _DataPipelineRunService_DeleteDataPipelineRun_Handler,
		},
		{
			MethodName: "AbortDataPipelineRun",
			Handler:    _DataPipelineRunService_AbortDataPipelineRun_Handler,
		},
		{
			MethodName: "PauseDataPipelineRun",
			Handler:    _DataPipelineRunService_PauseDataPipelineRun_Handler,
		},
		{
			MethodName: "ResumeDataPipelineRun",
			Handler:    _DataPipelineRunService_ResumeDataPipelineRun_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/datapipelinerun/v1/datapipelinerun.proto",
}
