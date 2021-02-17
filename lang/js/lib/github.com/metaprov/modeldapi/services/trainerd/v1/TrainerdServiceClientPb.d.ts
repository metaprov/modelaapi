/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.trainerd.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb from '../../../../../../github.com/metaprov/modeldapi/services/trainerd/v1/trainerd_pb';
export declare class TrainerdServiceClient {
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
    methodInfoTrain: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainRequest, github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainResponse>;
    train(request: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainResponse>;
    train(request: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainResponse>;
    methodInfoForecast: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ForecastRequest, github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ForecastResponse>;
    forecast(request: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ForecastRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ForecastResponse>;
    forecast(request: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ForecastRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ForecastResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ForecastResponse>;
    methodInfoTest: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestRequest, github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestResponse>;
    test(request: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestResponse>;
    test(request: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestResponse>;
    methodInfoTrainEnsemble: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainEnsembleRequest, github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainResponse>;
    trainEnsemble(request: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainEnsembleRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainResponse>;
    trainEnsemble(request: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainEnsembleRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TrainResponse>;
    methodInfoTestEnsemble: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestEnsembleRequest, github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestResponse>;
    testEnsemble(request: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestEnsembleRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestResponse>;
    testEnsemble(request: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestEnsembleRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.TestResponse>;
    methodInfoShutdown: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ShutdownRequest, github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ShutdownResponse>;
    shutdown(request: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ShutdownRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ShutdownResponse>;
    shutdown(request: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ShutdownRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ShutdownResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_trainerd_v1_trainerd_pb.ShutdownResponse>;
}
