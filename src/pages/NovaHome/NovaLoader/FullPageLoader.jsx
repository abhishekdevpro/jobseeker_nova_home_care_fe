import React from "react";

const FullPageLoader = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/20 bg-opacity-50 z-50">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white text-lg mt-4 font-semibold">{message}</p>
    </div>
  );
};

export default FullPageLoader;
