import React from "react";
import { motion } from "framer-motion";
import Loading from "../../Shared/Loading";
import { Link } from "react-router";

const TopPurchaseCard = ({ topFood }) => {
  const { _id } = topFood;
  if (!topFood) return <Loading />;

  return (
    <div>
      <motion.div
        className="w-11/12 max-w-md mx-auto bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <figure className="relative h-52 overflow-hidden">
          <motion.img
            src={topFood.image || "/placeholder-food.jpg"}
            alt={topFood.name}
            className="w-full h-full object-cover transition-transform duration-300"
            whileHover={{ scale: 1.08 }}
          />
          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full shadow">
            🔥 {topFood.purchaseCount || 0} sold
          </span>
        </figure>

        <div className="p-5 flex flex-col justify-between min-h-[250px]">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 truncate">
              {topFood.name || "Food Item"}
            </h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-3">
              {topFood.description || "No description available."}
            </p>
          </div>npm run dev

          <div className="flex items-center justify-between">
            <span className="text-green-600 font-bold text-lg">
              ${topFood.price?.toFixed(2) || "0.00"}
            </span>

            <Link className="flex items-centers " to={`/foods/${_id}`}>
              {" "}
              <button className="bg-gradient-to-r  from-[#e0f2ff] via-[#e9e7fc] to-[#f1e7ff] text-black font-semibold py-3 my-4 px-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-95">
                See Details
              </button>{" "}
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TopPurchaseCard;
