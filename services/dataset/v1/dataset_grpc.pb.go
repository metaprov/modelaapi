// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.1
// source: github.com/metaprov/modelaapi/services/dataset/v1/dataset.proto

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

// DatasetServiceClient is the client API for DatasetService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DatasetServiceClient interface {
	// Datasets
	ListDatasets(ctx context.Context, in *ListDatasetsRequest, opts ...grpc.CallOption) (*ListDatasetsResponse, error)
	GetDataset(ctx context.Context, in *GetDatasetRequest, opts ...grpc.CallOption) (*GetDatasetResponse, error)
	CreateDataset(ctx context.Context, in *CreateDatasetRequest, opts ...grpc.CallOption) (*CreateDatasetResponse, error)
	UpdateDataset(ctx context.Context, in *UpdateDatasetRequest, opts ...grpc.CallOption) (*UpdateDatasetResponse, error)
	DeleteDataset(ctx context.Context, in *DeleteDatasetRequest, opts ...grpc.CallOption) (*DeleteDatasetResponse, error)
	// compare one or more datasets
	CompareDatasets(ctx context.Context, in *CompareDatasetsRequest, opts ...grpc.CallOption) (*CompareDatasetsResponse, error)
	GetDatasetProfile(ctx context.Context, in *GetDatasetProfileRequest, opts ...grpc.CallOption) (*GetDatasetProfileResponse, error)
	CreateDatasetProfile(ctx context.Context, in *CreateDatasetProfileRequest, opts ...grpc.CallOption) (*CreateDatasetProfileResponse, error)
	// Get a single column viz, we do that since we want to parallelize the computation of the viz
	CreateColumnProfile(ctx context.Context, in *CreateColumnProfileRequest, opts ...grpc.CallOption) (*CreateColumnProfileResponse, error)
	// generate a syntatic dataset
	GenerateDataset(ctx context.Context, in *GenerateDatasetRequest, opts ...grpc.CallOption) (*GenerateDatasetResponse, error)
	ValidateDataset(ctx context.Context, in *ValidateDatasetRequest, opts ...grpc.CallOption) (*ValidateDatasetResponse, error)
	DownloadDataset(ctx context.Context, in *DownloadDatasetRequest, opts ...grpc.CallOption) (*DownloadDatasetResponse, error)
	GetDatabases(ctx context.Context, in *GetDatabasesRequest, opts ...grpc.CallOption) (*GetDatabasesResponse, error)
	GetTables(ctx context.Context, in *GetTablesRequest, opts ...grpc.CallOption) (*GetTablesResponse, error)
	ExecuteSql(ctx context.Context, in *ExecuteSqlRequest, opts ...grpc.CallOption) (*ExecuteSqlResponse, error)
	GetAnomalies(ctx context.Context, in *GetAnomaliesRequest, opts ...grpc.CallOption) (*GetAnomaliesResponse, error)
}

type datasetServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDatasetServiceClient(cc grpc.ClientConnInterface) DatasetServiceClient {
	return &datasetServiceClient{cc}
}

func (c *datasetServiceClient) ListDatasets(ctx context.Context, in *ListDatasetsRequest, opts ...grpc.CallOption) (*ListDatasetsResponse, error) {
	out := new(ListDatasetsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ListDatasets", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) GetDataset(ctx context.Context, in *GetDatasetRequest, opts ...grpc.CallOption) (*GetDatasetResponse, error) {
	out := new(GetDatasetResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) CreateDataset(ctx context.Context, in *CreateDatasetRequest, opts ...grpc.CallOption) (*CreateDatasetResponse, error) {
	out := new(CreateDatasetResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) UpdateDataset(ctx context.Context, in *UpdateDatasetRequest, opts ...grpc.CallOption) (*UpdateDatasetResponse, error) {
	out := new(UpdateDatasetResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/UpdateDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) DeleteDataset(ctx context.Context, in *DeleteDatasetRequest, opts ...grpc.CallOption) (*DeleteDatasetResponse, error) {
	out := new(DeleteDatasetResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/DeleteDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) CompareDatasets(ctx context.Context, in *CompareDatasetsRequest, opts ...grpc.CallOption) (*CompareDatasetsResponse, error) {
	out := new(CompareDatasetsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CompareDatasets", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) GetDatasetProfile(ctx context.Context, in *GetDatasetProfileRequest, opts ...grpc.CallOption) (*GetDatasetProfileResponse, error) {
	out := new(GetDatasetProfileResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDatasetProfile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) CreateDatasetProfile(ctx context.Context, in *CreateDatasetProfileRequest, opts ...grpc.CallOption) (*CreateDatasetProfileResponse, error) {
	out := new(CreateDatasetProfileResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateDatasetProfile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) CreateColumnProfile(ctx context.Context, in *CreateColumnProfileRequest, opts ...grpc.CallOption) (*CreateColumnProfileResponse, error) {
	out := new(CreateColumnProfileResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateColumnProfile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) GenerateDataset(ctx context.Context, in *GenerateDatasetRequest, opts ...grpc.CallOption) (*GenerateDatasetResponse, error) {
	out := new(GenerateDatasetResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GenerateDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) ValidateDataset(ctx context.Context, in *ValidateDatasetRequest, opts ...grpc.CallOption) (*ValidateDatasetResponse, error) {
	out := new(ValidateDatasetResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ValidateDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) DownloadDataset(ctx context.Context, in *DownloadDatasetRequest, opts ...grpc.CallOption) (*DownloadDatasetResponse, error) {
	out := new(DownloadDatasetResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/DownloadDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) GetDatabases(ctx context.Context, in *GetDatabasesRequest, opts ...grpc.CallOption) (*GetDatabasesResponse, error) {
	out := new(GetDatabasesResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDatabases", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) GetTables(ctx context.Context, in *GetTablesRequest, opts ...grpc.CallOption) (*GetTablesResponse, error) {
	out := new(GetTablesResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetTables", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) ExecuteSql(ctx context.Context, in *ExecuteSqlRequest, opts ...grpc.CallOption) (*ExecuteSqlResponse, error) {
	out := new(ExecuteSqlResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ExecuteSql", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) GetAnomalies(ctx context.Context, in *GetAnomaliesRequest, opts ...grpc.CallOption) (*GetAnomaliesResponse, error) {
	out := new(GetAnomaliesResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetAnomalies", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DatasetServiceServer is the server API for DatasetService service.
// All implementations must embed UnimplementedDatasetServiceServer
// for forward compatibility
type DatasetServiceServer interface {
	// Datasets
	ListDatasets(context.Context, *ListDatasetsRequest) (*ListDatasetsResponse, error)
	GetDataset(context.Context, *GetDatasetRequest) (*GetDatasetResponse, error)
	CreateDataset(context.Context, *CreateDatasetRequest) (*CreateDatasetResponse, error)
	UpdateDataset(context.Context, *UpdateDatasetRequest) (*UpdateDatasetResponse, error)
	DeleteDataset(context.Context, *DeleteDatasetRequest) (*DeleteDatasetResponse, error)
	// compare one or more datasets
	CompareDatasets(context.Context, *CompareDatasetsRequest) (*CompareDatasetsResponse, error)
	GetDatasetProfile(context.Context, *GetDatasetProfileRequest) (*GetDatasetProfileResponse, error)
	CreateDatasetProfile(context.Context, *CreateDatasetProfileRequest) (*CreateDatasetProfileResponse, error)
	// Get a single column viz, we do that since we want to parallelize the computation of the viz
	CreateColumnProfile(context.Context, *CreateColumnProfileRequest) (*CreateColumnProfileResponse, error)
	// generate a syntatic dataset
	GenerateDataset(context.Context, *GenerateDatasetRequest) (*GenerateDatasetResponse, error)
	ValidateDataset(context.Context, *ValidateDatasetRequest) (*ValidateDatasetResponse, error)
	DownloadDataset(context.Context, *DownloadDatasetRequest) (*DownloadDatasetResponse, error)
	GetDatabases(context.Context, *GetDatabasesRequest) (*GetDatabasesResponse, error)
	GetTables(context.Context, *GetTablesRequest) (*GetTablesResponse, error)
	ExecuteSql(context.Context, *ExecuteSqlRequest) (*ExecuteSqlResponse, error)
	GetAnomalies(context.Context, *GetAnomaliesRequest) (*GetAnomaliesResponse, error)
	mustEmbedUnimplementedDatasetServiceServer()
}

// UnimplementedDatasetServiceServer must be embedded to have forward compatible implementations.
type UnimplementedDatasetServiceServer struct {
}

func (UnimplementedDatasetServiceServer) ListDatasets(context.Context, *ListDatasetsRequest) (*ListDatasetsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListDatasets not implemented")
}
func (UnimplementedDatasetServiceServer) GetDataset(context.Context, *GetDatasetRequest) (*GetDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDataset not implemented")
}
func (UnimplementedDatasetServiceServer) CreateDataset(context.Context, *CreateDatasetRequest) (*CreateDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateDataset not implemented")
}
func (UnimplementedDatasetServiceServer) UpdateDataset(context.Context, *UpdateDatasetRequest) (*UpdateDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateDataset not implemented")
}
func (UnimplementedDatasetServiceServer) DeleteDataset(context.Context, *DeleteDatasetRequest) (*DeleteDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteDataset not implemented")
}
func (UnimplementedDatasetServiceServer) CompareDatasets(context.Context, *CompareDatasetsRequest) (*CompareDatasetsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CompareDatasets not implemented")
}
func (UnimplementedDatasetServiceServer) GetDatasetProfile(context.Context, *GetDatasetProfileRequest) (*GetDatasetProfileResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDatasetProfile not implemented")
}
func (UnimplementedDatasetServiceServer) CreateDatasetProfile(context.Context, *CreateDatasetProfileRequest) (*CreateDatasetProfileResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateDatasetProfile not implemented")
}
func (UnimplementedDatasetServiceServer) CreateColumnProfile(context.Context, *CreateColumnProfileRequest) (*CreateColumnProfileResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateColumnProfile not implemented")
}
func (UnimplementedDatasetServiceServer) GenerateDataset(context.Context, *GenerateDatasetRequest) (*GenerateDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GenerateDataset not implemented")
}
func (UnimplementedDatasetServiceServer) ValidateDataset(context.Context, *ValidateDatasetRequest) (*ValidateDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ValidateDataset not implemented")
}
func (UnimplementedDatasetServiceServer) DownloadDataset(context.Context, *DownloadDatasetRequest) (*DownloadDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DownloadDataset not implemented")
}
func (UnimplementedDatasetServiceServer) GetDatabases(context.Context, *GetDatabasesRequest) (*GetDatabasesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDatabases not implemented")
}
func (UnimplementedDatasetServiceServer) GetTables(context.Context, *GetTablesRequest) (*GetTablesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTables not implemented")
}
func (UnimplementedDatasetServiceServer) ExecuteSql(context.Context, *ExecuteSqlRequest) (*ExecuteSqlResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ExecuteSql not implemented")
}
func (UnimplementedDatasetServiceServer) GetAnomalies(context.Context, *GetAnomaliesRequest) (*GetAnomaliesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAnomalies not implemented")
}
func (UnimplementedDatasetServiceServer) mustEmbedUnimplementedDatasetServiceServer() {}

// UnsafeDatasetServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DatasetServiceServer will
// result in compilation errors.
type UnsafeDatasetServiceServer interface {
	mustEmbedUnimplementedDatasetServiceServer()
}

func RegisterDatasetServiceServer(s grpc.ServiceRegistrar, srv DatasetServiceServer) {
	s.RegisterService(&DatasetService_ServiceDesc, srv)
}

func _DatasetService_ListDatasets_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListDatasetsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).ListDatasets(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ListDatasets",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).ListDatasets(ctx, req.(*ListDatasetsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_GetDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).GetDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).GetDataset(ctx, req.(*GetDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_CreateDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).CreateDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).CreateDataset(ctx, req.(*CreateDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_UpdateDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).UpdateDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/UpdateDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).UpdateDataset(ctx, req.(*UpdateDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_DeleteDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).DeleteDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/DeleteDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).DeleteDataset(ctx, req.(*DeleteDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_CompareDatasets_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CompareDatasetsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).CompareDatasets(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CompareDatasets",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).CompareDatasets(ctx, req.(*CompareDatasetsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_GetDatasetProfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDatasetProfileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).GetDatasetProfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDatasetProfile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).GetDatasetProfile(ctx, req.(*GetDatasetProfileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_CreateDatasetProfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateDatasetProfileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).CreateDatasetProfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateDatasetProfile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).CreateDatasetProfile(ctx, req.(*CreateDatasetProfileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_CreateColumnProfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateColumnProfileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).CreateColumnProfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/CreateColumnProfile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).CreateColumnProfile(ctx, req.(*CreateColumnProfileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_GenerateDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GenerateDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).GenerateDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GenerateDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).GenerateDataset(ctx, req.(*GenerateDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_ValidateDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ValidateDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).ValidateDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ValidateDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).ValidateDataset(ctx, req.(*ValidateDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_DownloadDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DownloadDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).DownloadDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/DownloadDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).DownloadDataset(ctx, req.(*DownloadDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_GetDatabases_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDatabasesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).GetDatabases(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetDatabases",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).GetDatabases(ctx, req.(*GetDatabasesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_GetTables_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetTablesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).GetTables(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetTables",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).GetTables(ctx, req.(*GetTablesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_ExecuteSql_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ExecuteSqlRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).ExecuteSql(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/ExecuteSql",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).ExecuteSql(ctx, req.(*ExecuteSqlRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_GetAnomalies_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAnomaliesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).GetAnomalies(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.dataset.v1.DatasetService/GetAnomalies",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).GetAnomalies(ctx, req.(*GetAnomaliesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// DatasetService_ServiceDesc is the grpc.ServiceDesc for DatasetService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DatasetService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.dataset.v1.DatasetService",
	HandlerType: (*DatasetServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListDatasets",
			Handler:    _DatasetService_ListDatasets_Handler,
		},
		{
			MethodName: "GetDataset",
			Handler:    _DatasetService_GetDataset_Handler,
		},
		{
			MethodName: "CreateDataset",
			Handler:    _DatasetService_CreateDataset_Handler,
		},
		{
			MethodName: "UpdateDataset",
			Handler:    _DatasetService_UpdateDataset_Handler,
		},
		{
			MethodName: "DeleteDataset",
			Handler:    _DatasetService_DeleteDataset_Handler,
		},
		{
			MethodName: "CompareDatasets",
			Handler:    _DatasetService_CompareDatasets_Handler,
		},
		{
			MethodName: "GetDatasetProfile",
			Handler:    _DatasetService_GetDatasetProfile_Handler,
		},
		{
			MethodName: "CreateDatasetProfile",
			Handler:    _DatasetService_CreateDatasetProfile_Handler,
		},
		{
			MethodName: "CreateColumnProfile",
			Handler:    _DatasetService_CreateColumnProfile_Handler,
		},
		{
			MethodName: "GenerateDataset",
			Handler:    _DatasetService_GenerateDataset_Handler,
		},
		{
			MethodName: "ValidateDataset",
			Handler:    _DatasetService_ValidateDataset_Handler,
		},
		{
			MethodName: "DownloadDataset",
			Handler:    _DatasetService_DownloadDataset_Handler,
		},
		{
			MethodName: "GetDatabases",
			Handler:    _DatasetService_GetDatabases_Handler,
		},
		{
			MethodName: "GetTables",
			Handler:    _DatasetService_GetTables_Handler,
		},
		{
			MethodName: "ExecuteSql",
			Handler:    _DatasetService_ExecuteSql_Handler,
		},
		{
			MethodName: "GetAnomalies",
			Handler:    _DatasetService_GetAnomalies_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/dataset/v1/dataset.proto",
}
