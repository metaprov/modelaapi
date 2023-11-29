// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.12.4
// source: github.com/metaprov/modelaapi/services/llm/v1/llm.proto

package v1

import (
	v1alpha1 "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	v1alpha11 "github.com/metaprov/modelaapi/pkg/apis/llm/v1alpha1"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type RefreshRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Product       *v1alpha1.DataProduct    `protobuf:"bytes,1,opt,name=product,proto3" json:"product,omitempty"`
	KnowledgeBase *v1alpha11.KnowledgeBase `protobuf:"bytes,2,opt,name=knowledgeBase,proto3" json:"knowledgeBase,omitempty"`
}

func (x *RefreshRequest) Reset() {
	*x = RefreshRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RefreshRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RefreshRequest) ProtoMessage() {}

func (x *RefreshRequest) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RefreshRequest.ProtoReflect.Descriptor instead.
func (*RefreshRequest) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_rawDescGZIP(), []int{0}
}

func (x *RefreshRequest) GetProduct() *v1alpha1.DataProduct {
	if x != nil {
		return x.Product
	}
	return nil
}

func (x *RefreshRequest) GetKnowledgeBase() *v1alpha11.KnowledgeBase {
	if x != nil {
		return x.KnowledgeBase
	}
	return nil
}

type RefreshResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *RefreshResponse) Reset() {
	*x = RefreshResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RefreshResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RefreshResponse) ProtoMessage() {}

func (x *RefreshResponse) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RefreshResponse.ProtoReflect.Descriptor instead.
func (*RefreshResponse) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_rawDescGZIP(), []int{1}
}

var File_github_com_metaprov_modelaapi_services_llm_v1_llm_proto protoreflect.FileDescriptor

var file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_rawDesc = []byte{
	0x0a, 0x37, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74,
	0x61, 0x70, 0x72, 0x6f, 0x76, 0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x6c, 0x6c, 0x6d, 0x2f, 0x76, 0x31, 0x2f,
	0x6c, 0x6c, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x44, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2f, 0x6d,
	0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69,
	0x73, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f,
	0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x43, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61,
	0x70, 0x72, 0x6f, 0x76, 0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2f, 0x70,
	0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x73, 0x2f, 0x6c, 0x6c, 0x6d, 0x2f, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0xd7, 0x01, 0x0a, 0x0e, 0x52, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x5b, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x41, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d,
	0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6b, 0x67, 0x2e, 0x61, 0x70, 0x69,
	0x73, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e,
	0x44, 0x61, 0x74, 0x61, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x07, 0x70, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x12, 0x68, 0x0a, 0x0d, 0x6b, 0x6e, 0x6f, 0x77, 0x6c, 0x65, 0x64, 0x67,
	0x65, 0x42, 0x61, 0x73, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x42, 0x2e, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f,
	0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6b, 0x67, 0x2e,
	0x61, 0x70, 0x69, 0x73, 0x2e, 0x6c, 0x6c, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2e, 0x4b, 0x6e, 0x6f, 0x77, 0x6c, 0x65, 0x64, 0x67, 0x65, 0x42, 0x61, 0x73, 0x65, 0x52,
	0x0d, 0x6b, 0x6e, 0x6f, 0x77, 0x6c, 0x65, 0x64, 0x67, 0x65, 0x42, 0x61, 0x73, 0x65, 0x22, 0x11,
	0x0a, 0x0f, 0x52, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x32, 0x3c, 0x0a, 0x0a, 0x4c, 0x4c, 0x4d, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x2e, 0x0a, 0x07, 0x52, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x12, 0x0f, 0x2e, 0x52, 0x65, 0x66,
	0x72, 0x65, 0x73, 0x68, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x10, 0x2e, 0x52, 0x65,
	0x66, 0x72, 0x65, 0x73, 0x68, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42,
	0x2f, 0x5a, 0x2d, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65,
	0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69,
	0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x6c, 0x6c, 0x6d, 0x2f, 0x76, 0x31,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_rawDescOnce sync.Once
	file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_rawDescData = file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_rawDesc
)

func file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_rawDescGZIP() []byte {
	file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_rawDescOnce.Do(func() {
		file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_rawDescData = protoimpl.X.CompressGZIP(file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_rawDescData)
	})
	return file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_rawDescData
}

var file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_goTypes = []interface{}{
	(*RefreshRequest)(nil),          // 0: RefreshRequest
	(*RefreshResponse)(nil),         // 1: RefreshResponse
	(*v1alpha1.DataProduct)(nil),    // 2: github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct
	(*v1alpha11.KnowledgeBase)(nil), // 3: github.com.metaprov.modelaapi.pkg.apis.llm.v1alpha1.KnowledgeBase
}
var file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_depIdxs = []int32{
	2, // 0: RefreshRequest.product:type_name -> github.com.metaprov.modelaapi.pkg.apis.data.v1alpha1.DataProduct
	3, // 1: RefreshRequest.knowledgeBase:type_name -> github.com.metaprov.modelaapi.pkg.apis.llm.v1alpha1.KnowledgeBase
	0, // 2: LLMService.Refresh:input_type -> RefreshRequest
	1, // 3: LLMService.Refresh:output_type -> RefreshResponse
	3, // [3:4] is the sub-list for method output_type
	2, // [2:3] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_init() }
func file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_init() {
	if File_github_com_metaprov_modelaapi_services_llm_v1_llm_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RefreshRequest); i {
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
		file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RefreshResponse); i {
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
			RawDescriptor: file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_goTypes,
		DependencyIndexes: file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_depIdxs,
		MessageInfos:      file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_msgTypes,
	}.Build()
	File_github_com_metaprov_modelaapi_services_llm_v1_llm_proto = out.File
	file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_rawDesc = nil
	file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_goTypes = nil
	file_github_com_metaprov_modelaapi_services_llm_v1_llm_proto_depIdxs = nil
}
