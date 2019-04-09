import React from 'react';
import {connect} from 'react-redux'
import ScheduleView from './ScheduleViewer';
import { classifyOccupancy } from "./laneClassifier";

import {getCurrentDate, getSchedule, isScheduleLoading} from "../redux/reducers/scheduleReducer";

const classifySchedule = (schedule) => {
  const { schedules } = schedule;

  return {
    ...schedule,
    schedules: schedules.map ( (s) => {
      return {
      ...s,
      occupancyRate: classifyOccupancy(s.tracks)
    }})
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
  return {schedule: classifySchedule(schedule)}
};

export default connect(
  mapStateToProps
)(ScheduleView)