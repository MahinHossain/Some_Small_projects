import React from "react";
import { useState } from "react";
import data from "./Data";

import ItemMenu from "./ItemMenu";
export default function MenuFood() {
  const [menuItems, setmenuItems] = useState(data);
  const [category, setcategory] = useState("");

  return (
    <div>
      <ItemMenu items={menuItems} />
      {/* {menuItems.map((item) => (
        <div class="card ">
          <img src={item.img} class="card-img-top" alt="not show" />
          <div class="card-body">
            <h5 class="card-title">{item.name}</h5>
            <p class="card-text">{item.desc}</p>

            <p>{item.price}</p>
          </div>
        </div>
      ))} */}
    </div>
  );
}
