import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-2 border-transparent border-t-green-400 border-r-yellow-400 rounded-full animate-spin"></div>
        <div 
          className="absolute inset-2 border-2 border-transparent border-b-red-400 border-l-purple-400 rounded-full animate-spin"
          style={{ animationDirection: 'reverse' }}
        ></div>
      </div>
      <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
    </div>
  );
};

export default Loading;

// import React from "react";

// const Loading = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//       <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
//     </div>
//   );
// };

// export default Loading;
