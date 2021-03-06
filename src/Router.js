import React from 'react';

import Home from './pages/Home'
import Login from './pages/Login'
import App from './App'
import Dashboard from './pages/Dashboard'

import {
  BrowserRouter as ReactRouter,
  Route,
  Switch
} from 'react-router-dom';

const userSignIn = false;

export default class Router extends React.Component {

  signedInRoutes(){
    if(userSignIn) {
      return (
        <Route path="/new" render={()=><h1>Bienvenido</h1>} />
      )

    }
  }

  home (){
    if (userSignIn){
      return Dashboard;
    }

    return Home;
  }

  render(){
    return (
      <ReactRouter>
        <App>
          <Switch>
            <Route exact path="/" component={ this.home()} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Login} />
            {this.signedInRoutes()}
          </Switch>
        </App>
      </ReactRouter>
    );
  }
}