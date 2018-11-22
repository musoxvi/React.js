import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyApBar from './components/navigation/MyAppBar'


import './App.css';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <MyApBar />
        { this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default App;
