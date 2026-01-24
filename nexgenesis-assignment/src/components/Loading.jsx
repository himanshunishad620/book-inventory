import React from "react";
import { ImSpinner3 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-white">
      <ImSpinner3 className="animate-spin text-4xl text-gray-400" />
      <p className="text-lg font-medium text-gray-400">Loading...</p>
    </div>
  );
};

export default Loading;
