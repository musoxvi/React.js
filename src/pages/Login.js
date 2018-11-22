import React, { Component } from 'react';
import Title from '../components/Title';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import Container from '../components/Container';

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
                <RaisedButton  label='Ingresar' secondary={ true }/>
              </div>
            </div>
          </Container>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className="Login-background" style={{'backgroundImage':"url(" + process.env.PUBLIC_URL + '/images/login-background.jpeg'+")"}}>
          </div>
        </div>
      </div>
    )
  }
}