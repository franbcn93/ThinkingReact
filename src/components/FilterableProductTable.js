import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtroTexto: "",
      soloStock: false,
    };

    this.filtroCambioTexto = this.filtroCambioTexto.bind(this);
    this.cambioStock = this.cambioStock.bind(this);
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

        <ProductTable
          productos={this.props.products}
          filtroTexto={this.state.filtroTexto}
          inStockOnly={this.state.soloStock}
        />
      </div>
    );
  }
}
