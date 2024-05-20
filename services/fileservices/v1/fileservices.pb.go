// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: github.com/metaprov/modelaapi/services/fileservices/v1/fileservices.proto

package v1

import (
	_ "github.com/golang/protobuf/ptypes/empty"
	_ "github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1"
	_ "github.com/metaprov/modelaapi/services/common/v1"
	_ "google.golang.org/genproto/protobuf/field_mask"
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

type Location struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Tenant       string `protobuf:"bytes,1,opt,name=tenant,proto3" json:"tenant,omitempty"`
	DataProduct  string `protobuf:"bytes,2,opt,name=dataProduct,proto3" json:"dataProduct,omitempty"`
	ResourceKind string `protobuf:"bytes,3,opt,name=resourceKind,proto3" json:"resourceKind,omitempty"`
	ResourceName string `protobuf:"bytes,4,opt,name=resourceName,proto3" json:"resourceName,omitempty"`
	FileName     string `protobuf:"bytes,5,opt,name=fileName,proto3" json:"fileName,omitempty"`
	Bucket       string `protobuf:"bytes,6,opt,name=bucket,proto3" json:"bucket,omitempty"`
}

func (x *Location) Reset() {
	*x = Location{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Location) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Location) ProtoMessage() {}

func (x *Location) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Location.ProtoReflect.Descriptor instead.
func (*Location) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDescGZIP(), []int{0}
}

func (x *Location) GetTenant() string {
	if x != nil {
		return x.Tenant
	}
	return ""
}

func (x *Location) GetDataProduct() string {
	if x != nil {
		return x.DataProduct
	}
	return ""
}

func (x *Location) GetResourceKind() string {
	if x != nil {
		return x.ResourceKind
	}
	return ""
}

func (x *Location) GetResourceName() string {
	if x != nil {
		return x.ResourceName
	}
	return ""
}

func (x *Location) GetFileName() string {
	if x != nil {
		return x.FileName
	}
	return ""
}

func (x *Location) GetBucket() string {
	if x != nil {
		return x.Bucket
	}
	return ""
}

type InitiateUploadRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Size     int32     `protobuf:"varint,1,opt,name=size,proto3" json:"size,omitempty"`
	Location *Location `protobuf:"bytes,2,opt,name=location,proto3" json:"location,omitempty"`
}

func (x *InitiateUploadRequest) Reset() {
	*x = InitiateUploadRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InitiateUploadRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InitiateUploadRequest) ProtoMessage() {}

func (x *InitiateUploadRequest) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InitiateUploadRequest.ProtoReflect.Descriptor instead.
func (*InitiateUploadRequest) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDescGZIP(), []int{1}
}

func (x *InitiateUploadRequest) GetSize() int32 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *InitiateUploadRequest) GetLocation() *Location {
	if x != nil {
		return x.Location
	}
	return nil
}

type InitiateUploadResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token     string `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	ChunkSize int32  `protobuf:"varint,2,opt,name=chunkSize,proto3" json:"chunkSize,omitempty"`
}

func (x *InitiateUploadResponse) Reset() {
	*x = InitiateUploadResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InitiateUploadResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InitiateUploadResponse) ProtoMessage() {}

func (x *InitiateUploadResponse) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InitiateUploadResponse.ProtoReflect.Descriptor instead.
func (*InitiateUploadResponse) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDescGZIP(), []int{2}
}

func (x *InitiateUploadResponse) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

func (x *InitiateUploadResponse) GetChunkSize() int32 {
	if x != nil {
		return x.ChunkSize
	}
	return 0
}

type UploadRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token string `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	Data  []byte `protobuf:"bytes,3,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *UploadRequest) Reset() {
	*x = UploadRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UploadRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UploadRequest) ProtoMessage() {}

func (x *UploadRequest) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UploadRequest.ProtoReflect.Descriptor instead.
func (*UploadRequest) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDescGZIP(), []int{3}
}

func (x *UploadRequest) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

func (x *UploadRequest) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

type UploadResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Complete bool `protobuf:"varint,1,opt,name=complete,proto3" json:"complete,omitempty"`
}

func (x *UploadResponse) Reset() {
	*x = UploadResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UploadResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UploadResponse) ProtoMessage() {}

func (x *UploadResponse) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UploadResponse.ProtoReflect.Descriptor instead.
func (*UploadResponse) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDescGZIP(), []int{4}
}

func (x *UploadResponse) GetComplete() bool {
	if x != nil {
		return x.Complete
	}
	return false
}

var File_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto protoreflect.FileDescriptor

var file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDesc = []byte{
	0x0a, 0x49, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74,
	0x61, 0x70, 0x72, 0x6f, 0x76, 0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x76, 0x31, 0x2f, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x36, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76,
	0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x76, 0x31, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x44, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d,
	0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70,
	0x69, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x61, 0x70, 0x69, 0x73, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x2f,
	0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74,
	0x65, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x3d, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2f, 0x6d, 0x6f,
	0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc0, 0x01, 0x0a, 0x08, 0x4c, 0x6f, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x12, 0x20, 0x0a, 0x0b,
	0x64, 0x61, 0x74, 0x61, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0b, 0x64, 0x61, 0x74, 0x61, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x12, 0x22,
	0x0a, 0x0c, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x4b, 0x69, 0x6e, 0x64, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x4b, 0x69,
	0x6e, 0x64, 0x12, 0x22, 0x0a, 0x0c, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x4e, 0x61,
	0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72,
	0x63, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x66, 0x69, 0x6c, 0x65, 0x4e, 0x61,
	0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66, 0x69, 0x6c, 0x65, 0x4e, 0x61,
	0x6d, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x06, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x22, 0x89, 0x01, 0x0a, 0x15, 0x49,
	0x6e, 0x69, 0x74, 0x69, 0x61, 0x74, 0x65, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x5c, 0x0a, 0x08, 0x6c, 0x6f, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x40, 0x2e, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76,
	0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x08, 0x6c, 0x6f,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x4c, 0x0a, 0x16, 0x49, 0x6e, 0x69, 0x74, 0x69, 0x61,
	0x74, 0x65, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x1c, 0x0a, 0x09, 0x63, 0x68, 0x75, 0x6e, 0x6b, 0x53,
	0x69, 0x7a, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x09, 0x63, 0x68, 0x75, 0x6e, 0x6b,
	0x53, 0x69, 0x7a, 0x65, 0x22, 0x39, 0x0a, 0x0d, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x64,
	0x61, 0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22,
	0x2c, 0x0a, 0x0e, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x1a, 0x0a, 0x08, 0x63, 0x6f, 0x6d, 0x70, 0x6c, 0x65, 0x74, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x08, 0x63, 0x6f, 0x6d, 0x70, 0x6c, 0x65, 0x74, 0x65, 0x32, 0xe5, 0x02,
	0x0a, 0x13, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0xb1, 0x01, 0x0a, 0x0e, 0x49, 0x6e, 0x69, 0x74, 0x69, 0x61,
	0x74, 0x65, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x4d, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d,
	0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x73, 0x2e, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x76,
	0x31, 0x2e, 0x49, 0x6e, 0x69, 0x74, 0x69, 0x61, 0x74, 0x65, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x4e, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d, 0x6f,
	0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x76, 0x31,
	0x2e, 0x49, 0x6e, 0x69, 0x74, 0x69, 0x61, 0x74, 0x65, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x99, 0x01, 0x0a, 0x06, 0x55, 0x70,
	0x6c, 0x6f, 0x61, 0x64, 0x12, 0x45, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c,
	0x61, 0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x66, 0x69,
	0x6c, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70,
	0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x46, 0x2e, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f,
	0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x73, 0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x38, 0x5a, 0x36, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2f, 0x6d, 0x6f, 0x64,
	0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f,
	0x66, 0x69, 0x6c, 0x65, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x76, 0x31, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDescOnce sync.Once
	file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDescData = file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDesc
)

func file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDescGZIP() []byte {
	file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDescOnce.Do(func() {
		file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDescData = protoimpl.X.CompressGZIP(file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDescData)
	})
	return file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDescData
}

var file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_goTypes = []interface{}{
	(*Location)(nil),               // 0: github.com.metaprov.modelaapi.services.fileservices.v1.Location
	(*InitiateUploadRequest)(nil),  // 1: github.com.metaprov.modelaapi.services.fileservices.v1.InitiateUploadRequest
	(*InitiateUploadResponse)(nil), // 2: github.com.metaprov.modelaapi.services.fileservices.v1.InitiateUploadResponse
	(*UploadRequest)(nil),          // 3: github.com.metaprov.modelaapi.services.fileservices.v1.UploadRequest
	(*UploadResponse)(nil),         // 4: github.com.metaprov.modelaapi.services.fileservices.v1.UploadResponse
}
var file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_depIdxs = []int32{
	0, // 0: github.com.metaprov.modelaapi.services.fileservices.v1.InitiateUploadRequest.location:type_name -> github.com.metaprov.modelaapi.services.fileservices.v1.Location
	1, // 1: github.com.metaprov.modelaapi.services.fileservices.v1.FileServicesService.InitiateUpload:input_type -> github.com.metaprov.modelaapi.services.fileservices.v1.InitiateUploadRequest
	3, // 2: github.com.metaprov.modelaapi.services.fileservices.v1.FileServicesService.Upload:input_type -> github.com.metaprov.modelaapi.services.fileservices.v1.UploadRequest
	2, // 3: github.com.metaprov.modelaapi.services.fileservices.v1.FileServicesService.InitiateUpload:output_type -> github.com.metaprov.modelaapi.services.fileservices.v1.InitiateUploadResponse
	4, // 4: github.com.metaprov.modelaapi.services.fileservices.v1.FileServicesService.Upload:output_type -> github.com.metaprov.modelaapi.services.fileservices.v1.UploadResponse
	3, // [3:5] is the sub-list for method output_type
	1, // [1:3] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_init() }
func file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_init() {
	if File_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Location); i {
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
		file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InitiateUploadRequest); i {
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
		file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InitiateUploadResponse); i {
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
		file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UploadRequest); i {
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
		file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UploadResponse); i {
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
			RawDescriptor: file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_goTypes,
		DependencyIndexes: file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_depIdxs,
		MessageInfos:      file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_msgTypes,
	}.Build()
	File_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto = out.File
	file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_rawDesc = nil
	file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_goTypes = nil
	file_github_com_metaprov_modelaapi_services_fileservices_v1_fileservices_proto_depIdxs = nil
}
