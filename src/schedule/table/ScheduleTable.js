import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import {LinearColorInterpolator, Color} from "./colorInterpolator";

const MIN_COLOR = new Color("#B00020");
const MAX_COLOR = new Color("#008b00");

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
    maxWidth: 600
  },
  cell: {
    color: 'white'
  }
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
    const {classes, schedules} = this.props;
    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Godziny</TableCell>
            <TableCell align="right">Tory</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedules.map((row, index) => {
            const color = LinearColorInterpolator.findColorBetween(MIN_COLOR, MAX_COLOR, Math.max(row.occupancyRate, 40)).asRgbCss();
            console.log('color', color);
            return (
              <TableRow
                style={{background: color}}
                key={`${row.startTime}-${row.endTime}`}>

                <TableCell className={classes.cell} component="th" scope="row">
                  <Typography variant="h5" className={classes.cell}>
                    {`${row.startTime}-${row.endTime}`}
                  </Typography>
                </TableCell>
                <TableCell className={classes.cell} align="right">
                  <Typography variant="h6" className={classes.cell}>
                    {row.tracks.join(",")}
                  </Typography>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    )
  }
}

export default withStyles(styles)(ScheduleTable);