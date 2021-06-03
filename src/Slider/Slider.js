import React from "react";

export default function Slider() {
  return (
    <div className="container ">
      <h4 className="bold font-smaller">
        <span className="text-danger">/</span> Review
      </h4>

      <div class="card text-left rounded">
        <div class="row clearfix">
          <div className="col-4"></div>
          <div className="col-4">
            {" "}
            <img
              class="cardimage "
              src="https://images.pexels.com/photos/1553463/pexels-photo-1553463.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
        </div>

        <div class="card-body row spaceb clearfix h-25">
          <div className="col-2 ">1</div>
          <div className="col-8">smdam dmadasm </div>
          <div className="col-2">1</div>
        </div>
      </div>
    </div>
  );
}
