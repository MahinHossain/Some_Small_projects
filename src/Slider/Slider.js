import React, { useState } from "react";
import Data from "./Data";
export default function Slider() {
  const [index, setindex] = useState(1);
  console.log(`index`, index);
  const [people1, setpeople1] = useState(Data);
  const [people, setpeople] = useState({});
  const peopleset = () => {
    if (index > 3) {
      setindex(0);
      return false;
    }
    if (index < 0) {
      setindex(3);
      return false;
    }

    setpeople(people1[index]);
  };
  console.log(`index`, index);
  return (
    <div className="container">
      <h4 className="bold font-smaller">
        <span className="text-danger">/</span> Review
      </h4>
      {/* {people.map((item, index) => ( */}
      <div class=" card text-left rounded shadow-lg ">
        <div class="row ">
          <div className="col-4"></div>
          <div className="col-4   text-center">
            {" "}
            <img class="cardimage" src={people.image} alt="" />
          </div>
        </div>

        <div class="card-body row spaceb  h-25">
          <div className="col-2 clearfix ">
            <button
              className="btn btn-outline-dark"
              onClick={() => peopleset([setindex(index - 1)])}
            >
              &lt;
            </button>
          </div>
          <div className="col-8 text-center">
            <h5 className="text-capitalize text-    bold">{people.name}</h5>{" "}
            <h6
              className="text-danger text-capitalize
            "
            >
              {people.title}
            </h6>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat-quote mr-5"
              viewBox="0 0 16 16"
            >
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
              <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
            </svg>
            <i className="fa fa-quote-right">{people.quote}</i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat-quote ml-4  text-center"
              viewBox="0 0 16 16"
            >
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
              <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
            </svg>{" "}
          </div>
          <div className="col-2 clearfix ">
            <button
              className="btn btn-outline-dark"
              onClick={() => peopleset([setindex(index + 1)])}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}
