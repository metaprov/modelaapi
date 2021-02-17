/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.data.v1
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';
import * as github_com_metaprov_modeldapi_services_data_v1_data_pb from '../../../../../../github.com/metaprov/modeldapi/services/data/v1/data_pb';
export class DataServiceClient {
    constructor(hostname, credentials, options) {
        this.methodInfoReadFile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary);
        this.methodInfoReadFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary);
        this.methodInfoReadAudio = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary);
        this.methodInfoRunDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineResponse.deserializeBinary);
        this.methodInfoRunRecipe = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeResponse.deserializeBinary);
        this.methodInfoWriteFile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary);
        this.methodInfoValidateDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetResponse.deserializeBinary);
        this.methodInfoGenerateDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetResponse.deserializeBinary);
        this.methodInfoSplitDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetResponse.deserializeBinary);
        this.methodInfoCreateColumnProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileResponse.deserializeBinary);
        this.methodInfoInferSchema = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaResponse.deserializeBinary);
        this.methodInfoGetTableView = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewResponse.deserializeBinary);
        this.methodInfoGetMisclassTableView = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewResponse.deserializeBinary);
        this.methodInfoSplitDatasetToRungs = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse.deserializeBinary);
        this.methodInfoCreateDatasetProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse.deserializeBinary);
        this.methodInfoCreateModelProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileResponse.deserializeBinary);
        this.methodInfoCreateStudyProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileResponse.deserializeBinary);
        this.methodInfoCreateRecipeProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse.deserializeBinary);
        this.methodInfoCreateModelReport = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary);
        this.methodInfoCreateStudyReport = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary);
        this.methodInfoCreateDatasetReport = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary);
        this.methodInfoCreateForecastReport = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary);
        this.methodInfoAskModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelResponse.deserializeBinary);
        this.methodInfoTellModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelResponse.deserializeBinary);
        this.methodInfoPartitionForecastFile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse.deserializeBinary);
        this.methodInfoMergeForecastFile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileResponse.deserializeBinary);
        this.methodInfoShutDown = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsShutdownResponse, (request) => {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsShutdownResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    readFile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadFile', request, metadata || {}, this.methodInfoReadFile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadFile', request, metadata || {}, this.methodInfoReadFile);
    }
    readFeature(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadFeature', request, metadata || {}, this.methodInfoReadFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadFeature', request, metadata || {}, this.methodInfoReadFeature);
    }
    readAudio(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadAudio', request, metadata || {}, this.methodInfoReadAudio, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadAudio', request, metadata || {}, this.methodInfoReadAudio);
    }
    runDataPipeline(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/RunDataPipeline', request, metadata || {}, this.methodInfoRunDataPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/RunDataPipeline', request, metadata || {}, this.methodInfoRunDataPipeline);
    }
    runRecipe(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/RunRecipe', request, metadata || {}, this.methodInfoRunRecipe, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/RunRecipe', request, metadata || {}, this.methodInfoRunRecipe);
    }
    writeFile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/WriteFile', request, metadata || {}, this.methodInfoWriteFile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/WriteFile', request, metadata || {}, this.methodInfoWriteFile);
    }
    validateDataset(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/ValidateDataset', request, metadata || {}, this.methodInfoValidateDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/ValidateDataset', request, metadata || {}, this.methodInfoValidateDataset);
    }
    generateDataset(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/GenerateDataset', request, metadata || {}, this.methodInfoGenerateDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/GenerateDataset', request, metadata || {}, this.methodInfoGenerateDataset);
    }
    splitDataset(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/SplitDataset', request, metadata || {}, this.methodInfoSplitDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/SplitDataset', request, metadata || {}, this.methodInfoSplitDataset);
    }
    createColumnProfile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateColumnProfile', request, metadata || {}, this.methodInfoCreateColumnProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateColumnProfile', request, metadata || {}, this.methodInfoCreateColumnProfile);
    }
    inferSchema(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/InferSchema', request, metadata || {}, this.methodInfoInferSchema, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/InferSchema', request, metadata || {}, this.methodInfoInferSchema);
    }
    getTableView(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/GetTableView', request, metadata || {}, this.methodInfoGetTableView, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/GetTableView', request, metadata || {}, this.methodInfoGetTableView);
    }
    getMisclassTableView(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/GetMisclassTableView', request, metadata || {}, this.methodInfoGetMisclassTableView, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/GetMisclassTableView', request, metadata || {}, this.methodInfoGetMisclassTableView);
    }
    splitDatasetToRungs(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/SplitDatasetToRungs', request, metadata || {}, this.methodInfoSplitDatasetToRungs, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/SplitDatasetToRungs', request, metadata || {}, this.methodInfoSplitDatasetToRungs);
    }
    createDatasetProfile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateDatasetProfile', request, metadata || {}, this.methodInfoCreateDatasetProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateDatasetProfile', request, metadata || {}, this.methodInfoCreateDatasetProfile);
    }
    createModelProfile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateModelProfile', request, metadata || {}, this.methodInfoCreateModelProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateModelProfile', request, metadata || {}, this.methodInfoCreateModelProfile);
    }
    createStudyProfile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateStudyProfile', request, metadata || {}, this.methodInfoCreateStudyProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateStudyProfile', request, metadata || {}, this.methodInfoCreateStudyProfile);
    }
    createRecipeProfile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateRecipeProfile', request, metadata || {}, this.methodInfoCreateRecipeProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateRecipeProfile', request, metadata || {}, this.methodInfoCreateRecipeProfile);
    }
    createModelReport(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateModelReport', request, metadata || {}, this.methodInfoCreateModelReport, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateModelReport', request, metadata || {}, this.methodInfoCreateModelReport);
    }
    createStudyReport(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateStudyReport', request, metadata || {}, this.methodInfoCreateStudyReport, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateStudyReport', request, metadata || {}, this.methodInfoCreateStudyReport);
    }
    createDatasetReport(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateDatasetReport', request, metadata || {}, this.methodInfoCreateDatasetReport, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateDatasetReport', request, metadata || {}, this.methodInfoCreateDatasetReport);
    }
    createForecastReport(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateForecastReport', request, metadata || {}, this.methodInfoCreateForecastReport, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateForecastReport', request, metadata || {}, this.methodInfoCreateForecastReport);
    }
    askModel(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/AskModel', request, metadata || {}, this.methodInfoAskModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/AskModel', request, metadata || {}, this.methodInfoAskModel);
    }
    tellModel(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/TellModel', request, metadata || {}, this.methodInfoTellModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/TellModel', request, metadata || {}, this.methodInfoTellModel);
    }
    partitionForecastFile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/PartitionForecastFile', request, metadata || {}, this.methodInfoPartitionForecastFile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/PartitionForecastFile', request, metadata || {}, this.methodInfoPartitionForecastFile);
    }
    mergeForecastFile(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/MergeForecastFile', request, metadata || {}, this.methodInfoMergeForecastFile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/MergeForecastFile', request, metadata || {}, this.methodInfoMergeForecastFile);
    }
    shutDown(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/ShutDown', request, metadata || {}, this.methodInfoShutDown, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/ShutDown', request, metadata || {}, this.methodInfoShutDown);
    }
}
