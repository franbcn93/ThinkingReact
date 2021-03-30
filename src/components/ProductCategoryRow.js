import React, { Component } from "react";

export default class ProductCategoryRow extends Component {
  render() {
    const categoria = this.props.categoria;
    return (
      <tr className="columnaProducto">
        <th colSpan="2">{categoria}</th>
      </tr>
    );
  }
}
