import React, { useState } from "react";
import useDataFetch from "../Hooks/useDataFetch";
import AppCard from "../Components/AppCard";
import Loading from "../Components/Loading";
import SearchError from "../Components/SearchError";

const Apps = () => {
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState("");
  const { apps, loading } = useDataFetch();

  if (loading) return <Loading></Loading>;
  const converted = search.trim().toLowerCase();
  const searchedApp = apps.filter((app) =>
    app.title.toLowerCase().includes(converted)
  );
  const handleChangeValue = (e) => {
    setSearching(true);
    setSearch(e.target.value);
    setTimeout(() => {
      setSearching(false);
    }, 1000);
  };
  return (
    <div className="max-w-[1480px] mx-auto">
      <div className="text-center space-y-5">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="mb-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col-reverse gap-4 md:flex-row justify-between items-center">
        <h1 className="text-xl font-bold">({searchedApp.length}) App Found</h1>
        <label className="input rounded-full border-0">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={handleChangeValue}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>

      {searching ? (
        <Loading></Loading>
      ) : searchedApp.length === 0 ? (
        <SearchError></SearchError>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-[1480px] mx-auto p-10 md:p-0 mt-5">
          {searchedApp.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
