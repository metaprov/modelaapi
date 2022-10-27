package v1alpha1

import (
	"github.com/metaprov/modelaapi/pkg/util"
	"github.com/stretchr/testify/assert"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"testing"
)

func TestRunSchedule_NextRun_Enabled(t *testing.T) {
	schedule := &RunSchedule{}
	schedule.Enabled = util.BoolPtr(false)
	next := schedule.NextRun()
	assert.Nil(t, next)
}

func TestRunSchedule_NextRun_NextDate(t *testing.T) {
	schedule := &RunSchedule{}
	schedule.Enabled = util.BoolPtr(true)
	now := metav1.Now()

	schedule.Type = TriggerScheduleEventTypeNow
	nextRun := schedule.NextRun()
	assert.True(t, nextRun.After(now.Time))

	schedule.Type = TriggerScheduleEventTypeHourly
	nextRun = schedule.NextRun()
	assert.Equal(t, nextRun.Hour(), now.Hour()+1)

	schedule.Type = TriggerScheduleEventTypeDaily
	nextRun = schedule.NextRun()
	assert.Equal(t, nextRun.Day(), now.Day()+1)

	schedule.Type = TriggerScheduleEventTypeMonthly
	nextRun = schedule.NextRun()
	assert.Equal(t, nextRun.Month(), now.Month()+1)

	schedule.Type = TriggerScheduleEventTypeYearly
	nextRun = schedule.NextRun()
	assert.Equal(t, nextRun.Year(), now.Year()+1)

	schedule.Type = TriggerScheduleEventTypeCron
	//Fire at 12:00 PM (noon) every day
	schedule.Cron = util.StrPtr("0 0 12 * * ?")
	nextRun = schedule.NextRun()
	assert.Equal(t, nextRun.Hour(), 0)

}
