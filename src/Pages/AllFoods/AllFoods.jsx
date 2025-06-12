import React, { useEffect, useState } from "react";
import allFoodBg from "../../assets/allfood.webp";

import AllFoodCard from "./AllFoodCard";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/foods`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [setFoods]);
  return (
    <div>
      <div
        className="hero min-h-[40vh] relative"
        style={{ backgroundImage: `url(${allFoodBg})` }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="hero-overlay bg-opacity-70 "></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
       

            {/* Main heading with gradient text */}
            <h1 className="mb-8 text-5xl md:text-6xl font-bold">
              <span className=" bg-clip-text text-white">
                All Foods
              </span>
            </h1>

       

            {/* Decorative divider */}
            <div className="flex  justify-center items-center my-6">
              <div className="w-12  h-px bg-white mx-2"></div>
              <span className="text-white text-xl">✧</span>
              <div className="w-12 h-px bg-white mx-2"></div>
            </div>

            {/* Description text */}
            <p className="mb-12 text-lg md:text-xl text-neutral-content/90">
              From savory starters to mouthwatering mains and decadent desserts
              - discover, manage, and enjoy the ultimate food experience.
            </p>

        
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 w-11/12 mx-auto my-5 items-center justify-center">
        {foods.map((food) => (
          <AllFoodCard food={food} key={food._id}></AllFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
