import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import MinPrice from "./MinPrice";

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtroTexto: "",
      soloStock: false,
      filtroPrecio: "",
    };

    this.filtroCambioTexto = this.filtroCambioTexto.bind(this);
    this.cambioStock = this.cambioStock.bind(this);
    this.filtroCambioPrecio = this.filtroCambioPrecio.bind(this);
  }

  filtroCambioTexto(filtro) {
    this.setState({
      filtroTexto: filtro,
    });
  }

  cambioStock(inStockOnly) {
    this.setState({
      soloStock: inStockOnly,
    });
  }

  filtroCambioPrecio(precio) {
    this.setState({
      filtroPrecio: precio,
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          barraFiltro={this.state.filtroTexto}
          enStock={this.state.soloStock}
          filtroTextoCambio={this.filtroCambioTexto}
          onInStockChange={this.cambioStock}
        />
        <hr className="separador" />
        <MinPrice
          barraMinimo={this.state.filtroPrecio}
          filtroPrecioMin={this.filtroCambioPrecio}
          // enStock={this.state.soloStock}
        ></MinPrice>
        <hr className="separador" />
        <ProductTable
          productos={this.props.products}
          filtroTexto={this.state.filtroTexto}
          inStockOnly={this.state.soloStock}
          filtroPrecio={this.state.filtroPrecio}
        />
      </div>
    );
  }
}
