import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      <div className="border-4 border-[rgba(0,0,0,0.1)] border-t-4 border-t-[blue] rounded-full w-16 h-16 animate-spin mb-4"></div>
      <span className="text-2xl font-bold mt-6">Loading... Please wait!</span>
    </div>
  );
};

export default Loading;
