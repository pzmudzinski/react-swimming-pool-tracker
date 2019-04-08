import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import DayStepper from './DayStepper';
import {getCurrentDate} from "../redux/reducers/scheduleReducer";
import { selectDate } from "../redux/actions";

const mapStateToProps = (state) => {
  const { selectedDate, nextDate, previousDate } = getCurrentDate(state);

  return {
    currentDate: selectedDate,
    nextDate,
    previousDate,
    isNextDateDisabled: false,
    isPreviousDateDisabled: selectedDate.isBefore(moment()),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ selectDate }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayStepper);