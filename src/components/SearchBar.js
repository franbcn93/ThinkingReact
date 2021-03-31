import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.cambioFiltroTexto = this.cambioFiltroTexto.bind(this);
    this.cambioStock = this.cambioStock.bind(this);
  }

  cambioFiltroTexto(e) {
    this.props.filtroTextoCambio(e.target.value);
    // console.log(e.target.value);
  }

  cambioStock(e) {
    this.props.onInStockChange(e.target.checked);
  }
  render() {
    return (
      <form className="barraBusqueda">
        <input
          type="text"
          placeholder="Filtrar..."
          value={this.props.barraFiltro}
          onChange={this.cambioFiltroTexto}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.enStock}
            onChange={this.cambioStock}
          />{" "}
          Solo los productos en stock
        </p>
      </form>
    );
  }
}
