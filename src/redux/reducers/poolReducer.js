import {
  FETCH_POOL,
  FETCH_POOL_FULFILLED,
  FETCH_POOL_REJECTED
} from "../actions";

export const poolReducer = (state = { isLoading: true }, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POOL:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_POOL_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        ...payload
      };

    case FETCH_POOL_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error
      };
    default:
      return state;
  }
};

export const getPool = ({ pool }) => {
  return pool;
};

export const isPoolLoading = (state) => {
  const pool = getPool(state);
  if (!pool) { return true }
  return pool.isLoading;
};