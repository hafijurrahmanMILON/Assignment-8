import React from "react";
import Banner from "../Components/Banner";
import useDataFetch from "../Hooks/useDataFetch";
import AppCard from "../Components/AppCard";
import Loading from "../Components/Loading";
import { Link } from "react-router";

const Home = () => {
  const { apps, loading } = useDataFetch();
  if (loading) return <Loading></Loading>;
  const featuredApps = apps.slice(0, 8);

  return (
    <div>
      <Banner></Banner>
      <div className="text-center mt-8 ">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="text-gray-500 my-8">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-[1480px] mx-auto p-10 md:p-0">
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
