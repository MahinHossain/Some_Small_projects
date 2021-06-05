import React from "react";

export default function Slider() {
  return (
    <div className="container ">
      <h4 className="bold font-smaller">
        <span className="text-danger">/</span> Review
      </h4>

      <div class="card text-left rounded">
        <div class="row ">
          <div className="col-4"></div>
          <div className="col-4">
            {" "}
            <img
              class="cardimage"
              src="https://images.pexels.com/photos/1553463/pexels-photo-1553463.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
        </div>
        <div class="row  justify-content-between mt-5">
          <div className="col-2 ">
            <button className="btn btn-outline-dark">&lt;</button>
          </div>
          <div className="col-8  text-center">
            <h6 className="  ">Mahin Hossain</h6>
            <h6>mahin</h6>
          </div>
          <div className="col-2 ">
            <button className="btn btn-outline-dark">&gt;</button>
          </div>

          <i class="fas fa-quote-left mr-5 ml-5 mt-5">
            {" "}
            Dolore ut elitr et invidunt takimata est vero magna no..
          </i>
        </div>
      </div>
    </div>
  );
}
