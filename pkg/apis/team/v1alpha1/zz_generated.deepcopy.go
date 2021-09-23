// +build !ignore_autogenerated

/**
*
* Copyright (C) 2017 modela authors
* For license information, see LICENSE.txt
 */

// Code generated by controller-gen. DO NOT EDIT.

package v1alpha1

import (
	"k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/runtime"
)

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Comment) DeepCopyInto(out *Comment) {
	*out = *in
	if in.AuthorRef != nil {
		in, out := &in.AuthorRef, &out.AuthorRef
		*out = new(v1.ObjectReference)
		**out = **in
	}
	if in.ReplyToID != nil {
		in, out := &in.ReplyToID, &out.ReplyToID
		*out = new(string)
		**out = **in
	}
	if in.Content != nil {
		in, out := &in.Content, &out.Content
		*out = new(string)
		**out = **in
	}
	if in.PostedAt != nil {
		in, out := &in.PostedAt, &out.PostedAt
		*out = (*in).DeepCopy()
	}
	if in.Sent != nil {
		in, out := &in.Sent, &out.Sent
		*out = new(bool)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Comment.
func (in *Comment) DeepCopy() *Comment {
	if in == nil {
		return nil
	}
	out := new(Comment)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Meeting) DeepCopyInto(out *Meeting) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
	in.Status.DeepCopyInto(&out.Status)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Meeting.
func (in *Meeting) DeepCopy() *Meeting {
	if in == nil {
		return nil
	}
	out := new(Meeting)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *Meeting) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MeetingCondition) DeepCopyInto(out *MeetingCondition) {
	*out = *in
	if in.LastTransitionTime != nil {
		in, out := &in.LastTransitionTime, &out.LastTransitionTime
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MeetingCondition.
func (in *MeetingCondition) DeepCopy() *MeetingCondition {
	if in == nil {
		return nil
	}
	out := new(MeetingCondition)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MeetingList) DeepCopyInto(out *MeetingList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]Meeting, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MeetingList.
func (in *MeetingList) DeepCopy() *MeetingList {
	if in == nil {
		return nil
	}
	out := new(MeetingList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *MeetingList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MeetingSpec) DeepCopyInto(out *MeetingSpec) {
	*out = *in
	if in.Description != nil {
		in, out := &in.Description, &out.Description
		*out = new(string)
		**out = **in
	}
	if in.Agenda != nil {
		in, out := &in.Agenda, &out.Agenda
		*out = new(string)
		**out = **in
	}
	out.EntityRef = in.EntityRef
	if in.NotifierName != nil {
		in, out := &in.NotifierName, &out.NotifierName
		*out = new(string)
		**out = **in
	}
	if in.Participants != nil {
		in, out := &in.Participants, &out.Participants
		*out = make([]string, len(*in))
		copy(*out, *in)
	}
	if in.Flagged != nil {
		in, out := &in.Flagged, &out.Flagged
		*out = new(bool)
		**out = **in
	}
	if in.Reminder != nil {
		in, out := &in.Reminder, &out.Reminder
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MeetingSpec.
func (in *MeetingSpec) DeepCopy() *MeetingSpec {
	if in == nil {
		return nil
	}
	out := new(MeetingSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *MeetingStatus) DeepCopyInto(out *MeetingStatus) {
	*out = *in
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]MeetingCondition, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new MeetingStatus.
func (in *MeetingStatus) DeepCopy() *MeetingStatus {
	if in == nil {
		return nil
	}
	out := new(MeetingStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PostMortem) DeepCopyInto(out *PostMortem) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
	in.Status.DeepCopyInto(&out.Status)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PostMortem.
func (in *PostMortem) DeepCopy() *PostMortem {
	if in == nil {
		return nil
	}
	out := new(PostMortem)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *PostMortem) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PostMortemCondition) DeepCopyInto(out *PostMortemCondition) {
	*out = *in
	if in.LastTransitionTime != nil {
		in, out := &in.LastTransitionTime, &out.LastTransitionTime
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PostMortemCondition.
func (in *PostMortemCondition) DeepCopy() *PostMortemCondition {
	if in == nil {
		return nil
	}
	out := new(PostMortemCondition)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PostMortemList) DeepCopyInto(out *PostMortemList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]PostMortem, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PostMortemList.
func (in *PostMortemList) DeepCopy() *PostMortemList {
	if in == nil {
		return nil
	}
	out := new(PostMortemList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *PostMortemList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PostMortemSpec) DeepCopyInto(out *PostMortemSpec) {
	*out = *in
	if in.EntityRef != nil {
		in, out := &in.EntityRef, &out.EntityRef
		*out = new(v1.ObjectReference)
		**out = **in
	}
	if in.LocationRef != nil {
		in, out := &in.LocationRef, &out.LocationRef
		*out = new(v1.ObjectReference)
		**out = **in
	}
	if in.HandledBy != nil {
		in, out := &in.HandledBy, &out.HandledBy
		*out = make([]v1.ObjectReference, len(*in))
		copy(*out, *in)
	}
	if in.Alerts != nil {
		in, out := &in.Alerts, &out.Alerts
		*out = make([]RaisedAlert, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	if in.TimeLine != nil {
		in, out := &in.TimeLine, &out.TimeLine
		*out = make([]TimeLineEvent, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	if in.RootCause != nil {
		in, out := &in.RootCause, &out.RootCause
		*out = new(string)
		**out = **in
	}
	if in.Summary != nil {
		in, out := &in.Summary, &out.Summary
		*out = new(string)
		**out = **in
	}
	if in.Owner != nil {
		in, out := &in.Owner, &out.Owner
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PostMortemSpec.
func (in *PostMortemSpec) DeepCopy() *PostMortemSpec {
	if in == nil {
		return nil
	}
	out := new(PostMortemSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *PostMortemStatus) DeepCopyInto(out *PostMortemStatus) {
	*out = *in
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]PostMortemCondition, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new PostMortemStatus.
func (in *PostMortemStatus) DeepCopy() *PostMortemStatus {
	if in == nil {
		return nil
	}
	out := new(PostMortemStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *RaisedAlert) DeepCopyInto(out *RaisedAlert) {
	*out = *in
	if in.Name != nil {
		in, out := &in.Name, &out.Name
		*out = new(string)
		**out = **in
	}
	if in.At != nil {
		in, out := &in.At, &out.At
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new RaisedAlert.
func (in *RaisedAlert) DeepCopy() *RaisedAlert {
	if in == nil {
		return nil
	}
	out := new(RaisedAlert)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Review) DeepCopyInto(out *Review) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
	in.Status.DeepCopyInto(&out.Status)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Review.
func (in *Review) DeepCopy() *Review {
	if in == nil {
		return nil
	}
	out := new(Review)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *Review) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ReviewCondition) DeepCopyInto(out *ReviewCondition) {
	*out = *in
	if in.LastTransitionTime != nil {
		in, out := &in.LastTransitionTime, &out.LastTransitionTime
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ReviewCondition.
func (in *ReviewCondition) DeepCopy() *ReviewCondition {
	if in == nil {
		return nil
	}
	out := new(ReviewCondition)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ReviewList) DeepCopyInto(out *ReviewList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]Review, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ReviewList.
func (in *ReviewList) DeepCopy() *ReviewList {
	if in == nil {
		return nil
	}
	out := new(ReviewList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *ReviewList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ReviewSpec) DeepCopyInto(out *ReviewSpec) {
	*out = *in
	if in.EntityRef != nil {
		in, out := &in.EntityRef, &out.EntityRef
		*out = new(v1.ObjectReference)
		**out = **in
	}
	if in.Messages != nil {
		in, out := &in.Messages, &out.Messages
		*out = make([]Comment, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
	if in.Owner != nil {
		in, out := &in.Owner, &out.Owner
		*out = new(string)
		**out = **in
	}
	if in.NotifierName != nil {
		in, out := &in.NotifierName, &out.NotifierName
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ReviewSpec.
func (in *ReviewSpec) DeepCopy() *ReviewSpec {
	if in == nil {
		return nil
	}
	out := new(ReviewSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *ReviewStatus) DeepCopyInto(out *ReviewStatus) {
	*out = *in
	if in.LastUpdated != nil {
		in, out := &in.LastUpdated, &out.LastUpdated
		*out = (*in).DeepCopy()
	}
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]ReviewCondition, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ReviewStatus.
func (in *ReviewStatus) DeepCopy() *ReviewStatus {
	if in == nil {
		return nil
	}
	out := new(ReviewStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *RunBook) DeepCopyInto(out *RunBook) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
	in.Status.DeepCopyInto(&out.Status)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new RunBook.
func (in *RunBook) DeepCopy() *RunBook {
	if in == nil {
		return nil
	}
	out := new(RunBook)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *RunBook) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *RunBookCondition) DeepCopyInto(out *RunBookCondition) {
	*out = *in
	in.LastUpdateTime.DeepCopyInto(&out.LastUpdateTime)
	if in.LastTransitionTime != nil {
		in, out := &in.LastTransitionTime, &out.LastTransitionTime
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new RunBookCondition.
func (in *RunBookCondition) DeepCopy() *RunBookCondition {
	if in == nil {
		return nil
	}
	out := new(RunBookCondition)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *RunBookList) DeepCopyInto(out *RunBookList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]RunBook, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new RunBookList.
func (in *RunBookList) DeepCopy() *RunBookList {
	if in == nil {
		return nil
	}
	out := new(RunBookList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *RunBookList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *RunBookSpec) DeepCopyInto(out *RunBookSpec) {
	*out = *in
	if in.EntityRef != nil {
		in, out := &in.EntityRef, &out.EntityRef
		*out = new(v1.ObjectReference)
		**out = **in
	}
	if in.AuthorRef != nil {
		in, out := &in.AuthorRef, &out.AuthorRef
		*out = new(v1.ObjectReference)
		**out = **in
	}
	if in.Owner != nil {
		in, out := &in.Owner, &out.Owner
		*out = new(string)
		**out = **in
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new RunBookSpec.
func (in *RunBookSpec) DeepCopy() *RunBookSpec {
	if in == nil {
		return nil
	}
	out := new(RunBookSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *RunBookStatus) DeepCopyInto(out *RunBookStatus) {
	*out = *in
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]RunBookCondition, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new RunBookStatus.
func (in *RunBookStatus) DeepCopy() *RunBookStatus {
	if in == nil {
		return nil
	}
	out := new(RunBookStatus)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *TimeLineEvent) DeepCopyInto(out *TimeLineEvent) {
	*out = *in
	if in.Content != nil {
		in, out := &in.Content, &out.Content
		*out = new(string)
		**out = **in
	}
	if in.At != nil {
		in, out := &in.At, &out.At
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new TimeLineEvent.
func (in *TimeLineEvent) DeepCopy() *TimeLineEvent {
	if in == nil {
		return nil
	}
	out := new(TimeLineEvent)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *Todo) DeepCopyInto(out *Todo) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ObjectMeta.DeepCopyInto(&out.ObjectMeta)
	in.Spec.DeepCopyInto(&out.Spec)
	in.Status.DeepCopyInto(&out.Status)
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Todo.
func (in *Todo) DeepCopy() *Todo {
	if in == nil {
		return nil
	}
	out := new(Todo)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *Todo) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *TodoCondition) DeepCopyInto(out *TodoCondition) {
	*out = *in
	if in.LastTransitionTime != nil {
		in, out := &in.LastTransitionTime, &out.LastTransitionTime
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new TodoCondition.
func (in *TodoCondition) DeepCopy() *TodoCondition {
	if in == nil {
		return nil
	}
	out := new(TodoCondition)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *TodoList) DeepCopyInto(out *TodoList) {
	*out = *in
	out.TypeMeta = in.TypeMeta
	in.ListMeta.DeepCopyInto(&out.ListMeta)
	if in.Items != nil {
		in, out := &in.Items, &out.Items
		*out = make([]Todo, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new TodoList.
func (in *TodoList) DeepCopy() *TodoList {
	if in == nil {
		return nil
	}
	out := new(TodoList)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyObject is an autogenerated deepcopy function, copying the receiver, creating a new runtime.Object.
func (in *TodoList) DeepCopyObject() runtime.Object {
	if c := in.DeepCopy(); c != nil {
		return c
	}
	return nil
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *TodoSpec) DeepCopyInto(out *TodoSpec) {
	*out = *in
	if in.Task != nil {
		in, out := &in.Task, &out.Task
		*out = new(string)
		**out = **in
	}
	out.EntityRef = in.EntityRef
	if in.NotifierName != nil {
		in, out := &in.NotifierName, &out.NotifierName
		*out = new(string)
		**out = **in
	}
	if in.AssignedTo != nil {
		in, out := &in.AssignedTo, &out.AssignedTo
		*out = new(string)
		**out = **in
	}
	if in.Flagged != nil {
		in, out := &in.Flagged, &out.Flagged
		*out = new(bool)
		**out = **in
	}
	if in.Reminder != nil {
		in, out := &in.Reminder, &out.Reminder
		*out = (*in).DeepCopy()
	}
	if in.DueDate != nil {
		in, out := &in.DueDate, &out.DueDate
		*out = (*in).DeepCopy()
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new TodoSpec.
func (in *TodoSpec) DeepCopy() *TodoSpec {
	if in == nil {
		return nil
	}
	out := new(TodoSpec)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInto is an autogenerated deepcopy function, copying the receiver, writing into out. in must be non-nil.
func (in *TodoStatus) DeepCopyInto(out *TodoStatus) {
	*out = *in
	if in.Conditions != nil {
		in, out := &in.Conditions, &out.Conditions
		*out = make([]TodoCondition, len(*in))
		for i := range *in {
			(*in)[i].DeepCopyInto(&(*out)[i])
		}
	}
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new TodoStatus.
func (in *TodoStatus) DeepCopy() *TodoStatus {
	if in == nil {
		return nil
	}
	out := new(TodoStatus)
	in.DeepCopyInto(out)
	return out
}
