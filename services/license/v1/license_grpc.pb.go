// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: github.com/metaprov/modelaapi/services/license/v1/license.proto

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

// LicenseServiceClient is the client API for LicenseService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type LicenseServiceClient interface {
	ListLicenses(ctx context.Context, in *ListLicensesRequest, opts ...grpc.CallOption) (*ListLicensesResponse, error)
	CreateLicense(ctx context.Context, in *CreateLicenseRequest, opts ...grpc.CallOption) (*CreateLicenseResponse, error)
	CreateLicenseFromKey(ctx context.Context, in *CreateLicenseFromKeyRequest, opts ...grpc.CallOption) (*CreateLicenseResponse, error)
	GetLicense(ctx context.Context, in *GetLicenseRequest, opts ...grpc.CallOption) (*GetLicenseResponse, error)
	UpdateLicense(ctx context.Context, in *UpdateLicenseRequest, opts ...grpc.CallOption) (*UpdateLicenseResponse, error)
	DeleteLicense(ctx context.Context, in *DeleteLicenseRequest, opts ...grpc.CallOption) (*DeleteLicenseResponse, error)
}

type licenseServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewLicenseServiceClient(cc grpc.ClientConnInterface) LicenseServiceClient {
	return &licenseServiceClient{cc}
}

func (c *licenseServiceClient) ListLicenses(ctx context.Context, in *ListLicensesRequest, opts ...grpc.CallOption) (*ListLicensesResponse, error) {
	out := new(ListLicensesResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.license.v1.LicenseService/ListLicenses", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *licenseServiceClient) CreateLicense(ctx context.Context, in *CreateLicenseRequest, opts ...grpc.CallOption) (*CreateLicenseResponse, error) {
	out := new(CreateLicenseResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.license.v1.LicenseService/CreateLicense", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *licenseServiceClient) CreateLicenseFromKey(ctx context.Context, in *CreateLicenseFromKeyRequest, opts ...grpc.CallOption) (*CreateLicenseResponse, error) {
	out := new(CreateLicenseResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.license.v1.LicenseService/CreateLicenseFromKey", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *licenseServiceClient) GetLicense(ctx context.Context, in *GetLicenseRequest, opts ...grpc.CallOption) (*GetLicenseResponse, error) {
	out := new(GetLicenseResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.license.v1.LicenseService/GetLicense", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *licenseServiceClient) UpdateLicense(ctx context.Context, in *UpdateLicenseRequest, opts ...grpc.CallOption) (*UpdateLicenseResponse, error) {
	out := new(UpdateLicenseResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.license.v1.LicenseService/UpdateLicense", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *licenseServiceClient) DeleteLicense(ctx context.Context, in *DeleteLicenseRequest, opts ...grpc.CallOption) (*DeleteLicenseResponse, error) {
	out := new(DeleteLicenseResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.license.v1.LicenseService/DeleteLicense", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// LicenseServiceServer is the server API for LicenseService service.
// All implementations must embed UnimplementedLicenseServiceServer
// for forward compatibility
type LicenseServiceServer interface {
	ListLicenses(context.Context, *ListLicensesRequest) (*ListLicensesResponse, error)
	CreateLicense(context.Context, *CreateLicenseRequest) (*CreateLicenseResponse, error)
	CreateLicenseFromKey(context.Context, *CreateLicenseFromKeyRequest) (*CreateLicenseResponse, error)
	GetLicense(context.Context, *GetLicenseRequest) (*GetLicenseResponse, error)
	UpdateLicense(context.Context, *UpdateLicenseRequest) (*UpdateLicenseResponse, error)
	DeleteLicense(context.Context, *DeleteLicenseRequest) (*DeleteLicenseResponse, error)
	mustEmbedUnimplementedLicenseServiceServer()
}

// UnimplementedLicenseServiceServer must be embedded to have forward compatible implementations.
type UnimplementedLicenseServiceServer struct {
}

func (UnimplementedLicenseServiceServer) ListLicenses(context.Context, *ListLicensesRequest) (*ListLicensesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListLicenses not implemented")
}
func (UnimplementedLicenseServiceServer) CreateLicense(context.Context, *CreateLicenseRequest) (*CreateLicenseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateLicense not implemented")
}
func (UnimplementedLicenseServiceServer) CreateLicenseFromKey(context.Context, *CreateLicenseFromKeyRequest) (*CreateLicenseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateLicenseFromKey not implemented")
}
func (UnimplementedLicenseServiceServer) GetLicense(context.Context, *GetLicenseRequest) (*GetLicenseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLicense not implemented")
}
func (UnimplementedLicenseServiceServer) UpdateLicense(context.Context, *UpdateLicenseRequest) (*UpdateLicenseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateLicense not implemented")
}
func (UnimplementedLicenseServiceServer) DeleteLicense(context.Context, *DeleteLicenseRequest) (*DeleteLicenseResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteLicense not implemented")
}
func (UnimplementedLicenseServiceServer) mustEmbedUnimplementedLicenseServiceServer() {}

// UnsafeLicenseServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to LicenseServiceServer will
// result in compilation errors.
type UnsafeLicenseServiceServer interface {
	mustEmbedUnimplementedLicenseServiceServer()
}

func RegisterLicenseServiceServer(s grpc.ServiceRegistrar, srv LicenseServiceServer) {
	s.RegisterService(&LicenseService_ServiceDesc, srv)
}

func _LicenseService_ListLicenses_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListLicensesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LicenseServiceServer).ListLicenses(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.license.v1.LicenseService/ListLicenses",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LicenseServiceServer).ListLicenses(ctx, req.(*ListLicensesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LicenseService_CreateLicense_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateLicenseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LicenseServiceServer).CreateLicense(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.license.v1.LicenseService/CreateLicense",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LicenseServiceServer).CreateLicense(ctx, req.(*CreateLicenseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LicenseService_CreateLicenseFromKey_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateLicenseFromKeyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LicenseServiceServer).CreateLicenseFromKey(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.license.v1.LicenseService/CreateLicenseFromKey",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LicenseServiceServer).CreateLicenseFromKey(ctx, req.(*CreateLicenseFromKeyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LicenseService_GetLicense_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetLicenseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LicenseServiceServer).GetLicense(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.license.v1.LicenseService/GetLicense",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LicenseServiceServer).GetLicense(ctx, req.(*GetLicenseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LicenseService_UpdateLicense_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateLicenseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LicenseServiceServer).UpdateLicense(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.license.v1.LicenseService/UpdateLicense",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LicenseServiceServer).UpdateLicense(ctx, req.(*UpdateLicenseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LicenseService_DeleteLicense_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteLicenseRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LicenseServiceServer).DeleteLicense(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.license.v1.LicenseService/DeleteLicense",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LicenseServiceServer).DeleteLicense(ctx, req.(*DeleteLicenseRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// LicenseService_ServiceDesc is the grpc.ServiceDesc for LicenseService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var LicenseService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.license.v1.LicenseService",
	HandlerType: (*LicenseServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListLicenses",
			Handler:    _LicenseService_ListLicenses_Handler,
		},
		{
			MethodName: "CreateLicense",
			Handler:    _LicenseService_CreateLicense_Handler,
		},
		{
			MethodName: "CreateLicenseFromKey",
			Handler:    _LicenseService_CreateLicenseFromKey_Handler,
		},
		{
			MethodName: "GetLicense",
			Handler:    _LicenseService_GetLicense_Handler,
		},
		{
			MethodName: "UpdateLicense",
			Handler:    _LicenseService_UpdateLicense_Handler,
		},
		{
			MethodName: "DeleteLicense",
			Handler:    _LicenseService_DeleteLicense_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/license/v1/license.proto",
}
