import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LaneOccupancyView from './LaneOccupancyView';
import styled from 'styled-components';

const Wrapper = styled.div`
  grid-area: lanes;
  display: grid;
`;

const DummyLane = styled.div`
  border-bottom: 1px solid black;
  height: 60px;
`;

const Lanes = styled.div`
  display: grid;
  grid-row-start: 1;
  grid-column-start: 1;
`;

const ColorLanes = styled.div`
  display: grid;
  grid-row-start: 1;
  grid-column-start: 1;
  padding-left: 1em;
  padding-right: 1em;
  grid-gap: 0px;
  grid-template-rows: repeat(auto-fill, 15px);
`;

class LaneOccupancyTable extends Component {

  static propTypes = {
    lanes: PropTypes.array
  };

  static defaultProps = {
    lanes: []
  };

  render() {
    const {lanes, hours} = this.props;

    return (
      <Wrapper>
        <Lanes>
          {hours.map( (h) => <DummyLane key={h} /> )}
        </Lanes>
        <ColorLanes>
          {lanes.map( (lane) => <LaneOccupancyView key={lane.startTime} lane={lane}/>)}
        </ColorLanes>
      </Wrapper>
    )
  }
}

export default LaneOccupancyTable;