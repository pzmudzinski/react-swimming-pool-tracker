import React from 'react';
import {connect} from 'react-redux'
import ScheduleView from './ScheduleViewer';

import {getCurrentDate, getSchedule, isScheduleLoading} from "../redux/reducers/scheduleReducer";

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
  return {schedule}
};

export default connect(
  mapStateToProps
)(ScheduleView)