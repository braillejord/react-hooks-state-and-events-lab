import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("Add to Cart")

  const liClass = inCart ? "" : "in-cart"

  function handleClick() {
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
