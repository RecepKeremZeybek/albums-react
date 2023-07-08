import React from "react";
import data from "../helper/data";
import "./Picture.css";

const Picture = () => {
  return (
    <div className="row g-3">
      {data.map((item, index) => {
        return (
          <div
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3  col-xl-2 col"
            key={index}
          >
            <div className="overflow-hidden  w-100">
              <img className="morePicture" src={item.src.large} alt="img" />
            </div>
              <p className="text-success">{item.photographer}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Picture;
