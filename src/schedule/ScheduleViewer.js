import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CircularProgress } from '@rmwc/circular-progress';
import { Card } from "@rmwc/card";
import ScheduleTable from './table/ScheduleTable';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em;
`;

class ScheduleViewer extends Component {

  static propTypes = {
    schedule: PropTypes.object
  };

  static defaultProps = {
    schedule: null
  };

  render() {
    const {schedule, isLoading} = this.props;

    if (isLoading) {
      return <Wrapper> <CircularProgress/> </Wrapper>
    }

    if (schedule.isError) {
      return (
        <Wrapper>
          {JSON.stringify(schedule.error)}
        </Wrapper>
      )

    } else {
      return (
          <ScheduleTable schedule={schedule}/>
      )
    }
  }
}

export default ScheduleViewer;