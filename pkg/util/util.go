package util

import (
	"archive/zip"
	"crypto/md5"
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"github.com/dustin/go-humanize"
	flag "github.com/spf13/pflag"
	"io"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"
	"os"
	"path/filepath"
	"reflect"
	"runtime"
	"testing"
	"text/template"

	"crypto/sha256"
	"golang.org/x/crypto/bcrypt"
	"strconv"

	"time"
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

// equals fails the test if exp is not equal to act.
func Bquals(tb testing.TB, exp, act interface{}) {
	if !reflect.DeepEqual(exp, act) {
		_, file, line, _ := runtime.Caller(1)
		fmt.Printf("\033[31m%s:%d:\n\n\texp: %#v\n\n\tgot: %#v\033[39m\n\n", filepath.Base(file), line, exp, act)
		tb.FailNow()
	}
}
func FormatFloat(f float64) string {
	return strconv.FormatFloat(f, 'f', 2, 64)
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

func GenObjID() (string, error) {
	data := make([]byte, 10)
	_, err := rand.Read(data)
	if err != nil {
		return "", err
	}
	bytes := sha256.Sum256(data)
	return fmt.Sprintf("%x", bytes[0:6]), nil
}

func MustGenObjID() string {
	data := make([]byte, 10)
	_, err := rand.Read(data)
	if err != nil {
		panic(err)
	}
	bytes := sha256.Sum256(data)
	return fmt.Sprintf("%x", bytes[0:6])
}

func parseTemplateString(name, tpl string) *template.Template {
	t := template.New(name)
	t = template.Must(t.Parse(tpl))
	return t
}

func EnvContains(key string) bool {
	v := os.Getenv(key)
	return v != ""

}

// newUUID generates a random UUID according to RFC 4122
func newUUID() (string, error) {
	uuid := make([]byte, 16)
	n, err := io.ReadFull(rand.Reader, uuid)
	if n != len(uuid) || err != nil {
		return "", err
	}
	// variant bits; see section 4.1.1
	uuid[8] = uuid[8]&^0xc0 | 0x80
	// version 4 (pseudo-random); see section 4.1.3
	uuid[6] = uuid[6]&^0xf0 | 0x40
	return fmt.Sprintf("%x-%x-%x-%x-%x", uuid[0:4], uuid[4:6], uuid[6:8], uuid[8:10], uuid[10:]), nil
}

//unzip
func UnzipToDir(archive, target string) error {
	reader, err := zip.OpenReader(archive)
	if err != nil {
		return err
	}

	if err := os.MkdirAll(target, 0755); err != nil {
		return err
	}

	for _, file := range reader.File {
		path := filepath.Join(target, file.Name)
		if file.FileInfo().IsDir() {
			os.MkdirAll(path, file.Mode())
			continue
		}

		fileReader, err := file.Open()
		if err != nil {
			return err
		}
		defer fileReader.Close()

		targetFile, err := os.OpenFile(path, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, file.Mode())
		if err != nil {
			return err
		}
		defer targetFile.Close()

		if _, err := io.Copy(targetFile, fileReader); err != nil {
			return err
		}
	}

	return nil
}

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
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

func HashForFileUsingSha256(path string) (string, error) {
	f, err := os.Open(path)
	if err != nil {
		return "", err
	}
	defer f.Close()

	h := sha256.New()
	if _, err := io.Copy(h, f); err != nil {
		return "", err
	}

	return fmt.Sprintf("%x", h.Sum(nil)), nil
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

func RestClient() (*rest.Config, error) {
	loadingRules := clientcmd.NewDefaultClientConfigLoadingRules()
	// if you want to change the loading rules (which files in which order), you can do so here

	configOverrides := &clientcmd.ConfigOverrides{}
	// if you want to change override values or bind them to flags, there are methods to help you

	kubeConfig := clientcmd.NewNonInteractiveDeferredLoadingClientConfig(loadingRules, configOverrides)
	config, err := kubeConfig.ClientConfig()
	if err != nil {
		return nil, err
	}
	return config, nil

}

func IsFlagPassed(f *flag.FlagSet, name string) bool {
	found := false
	f.Visit(func(f *flag.Flag) {
		if f.Name == name {
			found = true
		}
	})
	return found
}

func MinInt(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func GenName(prefix string) string {
	loc, _ := time.LoadLocation("UTC")
	now := time.Now().In(loc)

	return fmt.Sprintf("%s-%d%02d%02d-%02d%02d%02d-%04d", prefix,
		now.Year(), now.Month(), now.Day(),
		now.Hour(), now.Minute(), now.Second(),
		now.Nanosecond()/1000)
}

func GenJobName(verb string) string {
	loc, _ := time.LoadLocation("UTC")
	now := time.Now().In(loc)

	return fmt.Sprintf("%s-%d%02d%02d-%02d%02d-%04d-%s", "j",
		now.Year(), now.Month(), now.Day(),
		now.Hour(), now.Minute(), now.Second(),verb)

}




func MD5(s string) string {
	hash := md5.Sum([]byte(s))
	return hex.EncodeToString(hash[:])
}
