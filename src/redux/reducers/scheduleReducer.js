import moment from 'moment';
import {FETCH_SCHEDULE} from "../actions";
import {FETCH_SCHEDULE_FULFILLED, FETCH_SCHEDULE_REJECTED, SELECT_DATE} from "../actions";

export const SCHEDULE_DATE_FORMAT = 'YYYY-MM-DD';

export const scheduleReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SCHEDULE:
      return {
        [payload.format(SCHEDULE_DATE_FORMAT)]: { isLoading: true }
      };

    case FETCH_SCHEDULE_FULFILLED:
      return {
        ...state,
        [moment(payload.date).format(SCHEDULE_DATE_FORMAT)]: {
          isLoading: false,
          isError: false,
          schedules: payload.schedules
        }
      };

    case FETCH_SCHEDULE_REJECTED:
      return {
        ...state,
        [moment(payload.date).format(SCHEDULE_DATE_FORMAT)]: {
          isLoading: false,
          isError: true,
          error: payload.error
        }
      };
    default:
      return state;
  }
};

const defaultDateState = {
  selectedDate: moment(),
  previousDate:  moment().subtract(1, 'days'),
  nextDate: moment().add(1, 'days')
};

export const selectDateReducer = (state = defaultDateState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_DATE:
      return {
        previousDate: moment(payload).subtract(1, 'days'),
        selectedDate: payload,
        nextDate: moment(payload).add(1, 'days')
      };
    default:
      return state;
  }
};

export const getCurrentDate = (state) => {
  return state.currentDate;
};

export const getSchedule = (state) => (date) => {
  const { schedule } = state;
  const scheduleForDate = schedule[date.format(SCHEDULE_DATE_FORMAT)];
  return scheduleForDate;
};

export const isScheduleLoading = (state) => (date) => {
  const schedule = getSchedule(state)(date);
  return schedule && schedule.isLoading;
};