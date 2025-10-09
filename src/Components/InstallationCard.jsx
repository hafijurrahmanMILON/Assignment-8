import React from "react";
import dlIcon from "../assets/icon-downloads.png";
import rateIcon from "../assets/icon-ratings.png";



const InstallationCard = ({ app }) => {
  const { id, title, image, ratingAvg, downloads, size } = app;
//   console.log(app);
  return (
    <div className="w-full bg-white p-3 flex justify-between items-center rounded-lg">
      <div className="flex items-center gap-3">
        <img className="w-12 rounded-lg" src={image} alt="" />
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <img className="w-3" src={dlIcon} alt="" />
              <p className="text-sm font-semibold text-green-500">
                {downloads}M
              </p>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-3" src={rateIcon} alt="" />
              <p className="text-sm font-semibold text-amber-400">
                {ratingAvg}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm font-semibold text-gray-400">{size}MB</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button className="btn bg-[#00d390] text-white text-lg  rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallationCard;
