import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import data from '../requests/places'
import PlaceHorizontal from '../components/places/PlaceHorizontal';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      places: data.places
    }
  }

  places(){
    return this.state.places.map((place, index) => {
     return <PlaceHorizontal place={place}/>
    })
  }

  render() {
    return(
      <div>
        <Link to='/new'>
          <FloatingActionButton secondary={ true }>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-2" style={{'textAlign':'left'}}>
              <FlatButton label='Explorar' />
              <FlatButton label='Favoritos' />
              <FlatButton label='Visitas Previas' />
            </div>
            <div className="col-xs-12 col-md-10">
              {this.places()}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}