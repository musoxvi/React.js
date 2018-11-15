import React, { Component } from 'react';

import { Card, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

export default class PlaceCard extends Component {

  render() {
    return(
      <div key={ this.props.index } className="col-xs-12 col-sm-4">
        <Card >
          <CardMedia>
            <img src={ process.env.PUBLIC_URL + this.props.place.imageUrl} alt={ this.props.place.title}/>
          </CardMedia>
          <CardTitle title={this.props.place.title}></CardTitle>
          <CardText>{this.props.place.description}</CardText>
          <CardActions style={{'textAlign':'right'}}>
            <FlatButton secondary={ true } label='Ver mas'></FlatButton>
            <FlatButton onClick={() => this.props.onRemove(this.props.place) } secondary={ true } label='Ocultar'></FlatButton>
          </CardActions>
        </Card>
      </div>
    );
  }

}