import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip'
import sample from 'lodash/sample';
import yellowLane from '../../img/yellow-lane-barrier.svg';
import redLane from '../../img/red-lane-barrier.svg';
import blueLane from '../../img/blue-lane-barrier.svg';
import lady1 from '../../img/lady-1.svg';
import lady2 from '../../img/lady-2.svg';
import man1 from '../../img/man-1.svg';
import man2 from '../../img/man-2.svg';
import { DesktopOnly } from "../../mobile";

const allPossibleSwimmers = [lady1, lady2, man1, man2];

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
  border-radius: 6px;
  grid-row: ${props => `${Math.max(props.minutesSinceStart / 15 + 1, 1)} / span ${props.duration/15}`};
  position: relative;
`;

const Lane = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto 1fr;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.5em;

`;

const Time = styled.span`
  font-weight: bold;
`;

const LaneBorder = styled.div`
  position: absolute;
  left: 0;
  height: 12px;
  right: 0;
  bottom: -4px;
  width: 100%;
  background-repeat: repeat-x;
  background-image: ${props => `url(${props.src})`}
`;

const LaneView = ({startTime, endTime, tracks, numberOfSwimmers, duration}) => {
  return (
    <Lane>
      <Time>{`${startTime}-${endTime}`}</Time>
      <span>{tracks.join(', ').replace('shallow', 'wypł.')}</span>
      <DesktopOnly>
        { numberOfSwimmers > 0 && duration > 30 && <Swimmers laneId={`${startTime}-${duration}`} numberOfSwimmers={numberOfSwimmers}/>}
      </DesktopOnly>

    </Lane>
  )
};

const ShortLaneView = ({startTime, endTime, tracks, numberOfSwimmers, duration}) => {
  return (
    <ReactTooltip id={startTime}>
      <Time>{`${startTime}-${endTime}: `}</Time>
      <span>{tracks.join(', ').replace('shallow', 'wypł.')}</span>
    </ReactTooltip>
  )
};

const swimmerCache = {};

const SwimmerWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 5px;
`;

const Swimmers = ({laneId, numberOfSwimmers}) => {
  let swimmers = swimmerCache[laneId];
  if (!swimmers) {
    swimmerCache[laneId] = numberOfSwimmers === 1 ? [sample(allPossibleSwimmers)] : [sample(allPossibleSwimmers), sample(allPossibleSwimmers)];
    swimmers = swimmerCache[laneId];
  }

  return (
    <SwimmerWrapper>
      <img alt="swimmer1" src={swimmers[0]} />
      { numberOfSwimmers > 1 && <img style={{gridRow: 2, gridColumn: 2}} alt="swimmer2" src={swimmers[1]} /> }
    </SwimmerWrapper>
  )
};

class LaneOccupancyView extends Component {

  static propTypes = {
    lane: PropTypes.object.isRequired,
    shortLaneThreshold: PropTypes.number
  };

  static defaultProps = {
    shortLaneThreshold: 30
  };

  render() {
    const { lane, shortLaneThreshold } = this.props;

    const colorMatch = matchColor(lane.occupancyRate);
    var laneBorder = null;
    if (colorMatch == COLOR_GREAT) {
      laneBorder = blueLane;
    } else if (colorMatch == COLOR_OK) {
      laneBorder = yellowLane;
    } else if (colorMatch == COLOR_LOW) {
      laneBorder = redLane;
    }

    const isShort = lane.duration < shortLaneThreshold;

    let numberOfSwimmers = 0;
    if (colorMatch === COLOR_GREAT || colorMatch == COLOR_OK) {
      numberOfSwimmers = lane.duration > 60 ? 2 : 1;
    }

    return (
      <Container
        occupancyRate={lane.occupancyRate}
        minutesSinceStart={lane.minutesSinceStart}
        duration={lane.duration}
        laneImage={yellowLane}
        data-tip
        data-for={lane.startTime}
      >
        { isShort && <ShortLaneView {...lane}/>}

        { !isShort && <LaneView {...lane} numberOfSwimmers={numberOfSwimmers}/> }

        { lane.duration > 30 && laneBorder && <LaneBorder src={laneBorder}/>}
      </Container>
    );
  }
}

export default LaneOccupancyView;