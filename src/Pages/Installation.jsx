import React, { useEffect, useState } from "react";
import { getInstall } from "../Utility/LocalStorage";
import useDataFetch from "../Hooks/useDataFetch";
import Loading from "../Components/Loading";
import InstallationCard from "../Components/InstallationCard";

const Installation = () => {
  const [sortList, setSortList] = useState([]);
  // const [installationList, setInstallationList] = useState([]);
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



  return (
    <div className="max-w-[1680px] mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 my-5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">({sortList.length})App Installed</h1>
        <select
          // onChange={(e) => handleSort(e.target.value)}
          defaultValue=""
          className="select border-none rounded-full w-30 font-bold text-[#8148EB]"
        >
          <option disabled value={""}>
            Sort by:
          </option>
          <ul>
            <li>
              <option>
                <a onClick={() => handleSort("h-l")}>High to Low</a>
              </option>
            </li>
            <li>
              <option>
                <a onClick={() => handleSort("l-h")}>Low to High</a>
              </option>
            </li>
          </ul>
        </select>
      </div>
      <div className=" space-y-3 mt-5">
        {sortList.map((app) => (
          <InstallationCard key={app.id} app={app}></InstallationCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
