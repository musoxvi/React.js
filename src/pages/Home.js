import React, { Component, Fragment } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {indigo400} from 'material-ui/styles/colors';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card'

import Title from '../components/Title';
import Benefits from '../components/Benefit';
import data from '../requests/places'

export default class Home extends Component {

  places() {
    return data.places.map( (place, index) => {
      return (
        <div key={ index } className="col-xs-12 col-sm-4">
          <Card >
            <CardMedia>
              <img src={ process.env.PUBLIC_URL + place.imageUrl} alt={place.title}/>
            </CardMedia>
            <CardTitle title={place.title}></CardTitle>
            <CardText>{place.description}</CardText>
          </Card>
        </div>
      )
    })
  }

  render() {
    return(
      <Fragment>
        <div className='Header-background'>
          <div style={{'width':'80%', 'margin':'0 auto'}}>
            <div className='header-name'>
              <Title></Title>
              <RaisedButton label='Crear cuenta gratuita' secondary={ true }/>
              <img className='Header-illustration' src={ process.env.PUBLIC_URL + '/images/topBackground.jpg'} alt='illustration'/>
            </div>
            <div>
              <Benefits />
              
            </div>
          </div>
        </div>
        <div style={{'backgroundColor':indigo400, 'padding':'50px', 'color':'white'}}>
          <h3 style={{'fontSize':'24px'}}>Sitios Populares</h3>
          <div className="row">
            {this.places()}
          </div>
        </div>
      </Fragment>

    );
  }
}