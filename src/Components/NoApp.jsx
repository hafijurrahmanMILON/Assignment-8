import React from "react";
import { Link } from "react-router";

const NoApp = () => {
  return (
    <div className="min-h-[460px] flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl text-center md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] leading-16">
        No App Installed!
      </h1>
      <p className="text-center max-w-md mb-8">
        Looks like you haven't installed any apps yet.
      </p>

      <Link
        to="/apps"
        className="btn border-none bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-8 py-3 rounded-full  hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
      >
        Browse Apps
      </Link>
    </div>
  );
};

export default NoApp;
