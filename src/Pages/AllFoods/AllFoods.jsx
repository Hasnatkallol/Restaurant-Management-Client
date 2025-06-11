import React, { useEffect, useState } from "react";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 w-11/12 mx-auto my-5 items-center justify-center">
        {foods.map((food) => (
          <AllFoodCard food={food} key={food._id}></AllFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
