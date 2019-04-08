import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import { fetchScheduleEpic } from "./epics/scheduleEpic";
import { selectDateReducer, scheduleReducer } from "./reducers/scheduleReducer";

export const rootEpic = combineEpics(
  fetchScheduleEpic,
);

export const rootReducer = combineReducers({
  currentDate: selectDateReducer,
  schedule: scheduleReducer
});