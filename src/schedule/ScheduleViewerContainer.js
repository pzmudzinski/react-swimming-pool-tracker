import React from 'react';
import {connect} from 'react-redux'
import moment from 'moment';
import range from 'lodash/range'
import ScheduleView from './ScheduleViewer';
import {classifyOccupancy} from "./laneClassifier";

import {getPool} from "../redux/reducers/poolReducer";
import {getCurrentDate, getSchedule, isScheduleLoading} from "../redux/reducers/scheduleReducer";

const extractHour = (time) => {
  return Number(time.split(":")[0])
};

const extractHours = (pool) => {
  const startHour = extractHour(pool.openTime);
  const endHour = extractHour(pool.closeTime);

  return range(startHour, endHour + 1);
};

const classifySchedule = (pool, schedule) => {
  const {schedules} = schedule;


  return {
    ...schedule,
    hours: extractHours(pool),
    schedules: schedules.map((s) => {
      const start = moment.utc(s.startTime, "HH:mm");
      const end = moment.utc(s.endTime, "HH:mm");
      const diff = end.diff(start);
      const d = moment.duration(diff);

      const poolOpenTime = moment.utc(pool.openTime, "HH:mm");
      const minutesSinceStart = moment.duration(start.diff(poolOpenTime));

      return {
        ...s,
        startHour: extractHour(s.startTime),
        duration: d.asMinutes(),
        minutesSinceStart: minutesSinceStart.asMinutes(),
        occupancyRate: classifyOccupancy(s.tracks)
      }
    })
  }
};

const mapStateToProps = (state) => {
  const {selectedDate} = getCurrentDate(state);
  const isLoading = isScheduleLoading(state)(selectedDate);
  if (isLoading) {
    return {isLoading: true}
  }

  const schedule = getSchedule(state)(selectedDate);
  if (!schedule) {
    return {isLoading: true}
  }
  return {schedule: classifySchedule(getPool(state), schedule)}
};

export default connect(
  mapStateToProps
)(ScheduleView)