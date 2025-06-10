import React, { useEffect, useState } from "react";
import TopPurchaseCard from "./TopPurchaseCard";

const TopPurchase = () => {
  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/top-foods`)
      .then((res) => res.json())
      .then((data) => setTopFoods(data));
  }, [setTopFoods]);
  return (
    <div>
      <div>
        {topFoods.map((topFood) => (
          <TopPurchaseCard
            topFood={topFood}
            key={topFood._id}
          ></TopPurchaseCard>
        ))}
      </div>
    </div>
  );
};

export default TopPurchase;
