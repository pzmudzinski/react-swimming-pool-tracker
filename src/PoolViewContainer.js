import React from 'react';
import {connect} from 'react-redux'
import PoolViewer from './PoolViewer';
import { isPoolLoading, getPool } from "./redux/reducers/poolReducer";

const mapStateToProps = (state) => {
  const isLoading = isPoolLoading(state);
  if (isLoading) {
    return {isLoading: true}
  }

  const pool = getPool(state);
  if (!pool) {
    return {isLoading: true}
  }
  return {pool}
};

export default connect(
  mapStateToProps
)(PoolViewer)