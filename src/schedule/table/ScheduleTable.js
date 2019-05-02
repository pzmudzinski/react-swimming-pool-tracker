import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HourIndicatorTable from "./HourIndicatorTable";
import LaneOccupancyTable from './LaneOccupancyTable';

const BASIC_UNIT_SIZE = 15;
const HOUR_HEIGHT = 60;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100px 1fr;
  grid-template-areas:
   "hours lanes";
`;

class ScheduleTable extends Component {
  static propTypes = {
    schedule: PropTypes.object
  };
  static defaultProps = {
    schedule: {hours: [], schedules: []}
  };

  render() {
    // {"startTime":"06:00","endTime":"07:00","tracks":["8x50","1x25","shallow"]
    const { schedule: {schedules, hours}} = this.props;
    return (
      <Grid>
        <HourIndicatorTable hours={hours}/>
        <LaneOccupancyTable hours={hours} lanes={schedules}/>
      </Grid>
    )
  }
}

export default ScheduleTable;