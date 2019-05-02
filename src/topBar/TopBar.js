import React from 'react';
import PropTypes from 'prop-types';
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from '@rmwc/top-app-bar';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function SimpleAppBar(props) {

  return (
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarTitle>Olimpijczyk</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
}