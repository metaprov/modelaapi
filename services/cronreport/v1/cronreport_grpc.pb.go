// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: github.com/metaprov/modelaapi/services/cronreport/v1/cronreport.proto

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

// CronReportServiceClient is the client API for CronReportService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CronReportServiceClient interface {
	ListCronReports(ctx context.Context, in *ListCronReportsRequest, opts ...grpc.CallOption) (*ListCronReportsResponse, error)
	CreateCronReport(ctx context.Context, in *CreateCronReportRequest, opts ...grpc.CallOption) (*CreateCronReportResponse, error)
	GetCronReport(ctx context.Context, in *GetCronReportRequest, opts ...grpc.CallOption) (*GetCronReportResponse, error)
	UpdateCronReport(ctx context.Context, in *UpdateCronReportRequest, opts ...grpc.CallOption) (*UpdateCronReportResponse, error)
	DeleteCronReport(ctx context.Context, in *DeleteCronReportRequest, opts ...grpc.CallOption) (*DeleteCronReportResponse, error)
	RunReport(ctx context.Context, in *RunCronReportRequest, opts ...grpc.CallOption) (*RunCronReportResponse, error)
	PauseCronReport(ctx context.Context, in *PauseCronReportRequest, opts ...grpc.CallOption) (*PauseCronReportResponse, error)
	ResumeCronReport(ctx context.Context, in *ResumeCronReportRequest, opts ...grpc.CallOption) (*ResumeCronReportResponse, error)
}

type cronReportServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCronReportServiceClient(cc grpc.ClientConnInterface) CronReportServiceClient {
	return &cronReportServiceClient{cc}
}

func (c *cronReportServiceClient) ListCronReports(ctx context.Context, in *ListCronReportsRequest, opts ...grpc.CallOption) (*ListCronReportsResponse, error) {
	out := new(ListCronReportsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/ListCronReports", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cronReportServiceClient) CreateCronReport(ctx context.Context, in *CreateCronReportRequest, opts ...grpc.CallOption) (*CreateCronReportResponse, error) {
	out := new(CreateCronReportResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/CreateCronReport", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cronReportServiceClient) GetCronReport(ctx context.Context, in *GetCronReportRequest, opts ...grpc.CallOption) (*GetCronReportResponse, error) {
	out := new(GetCronReportResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/GetCronReport", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cronReportServiceClient) UpdateCronReport(ctx context.Context, in *UpdateCronReportRequest, opts ...grpc.CallOption) (*UpdateCronReportResponse, error) {
	out := new(UpdateCronReportResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/UpdateCronReport", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cronReportServiceClient) DeleteCronReport(ctx context.Context, in *DeleteCronReportRequest, opts ...grpc.CallOption) (*DeleteCronReportResponse, error) {
	out := new(DeleteCronReportResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/DeleteCronReport", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cronReportServiceClient) RunReport(ctx context.Context, in *RunCronReportRequest, opts ...grpc.CallOption) (*RunCronReportResponse, error) {
	out := new(RunCronReportResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/RunReport", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cronReportServiceClient) PauseCronReport(ctx context.Context, in *PauseCronReportRequest, opts ...grpc.CallOption) (*PauseCronReportResponse, error) {
	out := new(PauseCronReportResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/PauseCronReport", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cronReportServiceClient) ResumeCronReport(ctx context.Context, in *ResumeCronReportRequest, opts ...grpc.CallOption) (*ResumeCronReportResponse, error) {
	out := new(ResumeCronReportResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/ResumeCronReport", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CronReportServiceServer is the server API for CronReportService service.
// All implementations must embed UnimplementedCronReportServiceServer
// for forward compatibility
type CronReportServiceServer interface {
	ListCronReports(context.Context, *ListCronReportsRequest) (*ListCronReportsResponse, error)
	CreateCronReport(context.Context, *CreateCronReportRequest) (*CreateCronReportResponse, error)
	GetCronReport(context.Context, *GetCronReportRequest) (*GetCronReportResponse, error)
	UpdateCronReport(context.Context, *UpdateCronReportRequest) (*UpdateCronReportResponse, error)
	DeleteCronReport(context.Context, *DeleteCronReportRequest) (*DeleteCronReportResponse, error)
	RunReport(context.Context, *RunCronReportRequest) (*RunCronReportResponse, error)
	PauseCronReport(context.Context, *PauseCronReportRequest) (*PauseCronReportResponse, error)
	ResumeCronReport(context.Context, *ResumeCronReportRequest) (*ResumeCronReportResponse, error)
	mustEmbedUnimplementedCronReportServiceServer()
}

// UnimplementedCronReportServiceServer must be embedded to have forward compatible implementations.
type UnimplementedCronReportServiceServer struct {
}

func (UnimplementedCronReportServiceServer) ListCronReports(context.Context, *ListCronReportsRequest) (*ListCronReportsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListCronReports not implemented")
}
func (UnimplementedCronReportServiceServer) CreateCronReport(context.Context, *CreateCronReportRequest) (*CreateCronReportResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateCronReport not implemented")
}
func (UnimplementedCronReportServiceServer) GetCronReport(context.Context, *GetCronReportRequest) (*GetCronReportResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCronReport not implemented")
}
func (UnimplementedCronReportServiceServer) UpdateCronReport(context.Context, *UpdateCronReportRequest) (*UpdateCronReportResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateCronReport not implemented")
}
func (UnimplementedCronReportServiceServer) DeleteCronReport(context.Context, *DeleteCronReportRequest) (*DeleteCronReportResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteCronReport not implemented")
}
func (UnimplementedCronReportServiceServer) RunReport(context.Context, *RunCronReportRequest) (*RunCronReportResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RunReport not implemented")
}
func (UnimplementedCronReportServiceServer) PauseCronReport(context.Context, *PauseCronReportRequest) (*PauseCronReportResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PauseCronReport not implemented")
}
func (UnimplementedCronReportServiceServer) ResumeCronReport(context.Context, *ResumeCronReportRequest) (*ResumeCronReportResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ResumeCronReport not implemented")
}
func (UnimplementedCronReportServiceServer) mustEmbedUnimplementedCronReportServiceServer() {}

// UnsafeCronReportServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CronReportServiceServer will
// result in compilation errors.
type UnsafeCronReportServiceServer interface {
	mustEmbedUnimplementedCronReportServiceServer()
}

func RegisterCronReportServiceServer(s grpc.ServiceRegistrar, srv CronReportServiceServer) {
	s.RegisterService(&CronReportService_ServiceDesc, srv)
}

func _CronReportService_ListCronReports_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListCronReportsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CronReportServiceServer).ListCronReports(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/ListCronReports",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CronReportServiceServer).ListCronReports(ctx, req.(*ListCronReportsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CronReportService_CreateCronReport_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateCronReportRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CronReportServiceServer).CreateCronReport(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/CreateCronReport",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CronReportServiceServer).CreateCronReport(ctx, req.(*CreateCronReportRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CronReportService_GetCronReport_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetCronReportRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CronReportServiceServer).GetCronReport(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/GetCronReport",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CronReportServiceServer).GetCronReport(ctx, req.(*GetCronReportRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CronReportService_UpdateCronReport_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateCronReportRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CronReportServiceServer).UpdateCronReport(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/UpdateCronReport",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CronReportServiceServer).UpdateCronReport(ctx, req.(*UpdateCronReportRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CronReportService_DeleteCronReport_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteCronReportRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CronReportServiceServer).DeleteCronReport(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/DeleteCronReport",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CronReportServiceServer).DeleteCronReport(ctx, req.(*DeleteCronReportRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CronReportService_RunReport_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RunCronReportRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CronReportServiceServer).RunReport(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/RunReport",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CronReportServiceServer).RunReport(ctx, req.(*RunCronReportRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CronReportService_PauseCronReport_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PauseCronReportRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CronReportServiceServer).PauseCronReport(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/PauseCronReport",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CronReportServiceServer).PauseCronReport(ctx, req.(*PauseCronReportRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CronReportService_ResumeCronReport_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ResumeCronReportRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CronReportServiceServer).ResumeCronReport(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService/ResumeCronReport",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CronReportServiceServer).ResumeCronReport(ctx, req.(*ResumeCronReportRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// CronReportService_ServiceDesc is the grpc.ServiceDesc for CronReportService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CronReportService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.cronreport.v1.CronReportService",
	HandlerType: (*CronReportServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListCronReports",
			Handler:    _CronReportService_ListCronReports_Handler,
		},
		{
			MethodName: "CreateCronReport",
			Handler:    _CronReportService_CreateCronReport_Handler,
		},
		{
			MethodName: "GetCronReport",
			Handler:    _CronReportService_GetCronReport_Handler,
		},
		{
			MethodName: "UpdateCronReport",
			Handler:    _CronReportService_UpdateCronReport_Handler,
		},
		{
			MethodName: "DeleteCronReport",
			Handler:    _CronReportService_DeleteCronReport_Handler,
		},
		{
			MethodName: "RunReport",
			Handler:    _CronReportService_RunReport_Handler,
		},
		{
			MethodName: "PauseCronReport",
			Handler:    _CronReportService_PauseCronReport_Handler,
		},
		{
			MethodName: "ResumeCronReport",
			Handler:    _CronReportService_ResumeCronReport_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/cronreport/v1/cronreport.proto",
}
