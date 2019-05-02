import React, {Component} from 'react';
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import './App.css';
import TopBar from './topBar/TopBar';
import { TopAppBarFixedAdjust } from '@rmwc/top-app-bar';
import PoolViewer from './PoolViewContainer'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TopBar/>
          <TopAppBarFixedAdjust/>
          <PoolViewer/>
          <TopAppBarFixedAdjust/>
        </div>
      </Provider>
    );
  }
}

export default App;
