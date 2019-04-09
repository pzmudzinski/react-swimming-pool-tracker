import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

class ScheduleViewer extends Component {

  static propTypes = {
    schedule: PropTypes.object
  };

  static defaultProps = {
    schedule: null
  };

  render() {
    const {schedule, isLoading} = this.props;

    if (isLoading) {
      return <CircularProgress/>
    }

    if (schedule.isError) {
      return (
        <Paper>
          {JSON.stringify(schedule.error)}
        </Paper>
      )

    } else {
      return (
        <Paper>
          {JSON.stringify(schedule)}
        </Paper>
      )
    }
  }
}

export default ScheduleViewer;