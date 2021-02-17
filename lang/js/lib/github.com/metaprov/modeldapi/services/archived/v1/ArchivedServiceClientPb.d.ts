/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.archived.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_archived_v1_archived_pb from '../../../../../../github.com/metaprov/modeldapi/services/archived/v1/archived_pb';
export declare class ArchivedServiceClient {
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
    methodInfoRecordModel: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelRequest, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse>;
    recordModel(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse>;
    recordModel(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordModelResponse>;
    methodInfoRecordStudy: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyRequest, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse>;
    recordStudy(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse>;
    recordStudy(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordStudyResponse>;
    methodInfoRecordDataset: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetRequest, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse>;
    recordDataset(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse>;
    recordDataset(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDatasetResponse>;
    methodInfoRecordPredictionPipeline: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRequest, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse>;
    recordPredictionPipeline(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse>;
    recordPredictionPipeline(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictionPipelineResponse>;
    methodInfoRecordPredictor: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorRequest, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse>;
    recordPredictor(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse>;
    recordPredictor(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordPredictorResponse>;
    methodInfoRecordProduct: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductRequest, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse>;
    recordProduct(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse>;
    recordProduct(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductResponse>;
    methodInfoRecordProductVersion: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionRequest, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse>;
    recordProductVersion(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse>;
    recordProductVersion(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordDataProductVersionResponse>;
    methodInfoRecordAccount: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountRequest, github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountResponse>;
    recordAccount(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountResponse>;
    recordAccount(request: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_archived_v1_archived_pb.RecordAccountResponse>;
}
