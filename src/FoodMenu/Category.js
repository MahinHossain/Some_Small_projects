import React from "react";

export default function Category({ filteritem, category }) {
  return (
    <div>
      {category.map((item, index) => (
        <button
          key={index}
          className="btn btn-outline-dark ml-2 "
          onClick={() => filteritem(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
