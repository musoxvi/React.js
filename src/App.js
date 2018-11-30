import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyApBar from './components/navigation/MyAppBar';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import { withRouter } from 'react-router-dom';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log(props.location.pathname.split('/')[1])
  }

  render() {
    return (
      <MuiThemeProvider>
        <MyApBar />
        <TransitionGroup>
          <CSSTransition 
            classNames="left-out"
            timeout={ 450 }
            key={ this.props.location.pathname.split('/')[1] }
            unmountOnExit={ true }
            mountOnEnter={ true }
            
            >
            { this.props.children}

          </CSSTransition>
        </TransitionGroup>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
