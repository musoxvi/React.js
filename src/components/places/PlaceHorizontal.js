import React, { Component } from 'react';
import { Card, CardHeader, CardText, FlatButton } from 'material-ui';
import { CardActions } from 'material-ui/Card';

export default class PlaceHorizontal extends Component {
  render() {
    const { imageUrl, title, address, description } = this.props.place;
    return(
      <Card style={{'margin':'1em', 'overflow':'hidden'}}>
        <div className="row">
          <div className="PlaceH-avatar">
            <img src={ imageUrl } />
          </div>
          <div className="col-xs" style={{'textAlign':'left'}}>
            <CardHeader
              title={ title }
              subtitle={ address}
            />
            <div className="row middle-xs">
              <div className="col-xs-6 col-sm-8 col-lg-9">
                <CardText>
                  { description }
                </CardText>
              </div>
              <div className="col-xs">
                <CardActions>
                  <FlatButton label="Ver mas" />
                </CardActions>
              </div>
            </div>

          </div>
         
        </div>

      </Card>
    );
  }

}