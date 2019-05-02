import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HourIndicator = styled.h5`

`;

const HourWrapper = styled.div`
  border-bottom: 1px solid black;
`;

const Hours = styled.div`
  grid-area: hours;
  grid-template-rows: 60px;
  display: grid;
  
  border-right: 1px solid black;
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
          return <HourWrapper key={h}><HourIndicator >{`${h}:00`}</HourIndicator></HourWrapper>
        })}
      </Hours>
    )
  }
}

export default HourIndicatorTable;