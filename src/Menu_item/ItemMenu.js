import React from "react";
import img from "./images/item-8.jpeg";
import Data from "../Data";
export default function ItemMenu({ items }) {
  console.log(`Data`, Data);
  return (
    <div className="container">
      {items.map((item) => (
        <div class="card ">
          <img src={item.img} className="card-img-top" alt="not show" />
          <div class="card-body">
            <h5 class="card-title">{item.name}</h5>
            <p class="card-text">{item.desc}</p>

            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
