/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.reciperun.v1
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb from '../../../../../../github.com/metaprov/modeldapi/services/reciperun/v1/reciperun_pb';
export declare class RecipeRunServiceClient {
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
    methodInfoListRecipeRuns: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsRequest, github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsResponse>;
    listRecipeRuns(request: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsResponse>;
    listRecipeRuns(request: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.ListRecipeRunsResponse>;
    methodInfoCreateRecipeRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunRequest, github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunResponse>;
    createRecipeRun(request: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunResponse>;
    createRecipeRun(request: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.CreateRecipeRunResponse>;
    methodInfoGetRecipeRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.GetRecipeRunRequest, github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.GetRecipeRunResponse>;
    getRecipeRun(request: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.GetRecipeRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.GetRecipeRunResponse>;
    getRecipeRun(request: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.GetRecipeRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.GetRecipeRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.GetRecipeRunResponse>;
    methodInfoUpdateRecipeRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunRequest, github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunResponse>;
    updateRecipeRun(request: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunResponse>;
    updateRecipeRun(request: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.UpdateRecipeRunResponse>;
    methodInfoDeleteRecipeRun: grpcWeb.AbstractClientBase.MethodInfo<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunRequest, github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunResponse>;
    deleteRecipeRun(request: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunRequest, metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunResponse>;
    deleteRecipeRun(request: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_reciperun_v1_reciperun_pb.DeleteRecipeRunResponse>;
}
