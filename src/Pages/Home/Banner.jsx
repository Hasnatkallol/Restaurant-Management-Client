import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#403F2B] py-5 ">
      <div className="w-11/12 mx-auto">
        <h1 className="text-[#F3F1C4] text-4xl md:text-6xl lg:text-8xl text-center font-bold lg:pb-5">
          Welcome to RestroFlow
        </h1>

        <p className="text-[#F3F1C4] text-center w-full pt-2 lg:w-[60%] mx-auto">
          Streamline your restaurant operations with ease. From tracking
          top-selling dishes to managing staff and inventory, RestroFlow brings
          everything you need into one simple dashboard.
        </p>
      </div>
    </div>
  );
};

export default Banner;
// bg-[#403F2B]
