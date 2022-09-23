package util

import (
	"fmt"

	"github.com/dustin/go-humanize"

	"path/filepath"
	"runtime"
	"testing"
	"text/template"

	"strconv"
)

// assert fails the test if the condition is false.
func Assert(tb testing.TB, condition bool, msg string, v ...interface{}) {
	if !condition {
		_, file, line, _ := runtime.Caller(1)
		fmt.Printf("\033[31m%s:%d: "+msg+"\033[39m\n\n", append([]interface{}{filepath.Base(file), line}, v...)...)
		tb.FailNow()
	}
}

// ok fails the test if an err is not nil.
func OK(tb testing.TB, err error) {
	if err != nil {
		_, file, line, _ := runtime.Caller(1)
		fmt.Printf("\033[31m%s:%d: unexpected error: %s\033[39m\n\n", filepath.Base(file), line, err.Error())
		tb.FailNow()
	}
}

func EmptyOrVal(s *string) string {
	if s != nil {
		return ""
	}
	return *s
}

func ConvertBoolPtrToYN(v *bool) string {
	if v == nil {
		return "N"
	}
	if *v {
		return "Y"
	}
	return "N"

}

func parseTemplateString(name, tpl string) *template.Template {
	t := template.New(name)
	t = template.Must(t.Parse(tpl))
	return t
}

func Int32Ptr(i int32) *int32 {
	return &i
}

func StrPtr(s string) *string {
	return &s
}

func Int64Ptr(i int64) *int64 {
	return &i
}

func FloatPtr(v float64) *float64 {
	return &v
}

func Float64Ptr(v float64) *float64 {
	return &v
}

func BoolPtr(v bool) *bool {
	return &v
}

func ItoA(v *int32) string {
	if v == nil {
		return ""
	}
	return strconv.Itoa(int(*v))
}

func FtoA(v *float64) string {
	if v == nil {
		return ""
	}
	return humanize.Ftoa(float64(*v))
}

func FloatToA(v float64) string {
	return fmt.Sprintf("%f", v)
}

func MinInt(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func TenantUri(tenantName, uri string) string {
	return fmt.Sprintf("modela/live/tenants/%s/%s", tenantName, uri)
}
