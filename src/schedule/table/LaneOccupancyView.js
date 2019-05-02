import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const COLOR_NONE = '#aeaeae';
const COLOR_LOW = '#fbc4db';
const COLOR_OK = '#f7e6c6';
const COLOR_GREAT = '#abd9f3';

const matchColor = (occupancyRate) => {
  if (occupancyRate > 90) {
    return COLOR_GREAT
  } else if (occupancyRate > 70) {
    return COLOR_OK
  } else if (occupancyRate > 25) {
    return COLOR_LOW
  }

  return COLOR_NONE
};

const Container = styled.div`
  background-color: ${props => matchColor(props.occupancyRate)};
  // border-radius: 6px;
  grid-row: ${props => `${Math.max(props.minutesSinceStart / 15 + 1, 1)} / span ${props.duration/15}`};
`;

class LaneOccupancyView extends Component {

  static propTypes = {
    lane: PropTypes.object.isRequired
  };

  render() {
    const { lane } = this.props;

    return (
      <Container
        occupancyRate={lane.occupancyRate}
        minutesSinceStart={lane.minutesSinceStart}
        duration={lane.duration}
      >
        {`${lane.startTime}-${lane.endTime}`}
      </Container>
    );
  }
}

export default LaneOccupancyView;