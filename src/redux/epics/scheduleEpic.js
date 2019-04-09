import {ofType} from "redux-observable"
import moment from "moment";
import {map, mergeMap, catchError, startWith, filter, take} from "rxjs/operators";
import {of} from 'rxjs';
import {ajax} from "rxjs/ajax";
import {SCHEDULE_DATE_FORMAT} from "../reducers/scheduleReducer";
import {FETCH_SCHEDULE, FETCH_SCHEDULE_FULFILLED, FETCH_SCHEDULE_REJECTED, SELECT_DATE} from "../actions";
import { isScheduleLoaded } from "../reducers/scheduleReducer";


const API_URL = 'https://sledzbasen.pl/api/Pools/olimpijczyk';

const fetchOccupancy = (date) => {
  const isToday = date.isSame(moment(), 'day');
  const time = isToday ? moment().format('HH:MM') : '00:00';
  return ajax.getJSON(`${API_URL}/occupancy?date=${date.format(SCHEDULE_DATE_FORMAT)}&time=${time}`)
};

export const fetchScheduleEpic = (action$, state$) => action$.pipe(
  ofType(SELECT_DATE),
  filter(({payload}) => !isScheduleLoaded(state$.value)(payload)),
  mergeMap(({payload}) => fetchOccupancy(payload).pipe(
    map(response => ({
      type: FETCH_SCHEDULE_FULFILLED,
      payload: response
    })),
    catchError(error => of({
      type: FETCH_SCHEDULE_REJECTED,
      payload: { error:error, date: payload },
    })),
    startWith({
      type: FETCH_SCHEDULE,
      payload
    })
  )),
  startWith({
    type: SELECT_DATE,
    payload: moment()
  })
);