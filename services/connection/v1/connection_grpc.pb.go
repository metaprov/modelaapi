// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: github.com/metaprov/modelaapi/services/connection/v1/connection.proto

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

// ConnectionServiceClient is the client API for ConnectionService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ConnectionServiceClient interface {
	ListConnections(ctx context.Context, in *ListConnectionsRequest, opts ...grpc.CallOption) (*ListConnectionsResponse, error)
	CreateConnection(ctx context.Context, in *CreateConnectionRequest, opts ...grpc.CallOption) (*CreateConnectionResponse, error)
	GetConnection(ctx context.Context, in *GetConnectionRequest, opts ...grpc.CallOption) (*GetConnectionResponse, error)
	UpdateConnection(ctx context.Context, in *UpdateConnectionRequest, opts ...grpc.CallOption) (*UpdateConnectionResponse, error)
	DeleteConnection(ctx context.Context, in *DeleteConnectionRequest, opts ...grpc.CallOption) (*DeleteConnectionResponse, error)
	TestConnection(ctx context.Context, in *TestConnectionRequest, opts ...grpc.CallOption) (*TestConnectionResponse, error)
	GetDatabases(ctx context.Context, in *GetDatabasesRequest, opts ...grpc.CallOption) (*GetDatabasesResponse, error)
	GetTables(ctx context.Context, in *GetTablesRequest, opts ...grpc.CallOption) (*GetTablesResponse, error)
	ExecuteSql(ctx context.Context, in *ExecuteSqlRequest, opts ...grpc.CallOption) (*ExecuteSqlResponse, error)
}

type connectionServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewConnectionServiceClient(cc grpc.ClientConnInterface) ConnectionServiceClient {
	return &connectionServiceClient{cc}
}

func (c *connectionServiceClient) ListConnections(ctx context.Context, in *ListConnectionsRequest, opts ...grpc.CallOption) (*ListConnectionsResponse, error) {
	out := new(ListConnectionsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/ListConnections", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *connectionServiceClient) CreateConnection(ctx context.Context, in *CreateConnectionRequest, opts ...grpc.CallOption) (*CreateConnectionResponse, error) {
	out := new(CreateConnectionResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/CreateConnection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *connectionServiceClient) GetConnection(ctx context.Context, in *GetConnectionRequest, opts ...grpc.CallOption) (*GetConnectionResponse, error) {
	out := new(GetConnectionResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/GetConnection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *connectionServiceClient) UpdateConnection(ctx context.Context, in *UpdateConnectionRequest, opts ...grpc.CallOption) (*UpdateConnectionResponse, error) {
	out := new(UpdateConnectionResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/UpdateConnection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *connectionServiceClient) DeleteConnection(ctx context.Context, in *DeleteConnectionRequest, opts ...grpc.CallOption) (*DeleteConnectionResponse, error) {
	out := new(DeleteConnectionResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/DeleteConnection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *connectionServiceClient) TestConnection(ctx context.Context, in *TestConnectionRequest, opts ...grpc.CallOption) (*TestConnectionResponse, error) {
	out := new(TestConnectionResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/TestConnection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *connectionServiceClient) GetDatabases(ctx context.Context, in *GetDatabasesRequest, opts ...grpc.CallOption) (*GetDatabasesResponse, error) {
	out := new(GetDatabasesResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/GetDatabases", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *connectionServiceClient) GetTables(ctx context.Context, in *GetTablesRequest, opts ...grpc.CallOption) (*GetTablesResponse, error) {
	out := new(GetTablesResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/GetTables", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *connectionServiceClient) ExecuteSql(ctx context.Context, in *ExecuteSqlRequest, opts ...grpc.CallOption) (*ExecuteSqlResponse, error) {
	out := new(ExecuteSqlResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/ExecuteSql", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ConnectionServiceServer is the server API for ConnectionService service.
// All implementations must embed UnimplementedConnectionServiceServer
// for forward compatibility
type ConnectionServiceServer interface {
	ListConnections(context.Context, *ListConnectionsRequest) (*ListConnectionsResponse, error)
	CreateConnection(context.Context, *CreateConnectionRequest) (*CreateConnectionResponse, error)
	GetConnection(context.Context, *GetConnectionRequest) (*GetConnectionResponse, error)
	UpdateConnection(context.Context, *UpdateConnectionRequest) (*UpdateConnectionResponse, error)
	DeleteConnection(context.Context, *DeleteConnectionRequest) (*DeleteConnectionResponse, error)
	TestConnection(context.Context, *TestConnectionRequest) (*TestConnectionResponse, error)
	GetDatabases(context.Context, *GetDatabasesRequest) (*GetDatabasesResponse, error)
	GetTables(context.Context, *GetTablesRequest) (*GetTablesResponse, error)
	ExecuteSql(context.Context, *ExecuteSqlRequest) (*ExecuteSqlResponse, error)
	mustEmbedUnimplementedConnectionServiceServer()
}

// UnimplementedConnectionServiceServer must be embedded to have forward compatible implementations.
type UnimplementedConnectionServiceServer struct {
}

func (UnimplementedConnectionServiceServer) ListConnections(context.Context, *ListConnectionsRequest) (*ListConnectionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListConnections not implemented")
}
func (UnimplementedConnectionServiceServer) CreateConnection(context.Context, *CreateConnectionRequest) (*CreateConnectionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateConnection not implemented")
}
func (UnimplementedConnectionServiceServer) GetConnection(context.Context, *GetConnectionRequest) (*GetConnectionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetConnection not implemented")
}
func (UnimplementedConnectionServiceServer) UpdateConnection(context.Context, *UpdateConnectionRequest) (*UpdateConnectionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateConnection not implemented")
}
func (UnimplementedConnectionServiceServer) DeleteConnection(context.Context, *DeleteConnectionRequest) (*DeleteConnectionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteConnection not implemented")
}
func (UnimplementedConnectionServiceServer) TestConnection(context.Context, *TestConnectionRequest) (*TestConnectionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TestConnection not implemented")
}
func (UnimplementedConnectionServiceServer) GetDatabases(context.Context, *GetDatabasesRequest) (*GetDatabasesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDatabases not implemented")
}
func (UnimplementedConnectionServiceServer) GetTables(context.Context, *GetTablesRequest) (*GetTablesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTables not implemented")
}
func (UnimplementedConnectionServiceServer) ExecuteSql(context.Context, *ExecuteSqlRequest) (*ExecuteSqlResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ExecuteSql not implemented")
}
func (UnimplementedConnectionServiceServer) mustEmbedUnimplementedConnectionServiceServer() {}

// UnsafeConnectionServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ConnectionServiceServer will
// result in compilation errors.
type UnsafeConnectionServiceServer interface {
	mustEmbedUnimplementedConnectionServiceServer()
}

func RegisterConnectionServiceServer(s grpc.ServiceRegistrar, srv ConnectionServiceServer) {
	s.RegisterService(&ConnectionService_ServiceDesc, srv)
}

func _ConnectionService_ListConnections_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListConnectionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ConnectionServiceServer).ListConnections(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/ListConnections",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ConnectionServiceServer).ListConnections(ctx, req.(*ListConnectionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ConnectionService_CreateConnection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateConnectionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ConnectionServiceServer).CreateConnection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/CreateConnection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ConnectionServiceServer).CreateConnection(ctx, req.(*CreateConnectionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ConnectionService_GetConnection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetConnectionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ConnectionServiceServer).GetConnection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/GetConnection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ConnectionServiceServer).GetConnection(ctx, req.(*GetConnectionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ConnectionService_UpdateConnection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateConnectionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ConnectionServiceServer).UpdateConnection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/UpdateConnection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ConnectionServiceServer).UpdateConnection(ctx, req.(*UpdateConnectionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ConnectionService_DeleteConnection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteConnectionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ConnectionServiceServer).DeleteConnection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/DeleteConnection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ConnectionServiceServer).DeleteConnection(ctx, req.(*DeleteConnectionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ConnectionService_TestConnection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TestConnectionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ConnectionServiceServer).TestConnection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/TestConnection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ConnectionServiceServer).TestConnection(ctx, req.(*TestConnectionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ConnectionService_GetDatabases_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDatabasesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ConnectionServiceServer).GetDatabases(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/GetDatabases",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ConnectionServiceServer).GetDatabases(ctx, req.(*GetDatabasesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ConnectionService_GetTables_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetTablesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ConnectionServiceServer).GetTables(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/GetTables",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ConnectionServiceServer).GetTables(ctx, req.(*GetTablesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ConnectionService_ExecuteSql_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ExecuteSqlRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ConnectionServiceServer).ExecuteSql(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.connection.v1.ConnectionService/ExecuteSql",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ConnectionServiceServer).ExecuteSql(ctx, req.(*ExecuteSqlRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ConnectionService_ServiceDesc is the grpc.ServiceDesc for ConnectionService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ConnectionService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.connection.v1.ConnectionService",
	HandlerType: (*ConnectionServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListConnections",
			Handler:    _ConnectionService_ListConnections_Handler,
		},
		{
			MethodName: "CreateConnection",
			Handler:    _ConnectionService_CreateConnection_Handler,
		},
		{
			MethodName: "GetConnection",
			Handler:    _ConnectionService_GetConnection_Handler,
		},
		{
			MethodName: "UpdateConnection",
			Handler:    _ConnectionService_UpdateConnection_Handler,
		},
		{
			MethodName: "DeleteConnection",
			Handler:    _ConnectionService_DeleteConnection_Handler,
		},
		{
			MethodName: "TestConnection",
			Handler:    _ConnectionService_TestConnection_Handler,
		},
		{
			MethodName: "GetDatabases",
			Handler:    _ConnectionService_GetDatabases_Handler,
		},
		{
			MethodName: "GetTables",
			Handler:    _ConnectionService_GetTables_Handler,
		},
		{
			MethodName: "ExecuteSql",
			Handler:    _ConnectionService_ExecuteSql_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/connection/v1/connection.proto",
}
