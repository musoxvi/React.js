import React, { Component, Fragment } from 'react';
import Title from '../components/Title';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import Container from '../components/Container';
import { 
  BrowserRouter as ReactRouter,
  Link,
  Route
 } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div className="row middle-xs">
        <div className="col-xs-12 col-sm-6">
          <Container>
            <div style={{textAlign:"left"}}>
              <Title />
              <TextField 
                floatingLabelText='Correo electronico'
                type='email'
                className='textField'
              />
              <TextField 
                floatingLabelText='Contraseña'
                type='password'
                className='textField'
              />
                <div className='Login-actions'>
                  <Route path="/login" exact render={()=>{
                    return(
                      <Fragment>
                        <Link to="signup" style={{marginRight:"1em"}}>Crea una nueva cuenta</Link>
                        <RaisedButton  label='Ingresar' secondary={ true }/>
                      </Fragment>
                    )
                  }}></Route>
                  <Route path="/signup" exact render={()=>{
                    return(
                      <Fragment>
                        <Link to="/login" style={{marginRight:"1em"}}>Ya tengo cuenta</Link>
                <RaisedButton  label='Crear cuenta' secondary={ true }/>
                      </Fragment>
                    )
                  }}></Route>
                </div>
            </div>
          </Container>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div>
            <Route path="/login" exact render={()=>{
              return(
                <div className="Login-background" style={{'backgroundImage':"url(" + process.env.PUBLIC_URL + '/images/login-background.jpeg'+")"}}></div>
              )
            }}></Route>
            <Route path="/signup" exact render={()=>{
              return(
                <div className="Login-background" style={{'backgroundImage':"url(" + process.env.PUBLIC_URL + '/images/friends.jpeg'+")"}}></div>
              )
            }}></Route>
          </div>
        </div>
      </div>
    )
  }
}