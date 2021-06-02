import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Tour() {
  const [tour, settour] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [readmore, setreadmore] = useState(false);
  const url = " https://course-api.com/react-tours-project";

  const fetchurl = async () => {
    setisloading(true);
    const data = await axios.get(url);
    settour(data.data);
    setisloading(false);
  };

  useEffect(() => {
    fetchurl();
  }, []);
  const notInterest = (id) => {
    const copyT = tour.filter((item) => item.id !== id);
    settour(copyT);
  };
  return (
    <div>
      <h1 className="text-primary">Tour info</h1>
      {!isloading ? (
        <div className="row">
          <div className="col-3"> </div>
          <div className="col-6 ">
            {tour.map((item, index) => (
              <div class="width1 card shadow-lg p-4 mt-5">
                <img
                  class="card-img-top"
                  src={item.image}
                  alt="Card image cap"
                />
                <div class="">
                  <div className="flex1">
                    <h5 class="">{item.name}</h5>
                    <p class="card-text price">${item.price}</p>
                  </div>
                  <p>{item.id}</p>
                  <p class="">
                    {readmore ? item.info : item.info.substring(0, 50)}{" "}
                    <p
                      className="text-primary  small"
                      onClick={() => setreadmore(!readmore)}
                    >
                      {!readmore ? "Read  More" : "Show Less"}
                    </p>
                  </p>
                </div>
                <button
                  className="btn btn-info col-6"
                  onClick={() => notInterest(item.id)}
                >
                  Not interested
                </button>
              </div>
            ))}
          </div>
          <div className="col-3"> </div>
        </div>
      ) : (
        <h1>Loading.....</h1>
      )}
    </div>
  );
}
