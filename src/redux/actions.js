import { SCHEDULE_DATE_FORMAT } from "./reducers/scheduleReducer";

export const FETCH_POOL = 'FETCH_POOL';
export const FETCH_POOL_FULFILLED = `${FETCH_POOL}_FULFILLED`;
export const FETCH_POOL_REJECTED = `${FETCH_POOL}_REJECTED`;
export const FETCH_SCHEDULE = 'FETCH_SCHEDULE';
export const FETCH_SCHEDULE_FULFILLED = `${FETCH_SCHEDULE}_FULFILLED`;
export const FETCH_SCHEDULE_REJECTED = `${FETCH_SCHEDULE}_REJECTED`;
export const SELECT_DATE = 'SELECT_DATE';

export const fetchPool = (poolName) => ({
  type: FETCH_POOL,
  payload: { poolName }
});

export const fetchSchedule = (date) => ({
  type: FETCH_SCHEDULE,
  payload: date.format(SCHEDULE_DATE_FORMAT)
});

export const selectDate = (date) => ({
  type: SELECT_DATE,
  payload: date
});
