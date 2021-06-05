import React from "react";
import ImageData from "../FoodMenu/Data";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import Tour from "../Tour/Tour";
// https://www.youtube.com/watch?v=l1MYfu5YWHc
export default function SliderTest() {
  const [currentindex, setcurrentindex] = useState(0);
  const length = ImageData.length;

  const nextvSlide = () => {
    setcurrentindex(currentindex === length - 1 ? 0 : currentindex + 1);
    console.log(`currentindex`, currentindex);
  };
  const prevSlide = () => {
    setcurrentindex(currentindex === 0 ? length - 1 : currentindex - 1);
    console.log(`currentindex`, currentindex);
  };
  console.log(`Array.isArray(ImageData) `, !Array.isArray(ImageData));
  if (!Array.isArray(ImageData) || ImageData.length <= 0) {
    return <h1>No data</h1>;
  }
  return (
    <div className="slider row">
      <h1 className="text-success mb-3 text-center ">The Hot & Spycy</h1>
      <button className="btn btn-outline-info ml-auto"> hide</button>
      <FaArrowAltCircleLeft onClick={prevSlide} className="hEIGHTwIDTHLeft" />
      <FaArrowAltCircleRight
        className="hEIGHTwIDTHRight"
        onClick={nextvSlide}
      />

      {ImageData.map((item, index) => {
        return (
          <div className={index === currentindex ? "slide active" : "slide"}>
            {index === currentindex && <img src={item.img} className="image" />}
          </div>
        );
      })}
    </div>
  );
}
