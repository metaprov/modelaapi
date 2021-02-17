/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.k8score.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb from '../../../../../../github.com/metaprov/modeldapi/services/k8score/v1/k8score_pb';
export declare class CoreK8sServiceClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodInfoListK8sSecrets: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListSecretsRequest, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListSecretResponse>;
    listK8sSecrets(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListSecretsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListSecretResponse>;
    listK8sSecrets(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListSecretsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListSecretResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListSecretResponse>;
    methodInfoGetK8sSecret: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetSecretRequest, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetSecretResponse>;
    getK8sSecret(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetSecretRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetSecretResponse>;
    getK8sSecret(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetSecretRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetSecretResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetSecretResponse>;
    methodInfoListK8sServices: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListServicesRequest, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListServicesResponse>;
    listK8sServices(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListServicesRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListServicesResponse>;
    listK8sServices(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListServicesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListServicesResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListServicesResponse>;
    methodInfoGetK8sService: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetServiceRequest, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetServiceResponse>;
    getK8sService(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetServiceRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetServiceResponse>;
    getK8sService(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetServiceRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetServiceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetServiceResponse>;
    methodInfoListK8sDeployments: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListDeploymentsRequest, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse>;
    listK8sDeployments(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListDeploymentsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse>;
    listK8sDeployments(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListDeploymentsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListDeploymentsResponse>;
    methodInfoGetK8sDeployment: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetDeploymentRequest, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetDeploymentResponse>;
    getK8sDeployment(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetDeploymentRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetDeploymentResponse>;
    getK8sDeployment(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetDeploymentRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetDeploymentResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetDeploymentResponse>;
    methodInfoListK8sPods: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListPodsRequest, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListPodsResponse>;
    listK8sPods(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListPodsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListPodsResponse>;
    listK8sPods(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListPodsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListPodsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListPodsResponse>;
    methodInfoGetK8sPod: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetPodRequest, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetPodResponse>;
    getK8sPod(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetPodRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetPodResponse>;
    getK8sPod(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetPodRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetPodResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetPodResponse>;
    methodInfoListK8sJobs: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListJobsRequest, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListJobsResponse>;
    listK8sJobs(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListJobsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListJobsResponse>;
    listK8sJobs(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListJobsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListJobsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListJobsResponse>;
    methodInfoGetK8sJob: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetJobRequest, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetJobResponse>;
    getK8sJob(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetJobRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetJobResponse>;
    getK8sJob(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetJobRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetJobResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.GetJobResponse>;
    methodInfoListEvents: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListEventsRequest, github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListEventsResponse>;
    listEvents(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListEventsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListEventsResponse>;
    listEvents(request: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListEventsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListEventsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_k8score_v1_k8score_pb.ListEventsResponse>;
}
