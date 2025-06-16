// import React, { useEffect, useState } from "react";
// import TopPurchaseCard from "./TopPurchaseCard";
// import { Link } from "react-router";

// const TopPurchase = () => {
//   const [topFoods, setTopFoods] = useState([]);

//   useEffect(() => {
//     fetch(`https://reasturent-management-server.vercel.app/top-foods`)
//       .then((res) => res.json())
//       .then((data) => setTopFoods(data));
//   }, [setTopFoods]);
//   return (
//     <div className="bg-[#403F2B] py-5 md:py-7 lg:py-10">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold text-[#F3F1C4] mb-2">
//           Customer Favorites
//         </h2>
//         <p className="text-[#F3F1C4] max-w-2xl mx-auto">
//           Discover our most-loved dishes that keep customers coming back for
//           more
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 w-11/12 mx-auto my-5 items-center justify-center">
//         {topFoods.map((topFood) => (
//           <TopPurchaseCard
//             topFood={topFood}
//             key={topFood._id}
//           ></TopPurchaseCard>
//         ))}
//       </div>

//       <div className="flex justify-center py-5">
//         <Link
//           to="/allfoods"
//           className="bg-[#F3DB89] btn px-8 py-1 text-2xl border-none rounded-4xl  text-[#403F2B] hover:bg-[#403F2B] hover:text-[#F3DB89]"
//         >
//           See All
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TopPurchase;

import React, { useEffect, useState } from "react";
import TopPurchaseCard from "./TopPurchaseCard";
import { Link } from "react-router";

const TopPurchase = () => {
  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    fetch(`https://reasturent-management-server.vercel.app/top-foods`)
      .then((res) => res.json())
      .then((data) => setTopFoods(data));
  }, []);

  return (
    <div className="bg-base-200 py-5 md:py-7 lg:py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-accent mb-2">
          Customer Favorites
        </h2>
        <p className="text-base-content max-w-2xl mx-auto">
          Discover our most-loved dishes that keep customers coming back for
          more
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto items-center justify-center">
        {topFoods.map((topFood) => (
          <TopPurchaseCard topFood={topFood} key={topFood._id} />
        ))}
      </div>

      <div className="flex justify-center pt-10">
        <Link
          to="/allfoods"
          className="btn bg-accent text-base-200 text-xl px-8 py-2 border-none hover:bg-base-200 hover:text-accent"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default TopPurchase;
