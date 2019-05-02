import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withStyles} from '@material-ui/core/styles';
import DayStepper from './stepper';
import ScheduleViewContainer from './schedule/ScheduleViewerContainer';

const styles = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 6,
    minWidth: '720px'
  },
});

class PoolViewer extends Component {

  render() {
    const { classes, isLoading } = this.props;
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.root}>
          <DayStepper/>
          { isLoading && <CircularProgress/>}
          { !isLoading && <ScheduleViewContainer/>}
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(PoolViewer);