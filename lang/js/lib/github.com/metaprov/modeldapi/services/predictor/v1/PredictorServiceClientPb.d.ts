/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.predictor.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb from '../../../../../../github.com/metaprov/modeldapi/services/predictor/v1/predictor_pb';
export declare class PredictorServiceClient {
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
    methodInfoListPredictors: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.ListPredictorsRequest, github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.ListPredictorsResponse>;
    listPredictors(request: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.ListPredictorsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.ListPredictorsResponse>;
    listPredictors(request: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.ListPredictorsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.ListPredictorsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.ListPredictorsResponse>;
    methodInfoCreatePredictor: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.CreatePredictorRequest, github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.CreatePredictorResponse>;
    createPredictor(request: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.CreatePredictorRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.CreatePredictorResponse>;
    createPredictor(request: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.CreatePredictorRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.CreatePredictorResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.CreatePredictorResponse>;
    methodInfoGetPredictor: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.GetPredictorRequest, github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.GetPredictorResponse>;
    getPredictor(request: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.GetPredictorRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.GetPredictorResponse>;
    getPredictor(request: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.GetPredictorRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.GetPredictorResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.GetPredictorResponse>;
    methodInfoUpdatePredictor: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.UpdatePredictorRequest, github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.UpdatePredictorResponse>;
    updatePredictor(request: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.UpdatePredictorRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.UpdatePredictorResponse>;
    updatePredictor(request: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.UpdatePredictorRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.UpdatePredictorResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.UpdatePredictorResponse>;
    methodInfoDeletePredictor: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.DeletePredictorRequest, github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.DeletePredictorResponse>;
    deletePredictor(request: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.DeletePredictorRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.DeletePredictorResponse>;
    deletePredictor(request: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.DeletePredictorRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.DeletePredictorResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.DeletePredictorResponse>;
    methodInfoPredictOne: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.PredictOneRequest, github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.PredictOneResponse>;
    predictOne(request: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.PredictOneRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.PredictOneResponse>;
    predictOne(request: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.PredictOneRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.PredictOneResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictor_v1_predictor_pb.PredictOneResponse>;
}
