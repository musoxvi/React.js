import React, { Component } from 'react';

export default class PlaceHorizontal extends Component {
  render() {
    return(
      <h1>{ this.props.place.title }</h1>
    );
  }

}