import React from "react";
export default function ImageSlider({ slide }) {
  console.log(`slide`, slide);
  return (
    <div>
      <img src={slide.img} />
    </div>
  );
}
