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
        <div className="row p-3 mt-4 bgcolor myhw d-flex ">
          <img className="col-6" src={item.img} />

          <div className="col-6 ">
            <div className="row row2">
              <h5 className="ml-3">{item.title.toUpperCase()}</h5>

              <p className="card-text text-danger">${item.price}</p>
            </div>
            <p className="floa">{item.desc} </p>
          </div>
        </div>
      ))}
    </div>
  );
}
