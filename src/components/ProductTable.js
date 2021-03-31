import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default class ProductTable extends Component {
  render() {
    const filtroTexto = this.props.filtroTexto;
    const inStockOnly = this.props.inStockOnly;
    const filtroPrecio = this.props.filtroPrecio;

    const lista = [];
    let ultimaCategoria = null;
    const convertInt = parseInt(filtroPrecio);

    this.props.productos.forEach((producto) => {
      if (producto.name.indexOf(filtroTexto) === -1) {
        return;
      }
      if (inStockOnly && !producto.stocked) {
        return;
      }
      const precio = producto.price.split(".", 1);
      const stringPrecio = precio.toString().split("$");
      const intPrecio = parseInt(stringPrecio[1]);
      if (convertInt > intPrecio) {
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
