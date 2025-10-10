import React from 'react';
import appError from "../assets/App-Error.png";
const SearchError = () => {
    return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="mb-8">
        <img
          src={appError}
          alt="App Not Found"
          className="object-contain mx-auto"
        />
      </div>
      <h1 className="text-4xl text-center md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] leading-16">
        App Not Found!
      </h1>
      <p className="text-gray-600 font-semibold text-lg text-center max-w-md mb-8">
        The app you're looking for does not exist or may have been removed.
      </p>
    </div>
  );
};

export default SearchError;