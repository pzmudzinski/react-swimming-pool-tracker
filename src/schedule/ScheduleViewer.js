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
    const {schedule} = this.props;

    if (!!schedule && !schedule.isLoading) {
      return (
        <Paper>
          {JSON.stringify(schedule)}
        </Paper>
      )

    } else {
      return <CircularProgress/>
    }
  }
}

export default ScheduleViewer;