import React from "react";

const Banner = () => {
  return (
    <div className="bg-neutral py-12"> {/* Changed to neutral color for better contrast */}
      <div className="w-11/12 mx-auto text-center">
        <h1 className="text-secondary text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
          Welcome to RestroFlow
        </h1>
        <p className="text-base-content text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto opacity-90">
          Streamline your restaurant operations with ease. From tracking
          top-selling dishes to managing staff and inventory, RestroFlow brings
          everything you need into one simple dashboard.
        </p>
        <div className="mt-8">
          <button className="btn btn-secondary text-base-100 mr-4">
            Get Started
          </button>
          <button className="btn btn-accent text-base-100">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;