import React from "react";

import "./Row.css";

export default function Row({ id, data }) {
  const { name, salary } = data;

  return (
    <tr>
      <th scope="row">{id + 1}</th>
      <td>{name}</td>
      <td className="price">{salary}$</td>
    </tr>
  );
}
