import React from "react";

function SingleStatistics({ value, title }) {
  return (
    <div className="bg-white shadow-md py-2 px-6 w-[300px] rounded-md">
      <div className="text-3xl text-gray-700 ">{value}</div>
      <div className="flex items-center mt-2">
        <div className="text-gray-500 text-lg mr-2">{title}</div>
      </div>
    </div>
  );
}

export default SingleStatistics;
