import React, { Component } from "react";

export default class MinPrice extends Component {
  constructor(props) {
    super(props);

    this.cambioPrecioMinimo = this.cambioPrecioMinimo.bind(this);
  }
  cambioPrecioMinimo(e) {
    this.props.filtroPrecioMin(e.target.value);
    console.log(e.target.value);
  }

  render() {
    return (
      <form className="filtroPrecio">
        {/* <p>Filtrar por precio mínimo:</p> */}
        <p>Filtrar por precio mínimo:</p>
        <input
          type="text"
          placeholder="Precio mínimo..."
          value={this.props.barraMinimo}
          onChange={this.cambioPrecioMinimo}
        ></input>
      </form>
    );
  }
}
