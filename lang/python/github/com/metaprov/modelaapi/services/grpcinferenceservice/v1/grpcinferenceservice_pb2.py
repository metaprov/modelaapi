# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/grpcinferenceservice/v1/grpcinferenceservice.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from protoc_gen_swagger.options import annotations_pb2 as protoc__gen__swagger_dot_options_dot_annotations__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from google.protobuf import struct_pb2 as google_dot_protobuf_dot_struct__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\nYgithub.com/metaprov/modelaapi/services/grpcinferenceservice/v1/grpcinferenceservice.proto\x12>github.com.metaprov.modelaapi.services.grpcinferenceservice.v1\x1a,protoc-gen-swagger/options/annotations.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x1cgoogle/protobuf/struct.proto\"\x17\n\x15ServerShutdownRequest\"\x18\n\x16ServerShutdownResponse\"\x13\n\x11ServerLiveRequest\"\"\n\x12ServerLiveResponse\x12\x0c\n\x04live\x18\x01 \x01(\x08\"\x14\n\x12ServerReadyRequest\"$\n\x13ServerReadyResponse\x12\r\n\x05ready\x18\x01 \x01(\x08\"2\n\x11ModelReadyRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0f\n\x07version\x18\x02 \x01(\t\"#\n\x12ModelReadyResponse\x12\r\n\x05ready\x18\x01 \x01(\x08\"\x17\n\x15ServerMetadataRequest\"K\n\x16ServerMetadataResponse\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0f\n\x07version\x18\x02 \x01(\t\x12\x12\n\nextensions\x18\x03 \x03(\t\"5\n\x14ModelMetadataRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0f\n\x07version\x18\x02 \x01(\t\"\xf7\x02\n\x15ModelMetadataResponse\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x10\n\x08versions\x18\x02 \x03(\t\x12\x10\n\x08platform\x18\x03 \x01(\t\x12t\n\x06inputs\x18\x04 \x03(\x0b\x32\x64.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata\x12u\n\x07outputs\x18\x05 \x03(\x0b\x32\x64.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse.TensorMetadata\x1a?\n\x0eTensorMetadata\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x10\n\x08\x64\x61tatype\x18\x02 \x01(\t\x12\r\n\x05shape\x18\x03 \x03(\x03\"\xd0\n\n\x11ModelInferRequest\x12\x12\n\nmodel_name\x18\x01 \x01(\t\x12\x15\n\rmodel_version\x18\x02 \x01(\t\x12\n\n\x02id\x18\x03 \x01(\t\x12u\n\nparameters\x18\x04 \x03(\x0b\x32\x61.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.ParametersEntry\x12r\n\x06inputs\x18\x05 \x03(\x0b\x32\x62.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor\x12}\n\x07outputs\x18\x06 \x03(\x0b\x32l.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor\x12\x1a\n\x12raw_input_contents\x18\x07 \x03(\x0c\x1a\xb5\x03\n\x10InferInputTensor\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x10\n\x08\x64\x61tatype\x18\x02 \x01(\t\x12\r\n\x05shape\x18\x03 \x03(\x03\x12\x86\x01\n\nparameters\x18\x04 \x03(\x0b\x32r.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferInputTensor.ParametersEntry\x12\x65\n\x08\x63ontents\x18\x05 \x01(\x0b\x32S.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents\x1a\x81\x01\n\x0fParametersEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12]\n\x05value\x18\x02 \x01(\x0b\x32N.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter:\x02\x38\x01\x1a\xc1\x02\n\x1aInferRequestedOutputTensor\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x90\x01\n\nparameters\x18\x02 \x03(\x0b\x32|.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest.InferRequestedOutputTensor.ParametersEntry\x1a\x81\x01\n\x0fParametersEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12]\n\x05value\x18\x02 \x01(\x0b\x32N.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter:\x02\x38\x01\x1a\x81\x01\n\x0fParametersEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12]\n\x05value\x18\x02 \x01(\x0b\x32N.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter:\x02\x38\x01\"\x96\x07\n\x12ModelInferResponse\x12\x12\n\nmodel_name\x18\x01 \x01(\t\x12\x15\n\rmodel_version\x18\x02 \x01(\t\x12\n\n\x02id\x18\x03 \x01(\t\x12v\n\nparameters\x18\x04 \x03(\x0b\x32\x62.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.ParametersEntry\x12u\n\x07outputs\x18\x05 \x03(\x0b\x32\x64.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor\x12\x1b\n\x13raw_output_contents\x18\x06 \x03(\x0c\x1a\xb8\x03\n\x11InferOutputTensor\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x10\n\x08\x64\x61tatype\x18\x02 \x01(\t\x12\r\n\x05shape\x18\x03 \x03(\x03\x12\x88\x01\n\nparameters\x18\x04 \x03(\x0b\x32t.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse.InferOutputTensor.ParametersEntry\x12\x65\n\x08\x63ontents\x18\x05 \x01(\x0b\x32S.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferTensorContents\x1a\x81\x01\n\x0fParametersEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12]\n\x05value\x18\x02 \x01(\x0b\x32N.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter:\x02\x38\x01\x1a\x81\x01\n\x0fParametersEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12]\n\x05value\x18\x02 \x01(\x0b\x32N.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.InferParameter:\x02\x38\x01\"i\n\x0eInferParameter\x12\x14\n\nbool_param\x18\x01 \x01(\x08H\x00\x12\x15\n\x0bint64_param\x18\x02 \x01(\x03H\x00\x12\x16\n\x0cstring_param\x18\x03 \x01(\tH\x00\x42\x12\n\x10parameter_choice\"\xd0\x01\n\x13InferTensorContents\x12\x15\n\rbool_contents\x18\x01 \x03(\x08\x12\x14\n\x0cint_contents\x18\x02 \x03(\x05\x12\x16\n\x0eint64_contents\x18\x03 \x03(\x03\x12\x15\n\ruint_contents\x18\x04 \x03(\r\x12\x17\n\x0fuint64_contents\x18\x05 \x03(\x04\x12\x15\n\rfp32_contents\x18\x06 \x03(\x02\x12\x15\n\rfp64_contents\x18\x07 \x03(\x01\x12\x16\n\x0e\x62ytes_contents\x18\x08 \x03(\x0c\"\xf5\x01\n\rPredictorInfo\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0c\n\x04task\x18\x03 \x01(\t\x12Y\n\x06models\x18\x04 \x03(\x0b\x32I.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo\x12Z\n\x06schema\x18\x05 \x01(\x0b\x32J.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.SchemaInfo\"\xbb\x02\n\tModelInfo\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0f\n\x07version\x18\x03 \x01(\t\x12\x0f\n\x07product\x18\x04 \x01(\t\x12\x16\n\x0etrainingMetric\x18\x05 \x01(\t\x12\x15\n\rtrainingScore\x18\x06 \x01(\x02\x12\x0e\n\x06status\x18\x07 \x01(\t\x12\x0e\n\x06\x63\x61nary\x18\x08 \x01(\x08\x12\x0e\n\x06shadow\x18\t \x01(\x08\x12\x0f\n\x07traffic\x18\n \x01(\x02\x12\x0e\n\x06\x66ilter\x18\x0b \x01(\t\x12\x0c\n\x04rank\x18\x0c \x01(\x03\x12\x0f\n\x07logPath\x18\r \x01(\t\x12\x0b\n\x03p95\x18\x0e \x01(\x02\x12\x0b\n\x03p99\x18\x0f \x01(\x02\x12\x16\n\x0elastPrediction\x18\x10 \x01(\x03\x12\x1a\n\x12\x64\x61ilyPredictionAvg\x18\x11 \x01(\x05\"i\n\nSchemaInfo\x12[\n\x07\x63olumns\x18\x01 \x03(\x0b\x32J.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ColumnInfo\"|\n\nColumnInfo\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0c\n\x04type\x18\x02 \x01(\t\x12\x12\n\ndatasetMin\x18\x03 \x01(\x02\x12\x13\n\x0b\x64\x61tasetMean\x18\x04 \x01(\x02\x12\x15\n\rdatasetStdDev\x18\x05 \x01(\x02\x12\x12\n\ndatasetMax\x18\x06 \x01(\x02\"\x15\n\x13GetPredictorRequest\"s\n\x14GetPredictorResponse\x12[\n\x04item\x18\x01 \x01(\x0b\x32M.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictorInfo\"\x1f\n\x0fGetModelRequest\x12\x0c\n\x04name\x18\x03 \x01(\t\"k\n\x10GetModelResponse\x12W\n\x04item\x18\x01 \x01(\x0b\x32I.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInfo\"\x9f\x01\n\x0ePredictRequest\x12\x11\n\tpredictor\x18\x01 \x01(\t\x12\x10\n\x08validate\x18\x02 \x01(\x08\x12\x0f\n\x07\x65xplain\x18\x03 \x01(\x08\x12\x0e\n\x06\x66ormat\x18\x04 \x01(\t\x12\x0f\n\x07payload\x18\x05 \x01(\t\x12\x0f\n\x07labeled\x18\x06 \x01(\x08\x12\x0f\n\x07metrics\x18\x07 \x03(\t\x12\x14\n\x0cmodelversion\x18\x08 \x01(\t\"\x93\x02\n\x0fPredictResponse\x12\x64\n\x05items\x18\x01 \x03(\x0b\x32U.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResultLineItem\x12k\n\x06scores\x18\x02 \x03(\x0b\x32[.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse.ScoresEntry\x1a-\n\x0bScoresEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\"\xe6\x02\n\x15PredictResultLineItem\x12\x0f\n\x07success\x18\x01 \x01(\x08\x12\r\n\x05score\x18\x02 \x01(\x02\x12\r\n\x05label\x18\x03 \x01(\t\x12g\n\rprobabilities\x18\x04 \x03(\x0b\x32P.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ProbabilityValue\x12\x16\n\x0emissingColumns\x18\x05 \x03(\t\x12\x12\n\noutOfBound\x18\x06 \x03(\t\x12\x15\n\rbaseShapValue\x18\x07 \x01(\x02\x12]\n\nshapValues\x18\x08 \x03(\x0b\x32I.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ShapValue\x12\x13\n\x0bprobability\x18\t \x01(\x02\"6\n\x10ProbabilityValue\x12\r\n\x05label\x18\x01 \x01(\t\x12\x13\n\x0bprobability\x18\x02 \x01(\x02\"+\n\tShapValue\x12\x0f\n\x07\x66\x65\x61ture\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02\x32\xae\x0f\n\x14GRPCInferenceService\x12\xb5\x01\n\nServerLive\x12Q.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveRequest\x1aR.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerLiveResponse\"\x00\x12\xb8\x01\n\x0bServerReady\x12R.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyRequest\x1aS.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerReadyResponse\"\x00\x12\xb5\x01\n\nModelReady\x12Q.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyRequest\x1aR.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelReadyResponse\"\x00\x12\xc1\x01\n\x0eServerMetadata\x12U.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataRequest\x1aV.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerMetadataResponse\"\x00\x12\xbe\x01\n\rModelMetadata\x12T.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataRequest\x1aU.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelMetadataResponse\"\x00\x12\xb5\x01\n\nModelInfer\x12Q.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferRequest\x1aR.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ModelInferResponse\"\x00\x12\xd0\x01\n\x0cGetPredictor\x12S.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorRequest\x1aT.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetPredictorResponse\"\x15\x82\xd3\xe4\x93\x02\x0f\x12\r/v1/predictor\x12\xc8\x01\n\x08GetModel\x12O.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelRequest\x1aP.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.GetModelResponse\"\x19\x82\xd3\xe4\x93\x02\x13\x12\x11/v1/models/{name}\x12\xd1\x01\n\x07Predict\x12N.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictRequest\x1aO.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.PredictResponse\"%\x82\xd3\xe4\x93\x02\x1f\"\x1a/v1/predictors/{predictor}:\x01*\x12\xbb\x01\n\x08Shutdown\x12U.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerShutdownRequest\x1aV.github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.ServerShutdownResponse\"\x00\x42\x9e\x03\n!io.modela.grpcinferenceservice.v1B\x14GrpcInferenceServiceZ>github.com/metaprov/modelaapi/services/grpcinferenceservice/v1\xaa\x02\x1dModela.Client.Autogen.Grpc.v1\x92\x41\x81\x02\x12\x61\n\x14GrpcInferenceService\"D\n\x0emodela authors\x12\x11https://modela.ai\x1a\x1fmodela-discuss@googlegroups.com2\x03\x31.0*\x02\x01\x02\x32\x10\x61pplication/json:\x10\x61pplication/jsonR;\n\x03\x34\x30\x34\x12\x34\n*Returned when the resource does not exist.\x12\x06\n\x04\x9a\x02\x01\x07r7\n\x17modela.ai documentation\x12\x1chttps://modela.ai/site/docs/b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.grpcinferenceservice.v1.grpcinferenceservice_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n!io.modela.grpcinferenceservice.v1B\024GrpcInferenceServiceZ>github.com/metaprov/modelaapi/services/grpcinferenceservice/v1\252\002\035Modela.Client.Autogen.Grpc.v1\222A\201\002\022a\n\024GrpcInferenceService\"D\n\016modela authors\022\021https://modela.ai\032\037modela-discuss@googlegroups.com2\0031.0*\002\001\0022\020application/json:\020application/jsonR;\n\003404\0224\n*Returned when the resource does not exist.\022\006\n\004\232\002\001\007r7\n\027modela.ai documentation\022\034https://modela.ai/site/docs/'
  _MODELINFERREQUEST_INFERINPUTTENSOR_PARAMETERSENTRY._options = None
  _MODELINFERREQUEST_INFERINPUTTENSOR_PARAMETERSENTRY._serialized_options = b'8\001'
  _MODELINFERREQUEST_INFERREQUESTEDOUTPUTTENSOR_PARAMETERSENTRY._options = None
  _MODELINFERREQUEST_INFERREQUESTEDOUTPUTTENSOR_PARAMETERSENTRY._serialized_options = b'8\001'
  _MODELINFERREQUEST_PARAMETERSENTRY._options = None
  _MODELINFERREQUEST_PARAMETERSENTRY._serialized_options = b'8\001'
  _MODELINFERRESPONSE_INFEROUTPUTTENSOR_PARAMETERSENTRY._options = None
  _MODELINFERRESPONSE_INFEROUTPUTTENSOR_PARAMETERSENTRY._serialized_options = b'8\001'
  _MODELINFERRESPONSE_PARAMETERSENTRY._options = None
  _MODELINFERRESPONSE_PARAMETERSENTRY._serialized_options = b'8\001'
  _PREDICTRESPONSE_SCORESENTRY._options = None
  _PREDICTRESPONSE_SCORESENTRY._serialized_options = b'8\001'
  _GRPCINFERENCESERVICE.methods_by_name['GetPredictor']._options = None
  _GRPCINFERENCESERVICE.methods_by_name['GetPredictor']._serialized_options = b'\202\323\344\223\002\017\022\r/v1/predictor'
  _GRPCINFERENCESERVICE.methods_by_name['GetModel']._options = None
  _GRPCINFERENCESERVICE.methods_by_name['GetModel']._serialized_options = b'\202\323\344\223\002\023\022\021/v1/models/{name}'
  _GRPCINFERENCESERVICE.methods_by_name['Predict']._options = None
  _GRPCINFERENCESERVICE.methods_by_name['Predict']._serialized_options = b'\202\323\344\223\002\037\"\032/v1/predictors/{predictor}:\001*'
  _SERVERSHUTDOWNREQUEST._serialized_start=263
  _SERVERSHUTDOWNREQUEST._serialized_end=286
  _SERVERSHUTDOWNRESPONSE._serialized_start=288
  _SERVERSHUTDOWNRESPONSE._serialized_end=312
  _SERVERLIVEREQUEST._serialized_start=314
  _SERVERLIVEREQUEST._serialized_end=333
  _SERVERLIVERESPONSE._serialized_start=335
  _SERVERLIVERESPONSE._serialized_end=369
  _SERVERREADYREQUEST._serialized_start=371
  _SERVERREADYREQUEST._serialized_end=391
  _SERVERREADYRESPONSE._serialized_start=393
  _SERVERREADYRESPONSE._serialized_end=429
  _MODELREADYREQUEST._serialized_start=431
  _MODELREADYREQUEST._serialized_end=481
  _MODELREADYRESPONSE._serialized_start=483
  _MODELREADYRESPONSE._serialized_end=518
  _SERVERMETADATAREQUEST._serialized_start=520
  _SERVERMETADATAREQUEST._serialized_end=543
  _SERVERMETADATARESPONSE._serialized_start=545
  _SERVERMETADATARESPONSE._serialized_end=620
  _MODELMETADATAREQUEST._serialized_start=622
  _MODELMETADATAREQUEST._serialized_end=675
  _MODELMETADATARESPONSE._serialized_start=678
  _MODELMETADATARESPONSE._serialized_end=1053
  _MODELMETADATARESPONSE_TENSORMETADATA._serialized_start=990
  _MODELMETADATARESPONSE_TENSORMETADATA._serialized_end=1053
  _MODELINFERREQUEST._serialized_start=1056
  _MODELINFERREQUEST._serialized_end=2416
  _MODELINFERREQUEST_INFERINPUTTENSOR._serialized_start=1523
  _MODELINFERREQUEST_INFERINPUTTENSOR._serialized_end=1960
  _MODELINFERREQUEST_INFERINPUTTENSOR_PARAMETERSENTRY._serialized_start=1831
  _MODELINFERREQUEST_INFERINPUTTENSOR_PARAMETERSENTRY._serialized_end=1960
  _MODELINFERREQUEST_INFERREQUESTEDOUTPUTTENSOR._serialized_start=1963
  _MODELINFERREQUEST_INFERREQUESTEDOUTPUTTENSOR._serialized_end=2284
  _MODELINFERREQUEST_INFERREQUESTEDOUTPUTTENSOR_PARAMETERSENTRY._serialized_start=1831
  _MODELINFERREQUEST_INFERREQUESTEDOUTPUTTENSOR_PARAMETERSENTRY._serialized_end=1960
  _MODELINFERREQUEST_PARAMETERSENTRY._serialized_start=1831
  _MODELINFERREQUEST_PARAMETERSENTRY._serialized_end=1960
  _MODELINFERRESPONSE._serialized_start=2419
  _MODELINFERRESPONSE._serialized_end=3337
  _MODELINFERRESPONSE_INFEROUTPUTTENSOR._serialized_start=2765
  _MODELINFERRESPONSE_INFEROUTPUTTENSOR._serialized_end=3205
  _MODELINFERRESPONSE_INFEROUTPUTTENSOR_PARAMETERSENTRY._serialized_start=1831
  _MODELINFERRESPONSE_INFEROUTPUTTENSOR_PARAMETERSENTRY._serialized_end=1960
  _MODELINFERRESPONSE_PARAMETERSENTRY._serialized_start=1831
  _MODELINFERRESPONSE_PARAMETERSENTRY._serialized_end=1960
  _INFERPARAMETER._serialized_start=3339
  _INFERPARAMETER._serialized_end=3444
  _INFERTENSORCONTENTS._serialized_start=3447
  _INFERTENSORCONTENTS._serialized_end=3655
  _PREDICTORINFO._serialized_start=3658
  _PREDICTORINFO._serialized_end=3903
  _MODELINFO._serialized_start=3906
  _MODELINFO._serialized_end=4221
  _SCHEMAINFO._serialized_start=4223
  _SCHEMAINFO._serialized_end=4328
  _COLUMNINFO._serialized_start=4330
  _COLUMNINFO._serialized_end=4454
  _GETPREDICTORREQUEST._serialized_start=4456
  _GETPREDICTORREQUEST._serialized_end=4477
  _GETPREDICTORRESPONSE._serialized_start=4479
  _GETPREDICTORRESPONSE._serialized_end=4594
  _GETMODELREQUEST._serialized_start=4596
  _GETMODELREQUEST._serialized_end=4627
  _GETMODELRESPONSE._serialized_start=4629
  _GETMODELRESPONSE._serialized_end=4736
  _PREDICTREQUEST._serialized_start=4739
  _PREDICTREQUEST._serialized_end=4898
  _PREDICTRESPONSE._serialized_start=4901
  _PREDICTRESPONSE._serialized_end=5176
  _PREDICTRESPONSE_SCORESENTRY._serialized_start=5131
  _PREDICTRESPONSE_SCORESENTRY._serialized_end=5176
  _PREDICTRESULTLINEITEM._serialized_start=5179
  _PREDICTRESULTLINEITEM._serialized_end=5537
  _PROBABILITYVALUE._serialized_start=5539
  _PROBABILITYVALUE._serialized_end=5593
  _SHAPVALUE._serialized_start=5595
  _SHAPVALUE._serialized_end=5638
  _GRPCINFERENCESERVICE._serialized_start=5641
  _GRPCINFERENCESERVICE._serialized_end=7607
# @@protoc_insertion_point(module_scope)
