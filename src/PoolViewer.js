import React, {Component} from 'react';
import styled from 'styled-components';
import { Card } from "@rmwc/card";
import { TopAppBarFixedAdjust} from "@rmwc/top-app-bar";
import '@material/card/dist/mdc.card.css';
import { CircularProgress } from '@rmwc/circular-progress';
import '@rmwc/circular-progress/circular-progress.css';
import DayStepper from './stepper';
import ScheduleViewContainer from './schedule/ScheduleViewerContainer';
import Legend from './schedule/Legend';

const RootCard = styled(Card)`
  @media (min-width: 720px) {
    min-width: 720px;
  }
  
  @media (min-width: 1024px) {
    min-width: 920px;
  }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

class PoolViewer extends Component {

  render() {
    const { isLoading } = this.props;
    return (
      <Wrapper>
        <TopAppBarFixedAdjust>
          <RootCard>
            <DayStepper/>
            { isLoading && <CircularProgress/>}
            { !isLoading && <ScheduleViewContainer/>}
          </RootCard>
        </TopAppBarFixedAdjust>
        <Legend/>
      </Wrapper>
    )
  }
}

export default PoolViewer;