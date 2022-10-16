package util

import (
	"os"
	"strconv"

	"github.com/pkg/errors"
	apierrs "k8s.io/apimachinery/pkg/api/errors"
)

const MAX_NAME = 256

func IsNotEmpty(s *string) bool {
	return s != nil && *s != ""
}

func IgnoreNotFound(err error) error {
	if apierrs.IsNotFound(err) {
		return nil
	}
	return err
}

func IsNotFound(err error) bool {
	return apierrs.IsNotFound(err)
}

// Generic name validation
func CheckName(name string) error {
	if err := CheckMaxLen(name, "name", MAX_NAME); err != nil {
		return err
	}

	if err := CheckNotEmpty(name, "name"); err != nil {
		return err
	}

	return nil
}

func CheckIp(ip string) error {
	if err := CheckMaxLen(ip, "name", MAX_NAME); err != nil {
		return err
	}

	if err := CheckNotEmpty(ip, "name"); err != nil {
		return err
	}

	return nil
}

func CheckEmail(name string) error {
	if err := CheckMaxLen(name, "email", MAX_NAME); err != nil {
		return err
	}

	if err := CheckNotEmpty(name, "email"); err != nil {
		return err
	}

	return nil
}

func CheckStartTime(time int64) error {
	return CheckMinValue64(time, "start time", 0)
}

func CheckEndTime(time int64) error {
	return CheckMinValue64(time, "end time", 0)
}

func CheckId(id string) error {
	if err := CheckMaxLen(id, "id", MAX_NAME); err != nil {
		return err
	}

	if err := CheckNotEmpty(id, "id"); err != nil {
		return err
	}

	return nil
}

// check the field is not empty
func CheckNotEmpty(s string, field string) error {
	if s == "" {
		return errors.Errorf("field %s cannot be empty", field)
	}
	return nil
}

// check that a field has max len
func CheckMinLen(s string, field string, min int) error {
	if len(s) < min {
		return errors.Errorf("field %s min length is %d", field, min)
	}
	return nil
}

// Enabled the filed has maz length
func CheckMaxLen(s string, field string, max int) error {
	if len(s) > max {
		return errors.Errorf("field %s max length is %d", field, max)
	}
	return nil
}

func CheckMinValue(v int32, field string, min int32) error {
	if v < min {
		return errors.Errorf("field %s is smaller than min value %d", field, min)
	}
	return nil
}

func CheckMinValue64(v int64, field string, min int64) error {
	if v < min {
		return errors.Errorf("field %s is smaller than min value %d", field, min)
	}
	return nil
}

// Enabled the filed has maz length
func CheckMaxValue(v int32, field string, max int32) error {
	if v > max {
		return errors.Errorf("field %s overflow. ExpectedValueMax value is %d, but got %d", field, max, v)
	}
	return nil
}

func CheckPathExist(path string, field string) error {

	_, err := os.Stat(path)
	if err == nil {
		return nil
	}
	if os.IsNotExist(err) {
		return errors.Errorf("field %s has path %s which does not exist", field, path)
	}
	return nil
}

func CheckInteger(v string, field string) error {
	if _, err := strconv.Atoi(v); err != nil {
		return errors.Errorf("field %s must be integer and not %q", field, v)
	}
	return nil
}

func CheckMaxFloat(v float64, field string, max float64) error {
	if v > max {
		return errors.Errorf("field %s overflow. ExpectedValueMax value is %f, but got %f", field, max, v)
	}
	return nil
}

func CheckMinFloat(v float64, field string, min float64) error {
	if v < min {
		return errors.Errorf("field %s is smaller from the minimum. want %f, but got %f", field, min, v)
	}
	return nil
}

func CheckMaxSum(x float64, y float64, a string, b string, max float64) error {
	if (x + y) > max {
		return errors.Errorf(
			"fields %s and %s, cannot equal more than %v,", a, b, max)
	}
	return nil
}

var EPSILON float64 = 0.00000001

func floatEquals(a, b float64) bool {
	if (a-b) < EPSILON && (b-a) < EPSILON {
		return true
	}
	return false
}

//CheckNotNull checks that a field is not null
func CheckNotNull(field interface{}, fieldname string) error {
	if field == nil {
		return errors.Errorf("field %s cannot be nil", fieldname)
	}
	return nil
}

func CheckIntRange(v int32, min int32, max int32, field string) error {
	errMin := CheckMinValue(v, field, min)
	errMax := CheckMaxValue(v, field, max)
	if errMin != nil || errMax != nil {
		return errors.Errorf("field %s must be between %d to %d", field, min, max)
	}
	return nil

}
