import React, { Component, Fragment } from 'react';


export default class Title extends Component {
  render() {
    return (
      <Fragment>
        <h1>{ 'Places' }</h1>
        <p>Descubre lugares de manera simple</p>
      </Fragment>

    )
  }
}


export function hola () {
  return 'hola';
}