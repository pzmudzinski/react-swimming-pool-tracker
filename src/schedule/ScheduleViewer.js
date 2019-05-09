import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import { CircularProgress } from '@rmwc/circular-progress';
import { Card } from "@rmwc/card";
import { EmptySchedule, ErrorSchedule } from "./EmptySchedule";
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
        <Wrapper><ErrorSchedule/></Wrapper>
      )

    } else {
      if (isEmpty(schedule.schedules)) {
        return <Wrapper><EmptySchedule/></Wrapper>
      }

      return (
          <ScheduleTable schedule={schedule}/>
      )
    }
  }
}

export default ScheduleViewer;