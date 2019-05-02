import {ofType} from "redux-observable"
import moment from "moment";
import {map, mergeMap, catchError, startWith, filter, take} from "rxjs/operators";
import {of} from 'rxjs';
import {API_URL, DEFAULT_POOL_NAME} from "./api";
import {ajax} from "rxjs/ajax";
import {FETCH_POOL, FETCH_POOL_REJECTED, FETCH_POOL_FULFILLED, fetchPool} from "../actions";

const requestPool = (poolName) => {
  return ajax.getJSON(`${API_URL}/pools/${poolName}`)
};

export const fetchPoolEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_POOL),
  mergeMap(({payload: {poolName}}) => requestPool(poolName).pipe(
    map(response => ({
      type: FETCH_POOL_FULFILLED,
      payload: response
    })),
    catchError(error => of({
      type: FETCH_POOL_REJECTED,
      payload: { error:error },
    }))
  )),
  startWith(fetchPool(DEFAULT_POOL_NAME))
);