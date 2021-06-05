import React, { useState } from "react";
import Category from "./Category";
import Data from "./Data";

export default function Menu() {
  const [itemMenu, setitemMenu] = useState(Data);
  const allcategory = ["all", ...new Set(Data.map((data1) => data1.category))];

  const [category, setcategory] = useState(allcategory);
  const filteritem = (category) => {
    if (category == "all") {
      setitemMenu(Data);
      return;
    }
    const newItem = Data.filter((it) => it.category === category);
    setitemMenu(newItem);
  };

  return (
    <div className="">
      <h4 className="text-primary">Our Menu</h4>
      <Category filteritem={filteritem} category={category} />
      {itemMenu.map((item) => (
        <div className="row">
          <img className=" card-img-top col-3 p-4" src={item.img} />

          <div className="row col-3 ">
            <div className="">
              <h5 className="">{item.title.toUpperCase()}</h5>

              <p className="text-danger font-smaller font-italic ">
                ${item.price}
              </p>
            </div>
            <p className="font-smaller  text-capitalize font-weight-light   ">
              {item.desc}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
