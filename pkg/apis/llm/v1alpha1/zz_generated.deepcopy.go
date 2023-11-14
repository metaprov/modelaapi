//go:build !ignore_autogenerated
// +build !ignore_autogenerated

/**
*
* Copyright (C) 2017 modela authors
* For license information, see LICENSE.txt
 */

// Code generated by controller-gen. DO NOT EDIT.

package v1alpha1

import (
	catalogv1alpha1 "github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1"
	"k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/runtime"
)

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *CodeSplitterSpec) DeepCopyInto(out *CodeSplitterSpec) {
	*out = *in
	if in.ChunkLines != nil {
		in, out := &in.ChunkLines, &out.ChunkLines
		*out = new(int32)
		**out = **in
	}
	if in.ChunkLinesOverlap != nil {
		in, out := &in.ChunkLinesOverlap, &out.ChunkLinesOverlap
		*out = new(int32)
		**out = **in
	}
	if in.MaxChars != nil {
		in, out := &in.MaxChars, &out.MaxChars
		*out = new(int32)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new CodeSplitterSpec.
func (in *CodeSplitterSpec) DeepCopy() *CodeSplitterSpec {
	if in == nil {
		return nil
	}
	out := new(CodeSplitterSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *DatabaseReaderSpec) DeepCopyInto(out *DatabaseReaderSpec) {
	*out = *in
	if in.Options != nil {
		in, out := &in.Options, &out.Options
		*out = make(map[string]string, len(*in))
		for key, val := range *in {
			(*out)[key] = val
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new DatabaseReaderSpec.
func (in *DatabaseReaderSpec) DeepCopy() *DatabaseReaderSpec {
	if in == nil {
		return nil
	}
	out := new(DatabaseReaderSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *DocumentSpec) DeepCopyInto(out *DocumentSpec) {
	*out = *in
	if in.Description != nil {
		in, out := &in.Description, &out.Description
		*out = new(string)
		**out = **in
	}
	if in.Metadata != nil {
		in, out := &in.Metadata, &out.Metadata
		*out = make(map[string]string, len(*in))
		for key, val := range *in {
			(*out)[key] = val
		}
	}
	if in.RefreshPeriod != nil {
		in, out := &in.RefreshPeriod, &out.RefreshPeriod
		*out = new(int32)
		**out = **in
	}
	if in.NodeParser != nil {
		in, out := &in.NodeParser, &out.NodeParser
		*out = new(NodeParserSpec)
		(*in).DeepCopyInto(*out)
	}
	if in.EmbeddingModel != nil {
		in, out := &in.EmbeddingModel, &out.EmbeddingModel
		*out = new(ModelSpec)
		**out = **in
	}
	if in.File != nil {
		in, out := &in.File, &out.File
		*out = new(FileReaderSpec)
		(*in).DeepCopyInto(*out)
	}
	if in.Database != nil {
		in, out := &in.Database, &out.Database
		*out = new(DatabaseReaderSpec)
		(*in).DeepCopyInto(*out)
	}
	if in.Web != nil {
		in, out := &in.Web, &out.Web
		*out = new(WebReaderSpec)
		(*in).DeepCopyInto(*out)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new DocumentSpec.
func (in *DocumentSpec) DeepCopy() *DocumentSpec {
	if in == nil {
		return nil
	}
	out := new(DocumentSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *DocumentStatus) DeepCopyInto(out *DocumentStatus) {
	*out = *in
	if in.LastRefreshAt != nil {
		in, out := &in.LastRefreshAt, &out.LastRefreshAt
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new DocumentStatus.
func (in *DocumentStatus) DeepCopy() *DocumentStatus {
	if in == nil {
		return nil
	}
	out := new(DocumentStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *FileReaderSpec) DeepCopyInto(out *FileReaderSpec) {
	*out = *in
	out.Location = in.Location
	if in.Options != nil {
		in, out := &in.Options, &out.Options
		*out = make(map[string]string, len(*in))
		for key, val := range *in {
			(*out)[key] = val
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new FileReaderSpec.
func (in *FileReaderSpec) DeepCopy() *FileReaderSpec {
	if in == nil {
		return nil
	}
	out := new(FileReaderSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *KnowledgeBase) DeepCopyInto(out *KnowledgeBase) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
	in.Status.DeepCopyInto(&out.Status)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new KnowledgeBase.
func (in *KnowledgeBase) DeepCopy() *KnowledgeBase {
	if in == nil {
		return nil
	}
	out := new(KnowledgeBase)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *KnowledgeBase) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *KnowledgeBaseList) DeepCopyInto(out *KnowledgeBaseList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]KnowledgeBase, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new KnowledgeBaseList.
func (in *KnowledgeBaseList) DeepCopy() *KnowledgeBaseList {
	if in == nil {
		return nil
	}
	out := new(KnowledgeBaseList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *KnowledgeBaseList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *KnowledgeBaseSpec) DeepCopyInto(out *KnowledgeBaseSpec) {
	*out = *in
	if in.Owner != nil {
		in, out := &in.Owner, &out.Owner
		*out = new(string)
		**out = **in
	}
	if in.Description != nil {
		in, out := &in.Description, &out.Description
		*out = new(string)
		**out = **in
	}
	if in.RefreshSchedule != nil {
		in, out := &in.RefreshSchedule, &out.RefreshSchedule
		*out = new(catalogv1alpha1.RunSchedule)
		(*in).DeepCopyInto(*out)
	}
	if in.MetadataDatabase != nil {
		in, out := &in.MetadataDatabase, &out.MetadataDatabase
		*out = new(catalogv1alpha1.DatabaseLocation)
		**out = **in
	}
	out.EmbeddingModel = in.EmbeddingModel
	if in.Documents != nil {
		in, out := &in.Documents, &out.Documents
		*out = make([]DocumentSpec, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	in.NodeParser.DeepCopyInto(&out.NodeParser)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new KnowledgeBaseSpec.
func (in *KnowledgeBaseSpec) DeepCopy() *KnowledgeBaseSpec {
	if in == nil {
		return nil
	}
	out := new(KnowledgeBaseSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *KnowledgeBaseStatus) DeepCopyInto(out *KnowledgeBaseStatus) {
	*out = *in
	if in.LastRefreshAt != nil {
		in, out := &in.LastRefreshAt, &out.LastRefreshAt
		*out = (*in).DeepCopy()
	}
	if in.Logs != nil {
		in, out := &in.Logs, &out.Logs
		*out = make(catalogv1alpha1.Logs, len(*in))
		copy(*out, *in)
	}
	if in.Documents != nil {
		in, out := &in.Documents, &out.Documents
		*out = make([]DocumentStatus, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	if in.UpdatedAt != nil {
		in, out := &in.UpdatedAt, &out.UpdatedAt
		*out = (*in).DeepCopy()
	}
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]v1.Condition, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new KnowledgeBaseStatus.
func (in *KnowledgeBaseStatus) DeepCopy() *KnowledgeBaseStatus {
	if in == nil {
		return nil
	}
	out := new(KnowledgeBaseStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ModelSpec) DeepCopyInto(out *ModelSpec) {
	*out = *in
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ModelSpec.
func (in *ModelSpec) DeepCopy() *ModelSpec {
	if in == nil {
		return nil
	}
	out := new(ModelSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *NodeParserSpec) DeepCopyInto(out *NodeParserSpec) {
	*out = *in
	if in.IncludeOrderRelationship != nil {
		in, out := &in.IncludeOrderRelationship, &out.IncludeOrderRelationship
		*out = new(bool)
		**out = **in
	}
	if in.IncludeMetadata != nil {
		in, out := &in.IncludeMetadata, &out.IncludeMetadata
		*out = new(bool)
		**out = **in
	}
	if in.Type != nil {
		in, out := &in.Type, &out.Type
		*out = new(NodeParserType)
		**out = **in
	}
	if in.Text != nil {
		in, out := &in.Text, &out.Text
		*out = new(TextSplitterSpec)
		(*in).DeepCopyInto(*out)
	}
	if in.Sentence != nil {
		in, out := &in.Sentence, &out.Sentence
		*out = new(SentenceWindowNodeParserSpec)
		(*in).DeepCopyInto(*out)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new NodeParserSpec.
func (in *NodeParserSpec) DeepCopy() *NodeParserSpec {
	if in == nil {
		return nil
	}
	out := new(NodeParserSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *SentenceSplitterSpec) DeepCopyInto(out *SentenceSplitterSpec) {
	*out = *in
	if in.ChunkSize != nil {
		in, out := &in.ChunkSize, &out.ChunkSize
		*out = new(int32)
		**out = **in
	}
	if in.ChunkOverlap != nil {
		in, out := &in.ChunkOverlap, &out.ChunkOverlap
		*out = new(int32)
		**out = **in
	}
	if in.WordSeparator != nil {
		in, out := &in.WordSeparator, &out.WordSeparator
		*out = new(string)
		**out = **in
	}
	if in.ParagraphSeparator != nil {
		in, out := &in.ParagraphSeparator, &out.ParagraphSeparator
		*out = new(string)
		**out = **in
	}
	if in.Splitter != nil {
		in, out := &in.Splitter, &out.Splitter
		*out = new(SentenceTokenizerSpec)
		(*in).DeepCopyInto(*out)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new SentenceSplitterSpec.
func (in *SentenceSplitterSpec) DeepCopy() *SentenceSplitterSpec {
	if in == nil {
		return nil
	}
	out := new(SentenceSplitterSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *SentenceTokenizerSpec) DeepCopyInto(out *SentenceTokenizerSpec) {
	*out = *in
	if in.Separator != nil {
		in, out := &in.Separator, &out.Separator
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new SentenceTokenizerSpec.
func (in *SentenceTokenizerSpec) DeepCopy() *SentenceTokenizerSpec {
	if in == nil {
		return nil
	}
	out := new(SentenceTokenizerSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *SentenceWindowNodeParserSpec) DeepCopyInto(out *SentenceWindowNodeParserSpec) {
	*out = *in
	if in.Splitter != nil {
		in, out := &in.Splitter, &out.Splitter
		*out = new(SentenceTokenizerSpec)
		(*in).DeepCopyInto(*out)
	}
	if in.WindowSize != nil {
		in, out := &in.WindowSize, &out.WindowSize
		*out = new(int32)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new SentenceWindowNodeParserSpec.
func (in *SentenceWindowNodeParserSpec) DeepCopy() *SentenceWindowNodeParserSpec {
	if in == nil {
		return nil
	}
	out := new(SentenceWindowNodeParserSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *TextSplitterSpec) DeepCopyInto(out *TextSplitterSpec) {
	*out = *in
	if in.Type != nil {
		in, out := &in.Type, &out.Type
		*out = new(TextSplitterType)
		**out = **in
	}
	if in.Sentence != nil {
		in, out := &in.Sentence, &out.Sentence
		*out = new(SentenceSplitterSpec)
		(*in).DeepCopyInto(*out)
	}
	if in.Token != nil {
		in, out := &in.Token, &out.Token
		*out = new(TokenSplitterSpec)
		(*in).DeepCopyInto(*out)
	}
	if in.Code != nil {
		in, out := &in.Code, &out.Code
		*out = new(CodeSplitterSpec)
		(*in).DeepCopyInto(*out)
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new TextSplitterSpec.
func (in *TextSplitterSpec) DeepCopy() *TextSplitterSpec {
	if in == nil {
		return nil
	}
	out := new(TextSplitterSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *TokenSplitterSpec) DeepCopyInto(out *TokenSplitterSpec) {
	*out = *in
	if in.ChunkSize != nil {
		in, out := &in.ChunkSize, &out.ChunkSize
		*out = new(int32)
		**out = **in
	}
	if in.ChunkOverlap != nil {
		in, out := &in.ChunkOverlap, &out.ChunkOverlap
		*out = new(int32)
		**out = **in
	}
	if in.WordSeparator != nil {
		in, out := &in.WordSeparator, &out.WordSeparator
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new TokenSplitterSpec.
func (in *TokenSplitterSpec) DeepCopy() *TokenSplitterSpec {
	if in == nil {
		return nil
	}
	out := new(TokenSplitterSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *WebReaderSpec) DeepCopyInto(out *WebReaderSpec) {
	*out = *in
	if in.ConnectionName != nil {
		in, out := &in.ConnectionName, &out.ConnectionName
		*out = new(string)
		**out = **in
	}
	if in.Options != nil {
		in, out := &in.Options, &out.Options
		*out = make(map[string]string, len(*in))
		for key, val := range *in {
			(*out)[key] = val
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new WebReaderSpec.
func (in *WebReaderSpec) DeepCopy() *WebReaderSpec {
	if in == nil {
		return nil
	}
	out := new(WebReaderSpec)
	in.DeepCopyInto(out)
	return out
}
