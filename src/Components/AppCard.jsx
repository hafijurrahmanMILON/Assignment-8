import React from "react";
import icondl from "../assets/icon-downloads.png";
import iconrating from "../assets/icon-ratings.png";
import { Link } from "react-router";
const AppCard = ({ app }) => {
  const { id, title, image, ratingAvg, downloads } = app;
  return (
    <Link to={`/appDetail/${id}`}>
      <div className="shadow-xl bg-white p-4 w-full space-y-5 rounded-lg hover:-translate-y-2 transition-transform duration-300">
        <figure className="bg-base-200 p-4 h-56 flex items-center justify-center rounded-lg">
          <img
            className=" h-34 w-34 object-contain rounded-xl"
            src={image}
            alt=""
          />
        </figure>

        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="flex justify-between">
          <div className="flex items-center gap-1 rounded-lg bg-green-50 p-1">
            <img className="w-4" src={icondl} alt="" />
            <p className="text-[#00d390] font-semibold">{downloads}M</p>
          </div>
          <div className="flex items-center gap-1 rounded-lg bg-amber-50 p-1">
            <img className="w-4" src={iconrating} alt="" />
            <p className="text-[#ff8811] font-semibold">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
