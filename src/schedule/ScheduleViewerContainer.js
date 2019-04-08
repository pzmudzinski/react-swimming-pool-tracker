import React from 'react';
import { connect } from 'react-redux'
import ScheduleView from './ScheduleViewer';

import {getCurrentDate, getSchedule } from "../redux/reducers/scheduleReducer";

const mapStateToProps = (state) => {
  const { selectedDate } = getCurrentDate(state);
  const schedule = getSchedule(state)(selectedDate);
  return {schedule}
};

export default connect(
  mapStateToProps
)(ScheduleView)