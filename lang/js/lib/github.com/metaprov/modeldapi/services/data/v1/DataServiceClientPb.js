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
var DataServiceClient = /** @class */ (function () {
    function DataServiceClient(hostname, credentials, options) {
        this.methodInfoReadFile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary);
        this.methodInfoReadFeature = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary);
        this.methodInfoReadAudio = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary);
        this.methodInfoRunDataPipeline = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunDataPipelineResponse.deserializeBinary);
        this.methodInfoRunRecipe = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsRunRecipeResponse.deserializeBinary);
        this.methodInfoWriteFile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsReadFromStoreResponse.deserializeBinary);
        this.methodInfoValidateDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsValidateDatasetResponse.deserializeBinary);
        this.methodInfoGenerateDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGenerateDatasetResponse.deserializeBinary);
        this.methodInfoSplitDataset = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetResponse.deserializeBinary);
        this.methodInfoCreateColumnProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateColumnProfileResponse.deserializeBinary);
        this.methodInfoInferSchema = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsInferSchemaResponse.deserializeBinary);
        this.methodInfoGetTableView = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetTableViewResponse.deserializeBinary);
        this.methodInfoGetMisclassTableView = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsGetMisclassTableViewResponse.deserializeBinary);
        this.methodInfoSplitDatasetToRungs = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsSplitDatasetToRungsResponse.deserializeBinary);
        this.methodInfoCreateDatasetProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateDatasetProfileResponse.deserializeBinary);
        this.methodInfoCreateModelProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateModelProfileResponse.deserializeBinary);
        this.methodInfoCreateStudyProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateStudyProfileResponse.deserializeBinary);
        this.methodInfoCreateRecipeProfile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateRecipeProfileResponse.deserializeBinary);
        this.methodInfoCreateModelReport = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary);
        this.methodInfoCreateStudyReport = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary);
        this.methodInfoCreateDatasetReport = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary);
        this.methodInfoCreateForecastReport = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.CreateReportResponse.deserializeBinary);
        this.methodInfoAskModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.AskModelResponse.deserializeBinary);
        this.methodInfoTellModel = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.TellModelResponse.deserializeBinary);
        this.methodInfoPartitionForecastFile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsCreateForecastPartitionFilesResponse.deserializeBinary);
        this.methodInfoMergeForecastFile = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileResponse, function (request) {
            return request.serializeBinary();
        }, github_com_metaprov_modeldapi_services_data_v1_data_pb.DsMergeForecastFileResponse.deserializeBinary);
        this.methodInfoShutDown = new grpcWeb.AbstractClientBase.MethodInfo(github_com_metaprov_modeldapi_services_data_v1_data_pb.DsShutdownResponse, function (request) {
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
    DataServiceClient.prototype.readFile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadFile', request, metadata || {}, this.methodInfoReadFile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadFile', request, metadata || {}, this.methodInfoReadFile);
    };
    DataServiceClient.prototype.readFeature = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadFeature', request, metadata || {}, this.methodInfoReadFeature, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadFeature', request, metadata || {}, this.methodInfoReadFeature);
    };
    DataServiceClient.prototype.readAudio = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadAudio', request, metadata || {}, this.methodInfoReadAudio, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/ReadAudio', request, metadata || {}, this.methodInfoReadAudio);
    };
    DataServiceClient.prototype.runDataPipeline = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/RunDataPipeline', request, metadata || {}, this.methodInfoRunDataPipeline, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/RunDataPipeline', request, metadata || {}, this.methodInfoRunDataPipeline);
    };
    DataServiceClient.prototype.runRecipe = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/RunRecipe', request, metadata || {}, this.methodInfoRunRecipe, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/RunRecipe', request, metadata || {}, this.methodInfoRunRecipe);
    };
    DataServiceClient.prototype.writeFile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/WriteFile', request, metadata || {}, this.methodInfoWriteFile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/WriteFile', request, metadata || {}, this.methodInfoWriteFile);
    };
    DataServiceClient.prototype.validateDataset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/ValidateDataset', request, metadata || {}, this.methodInfoValidateDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/ValidateDataset', request, metadata || {}, this.methodInfoValidateDataset);
    };
    DataServiceClient.prototype.generateDataset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/GenerateDataset', request, metadata || {}, this.methodInfoGenerateDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/GenerateDataset', request, metadata || {}, this.methodInfoGenerateDataset);
    };
    DataServiceClient.prototype.splitDataset = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/SplitDataset', request, metadata || {}, this.methodInfoSplitDataset, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/SplitDataset', request, metadata || {}, this.methodInfoSplitDataset);
    };
    DataServiceClient.prototype.createColumnProfile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateColumnProfile', request, metadata || {}, this.methodInfoCreateColumnProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateColumnProfile', request, metadata || {}, this.methodInfoCreateColumnProfile);
    };
    DataServiceClient.prototype.inferSchema = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/InferSchema', request, metadata || {}, this.methodInfoInferSchema, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/InferSchema', request, metadata || {}, this.methodInfoInferSchema);
    };
    DataServiceClient.prototype.getTableView = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/GetTableView', request, metadata || {}, this.methodInfoGetTableView, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/GetTableView', request, metadata || {}, this.methodInfoGetTableView);
    };
    DataServiceClient.prototype.getMisclassTableView = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/GetMisclassTableView', request, metadata || {}, this.methodInfoGetMisclassTableView, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/GetMisclassTableView', request, metadata || {}, this.methodInfoGetMisclassTableView);
    };
    DataServiceClient.prototype.splitDatasetToRungs = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/SplitDatasetToRungs', request, metadata || {}, this.methodInfoSplitDatasetToRungs, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/SplitDatasetToRungs', request, metadata || {}, this.methodInfoSplitDatasetToRungs);
    };
    DataServiceClient.prototype.createDatasetProfile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateDatasetProfile', request, metadata || {}, this.methodInfoCreateDatasetProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateDatasetProfile', request, metadata || {}, this.methodInfoCreateDatasetProfile);
    };
    DataServiceClient.prototype.createModelProfile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateModelProfile', request, metadata || {}, this.methodInfoCreateModelProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateModelProfile', request, metadata || {}, this.methodInfoCreateModelProfile);
    };
    DataServiceClient.prototype.createStudyProfile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateStudyProfile', request, metadata || {}, this.methodInfoCreateStudyProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateStudyProfile', request, metadata || {}, this.methodInfoCreateStudyProfile);
    };
    DataServiceClient.prototype.createRecipeProfile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateRecipeProfile', request, metadata || {}, this.methodInfoCreateRecipeProfile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateRecipeProfile', request, metadata || {}, this.methodInfoCreateRecipeProfile);
    };
    DataServiceClient.prototype.createModelReport = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateModelReport', request, metadata || {}, this.methodInfoCreateModelReport, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateModelReport', request, metadata || {}, this.methodInfoCreateModelReport);
    };
    DataServiceClient.prototype.createStudyReport = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateStudyReport', request, metadata || {}, this.methodInfoCreateStudyReport, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateStudyReport', request, metadata || {}, this.methodInfoCreateStudyReport);
    };
    DataServiceClient.prototype.createDatasetReport = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateDatasetReport', request, metadata || {}, this.methodInfoCreateDatasetReport, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateDatasetReport', request, metadata || {}, this.methodInfoCreateDatasetReport);
    };
    DataServiceClient.prototype.createForecastReport = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateForecastReport', request, metadata || {}, this.methodInfoCreateForecastReport, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/CreateForecastReport', request, metadata || {}, this.methodInfoCreateForecastReport);
    };
    DataServiceClient.prototype.askModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/AskModel', request, metadata || {}, this.methodInfoAskModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/AskModel', request, metadata || {}, this.methodInfoAskModel);
    };
    DataServiceClient.prototype.tellModel = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/TellModel', request, metadata || {}, this.methodInfoTellModel, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/TellModel', request, metadata || {}, this.methodInfoTellModel);
    };
    DataServiceClient.prototype.partitionForecastFile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/PartitionForecastFile', request, metadata || {}, this.methodInfoPartitionForecastFile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/PartitionForecastFile', request, metadata || {}, this.methodInfoPartitionForecastFile);
    };
    DataServiceClient.prototype.mergeForecastFile = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/MergeForecastFile', request, metadata || {}, this.methodInfoMergeForecastFile, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/MergeForecastFile', request, metadata || {}, this.methodInfoMergeForecastFile);
    };
    DataServiceClient.prototype.shutDown = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/github.com.metaprov.modeldapi.services.data.v1.DataService/ShutDown', request, metadata || {}, this.methodInfoShutDown, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/github.com.metaprov.modeldapi.services.data.v1.DataService/ShutDown', request, metadata || {}, this.methodInfoShutDown);
    };
    return DataServiceClient;
}());
export { DataServiceClient };
//# sourceMappingURL=DataServiceClientPb.js.map