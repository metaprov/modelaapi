// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: github.com/metaprov/modelaapi/services/catalog/v1/catalog.proto

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

// CatalogServiceClient is the client API for CatalogService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CatalogServiceClient interface {
	ListAlgorithm(ctx context.Context, in *ListAlgorithmsRequest, opts ...grpc.CallOption) (*ListAlgorithmsResponse, error)
	GetAlgorithm(ctx context.Context, in *GetAlgorithmRequest, opts ...grpc.CallOption) (*GetAlgorithmResponse, error)
	ListManagedImages(ctx context.Context, in *ListManagedimagesRequest, opts ...grpc.CallOption) (*ListManagedimagesResponse, error)
	GetManagedImage(ctx context.Context, in *GetManagedimageRequest, opts ...grpc.CallOption) (*GetManagedimageResponse, error)
	ListMLFrameworks(ctx context.Context, in *ListMLFrameworksRequest, opts ...grpc.CallOption) (*ListMLFrameworksResponse, error)
	GetMLFramework(ctx context.Context, in *GetMLFrameworkRequest, opts ...grpc.CallOption) (*GetMLFrameworkResponse, error)
	ListClouds(ctx context.Context, in *ListCloudsRequest, opts ...grpc.CallOption) (*ListCloudsResponse, error)
	GetCloud(ctx context.Context, in *GetCloudRequest, opts ...grpc.CallOption) (*GetCloudResponse, error)
	ListWorkloadClasses(ctx context.Context, in *ListWorkloadClassesRequest, opts ...grpc.CallOption) (*ListWorkloadClassesResponse, error)
	GetWorkloadClass(ctx context.Context, in *GetWorkloadClassRequest, opts ...grpc.CallOption) (*GetWorkloadClassResponse, error)
	ListPublicDataset(ctx context.Context, in *ListPublicDatasetsRequest, opts ...grpc.CallOption) (*ListPublicDatasetsResponse, error)
	GetPublicDataset(ctx context.Context, in *GetPublicDatasetRequest, opts ...grpc.CallOption) (*GetPublicDatasetResponse, error)
	DownloadPublicDataset(ctx context.Context, in *DownloadPublicDatasetRequest, opts ...grpc.CallOption) (*DownloadPublicDatasetResponse, error)
	PreviewPublicDataset(ctx context.Context, in *PreviewPublicDatasetRequest, opts ...grpc.CallOption) (*PreviewPublicDatasetResponse, error)
	ApplyPublicDatasetCR(ctx context.Context, in *ApplyPublicDatasetCRRequest, opts ...grpc.CallOption) (*ApplyPublicDatasetCRResponse, error)
}

type catalogServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCatalogServiceClient(cc grpc.ClientConnInterface) CatalogServiceClient {
	return &catalogServiceClient{cc}
}

func (c *catalogServiceClient) ListAlgorithm(ctx context.Context, in *ListAlgorithmsRequest, opts ...grpc.CallOption) (*ListAlgorithmsResponse, error) {
	out := new(ListAlgorithmsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ListAlgorithm", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) GetAlgorithm(ctx context.Context, in *GetAlgorithmRequest, opts ...grpc.CallOption) (*GetAlgorithmResponse, error) {
	out := new(GetAlgorithmResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/GetAlgorithm", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) ListManagedImages(ctx context.Context, in *ListManagedimagesRequest, opts ...grpc.CallOption) (*ListManagedimagesResponse, error) {
	out := new(ListManagedimagesResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ListManagedImages", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) GetManagedImage(ctx context.Context, in *GetManagedimageRequest, opts ...grpc.CallOption) (*GetManagedimageResponse, error) {
	out := new(GetManagedimageResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/GetManagedImage", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) ListMLFrameworks(ctx context.Context, in *ListMLFrameworksRequest, opts ...grpc.CallOption) (*ListMLFrameworksResponse, error) {
	out := new(ListMLFrameworksResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ListMLFrameworks", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) GetMLFramework(ctx context.Context, in *GetMLFrameworkRequest, opts ...grpc.CallOption) (*GetMLFrameworkResponse, error) {
	out := new(GetMLFrameworkResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/GetMLFramework", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) ListClouds(ctx context.Context, in *ListCloudsRequest, opts ...grpc.CallOption) (*ListCloudsResponse, error) {
	out := new(ListCloudsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ListClouds", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) GetCloud(ctx context.Context, in *GetCloudRequest, opts ...grpc.CallOption) (*GetCloudResponse, error) {
	out := new(GetCloudResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/GetCloud", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) ListWorkloadClasses(ctx context.Context, in *ListWorkloadClassesRequest, opts ...grpc.CallOption) (*ListWorkloadClassesResponse, error) {
	out := new(ListWorkloadClassesResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ListWorkloadClasses", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) GetWorkloadClass(ctx context.Context, in *GetWorkloadClassRequest, opts ...grpc.CallOption) (*GetWorkloadClassResponse, error) {
	out := new(GetWorkloadClassResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/GetWorkloadClass", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) ListPublicDataset(ctx context.Context, in *ListPublicDatasetsRequest, opts ...grpc.CallOption) (*ListPublicDatasetsResponse, error) {
	out := new(ListPublicDatasetsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ListPublicDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) GetPublicDataset(ctx context.Context, in *GetPublicDatasetRequest, opts ...grpc.CallOption) (*GetPublicDatasetResponse, error) {
	out := new(GetPublicDatasetResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/GetPublicDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) DownloadPublicDataset(ctx context.Context, in *DownloadPublicDatasetRequest, opts ...grpc.CallOption) (*DownloadPublicDatasetResponse, error) {
	out := new(DownloadPublicDatasetResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/DownloadPublicDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) PreviewPublicDataset(ctx context.Context, in *PreviewPublicDatasetRequest, opts ...grpc.CallOption) (*PreviewPublicDatasetResponse, error) {
	out := new(PreviewPublicDatasetResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/PreviewPublicDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *catalogServiceClient) ApplyPublicDatasetCR(ctx context.Context, in *ApplyPublicDatasetCRRequest, opts ...grpc.CallOption) (*ApplyPublicDatasetCRResponse, error) {
	out := new(ApplyPublicDatasetCRResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ApplyPublicDatasetCR", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CatalogServiceServer is the server API for CatalogService service.
// All implementations must embed UnimplementedCatalogServiceServer
// for forward compatibility
type CatalogServiceServer interface {
	ListAlgorithm(context.Context, *ListAlgorithmsRequest) (*ListAlgorithmsResponse, error)
	GetAlgorithm(context.Context, *GetAlgorithmRequest) (*GetAlgorithmResponse, error)
	ListManagedImages(context.Context, *ListManagedimagesRequest) (*ListManagedimagesResponse, error)
	GetManagedImage(context.Context, *GetManagedimageRequest) (*GetManagedimageResponse, error)
	ListMLFrameworks(context.Context, *ListMLFrameworksRequest) (*ListMLFrameworksResponse, error)
	GetMLFramework(context.Context, *GetMLFrameworkRequest) (*GetMLFrameworkResponse, error)
	ListClouds(context.Context, *ListCloudsRequest) (*ListCloudsResponse, error)
	GetCloud(context.Context, *GetCloudRequest) (*GetCloudResponse, error)
	ListWorkloadClasses(context.Context, *ListWorkloadClassesRequest) (*ListWorkloadClassesResponse, error)
	GetWorkloadClass(context.Context, *GetWorkloadClassRequest) (*GetWorkloadClassResponse, error)
	ListPublicDataset(context.Context, *ListPublicDatasetsRequest) (*ListPublicDatasetsResponse, error)
	GetPublicDataset(context.Context, *GetPublicDatasetRequest) (*GetPublicDatasetResponse, error)
	DownloadPublicDataset(context.Context, *DownloadPublicDatasetRequest) (*DownloadPublicDatasetResponse, error)
	PreviewPublicDataset(context.Context, *PreviewPublicDatasetRequest) (*PreviewPublicDatasetResponse, error)
	ApplyPublicDatasetCR(context.Context, *ApplyPublicDatasetCRRequest) (*ApplyPublicDatasetCRResponse, error)
	mustEmbedUnimplementedCatalogServiceServer()
}

// UnimplementedCatalogServiceServer must be embedded to have forward compatible implementations.
type UnimplementedCatalogServiceServer struct {
}

func (UnimplementedCatalogServiceServer) ListAlgorithm(context.Context, *ListAlgorithmsRequest) (*ListAlgorithmsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListAlgorithm not implemented")
}
func (UnimplementedCatalogServiceServer) GetAlgorithm(context.Context, *GetAlgorithmRequest) (*GetAlgorithmResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAlgorithm not implemented")
}
func (UnimplementedCatalogServiceServer) ListManagedImages(context.Context, *ListManagedimagesRequest) (*ListManagedimagesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListManagedImages not implemented")
}
func (UnimplementedCatalogServiceServer) GetManagedImage(context.Context, *GetManagedimageRequest) (*GetManagedimageResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetManagedImage not implemented")
}
func (UnimplementedCatalogServiceServer) ListMLFrameworks(context.Context, *ListMLFrameworksRequest) (*ListMLFrameworksResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListMLFrameworks not implemented")
}
func (UnimplementedCatalogServiceServer) GetMLFramework(context.Context, *GetMLFrameworkRequest) (*GetMLFrameworkResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMLFramework not implemented")
}
func (UnimplementedCatalogServiceServer) ListClouds(context.Context, *ListCloudsRequest) (*ListCloudsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListClouds not implemented")
}
func (UnimplementedCatalogServiceServer) GetCloud(context.Context, *GetCloudRequest) (*GetCloudResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCloud not implemented")
}
func (UnimplementedCatalogServiceServer) ListWorkloadClasses(context.Context, *ListWorkloadClassesRequest) (*ListWorkloadClassesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListWorkloadClasses not implemented")
}
func (UnimplementedCatalogServiceServer) GetWorkloadClass(context.Context, *GetWorkloadClassRequest) (*GetWorkloadClassResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetWorkloadClass not implemented")
}
func (UnimplementedCatalogServiceServer) ListPublicDataset(context.Context, *ListPublicDatasetsRequest) (*ListPublicDatasetsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListPublicDataset not implemented")
}
func (UnimplementedCatalogServiceServer) GetPublicDataset(context.Context, *GetPublicDatasetRequest) (*GetPublicDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPublicDataset not implemented")
}
func (UnimplementedCatalogServiceServer) DownloadPublicDataset(context.Context, *DownloadPublicDatasetRequest) (*DownloadPublicDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DownloadPublicDataset not implemented")
}
func (UnimplementedCatalogServiceServer) PreviewPublicDataset(context.Context, *PreviewPublicDatasetRequest) (*PreviewPublicDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PreviewPublicDataset not implemented")
}
func (UnimplementedCatalogServiceServer) ApplyPublicDatasetCR(context.Context, *ApplyPublicDatasetCRRequest) (*ApplyPublicDatasetCRResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ApplyPublicDatasetCR not implemented")
}
func (UnimplementedCatalogServiceServer) mustEmbedUnimplementedCatalogServiceServer() {}

// UnsafeCatalogServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CatalogServiceServer will
// result in compilation errors.
type UnsafeCatalogServiceServer interface {
	mustEmbedUnimplementedCatalogServiceServer()
}

func RegisterCatalogServiceServer(s grpc.ServiceRegistrar, srv CatalogServiceServer) {
	s.RegisterService(&CatalogService_ServiceDesc, srv)
}

func _CatalogService_ListAlgorithm_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAlgorithmsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).ListAlgorithm(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ListAlgorithm",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).ListAlgorithm(ctx, req.(*ListAlgorithmsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_GetAlgorithm_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAlgorithmRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).GetAlgorithm(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/GetAlgorithm",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).GetAlgorithm(ctx, req.(*GetAlgorithmRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_ListManagedImages_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListManagedimagesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).ListManagedImages(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ListManagedImages",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).ListManagedImages(ctx, req.(*ListManagedimagesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_GetManagedImage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetManagedimageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).GetManagedImage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/GetManagedImage",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).GetManagedImage(ctx, req.(*GetManagedimageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_ListMLFrameworks_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListMLFrameworksRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).ListMLFrameworks(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ListMLFrameworks",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).ListMLFrameworks(ctx, req.(*ListMLFrameworksRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_GetMLFramework_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMLFrameworkRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).GetMLFramework(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/GetMLFramework",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).GetMLFramework(ctx, req.(*GetMLFrameworkRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_ListClouds_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListCloudsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).ListClouds(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ListClouds",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).ListClouds(ctx, req.(*ListCloudsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_GetCloud_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetCloudRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).GetCloud(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/GetCloud",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).GetCloud(ctx, req.(*GetCloudRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_ListWorkloadClasses_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListWorkloadClassesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).ListWorkloadClasses(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ListWorkloadClasses",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).ListWorkloadClasses(ctx, req.(*ListWorkloadClassesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_GetWorkloadClass_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetWorkloadClassRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).GetWorkloadClass(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/GetWorkloadClass",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).GetWorkloadClass(ctx, req.(*GetWorkloadClassRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_ListPublicDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPublicDatasetsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).ListPublicDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ListPublicDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).ListPublicDataset(ctx, req.(*ListPublicDatasetsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_GetPublicDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPublicDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).GetPublicDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/GetPublicDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).GetPublicDataset(ctx, req.(*GetPublicDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_DownloadPublicDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DownloadPublicDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).DownloadPublicDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/DownloadPublicDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).DownloadPublicDataset(ctx, req.(*DownloadPublicDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_PreviewPublicDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PreviewPublicDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).PreviewPublicDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/PreviewPublicDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).PreviewPublicDataset(ctx, req.(*PreviewPublicDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CatalogService_ApplyPublicDatasetCR_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ApplyPublicDatasetCRRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CatalogServiceServer).ApplyPublicDatasetCR(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.catalog.v1.CatalogService/ApplyPublicDatasetCR",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CatalogServiceServer).ApplyPublicDatasetCR(ctx, req.(*ApplyPublicDatasetCRRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// CatalogService_ServiceDesc is the grpc.ServiceDesc for CatalogService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CatalogService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.catalog.v1.CatalogService",
	HandlerType: (*CatalogServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListAlgorithm",
			Handler:    _CatalogService_ListAlgorithm_Handler,
		},
		{
			MethodName: "GetAlgorithm",
			Handler:    _CatalogService_GetAlgorithm_Handler,
		},
		{
			MethodName: "ListManagedImages",
			Handler:    _CatalogService_ListManagedImages_Handler,
		},
		{
			MethodName: "GetManagedImage",
			Handler:    _CatalogService_GetManagedImage_Handler,
		},
		{
			MethodName: "ListMLFrameworks",
			Handler:    _CatalogService_ListMLFrameworks_Handler,
		},
		{
			MethodName: "GetMLFramework",
			Handler:    _CatalogService_GetMLFramework_Handler,
		},
		{
			MethodName: "ListClouds",
			Handler:    _CatalogService_ListClouds_Handler,
		},
		{
			MethodName: "GetCloud",
			Handler:    _CatalogService_GetCloud_Handler,
		},
		{
			MethodName: "ListWorkloadClasses",
			Handler:    _CatalogService_ListWorkloadClasses_Handler,
		},
		{
			MethodName: "GetWorkloadClass",
			Handler:    _CatalogService_GetWorkloadClass_Handler,
		},
		{
			MethodName: "ListPublicDataset",
			Handler:    _CatalogService_ListPublicDataset_Handler,
		},
		{
			MethodName: "GetPublicDataset",
			Handler:    _CatalogService_GetPublicDataset_Handler,
		},
		{
			MethodName: "DownloadPublicDataset",
			Handler:    _CatalogService_DownloadPublicDataset_Handler,
		},
		{
			MethodName: "PreviewPublicDataset",
			Handler:    _CatalogService_PreviewPublicDataset_Handler,
		},
		{
			MethodName: "ApplyPublicDatasetCR",
			Handler:    _CatalogService_ApplyPublicDatasetCR_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/catalog/v1/catalog.proto",
}
