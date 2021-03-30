import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default class ProductTable extends Component {
  render() {
    const filtroTexto = this.props.filtroTexto;
    const inStockOnly = this.props.inStockOnly;

    const lista = [];
    let ultimaCategoria = null;

    this.props.productos.forEach((producto) => {
      if (producto.name.indexOf(filtroTexto) === -1) {
        return;
      }
      if (inStockOnly && !producto.stocked) {
        return;
      }
      if (producto.category !== ultimaCategoria) {
        lista.push(
          <ProductCategoryRow
            categoria={producto.category}
            key={producto.category}
          />
        );
      }
      lista.push(<ProductRow filaProducto={producto} key={producto.name} />);
      ultimaCategoria = producto.category;
    });

    return (
      <table className="productoFila">
        <thead>
          <tr className="columna">
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>{lista}</tbody>
      </table>
    );
  }
}
