import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class ScheduleTable extends Component {
  static propTypes = {
    schedules: PropTypes.array
  };
  static defaultProps = {
    schedules: []
  };

  render() {
    // {"startTime":"06:00","endTime":"07:00","tracks":["8x50","1x25","shallow"]
    const { classes, schedules } = this.props;
    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Godziny</TableCell>
            <TableCell align="right">Tory</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedules.map((row, index) => (
            <TableRow selected={index % 2} key={`${row.startTime}-${row.endTime}`}>
              <TableCell component="th" scope="row">
                {`${row.startTime}-${row.endTime}`}
              </TableCell>
              <TableCell align="right">{row.tracks.join(",")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

export default withStyles(styles)(ScheduleTable);