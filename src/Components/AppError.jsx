import React from "react";
import appError from "../assets/App-Error.png";
import { Link } from "react-router";

const AppError = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="mb-8">
        <img
          src={appError}
          alt="App Not Found"
          className="object-contain mx-auto"
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        App Not Found
      </h1>
      <p className="text-gray-500 text-center max-w-md mb-8">
        The app you're looking for does not exist or may have been removed.
      </p>
      <Link
        to="/apps"
        className="btn border-none bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
      >
        Browse Apps
      </Link>
    </div>
  );
};

export default AppError;
