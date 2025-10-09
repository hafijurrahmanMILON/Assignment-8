import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useDataFetch from "../Hooks/useDataFetch";
import Loading from "../Components/Loading";
import AppError from "../Components/AppError";
import dlIcon from "../assets/icon-downloads.png";
import rateIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import { getInstall, setInstall } from "../Utility/LocalStorage";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetail = () => {
  const [disabled, setDisabled] = useState(false);
  const { apps, loading } = useDataFetch();
  const { id } = useParams();
  //   console.log(id);
  useEffect(() => {
    const checkArray = getInstall();
    if (checkArray.includes(id)) {
      setDisabled(true);
    }
  }, [id]);
  if (loading) return <Loading></Loading>;
  const detailedApp = apps.find((app) => app.id === Number(id));
  // console.log(detailedApp);

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
  };

  return (
    <div className="max-w-[1480px] mx-auto p-4 md:p-0">
      <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-0">
        <img className="w-[320px]" src={image} alt="" />
        <div className="w-full">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p>
            Developed by:{" "}
            <span className="text-[#8148EB] text-lg font-semibold">
              {companyName}
            </span>
          </p>
          <hr className="w-full border-t  border-1 border-gray-300 my-4" />
          <div className="flex gap-8 mt-5">
            <div>
              <img src={dlIcon} alt="" />
              <p>Downloads</p>
              <h1 className="text-4xl font-bold">{downloads}M</h1>
            </div>
            <div>
              <img src={rateIcon} alt="" />
              <p>Average Ratings</p>
              <h1 className="text-4xl font-bold">{ratingAvg}</h1>
            </div>
            <div>
              <img src={reviewIcon} alt="" />
              <p>Total Reviews</p>
              <h1 className="text-4xl font-bold">{reviews}</h1>
            </div>
          </div>
          <button
            disabled={disabled}
            onClick={() => handleInstallation(id)}
            className="btn bg-[#00d390] text-white text-lg mt-5 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            {disabled ? "Installed" : `Install (${size}MB)`}
          </button>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-2xl font-bold">Ratings</h1>
        <div className="rounded-xl h-90 w-full p-5">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[...ratings].reverse()} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Bar dataKey="count" fill="#8148EB" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">Description</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetail;
