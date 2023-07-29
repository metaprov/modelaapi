// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: github.com/metaprov/modelaapi/services/dataapp/v1/dataapp.proto

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

// DataAppServiceClient is the client API for DataAppService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DataAppServiceClient interface {
	ListDataApps(ctx context.Context, in *ListDataAppsRequest, opts ...grpc.CallOption) (*ListDataAppsResponse, error)
	CreateDataApp(ctx context.Context, in *CreateDataAppRequest, opts ...grpc.CallOption) (*CreateDataAppResponse, error)
	GetDataApp(ctx context.Context, in *GetDataAppRequest, opts ...grpc.CallOption) (*GetDataAppResponse, error)
	UpdateDataApp(ctx context.Context, in *UpdateDataAppRequest, opts ...grpc.CallOption) (*UpdateDataAppResponse, error)
	DeleteDataApp(ctx context.Context, in *DeleteDataAppRequest, opts ...grpc.CallOption) (*DeleteDataAppResponse, error)
	PauseDataApp(ctx context.Context, in *PauseDataAppRequest, opts ...grpc.CallOption) (*PauseDataAppResponse, error)
	RunDataApp(ctx context.Context, in *RunDataAppRequest, opts ...grpc.CallOption) (*RunDataAppResponse, error)
	ResumeDataApp(ctx context.Context, in *ResumeDataAppRequest, opts ...grpc.CallOption) (*ResumeDataAppResponse, error)
}

type dataAppServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDataAppServiceClient(cc grpc.ClientConnInterface) DataAppServiceClient {
	return &dataAppServiceClient{cc}
}

func (c *dataAppServiceClient) ListDataApps(ctx context.Context, in *ListDataAppsRequest, opts ...grpc.CallOption) (*ListDataAppsResponse, error) {
	out := new(ListDataAppsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/ListDataApps", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataAppServiceClient) CreateDataApp(ctx context.Context, in *CreateDataAppRequest, opts ...grpc.CallOption) (*CreateDataAppResponse, error) {
	out := new(CreateDataAppResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/CreateDataApp", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataAppServiceClient) GetDataApp(ctx context.Context, in *GetDataAppRequest, opts ...grpc.CallOption) (*GetDataAppResponse, error) {
	out := new(GetDataAppResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/GetDataApp", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataAppServiceClient) UpdateDataApp(ctx context.Context, in *UpdateDataAppRequest, opts ...grpc.CallOption) (*UpdateDataAppResponse, error) {
	out := new(UpdateDataAppResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/UpdateDataApp", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataAppServiceClient) DeleteDataApp(ctx context.Context, in *DeleteDataAppRequest, opts ...grpc.CallOption) (*DeleteDataAppResponse, error) {
	out := new(DeleteDataAppResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/DeleteDataApp", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataAppServiceClient) PauseDataApp(ctx context.Context, in *PauseDataAppRequest, opts ...grpc.CallOption) (*PauseDataAppResponse, error) {
	out := new(PauseDataAppResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/PauseDataApp", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataAppServiceClient) RunDataApp(ctx context.Context, in *RunDataAppRequest, opts ...grpc.CallOption) (*RunDataAppResponse, error) {
	out := new(RunDataAppResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/RunDataApp", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataAppServiceClient) ResumeDataApp(ctx context.Context, in *ResumeDataAppRequest, opts ...grpc.CallOption) (*ResumeDataAppResponse, error) {
	out := new(ResumeDataAppResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/ResumeDataApp", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DataAppServiceServer is the server API for DataAppService service.
// All implementations must embed UnimplementedDataAppServiceServer
// for forward compatibility
type DataAppServiceServer interface {
	ListDataApps(context.Context, *ListDataAppsRequest) (*ListDataAppsResponse, error)
	CreateDataApp(context.Context, *CreateDataAppRequest) (*CreateDataAppResponse, error)
	GetDataApp(context.Context, *GetDataAppRequest) (*GetDataAppResponse, error)
	UpdateDataApp(context.Context, *UpdateDataAppRequest) (*UpdateDataAppResponse, error)
	DeleteDataApp(context.Context, *DeleteDataAppRequest) (*DeleteDataAppResponse, error)
	PauseDataApp(context.Context, *PauseDataAppRequest) (*PauseDataAppResponse, error)
	RunDataApp(context.Context, *RunDataAppRequest) (*RunDataAppResponse, error)
	ResumeDataApp(context.Context, *ResumeDataAppRequest) (*ResumeDataAppResponse, error)
	mustEmbedUnimplementedDataAppServiceServer()
}

// UnimplementedDataAppServiceServer must be embedded to have forward compatible implementations.
type UnimplementedDataAppServiceServer struct {
}

func (UnimplementedDataAppServiceServer) ListDataApps(context.Context, *ListDataAppsRequest) (*ListDataAppsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListDataApps not implemented")
}
func (UnimplementedDataAppServiceServer) CreateDataApp(context.Context, *CreateDataAppRequest) (*CreateDataAppResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateDataApp not implemented")
}
func (UnimplementedDataAppServiceServer) GetDataApp(context.Context, *GetDataAppRequest) (*GetDataAppResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDataApp not implemented")
}
func (UnimplementedDataAppServiceServer) UpdateDataApp(context.Context, *UpdateDataAppRequest) (*UpdateDataAppResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateDataApp not implemented")
}
func (UnimplementedDataAppServiceServer) DeleteDataApp(context.Context, *DeleteDataAppRequest) (*DeleteDataAppResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteDataApp not implemented")
}
func (UnimplementedDataAppServiceServer) PauseDataApp(context.Context, *PauseDataAppRequest) (*PauseDataAppResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PauseDataApp not implemented")
}
func (UnimplementedDataAppServiceServer) RunDataApp(context.Context, *RunDataAppRequest) (*RunDataAppResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RunDataApp not implemented")
}
func (UnimplementedDataAppServiceServer) ResumeDataApp(context.Context, *ResumeDataAppRequest) (*ResumeDataAppResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ResumeDataApp not implemented")
}
func (UnimplementedDataAppServiceServer) mustEmbedUnimplementedDataAppServiceServer() {}

// UnsafeDataAppServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DataAppServiceServer will
// result in compilation errors.
type UnsafeDataAppServiceServer interface {
	mustEmbedUnimplementedDataAppServiceServer()
}

func RegisterDataAppServiceServer(s grpc.ServiceRegistrar, srv DataAppServiceServer) {
	s.RegisterService(&DataAppService_ServiceDesc, srv)
}

func _DataAppService_ListDataApps_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListDataAppsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataAppServiceServer).ListDataApps(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/ListDataApps",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataAppServiceServer).ListDataApps(ctx, req.(*ListDataAppsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataAppService_CreateDataApp_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateDataAppRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataAppServiceServer).CreateDataApp(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/CreateDataApp",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataAppServiceServer).CreateDataApp(ctx, req.(*CreateDataAppRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataAppService_GetDataApp_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDataAppRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataAppServiceServer).GetDataApp(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/GetDataApp",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataAppServiceServer).GetDataApp(ctx, req.(*GetDataAppRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataAppService_UpdateDataApp_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateDataAppRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataAppServiceServer).UpdateDataApp(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/UpdateDataApp",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataAppServiceServer).UpdateDataApp(ctx, req.(*UpdateDataAppRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataAppService_DeleteDataApp_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteDataAppRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataAppServiceServer).DeleteDataApp(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/DeleteDataApp",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataAppServiceServer).DeleteDataApp(ctx, req.(*DeleteDataAppRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataAppService_PauseDataApp_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PauseDataAppRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataAppServiceServer).PauseDataApp(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/PauseDataApp",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataAppServiceServer).PauseDataApp(ctx, req.(*PauseDataAppRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataAppService_RunDataApp_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RunDataAppRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataAppServiceServer).RunDataApp(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/RunDataApp",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataAppServiceServer).RunDataApp(ctx, req.(*RunDataAppRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataAppService_ResumeDataApp_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ResumeDataAppRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataAppServiceServer).ResumeDataApp(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService/ResumeDataApp",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataAppServiceServer).ResumeDataApp(ctx, req.(*ResumeDataAppRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// DataAppService_ServiceDesc is the grpc.ServiceDesc for DataAppService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DataAppService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.dataapp.v1.DataAppService",
	HandlerType: (*DataAppServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListDataApps",
			Handler:    _DataAppService_ListDataApps_Handler,
		},
		{
			MethodName: "CreateDataApp",
			Handler:    _DataAppService_CreateDataApp_Handler,
		},
		{
			MethodName: "GetDataApp",
			Handler:    _DataAppService_GetDataApp_Handler,
		},
		{
			MethodName: "UpdateDataApp",
			Handler:    _DataAppService_UpdateDataApp_Handler,
		},
		{
			MethodName: "DeleteDataApp",
			Handler:    _DataAppService_DeleteDataApp_Handler,
		},
		{
			MethodName: "PauseDataApp",
			Handler:    _DataAppService_PauseDataApp_Handler,
		},
		{
			MethodName: "RunDataApp",
			Handler:    _DataAppService_RunDataApp_Handler,
		},
		{
			MethodName: "ResumeDataApp",
			Handler:    _DataAppService_ResumeDataApp_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/dataapp/v1/dataapp.proto",
}
