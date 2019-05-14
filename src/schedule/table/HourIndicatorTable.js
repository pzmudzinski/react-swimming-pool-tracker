import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HourIndicator = styled.h5`
  height: 60px;
  margin-top: 0px;
  margin-bottom: 0px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c1c7d0;
`;

const Hours = styled.div`
  grid-area: hours;
  display: grid;
  //grid-template-rows: repeat(auto-fill, 60px);
  
  border-right: 1px solid #e8e8e8;
`;

class HourIndicatorTable extends Component {

  static propTypes = {
    hours: PropTypes.array.isRequired
  };

  render() {
    const { hours } = this.props;

    return (
      <Hours>
        {hours.map( (h) => {
          return <HourIndicator key={h} >{`${h}:00`}</HourIndicator>
        })}
      </Hours>
    )
  }
}

export default HourIndicatorTable;