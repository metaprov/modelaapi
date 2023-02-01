// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.12.4
// source: github.com/metaprov/modelaapi/services/todo/v1/todo.proto

package v1

import (
	v1alpha1 "github.com/metaprov/modelaapi/pkg/apis/team/v1alpha1"
	_ "github.com/metaprov/modelaapi/services/common/v1"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	field_mask "google.golang.org/genproto/protobuf/field_mask"
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

type ListTodosRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Namespace string            `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Labels    map[string]string `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *ListTodosRequest) Reset() {
	*x = ListTodosRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListTodosRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListTodosRequest) ProtoMessage() {}

func (x *ListTodosRequest) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListTodosRequest.ProtoReflect.Descriptor instead.
func (*ListTodosRequest) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescGZIP(), []int{0}
}

func (x *ListTodosRequest) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

func (x *ListTodosRequest) GetLabels() map[string]string {
	if x != nil {
		return x.Labels
	}
	return nil
}

type ListTodosResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Todos         *v1alpha1.TodoList `protobuf:"bytes,1,opt,name=todos,proto3" json:"todos,omitempty"`
	NextPageToken string             `protobuf:"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3" json:"next_page_token,omitempty"`
}

func (x *ListTodosResponse) Reset() {
	*x = ListTodosResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListTodosResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListTodosResponse) ProtoMessage() {}

func (x *ListTodosResponse) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListTodosResponse.ProtoReflect.Descriptor instead.
func (*ListTodosResponse) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescGZIP(), []int{1}
}

func (x *ListTodosResponse) GetTodos() *v1alpha1.TodoList {
	if x != nil {
		return x.Todos
	}
	return nil
}

func (x *ListTodosResponse) GetNextPageToken() string {
	if x != nil {
		return x.NextPageToken
	}
	return ""
}

type CreateTodoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Todo     *v1alpha1.Todo `protobuf:"bytes,1,opt,name=todo,proto3" json:"todo,omitempty"`
	Password string         `protobuf:"bytes,2,opt,name=password,proto3" json:"password,omitempty"`
}

func (x *CreateTodoRequest) Reset() {
	*x = CreateTodoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateTodoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateTodoRequest) ProtoMessage() {}

func (x *CreateTodoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateTodoRequest.ProtoReflect.Descriptor instead.
func (*CreateTodoRequest) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescGZIP(), []int{2}
}

func (x *CreateTodoRequest) GetTodo() *v1alpha1.Todo {
	if x != nil {
		return x.Todo
	}
	return nil
}

func (x *CreateTodoRequest) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

type CreateTodoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *CreateTodoResponse) Reset() {
	*x = CreateTodoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateTodoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateTodoResponse) ProtoMessage() {}

func (x *CreateTodoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateTodoResponse.ProtoReflect.Descriptor instead.
func (*CreateTodoResponse) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescGZIP(), []int{3}
}

type UpdateTodoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Todo      *v1alpha1.Todo        `protobuf:"bytes,1,opt,name=todo,proto3" json:"todo,omitempty"`
	FieldMask *field_mask.FieldMask `protobuf:"bytes,2,opt,name=field_mask,json=fieldMask,proto3" json:"field_mask,omitempty"`
}

func (x *UpdateTodoRequest) Reset() {
	*x = UpdateTodoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateTodoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateTodoRequest) ProtoMessage() {}

func (x *UpdateTodoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateTodoRequest.ProtoReflect.Descriptor instead.
func (*UpdateTodoRequest) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescGZIP(), []int{4}
}

func (x *UpdateTodoRequest) GetTodo() *v1alpha1.Todo {
	if x != nil {
		return x.Todo
	}
	return nil
}

func (x *UpdateTodoRequest) GetFieldMask() *field_mask.FieldMask {
	if x != nil {
		return x.FieldMask
	}
	return nil
}

type UpdateTodoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *UpdateTodoResponse) Reset() {
	*x = UpdateTodoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateTodoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateTodoResponse) ProtoMessage() {}

func (x *UpdateTodoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateTodoResponse.ProtoReflect.Descriptor instead.
func (*UpdateTodoResponse) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescGZIP(), []int{5}
}

type GetTodoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Namespace string `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name      string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *GetTodoRequest) Reset() {
	*x = GetTodoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTodoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTodoRequest) ProtoMessage() {}

func (x *GetTodoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTodoRequest.ProtoReflect.Descriptor instead.
func (*GetTodoRequest) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescGZIP(), []int{6}
}

func (x *GetTodoRequest) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

func (x *GetTodoRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type GetTodoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Todo *v1alpha1.Todo `protobuf:"bytes,1,opt,name=todo,proto3" json:"todo,omitempty"`
	Yaml string         `protobuf:"bytes,2,opt,name=yaml,proto3" json:"yaml,omitempty"`
}

func (x *GetTodoResponse) Reset() {
	*x = GetTodoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTodoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTodoResponse) ProtoMessage() {}

func (x *GetTodoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTodoResponse.ProtoReflect.Descriptor instead.
func (*GetTodoResponse) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescGZIP(), []int{7}
}

func (x *GetTodoResponse) GetTodo() *v1alpha1.Todo {
	if x != nil {
		return x.Todo
	}
	return nil
}

func (x *GetTodoResponse) GetYaml() string {
	if x != nil {
		return x.Yaml
	}
	return ""
}

type DeleteTodoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Namespace string `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name      string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *DeleteTodoRequest) Reset() {
	*x = DeleteTodoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteTodoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteTodoRequest) ProtoMessage() {}

func (x *DeleteTodoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteTodoRequest.ProtoReflect.Descriptor instead.
func (*DeleteTodoRequest) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescGZIP(), []int{8}
}

func (x *DeleteTodoRequest) GetNamespace() string {
	if x != nil {
		return x.Namespace
	}
	return ""
}

func (x *DeleteTodoRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type DeleteTodoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DeleteTodoResponse) Reset() {
	*x = DeleteTodoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteTodoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteTodoResponse) ProtoMessage() {}

func (x *DeleteTodoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteTodoResponse.ProtoReflect.Descriptor instead.
func (*DeleteTodoResponse) Descriptor() ([]byte, []int) {
	return file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescGZIP(), []int{9}
}

var File_github_com_metaprov_modelaapi_services_todo_v1_todo_proto protoreflect.FileDescriptor

var file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDesc = []byte{
	0x0a, 0x39, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74,
	0x61, 0x70, 0x72, 0x6f, 0x76, 0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x74, 0x6f, 0x64, 0x6f, 0x2f, 0x76, 0x31,
	0x2f, 0x74, 0x6f, 0x64, 0x6f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x2e, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76,
	0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x74, 0x6f, 0x64, 0x6f, 0x2e, 0x76, 0x31, 0x1a, 0x20, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x66, 0x69, 0x65,
	0x6c, 0x64, 0x5f, 0x6d, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x44, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76,
	0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x61,
	0x70, 0x69, 0x73, 0x2f, 0x74, 0x65, 0x61, 0x6d, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x31, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x3d, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65,
	0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69,
	0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0xd1, 0x01, 0x0a, 0x10, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x6f, 0x64, 0x6f, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61,
	0x63, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70,
	0x61, 0x63, 0x65, 0x12, 0x64, 0x0a, 0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x18, 0x02, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x4c, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61,
	0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x6f, 0x64,
	0x6f, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x6f, 0x64, 0x6f, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x52, 0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x1a, 0x39, 0x0a, 0x0b, 0x4c, 0x61, 0x62,
	0x65, 0x6c, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x3a, 0x02, 0x38, 0x01, 0x22, 0x91, 0x01, 0x0a, 0x11, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x6f, 0x64,
	0x6f, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x54, 0x0a, 0x05, 0x74, 0x6f,
	0x64, 0x6f, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x3e, 0x2e, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e,
	0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6b, 0x67, 0x2e, 0x61, 0x70,
	0x69, 0x73, 0x2e, 0x74, 0x65, 0x61, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31,
	0x2e, 0x54, 0x6f, 0x64, 0x6f, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x05, 0x74, 0x6f, 0x64, 0x6f, 0x73,
	0x12, 0x26, 0x0a, 0x0f, 0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x5f, 0x74, 0x6f,
	0x6b, 0x65, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x6e, 0x65, 0x78, 0x74, 0x50,
	0x61, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x7f, 0x0a, 0x11, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x4e, 0x0a,
	0x04, 0x74, 0x6f, 0x64, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x3a, 0x2e, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f,
	0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6b, 0x67, 0x2e,
	0x61, 0x70, 0x69, 0x73, 0x2e, 0x74, 0x65, 0x61, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2e, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x04, 0x74, 0x6f, 0x64, 0x6f, 0x12, 0x1a, 0x0a,
	0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x22, 0x14, 0x0a, 0x12, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x9e, 0x01, 0x0a, 0x11, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x4e, 0x0a, 0x04, 0x74, 0x6f, 0x64, 0x6f, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x3a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61,
	0x61, 0x70, 0x69, 0x2e, 0x70, 0x6b, 0x67, 0x2e, 0x61, 0x70, 0x69, 0x73, 0x2e, 0x74, 0x65, 0x61,
	0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x54, 0x6f, 0x64, 0x6f, 0x52,
	0x04, 0x74, 0x6f, 0x64, 0x6f, 0x12, 0x39, 0x0a, 0x0a, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x6d,
	0x61, 0x73, 0x6b, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c,
	0x64, 0x4d, 0x61, 0x73, 0x6b, 0x52, 0x09, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x4d, 0x61, 0x73, 0x6b,
	0x22, 0x14, 0x0a, 0x12, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x42, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x54, 0x6f, 0x64,
	0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x09, 0x6e, 0x61, 0x6d, 0x65,
	0x73, 0x70, 0x61, 0x63, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6e, 0x61, 0x6d,
	0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x75, 0x0a, 0x0f, 0x47, 0x65,
	0x74, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4e, 0x0a,
	0x04, 0x74, 0x6f, 0x64, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x3a, 0x2e, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f,
	0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x6b, 0x67, 0x2e,
	0x61, 0x70, 0x69, 0x73, 0x2e, 0x74, 0x65, 0x61, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2e, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x04, 0x74, 0x6f, 0x64, 0x6f, 0x12, 0x12, 0x0a,
	0x04, 0x79, 0x61, 0x6d, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x79, 0x61, 0x6d,
	0x6c, 0x22, 0x45, 0x0a, 0x11, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70,
	0x61, 0x63, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6e, 0x61, 0x6d, 0x65, 0x73,
	0x70, 0x61, 0x63, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x14, 0x0a, 0x12, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x32, 0xb5,
	0x07, 0x0a, 0x0b, 0x54, 0x6f, 0x64, 0x6f, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0xaf,
	0x01, 0x0a, 0x09, 0x4c, 0x69, 0x73, 0x74, 0x54, 0x6f, 0x64, 0x6f, 0x73, 0x12, 0x40, 0x2e, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72,
	0x6f, 0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x6f, 0x64, 0x6f, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x69,
	0x73, 0x74, 0x54, 0x6f, 0x64, 0x6f, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x41,
	0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61,
	0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x6f, 0x64, 0x6f, 0x2e, 0x76, 0x31, 0x2e,
	0x4c, 0x69, 0x73, 0x74, 0x54, 0x6f, 0x64, 0x6f, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x1d, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x17, 0x12, 0x15, 0x2f, 0x76, 0x31, 0x2f, 0x74,
	0x6f, 0x64, 0x6f, 0x73, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x7d,
	0x12, 0xa9, 0x01, 0x0a, 0x0a, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x12,
	0x41, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74,
	0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x6f, 0x64, 0x6f, 0x2e, 0x76, 0x31,
	0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x42, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e,
	0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61,
	0x70, 0x69, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x6f, 0x64, 0x6f,
	0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x14, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x0e, 0x22, 0x09,
	0x2f, 0x76, 0x31, 0x2f, 0x74, 0x6f, 0x64, 0x6f, 0x73, 0x3a, 0x01, 0x2a, 0x12, 0xb0, 0x01, 0x0a,
	0x07, 0x47, 0x65, 0x74, 0x54, 0x6f, 0x64, 0x6f, 0x12, 0x3e, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d,
	0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x73, 0x2e, 0x74, 0x6f, 0x64, 0x6f, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x54, 0x6f, 0x64,
	0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x3f, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d,
	0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x73, 0x2e, 0x74, 0x6f, 0x64, 0x6f, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x54, 0x6f, 0x64,
	0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x24, 0x82, 0xd3, 0xe4, 0x93, 0x02,
	0x1e, 0x12, 0x1c, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x6f, 0x64, 0x6f, 0x73, 0x2f, 0x7b, 0x6e, 0x61,
	0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x7d, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x12,
	0xd8, 0x01, 0x0a, 0x0a, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x12, 0x41,
	0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61,
	0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x6f, 0x64, 0x6f, 0x2e, 0x76, 0x31, 0x2e,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x42, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d,
	0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70,
	0x69, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x6f, 0x64, 0x6f, 0x2e,
	0x76, 0x31, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x43, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x3d, 0x1a, 0x38, 0x2f,
	0x76, 0x31, 0x2f, 0x74, 0x6f, 0x64, 0x6f, 0x73, 0x2f, 0x7b, 0x74, 0x6f, 0x64, 0x6f, 0x2e, 0x6d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63,
	0x65, 0x7d, 0x2f, 0x7b, 0x74, 0x6f, 0x64, 0x6f, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x2e, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x3a, 0x01, 0x2a, 0x12, 0xb9, 0x01, 0x0a, 0x0a, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x12, 0x41, 0x2e, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2e,
	0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x2e, 0x74, 0x6f, 0x64, 0x6f, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x42, 0x2e, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72,
	0x6f, 0x76, 0x2e, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x74, 0x6f, 0x64, 0x6f, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x54, 0x6f, 0x64, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x24, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1e, 0x2a, 0x1c, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x6f,
	0x64, 0x6f, 0x73, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x73, 0x70, 0x61, 0x63, 0x65, 0x7d, 0x2f,
	0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x42, 0x30, 0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x76, 0x2f, 0x6d, 0x6f,
	0x64, 0x65, 0x6c, 0x61, 0x61, 0x70, 0x69, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2f, 0x74, 0x6f, 0x64, 0x6f, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescOnce sync.Once
	file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescData = file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDesc
)

func file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescGZIP() []byte {
	file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescOnce.Do(func() {
		file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescData = protoimpl.X.CompressGZIP(file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescData)
	})
	return file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDescData
}

var file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes = make([]protoimpl.MessageInfo, 11)
var file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_goTypes = []interface{}{
	(*ListTodosRequest)(nil),     // 0: github.com.metaprov.modelaapi.services.todo.v1.ListTodosRequest
	(*ListTodosResponse)(nil),    // 1: github.com.metaprov.modelaapi.services.todo.v1.ListTodosResponse
	(*CreateTodoRequest)(nil),    // 2: github.com.metaprov.modelaapi.services.todo.v1.CreateTodoRequest
	(*CreateTodoResponse)(nil),   // 3: github.com.metaprov.modelaapi.services.todo.v1.CreateTodoResponse
	(*UpdateTodoRequest)(nil),    // 4: github.com.metaprov.modelaapi.services.todo.v1.UpdateTodoRequest
	(*UpdateTodoResponse)(nil),   // 5: github.com.metaprov.modelaapi.services.todo.v1.UpdateTodoResponse
	(*GetTodoRequest)(nil),       // 6: github.com.metaprov.modelaapi.services.todo.v1.GetTodoRequest
	(*GetTodoResponse)(nil),      // 7: github.com.metaprov.modelaapi.services.todo.v1.GetTodoResponse
	(*DeleteTodoRequest)(nil),    // 8: github.com.metaprov.modelaapi.services.todo.v1.DeleteTodoRequest
	(*DeleteTodoResponse)(nil),   // 9: github.com.metaprov.modelaapi.services.todo.v1.DeleteTodoResponse
	nil,                          // 10: github.com.metaprov.modelaapi.services.todo.v1.ListTodosRequest.LabelsEntry
	(*v1alpha1.TodoList)(nil),    // 11: github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.TodoList
	(*v1alpha1.Todo)(nil),        // 12: github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.Todo
	(*field_mask.FieldMask)(nil), // 13: google.protobuf.FieldMask
}
var file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_depIdxs = []int32{
	10, // 0: github.com.metaprov.modelaapi.services.todo.v1.ListTodosRequest.labels:type_name -> github.com.metaprov.modelaapi.services.todo.v1.ListTodosRequest.LabelsEntry
	11, // 1: github.com.metaprov.modelaapi.services.todo.v1.ListTodosResponse.todos:type_name -> github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.TodoList
	12, // 2: github.com.metaprov.modelaapi.services.todo.v1.CreateTodoRequest.todo:type_name -> github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.Todo
	12, // 3: github.com.metaprov.modelaapi.services.todo.v1.UpdateTodoRequest.todo:type_name -> github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.Todo
	13, // 4: github.com.metaprov.modelaapi.services.todo.v1.UpdateTodoRequest.field_mask:type_name -> google.protobuf.FieldMask
	12, // 5: github.com.metaprov.modelaapi.services.todo.v1.GetTodoResponse.todo:type_name -> github.com.metaprov.modelaapi.pkg.apis.team.v1alpha1.Todo
	0,  // 6: github.com.metaprov.modelaapi.services.todo.v1.TodoService.ListTodos:input_type -> github.com.metaprov.modelaapi.services.todo.v1.ListTodosRequest
	2,  // 7: github.com.metaprov.modelaapi.services.todo.v1.TodoService.CreateTodo:input_type -> github.com.metaprov.modelaapi.services.todo.v1.CreateTodoRequest
	6,  // 8: github.com.metaprov.modelaapi.services.todo.v1.TodoService.GetTodo:input_type -> github.com.metaprov.modelaapi.services.todo.v1.GetTodoRequest
	4,  // 9: github.com.metaprov.modelaapi.services.todo.v1.TodoService.UpdateTodo:input_type -> github.com.metaprov.modelaapi.services.todo.v1.UpdateTodoRequest
	8,  // 10: github.com.metaprov.modelaapi.services.todo.v1.TodoService.DeleteTodo:input_type -> github.com.metaprov.modelaapi.services.todo.v1.DeleteTodoRequest
	1,  // 11: github.com.metaprov.modelaapi.services.todo.v1.TodoService.ListTodos:output_type -> github.com.metaprov.modelaapi.services.todo.v1.ListTodosResponse
	3,  // 12: github.com.metaprov.modelaapi.services.todo.v1.TodoService.CreateTodo:output_type -> github.com.metaprov.modelaapi.services.todo.v1.CreateTodoResponse
	7,  // 13: github.com.metaprov.modelaapi.services.todo.v1.TodoService.GetTodo:output_type -> github.com.metaprov.modelaapi.services.todo.v1.GetTodoResponse
	5,  // 14: github.com.metaprov.modelaapi.services.todo.v1.TodoService.UpdateTodo:output_type -> github.com.metaprov.modelaapi.services.todo.v1.UpdateTodoResponse
	9,  // 15: github.com.metaprov.modelaapi.services.todo.v1.TodoService.DeleteTodo:output_type -> github.com.metaprov.modelaapi.services.todo.v1.DeleteTodoResponse
	11, // [11:16] is the sub-list for method output_type
	6,  // [6:11] is the sub-list for method input_type
	6,  // [6:6] is the sub-list for extension type_name
	6,  // [6:6] is the sub-list for extension extendee
	0,  // [0:6] is the sub-list for field type_name
}

func init() { file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_init() }
func file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_init() {
	if File_github_com_metaprov_modelaapi_services_todo_v1_todo_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListTodosRequest); i {
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
		file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListTodosResponse); i {
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
		file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateTodoRequest); i {
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
		file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateTodoResponse); i {
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
		file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateTodoRequest); i {
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
		file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateTodoResponse); i {
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
		file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTodoRequest); i {
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
		file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTodoResponse); i {
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
		file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteTodoRequest); i {
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
		file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteTodoResponse); i {
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
			RawDescriptor: file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   11,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_goTypes,
		DependencyIndexes: file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_depIdxs,
		MessageInfos:      file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_msgTypes,
	}.Build()
	File_github_com_metaprov_modelaapi_services_todo_v1_todo_proto = out.File
	file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_rawDesc = nil
	file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_goTypes = nil
	file_github_com_metaprov_modelaapi_services_todo_v1_todo_proto_depIdxs = nil
}
