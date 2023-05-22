// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.12.4
// source: github.com/metaprov/modelaapi/services/predictionstore/v1/predictionstore.proto

package v1

import (
	v1alpha1 "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1alpha11 "github.com/metaprov/modelaapi/pkg/apis/infra/v1alpha1"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	v1 "k8s.io/api/core/v1"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type PredictionsIngestRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Dataset    *v1alpha1.Dataset     `protobuf:"bytes,1,opt,name=dataset,proto3" json:"dataset,omitempty"`
	Key        string                `protobuf:"bytes,2,opt,name=key,proto3" json:"key,omitempty"` // the location to put the prediction db in.
	Connection *v1alpha11.Connection `protobuf:"bytes,3,opt,name=connection,proto3" json:"connection,omitempty"`
	Secret     *v1.Secret            `protobuf:"bytes,4,opt,name=secret,proto3" json:"secret,omitempty"`
}

func (x *PredictionsIngestRequest) Reset() {
	*x = PredictionsIngestRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PredictionsIngestRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PredictionsIngestRequest) ProtoMessage() {}

func (x *PredictionsIngestRequest) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PredictionsIngestRequest.ProtoReflect.Descriptor instead.
func (*PredictionsIngestRequest) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_rawDescGZIP(), []int{0}
}

func (x *PredictionsIngestRequest) GetDataset() *v1alpha1.Dataset {
	if x != nil {
		return x.Dataset
	}
	return nil
}

func (x *PredictionsIngestRequest) GetKey() string {
	if x != nil {
		return x.Key
	}
	return ""
}

func (x *PredictionsIngestRequest) GetConnection() *v1alpha11.Connection {
	if x != nil {
		return x.Connection
	}
	return nil
}

func (x *PredictionsIngestRequest) GetSecret() *v1.Secret {
	if x != nil {
		return x.Secret
	}
	return nil
}

type PredictionIngestResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *PredictionIngestResponse) Reset() {
	*x = PredictionIngestResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PredictionIngestResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PredictionIngestResponse) ProtoMessage() {}

func (x *PredictionIngestResponse) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PredictionIngestResponse.ProtoReflect.Descriptor instead.
func (*PredictionIngestResponse) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_rawDescGZIP(), []int{1}
}

var File_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto protoreflect.FileDescriptor

var file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_rawDesc = []byte{
	0x0a, 0x4f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74,
	0x61, 0x70, 0x72, 0x6f, 0x76, 0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x72, 0x65, 0x64,
	0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x39, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65,
	0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69,
	0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x44, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f,
	0x76, 0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x6b, 0x67, 0x2f,
	0x61, 0x70, 0x69, 0x73, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x45, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d,
	0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70,
	0x69, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x73, 0x2f, 0x69, 0x6e, 0x66, 0x72, 0x61,
	0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61,
	0x74, 0x65, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x22, 0x6b, 0x38, 0x73, 0x2e, 0x69,
	0x6f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x67, 0x65,
	0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x9c, 0x02,
	0x0a, 0x18, 0x50, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x49, 0x6e, 0x67,
	0x65, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x57, 0x0a, 0x07, 0x64, 0x61,
	0x74, 0x61, 0x73, 0x65, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x3d, 0x2e, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f,
	0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6b, 0x67, 0x2e,
	0x61, 0x70, 0x69, 0x73, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x73, 0x65, 0x74, 0x52, 0x07, 0x64, 0x61, 0x74, 0x61,
	0x73, 0x65, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x61, 0x0a, 0x0a, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x41, 0x2e, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e,
	0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6b, 0x67, 0x2e, 0x61, 0x70,
	0x69, 0x73, 0x2e, 0x69, 0x6e, 0x66, 0x72, 0x61, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0a, 0x63, 0x6f,
	0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x32, 0x0a, 0x06, 0x73, 0x65, 0x63, 0x72,
	0x65, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x6b, 0x38, 0x73, 0x2e, 0x69,
	0x6f, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x65,
	0x63, 0x72, 0x65, 0x74, 0x52, 0x06, 0x73, 0x65, 0x63, 0x72, 0x65, 0x74, 0x22, 0x1a, 0x0a, 0x18,
	0x50, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x67, 0x65, 0x73, 0x74,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x32, 0xcf, 0x01, 0x0a, 0x16, 0x50, 0x72, 0x65,
	0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x12, 0xb4, 0x01, 0x0a, 0x06, 0x49, 0x6e, 0x67, 0x65, 0x73, 0x74, 0x12, 0x53,
	0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61,
	0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x65, 0x64, 0x69,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x49, 0x6e, 0x67, 0x65, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x53, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61,
	0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x65,
	0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x2e, 0x76, 0x31, 0x2e,
	0x50, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x67, 0x65, 0x73, 0x74,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x3b, 0x5a, 0x39, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f,
	0x76, 0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2f, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x74, 0x6f, 0x72, 0x65, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_rawDescOnce sync.Once
	file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_rawDescData = file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_rawDesc
)

func file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_rawDescGZIP() []byte {
	file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_rawDescOnce.Do(func() {
		file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_rawDescData = protoimpl.X.CompressGZIP(file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_rawDescData)
	})
	return file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_rawDescData
}

var file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_goTypes = []interface{}{
	(*PredictionsIngestRequest)(nil), // 0: github.com.metaprov.modelaapi.services.predictionstore.v1.PredictionsIngestRequest
	(*PredictionIngestResponse)(nil), // 1: github.com.metaprov.modelaapi.services.predictionstore.v1.PredictionIngestResponse
	(*v1alpha1.Dataset)(nil),         // 2: github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset
	(*v1alpha11.Connection)(nil),     // 3: github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection
	(*v1.Secret)(nil),                // 4: k8s.io.api.core.v1.Secret
}
var file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_depIdxs = []int32{
	2, // 0: github.com.metaprov.modelaapi.services.predictionstore.v1.PredictionsIngestRequest.dataset:type_name -> github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.Dataset
	3, // 1: github.com.metaprov.modelaapi.services.predictionstore.v1.PredictionsIngestRequest.connection:type_name -> github.com.metaprov.modelaapi.pkg.apis.infra.v1alpha1.Connection
	4, // 2: github.com.metaprov.modelaapi.services.predictionstore.v1.PredictionsIngestRequest.secret:type_name -> k8s.io.api.core.v1.Secret
	0, // 3: github.com.metaprov.modelaapi.services.predictionstore.v1.PredictionStoreService.Ingest:input_type -> github.com.metaprov.modelaapi.services.predictionstore.v1.PredictionsIngestRequest
	1, // 4: github.com.metaprov.modelaapi.services.predictionstore.v1.PredictionStoreService.Ingest:output_type -> github.com.metaprov.modelaapi.services.predictionstore.v1.PredictionIngestResponse
	4, // [4:5] is the sub-list for method output_type
	3, // [3:4] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() {
	file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_init()
}
func file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_init() {
	if File_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PredictionsIngestRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PredictionIngestResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_goTypes,
		DependencyIndexes: file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_depIdxs,
		MessageInfos:      file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_msgTypes,
	}.Build()
	File_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto = out.File
	file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_rawDesc = nil
	file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_goTypes = nil
	file_github_com_metaprov_modelaapi_services_predictionstore_v1_predictionstore_proto_depIdxs = nil
}
