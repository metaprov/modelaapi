/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.predictionstore.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_predictionstore_v1_predictionstore_pb from '../../../../../../github.com/metaprov/modeldapi/services/predictionstore/v1/predictionstore_pb';
export declare class PredictionStoreServiceClient {
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
    methodInfoIngest: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_predictionstore_v1_predictionstore_pb.PredictionsIngestRequest, github_com_metaprov_modeldapi_services_predictionstore_v1_predictionstore_pb.PredictionIngestResponse>;
    ingest(request: github_com_metaprov_modeldapi_services_predictionstore_v1_predictionstore_pb.PredictionsIngestRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_predictionstore_v1_predictionstore_pb.PredictionIngestResponse>;
    ingest(request: github_com_metaprov_modeldapi_services_predictionstore_v1_predictionstore_pb.PredictionsIngestRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_predictionstore_v1_predictionstore_pb.PredictionIngestResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_predictionstore_v1_predictionstore_pb.PredictionIngestResponse>;
}
