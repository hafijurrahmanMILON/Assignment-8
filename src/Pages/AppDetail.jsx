import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useDataFetch from "../Hooks/useDataFetch";
import Loading from "../Components/Loading";
import AppError from "../Components/AppError";
import dlIcon from "../assets/icon-downloads.png";
import rateIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import { getInstall, setInstall } from "../Utility/LocalStorage";
import Chart from "../Components/Chart";
import { toast } from "react-toastify";

const AppDetail = () => {
  const [disabled, setDisabled] = useState(false);
  const { apps, loading } = useDataFetch();
  const { id } = useParams();
  useEffect(() => {
    const checkArray = getInstall();
    if (checkArray.includes(id)) {
      setDisabled(true);
    }
  }, [id]);
  if (loading) return <Loading></Loading>;
  const detailedApp = apps.find((app) => app.id === Number(id));

  if (!detailedApp) {
    return <AppError></AppError>;
  }
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    ratings,
  } = detailedApp;

  const handleInstallation = (id) => {
    setInstall(id);
    setDisabled(true);
    toast.success(
      apps.find((app) => app.id === Number(id)).title +
        " Successfully Installed!"
    );
  };

  return (
    <div className="container mx-auto px-[4%] md:px-0">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img className="w-[280px]" src={image} alt="" />
        <div className="w-full">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p>
            Developed by:{" "}
            <span className="text-[#8148EB] text-xl font-semibold">
              {companyName}
            </span>
          </p>
          <hr className="w-full border-t  border-1 border-gray-300 my-4" />
          <div className="flex gap-8 mt-5">
            <div>
              <img className="w-8" src={dlIcon} alt="" />
              <p>Downloads</p>
              <h1 className="text-3xl font-semibold">{downloads}M</h1>
            </div>
            <div>
              <img className="w-8" src={rateIcon} alt="" />
              <p>Average Ratings</p>
              <h1 className="text-3xl font-semibold">{ratingAvg}</h1>
            </div>
            <div>
              <img className="w-8" src={reviewIcon} alt="" />
              <p>Total Reviews</p>
              <h1 className="text-3xl font-semibold">{reviews}</h1>
            </div>
          </div>
          <button
            disabled={disabled}
            onClick={() => handleInstallation(id)}
            className={`bg-[#00d390] px-5 py-2 text-white text-lg font-semibold mt-5 rounded-lg transition-all duration-300 
    ${
      disabled
        ? "opacity-60 cursor-not-allowed"
        : "hover:-translate-y-1 hover:shadow-lg"
    }`}
          >
            {disabled ? "Installed" : `Install (${size}MB)`}
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Chart ratings={ratings}></Chart>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Description</h1>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default AppDetail;
