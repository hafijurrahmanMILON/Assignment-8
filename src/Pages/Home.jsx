import React from "react";
import Banner from "../Components/Banner";
import useDataFetch from "../Hooks/useDataFetch";
import AppCard from "../Components/AppCard";
import Loading from "../Components/Loading";
import { Link } from "react-router";
import { FaArrowTrendUp } from "react-icons/fa6";

const Home = () => {
  const { apps, loading } = useDataFetch();
  if (loading) return <Loading></Loading>;
  const featuredApps = apps.slice(0, 8);

  return (
    <div>
      <Banner></Banner>
      <div className="text-center mt-18 ">
        <div className="inline-flex items-center justify-center gap-2">
          <h1 className="text-4xl font-bold">Trending Apps</h1>
          <FaArrowTrendUp className="text-4xl text-[#8148EB]" />
        </div>
        <p className="text-gray-600 text-lg my-5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto px-[4%] md:px-0">
        {featuredApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <div className="flex justify-center items-center mt-7">
        <Link to="/apps">
          <button className="btn bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] text-white text-lg p-6 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
