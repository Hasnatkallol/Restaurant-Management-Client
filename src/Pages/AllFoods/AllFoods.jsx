import React, { useEffect, useState } from "react";
import allFoodBg from "../../assets/allfood.webp";

import AllFoodCard from "./AllFoodCard";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  useEffect(() => {
    fetch(`http://localhost:4000/foods?search=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [searchQuery]);
  return (
    <div>
      <div
        className="hero min-h-[40vh] relative"
        style={{ backgroundImage: `url(${allFoodBg})` }}
      >
        <div className="hero-overlay bg-opacity-70 "></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-8 text-5xl md:text-6xl font-bold">
              <span className=" bg-clip-text text-white">All Foods</span>
            </h1>

            <div className="flex  justify-center items-center my-6">
              <div className="w-12  h-px bg-white mx-2"></div>
              <span className="text-white text-xl">✧</span>
              <div className="w-12 h-px bg-white mx-2"></div>
            </div>

            <p className="mb-12 text-lg md:text-xl text-neutral-content/90">
              From savory starters to mouthwatering mains and decadent desserts
              - discover, manage, and enjoy the ultimate food experience.
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto py-10 lg:py-15 flex flex-col items-center">
        <input
          type="text"
          placeholder="Search Food"
          className="border w-[50%] h-10 border-gray-300 shadow pl-5 rounded-xl focus:outline-none focus:border-transparent"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <p className="text-center py-5">
          Easily find your favorite dishes by typing the food name in the search
          bar. The list updates instantly to show only the items that match your
          search query
        </p>
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
