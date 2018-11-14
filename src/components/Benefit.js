import React, { Component } from 'react';

import { Card, CardText } from 'material-ui/Card'
import { redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors'

export default class Benefit extends Component {
  render() {
    return (
      
      <ul>
      <Card className='Header-Benefit'>
        <CardText>
          <div className='row'>
            <div className='Header-Benefit-image'  style={{'backgroundColor': redA400}}>
              <img src={ process.env.PUBLIC_URL + '/images/corazon.png'} alt=""/>
            </div>
            <div className='Header-Benefit-content'>
              <h3>Califica con emociones</h3>
              <p>Califica tus lugares con experiencias</p>
            </div>
          </div>
        </CardText>
      </Card>

      <Card className='Header-Benefit'>
        <CardText>
          <div className='row'>
            <div className='Header-Benefit-image'  style={{'backgroundColor': lightBlueA400}}>
              <img src={ process.env.PUBLIC_URL + '/images/wifi.png'} alt=""/>
            </div>
            <div className='Header-Benefit-content'>
              <h3>Sin internet??</h3>
              <p>Funciona sin internet o con conexiones lentas</p>
            </div>
          </div>
        </CardText>
      </Card>

      <Card className='Header-Benefit'>
        <CardText>
          <div className='row'>
            <div className='Header-Benefit-image'  style={{'backgroundColor': amberA400}}>
              <img src={ process.env.PUBLIC_URL + '/images/estrella.png'} alt=""/>
            </div>
            <div className='Header-Benefit-content'>
              <h3>Tus lugares favoritos</h3>
              <p>Define tu lista de sitios favoritos :)</p>
            </div>
          </div>
        </CardText>
      </Card>
    </ul>
    );
  }
}