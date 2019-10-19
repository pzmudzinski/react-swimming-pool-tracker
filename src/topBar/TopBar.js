import React from 'react';
import styled from 'styled-components';
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from '@rmwc/top-app-bar';
import { Typography } from "@rmwc/typography";
import { Icon, IconButton } from '@rmwc/icon-button';
import '@material/typography/dist/mdc.typography.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import github from '../img/github-mark.svg';

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
          <TopAppBarSection alignEnd>
            <IconButton
              icon={github}
              tag="a"
              target="_blank"
              href={'https://github.com/pzmudzinski/react-swimming-pool-tracker'}/>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    );
  }
