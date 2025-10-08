import React from "react";
import useDataFetch from "../Hooks/useDataFetch";
import AppCard from "../Components/AppCard";
import Loading from "../Components/Loading";

const Apps = () => {
  const { apps, loading } = useDataFetch();
  if (loading) return <Loading></Loading>;
  return (
    <div className="max-w-[1680px] mx-auto">
      <div className="text-center space-y-5">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="mb-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-[1480px] mx-auto p-10 md:p-0">
        {apps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
