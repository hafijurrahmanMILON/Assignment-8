import React from "react";
import gplay from "../assets/gplay.png";
import appStore from "../assets/appstore.png";
import hero from "../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="text-center px-5 md:p-0">
        <h1 className="text-6xl font-bold">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="mt-4 text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-12">
        <a
          href="https://play.google.com/store/apps?hl=en"
          target="_blank"
          className="btn btn-outline border-1 border-gray-300 p-6"
        >
          <img src={gplay} alt="" />
          <p className="text-xl">Google Play</p>
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          className="btn btn-outline border-1 border-gray-300 p-6"
        >
          <img src={appStore} alt="" />
          <p className="text-xl">App Store</p>
        </a>
      </div>
      <div className="mt-10 flex justify-center px-5 md:p-0">
        <img src={hero} alt="" />
      </div>
      <div className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-center p-10">
        <h1 className="text-4xl font-semibold  text-white">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col gap-1 md:flex-row md:gap-38 justify-center items-center">
          <div className="py-8">
            <p className="text-white font-light">Total Downloads</p>
            <h1 className="text-white text-5xl font-bold my-3">29.6M</h1>
            <p className="text-white font-light">21% more than last month</p>
          </div>
          <div className="py-8">
            <p className="text-white font-light">Total Reviews</p>
            <h1 className="text-white text-5xl font-bold my-3">906K</h1>
            <p className="text-white font-light">46% more than last month</p>
          </div>
          <div className="py-8">
            <p className="text-white font-light">Active Apps</p>
            <h1 className="text-white text-5xl font-bold my-3">132+</h1>
            <p className="text-white font-light">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
