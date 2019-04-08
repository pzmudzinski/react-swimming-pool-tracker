import {ofType} from "redux-observable";
import {map, mergeMap, catchError, startWith} from "rxjs/operators";
import {of} from 'rxjs';
import {ajax} from "rxjs/ajax";
import {SCHEDULE_DATE_FORMAT} from "../reducers/scheduleReducer";
import {FETCH_SCHEDULE, FETCH_SCHEDULE_FULFILLED, FETCH_SCHEDULE_REJECTED, SELECT_DATE} from "../actions";

const API_URL = 'https://sledzbasen.pl/api/Pools/olimpijczyk';

export const fetchScheduleEpic = action$ => action$.pipe(
  ofType(SELECT_DATE),
  mergeMap(({payload}) => ajax.getJSON(`${API_URL}/occupancy?date=${payload.format(SCHEDULE_DATE_FORMAT)}&time=00:00`).pipe(
    map(response => ({
      type: FETCH_SCHEDULE_FULFILLED,
      payload: response
    })),
    catchError(error => of({
      type: FETCH_SCHEDULE_REJECTED,
      payload: error.xhr.response,
      error: true
    })),
    startWith({
      type: FETCH_SCHEDULE,
      payload
    })
  ))
);