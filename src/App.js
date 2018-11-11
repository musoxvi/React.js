import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title';

import { hola } from './components/Title';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      numero: 0
    };

    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber() {
    this.setState({
      numero: this.state.numero + 1
    })
  }

  render() {
    return (
      <section>
        <div>
          <Title></Title>
          <h2>{this.state.numero}</h2>
          <button onClick={ this.updateNumber }>Crear cuenta gratuita</button>
          <img src={ process.env.PUBLIC_URL + '/images/top-background.jpeg'} alt=""/>
          <div>
            <ul>
              <li>
                <h3>Califica con emociones</h3>
                <p>Califica tus lugares con experiencias, no con numeros</p>
              </li>
              <li>
                <h3>Sin internet? Sin problemas</h3>
                <p>Places funciona sin internet o con conexiones lentas</p>
              </li>
              <li>
                <h3>Tus lugares favoritos</h3>
                <p>Define tu lista de sitios favoritos</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
