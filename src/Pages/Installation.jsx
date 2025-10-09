import React, { useEffect, useState } from "react";
import { getInstall, removeInstall } from "../Utility/LocalStorage";
import useDataFetch from "../Hooks/useDataFetch";
import Loading from "../Components/Loading";
import InstallationCard from "../Components/InstallationCard";
import NoApp from "../Components/NoApp";

const Installation = () => {
  const [sortList, setSortList] = useState([]);
  const { apps, loading } = useDataFetch();
  useEffect(() => {
    const storedApps = getInstall();
    const numbered = storedApps.map((app) => parseInt(app));

    const filter = apps.filter((app) => numbered.includes(app.id));
    setSortList(filter);
  }, [apps]);

  if (loading) return <Loading></Loading>;

  const handleSort = (type) => {
    if (type === "h-l") {
      const highToLow = [...sortList].sort(
        (a, b) => Number(b.downloads) - Number(a.downloads)
      );
      setSortList(highToLow);
    }
    if (type === "l-h") {
      const LowToHigh = [...sortList].sort((a, b) => a.downloads - b.downloads);
      setSortList(LowToHigh);
    }
  };

  const handleUninstall = (id) => {
    // console.log(id)
    removeInstall(id);
    setSortList((prev) => prev.filter((app) => app.id !== id));
  };

  return (
    <div className="max-w-[1480px] mx-auto p-4 md:p-0">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 my-5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">({sortList.length})App Installed</h1>
        <select
          onChange={(e) => handleSort(e.target.value)}
          defaultValue=""
          className="select font-bold w-32 text-[#8148EB] rounded-full"
        >
          <option disabled value={""}>
            Sort by:
          </option>
          <option value={"h-l"}>High-&gt;low</option>
          <option value={"l-h"}>Low-&gt;high</option>
        </select>
      </div>
      {sortList.length === 0 ? (
        <NoApp></NoApp>
      ) : (
        <div className=" space-y-3 mt-5">
          {sortList.map((app) => (
            <InstallationCard
              key={app.id}
              app={app}
              handleUninstall={handleUninstall}
            ></InstallationCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
