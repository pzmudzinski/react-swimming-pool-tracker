import React from 'react';
import styled from 'styled-components';
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from '@rmwc/top-app-bar';
import { Typography } from "@rmwc/typography";
import '@material/typography/dist/mdc.typography.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';

const BoldTypography = styled(Typography)`
  font-weight: bold;
`;

export default function SimpleAppBar(props) {

  return (
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarTitle>
            <BoldTypography use="headline4">
              Olimpijczyk
            </BoldTypography>
            </TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
}