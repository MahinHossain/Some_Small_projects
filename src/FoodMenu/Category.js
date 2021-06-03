import React from "react";

export default function Category({ filteritem, category }) {
  return (
    <div>
      {category.map((item) => (
        <button
          className="btn btn-outline-dark ml-2 "
          onClick={() => filteritem(item)}
        >
          {item}
        </button>
      ))}

      {/* <button
        className="btn btn-outline-dark ml-2 "
        onClick={() => filteritem("breakfast")}
      >
        Breakfast
      </button>
      <button
        className="btn btn-outline-dark ml-2 "
        onClick={() => filteritem("shakes")}
      >
        Shakes
      </button>
      <button
        className="btn btn-outline-dark ml-2 "
        onClick={() => filteritem("lunch")}
      >
        Lunch
      </button> */}
    </div>
  );
}
