import React, { useEffect, useState } from "react";
import allFoodBg from "../../assets/allfood.webp";
import AllFoodCard from "./AllFoodCard";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    fetch(
      `https://reasturent-management-server.vercel.app/allfoods?search=${searchQuery}`
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [searchQuery]);

  useEffect(() => {
    document.title = "All Foods";
  }, []);

  const sortedFoods = React.useMemo(() => {
    if (sortOrder === "lowToHigh") {
      return [...foods].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      return [...foods].sort((a, b) => b.price - a.price);
    }
    return foods;
  }, [foods, sortOrder]);

  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <div
        className="hero min-h-[40vh] relative"
        style={{
          backgroundImage: `url(${allFoodBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute h-full w-full bg-black/60"></div>
        <div className="hero-content text-center text-white relative z-10">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl md:text-6xl font-extrabold text-white">
              All Foods
            </h1>

            <div className="flex justify-center items-center my-6">
              <div className="w-12 h-px bg-yellow-300 mx-2"></div>
              <span className="text-yellow-400 text-xl">✧</span>
              <div className="w-12 h-px bg-yellow-300 mx-2"></div>
            </div>

            <p className="mb-12 text-lg md:text-xl text-orange-100 [text-shadow:1px_1px_6px_black]">
              From savory starters to mouthwatering mains and decadent desserts
              – discover, manage, and enjoy the ultimate food experience.
            </p>
          </div>
        </div>
      </div>

      {/* Search & Sort Section */}
      <div className="w-11/12 mx-auto py-10 lg:py-15 flex flex-col md:flex-row items-center justify-center gap-6 bg-base-100">
        <input
          type="text"
          placeholder="Search Food"
          className="border w-full md:w-[50%] h-12 rounded-xl pl-5 shadow-lg
            border-[var(--color-secondary)] 
            focus:border-[var(--color-accent)] 
            focus:ring-2 focus:ring-[var(--color-secondary)] 
            text-[var(--color-base-content)] 
            bg-[var(--color-base-100)]
            transition-all duration-300
            focus:outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />

        <select
          className="border h-12 rounded-xl px-4 shadow-lg
            border-[var(--color-secondary)]
            focus:border-[var(--color-accent)]
            focus:ring-2 focus:ring-[var(--color-secondary)]
            bg-[var(--color-base-100)]
            text-[var(--color-base-content)]
            transition-all duration-300
            focus:outline-none"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          aria-label="Sort foods by price"
        >
          <option value="default">Sort By: Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      <p className="text-center py-5 text-base-content w-11/12 mx-auto">
        Easily find your favorite dishes by typing the food name in the search
        bar. The list updates instantly to show only the items that match your
        search query.
      </p>

      {/* Food Grid */}
      <div className="bg-neutral/10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto">
          {sortedFoods.map((food) => (
            <AllFoodCard food={food} key={food._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
