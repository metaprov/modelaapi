// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: github.com/metaprov/modelaapi/services/k8score/v1/k8score.proto

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

// CoreK8SServiceClient is the client API for CoreK8SService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CoreK8SServiceClient interface {
	////////////////// secret
	ListK8SSecrets(ctx context.Context, in *ListSecretsRequest, opts ...grpc.CallOption) (*ListSecretResponse, error)
	GetK8SSecret(ctx context.Context, in *GetSecretRequest, opts ...grpc.CallOption) (*GetSecretResponse, error)
	////////////////// service
	ListK8SServices(ctx context.Context, in *ListServicesRequest, opts ...grpc.CallOption) (*ListServicesResponse, error)
	GetK8SService(ctx context.Context, in *GetServiceRequest, opts ...grpc.CallOption) (*GetServiceResponse, error)
	////////////////// deployment
	ListK8SDeployments(ctx context.Context, in *ListDeploymentsRequest, opts ...grpc.CallOption) (*ListDeploymentsResponse, error)
	GetK8SDeployment(ctx context.Context, in *GetDeploymentRequest, opts ...grpc.CallOption) (*GetDeploymentResponse, error)
	////////////////// pod
	ListK8SPods(ctx context.Context, in *ListPodsRequest, opts ...grpc.CallOption) (*ListPodsResponse, error)
	GetK8SPod(ctx context.Context, in *GetPodRequest, opts ...grpc.CallOption) (*GetPodResponse, error)
	//////////////// jobs
	ListK8SJobs(ctx context.Context, in *ListJobsRequest, opts ...grpc.CallOption) (*ListJobsResponse, error)
	GetK8SJob(ctx context.Context, in *GetJobRequest, opts ...grpc.CallOption) (*GetJobResponse, error)
	ListEvents(ctx context.Context, in *ListEventsRequest, opts ...grpc.CallOption) (*ListEventsResponse, error)
	////////////////////////////// container log
	GetContainerLog(ctx context.Context, in *GetContainerLogRequest, opts ...grpc.CallOption) (*GetContainerLogResponse, error)
}

type coreK8SServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCoreK8SServiceClient(cc grpc.ClientConnInterface) CoreK8SServiceClient {
	return &coreK8SServiceClient{cc}
}

func (c *coreK8SServiceClient) ListK8SSecrets(ctx context.Context, in *ListSecretsRequest, opts ...grpc.CallOption) (*ListSecretResponse, error) {
	out := new(ListSecretResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sSecrets", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreK8SServiceClient) GetK8SSecret(ctx context.Context, in *GetSecretRequest, opts ...grpc.CallOption) (*GetSecretResponse, error) {
	out := new(GetSecretResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sSecret", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreK8SServiceClient) ListK8SServices(ctx context.Context, in *ListServicesRequest, opts ...grpc.CallOption) (*ListServicesResponse, error) {
	out := new(ListServicesResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sServices", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreK8SServiceClient) GetK8SService(ctx context.Context, in *GetServiceRequest, opts ...grpc.CallOption) (*GetServiceResponse, error) {
	out := new(GetServiceResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sService", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreK8SServiceClient) ListK8SDeployments(ctx context.Context, in *ListDeploymentsRequest, opts ...grpc.CallOption) (*ListDeploymentsResponse, error) {
	out := new(ListDeploymentsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sDeployments", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreK8SServiceClient) GetK8SDeployment(ctx context.Context, in *GetDeploymentRequest, opts ...grpc.CallOption) (*GetDeploymentResponse, error) {
	out := new(GetDeploymentResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sDeployment", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreK8SServiceClient) ListK8SPods(ctx context.Context, in *ListPodsRequest, opts ...grpc.CallOption) (*ListPodsResponse, error) {
	out := new(ListPodsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sPods", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreK8SServiceClient) GetK8SPod(ctx context.Context, in *GetPodRequest, opts ...grpc.CallOption) (*GetPodResponse, error) {
	out := new(GetPodResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sPod", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreK8SServiceClient) ListK8SJobs(ctx context.Context, in *ListJobsRequest, opts ...grpc.CallOption) (*ListJobsResponse, error) {
	out := new(ListJobsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sJobs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreK8SServiceClient) GetK8SJob(ctx context.Context, in *GetJobRequest, opts ...grpc.CallOption) (*GetJobResponse, error) {
	out := new(GetJobResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sJob", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreK8SServiceClient) ListEvents(ctx context.Context, in *ListEventsRequest, opts ...grpc.CallOption) (*ListEventsResponse, error) {
	out := new(ListEventsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListEvents", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreK8SServiceClient) GetContainerLog(ctx context.Context, in *GetContainerLogRequest, opts ...grpc.CallOption) (*GetContainerLogResponse, error) {
	out := new(GetContainerLogResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetContainerLog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CoreK8SServiceServer is the server API for CoreK8SService service.
// All implementations must embed UnimplementedCoreK8SServiceServer
// for forward compatibility
type CoreK8SServiceServer interface {
	////////////////// secret
	ListK8SSecrets(context.Context, *ListSecretsRequest) (*ListSecretResponse, error)
	GetK8SSecret(context.Context, *GetSecretRequest) (*GetSecretResponse, error)
	////////////////// service
	ListK8SServices(context.Context, *ListServicesRequest) (*ListServicesResponse, error)
	GetK8SService(context.Context, *GetServiceRequest) (*GetServiceResponse, error)
	////////////////// deployment
	ListK8SDeployments(context.Context, *ListDeploymentsRequest) (*ListDeploymentsResponse, error)
	GetK8SDeployment(context.Context, *GetDeploymentRequest) (*GetDeploymentResponse, error)
	////////////////// pod
	ListK8SPods(context.Context, *ListPodsRequest) (*ListPodsResponse, error)
	GetK8SPod(context.Context, *GetPodRequest) (*GetPodResponse, error)
	//////////////// jobs
	ListK8SJobs(context.Context, *ListJobsRequest) (*ListJobsResponse, error)
	GetK8SJob(context.Context, *GetJobRequest) (*GetJobResponse, error)
	ListEvents(context.Context, *ListEventsRequest) (*ListEventsResponse, error)
	////////////////////////////// container log
	GetContainerLog(context.Context, *GetContainerLogRequest) (*GetContainerLogResponse, error)
	mustEmbedUnimplementedCoreK8SServiceServer()
}

// UnimplementedCoreK8SServiceServer must be embedded to have forward compatible implementations.
type UnimplementedCoreK8SServiceServer struct {
}

func (UnimplementedCoreK8SServiceServer) ListK8SSecrets(context.Context, *ListSecretsRequest) (*ListSecretResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListK8SSecrets not implemented")
}
func (UnimplementedCoreK8SServiceServer) GetK8SSecret(context.Context, *GetSecretRequest) (*GetSecretResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetK8SSecret not implemented")
}
func (UnimplementedCoreK8SServiceServer) ListK8SServices(context.Context, *ListServicesRequest) (*ListServicesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListK8SServices not implemented")
}
func (UnimplementedCoreK8SServiceServer) GetK8SService(context.Context, *GetServiceRequest) (*GetServiceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetK8SService not implemented")
}
func (UnimplementedCoreK8SServiceServer) ListK8SDeployments(context.Context, *ListDeploymentsRequest) (*ListDeploymentsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListK8SDeployments not implemented")
}
func (UnimplementedCoreK8SServiceServer) GetK8SDeployment(context.Context, *GetDeploymentRequest) (*GetDeploymentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetK8SDeployment not implemented")
}
func (UnimplementedCoreK8SServiceServer) ListK8SPods(context.Context, *ListPodsRequest) (*ListPodsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListK8SPods not implemented")
}
func (UnimplementedCoreK8SServiceServer) GetK8SPod(context.Context, *GetPodRequest) (*GetPodResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetK8SPod not implemented")
}
func (UnimplementedCoreK8SServiceServer) ListK8SJobs(context.Context, *ListJobsRequest) (*ListJobsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListK8SJobs not implemented")
}
func (UnimplementedCoreK8SServiceServer) GetK8SJob(context.Context, *GetJobRequest) (*GetJobResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetK8SJob not implemented")
}
func (UnimplementedCoreK8SServiceServer) ListEvents(context.Context, *ListEventsRequest) (*ListEventsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListEvents not implemented")
}
func (UnimplementedCoreK8SServiceServer) GetContainerLog(context.Context, *GetContainerLogRequest) (*GetContainerLogResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetContainerLog not implemented")
}
func (UnimplementedCoreK8SServiceServer) mustEmbedUnimplementedCoreK8SServiceServer() {}

// UnsafeCoreK8SServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CoreK8SServiceServer will
// result in compilation errors.
type UnsafeCoreK8SServiceServer interface {
	mustEmbedUnimplementedCoreK8SServiceServer()
}

func RegisterCoreK8SServiceServer(s grpc.ServiceRegistrar, srv CoreK8SServiceServer) {
	s.RegisterService(&CoreK8SService_ServiceDesc, srv)
}

func _CoreK8SService_ListK8SSecrets_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListSecretsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreK8SServiceServer).ListK8SSecrets(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sSecrets",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreK8SServiceServer).ListK8SSecrets(ctx, req.(*ListSecretsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreK8SService_GetK8SSecret_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSecretRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreK8SServiceServer).GetK8SSecret(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sSecret",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreK8SServiceServer).GetK8SSecret(ctx, req.(*GetSecretRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreK8SService_ListK8SServices_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListServicesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreK8SServiceServer).ListK8SServices(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sServices",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreK8SServiceServer).ListK8SServices(ctx, req.(*ListServicesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreK8SService_GetK8SService_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetServiceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreK8SServiceServer).GetK8SService(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sService",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreK8SServiceServer).GetK8SService(ctx, req.(*GetServiceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreK8SService_ListK8SDeployments_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListDeploymentsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreK8SServiceServer).ListK8SDeployments(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sDeployments",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreK8SServiceServer).ListK8SDeployments(ctx, req.(*ListDeploymentsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreK8SService_GetK8SDeployment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetDeploymentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreK8SServiceServer).GetK8SDeployment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sDeployment",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreK8SServiceServer).GetK8SDeployment(ctx, req.(*GetDeploymentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreK8SService_ListK8SPods_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPodsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreK8SServiceServer).ListK8SPods(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sPods",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreK8SServiceServer).ListK8SPods(ctx, req.(*ListPodsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreK8SService_GetK8SPod_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPodRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreK8SServiceServer).GetK8SPod(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sPod",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreK8SServiceServer).GetK8SPod(ctx, req.(*GetPodRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreK8SService_ListK8SJobs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListJobsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreK8SServiceServer).ListK8SJobs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListK8sJobs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreK8SServiceServer).ListK8SJobs(ctx, req.(*ListJobsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreK8SService_GetK8SJob_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetJobRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreK8SServiceServer).GetK8SJob(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetK8sJob",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreK8SServiceServer).GetK8SJob(ctx, req.(*GetJobRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreK8SService_ListEvents_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListEventsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreK8SServiceServer).ListEvents(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/ListEvents",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreK8SServiceServer).ListEvents(ctx, req.(*ListEventsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreK8SService_GetContainerLog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetContainerLogRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreK8SServiceServer).GetContainerLog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService/GetContainerLog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreK8SServiceServer).GetContainerLog(ctx, req.(*GetContainerLogRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// CoreK8SService_ServiceDesc is the grpc.ServiceDesc for CoreK8SService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CoreK8SService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modelaapi.services.k8score.v1.CoreK8sService",
	HandlerType: (*CoreK8SServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListK8sSecrets",
			Handler:    _CoreK8SService_ListK8SSecrets_Handler,
		},
		{
			MethodName: "GetK8sSecret",
			Handler:    _CoreK8SService_GetK8SSecret_Handler,
		},
		{
			MethodName: "ListK8sServices",
			Handler:    _CoreK8SService_ListK8SServices_Handler,
		},
		{
			MethodName: "GetK8sService",
			Handler:    _CoreK8SService_GetK8SService_Handler,
		},
		{
			MethodName: "ListK8sDeployments",
			Handler:    _CoreK8SService_ListK8SDeployments_Handler,
		},
		{
			MethodName: "GetK8sDeployment",
			Handler:    _CoreK8SService_GetK8SDeployment_Handler,
		},
		{
			MethodName: "ListK8sPods",
			Handler:    _CoreK8SService_ListK8SPods_Handler,
		},
		{
			MethodName: "GetK8sPod",
			Handler:    _CoreK8SService_GetK8SPod_Handler,
		},
		{
			MethodName: "ListK8sJobs",
			Handler:    _CoreK8SService_ListK8SJobs_Handler,
		},
		{
			MethodName: "GetK8sJob",
			Handler:    _CoreK8SService_GetK8SJob_Handler,
		},
		{
			MethodName: "ListEvents",
			Handler:    _CoreK8SService_ListEvents_Handler,
		},
		{
			MethodName: "GetContainerLog",
			Handler:    _CoreK8SService_GetContainerLog_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "github.com/metaprov/modelaapi/services/k8score/v1/k8score.proto",
}
