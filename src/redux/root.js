import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import {fetchScheduleEpic, fetchTodaySchedule} from "./epics/scheduleEpic";
import { selectDateReducer, scheduleReducer } from "./reducers/scheduleReducer";
import { poolReducer } from "./reducers/poolReducer";
import { fetchPoolEpic } from "./epics/poolEpic";

export const rootEpic = combineEpics(
  fetchScheduleEpic,
  fetchPoolEpic,
  fetchTodaySchedule
);

export const rootReducer = combineReducers({
  currentDate: selectDateReducer,
  schedule: scheduleReducer,
  pool: poolReducer
});