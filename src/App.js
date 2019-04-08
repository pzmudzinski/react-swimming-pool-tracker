import React, {Component} from 'react';
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import './App.css';
import TopBar from './topBar/TopBar';
import DayStepper from './stepper';
import ScheduleViewContainer from './schedule/ScheduleViewerContainer';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TopBar/>
          <DayStepper/>
          <ScheduleViewContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
