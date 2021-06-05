import React from "react";
import Data from "../Data";
import { useState } from "react";

export default function Birthday() {
  const [people, setpeople] = useState(Data);
  return (
    <div className="col-12">
      {people.length ? (
        <>
          <h5 className=" centre1 ">Birthday </h5>{" "}
          {people.map((item) => (
            <>
              <div className="card  h-50 w-50">
                <div className="card-body">
                  <div className="row">
                    {" "}
                    <img className="thumbnail" src={item.image} />
                    <div>
                      <h6 className="ml-3 mt-1">{item.name}</h6>
                      <p className="  ">{item.age}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </>
      ) : (
        <>
          <h4 className="btn btn-success">No Birthday Today </h4>
        </>
      )}

      <button className="btn btn-primary btnM" onClick={() => setpeople([])}>
        clear
      </button>
    </div>
  );
}
