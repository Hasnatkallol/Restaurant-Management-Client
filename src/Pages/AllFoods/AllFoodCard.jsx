import React from "react";
import { motion } from "framer-motion";
import Loading from "../../Shared/Loading";
import { Link } from "react-router";

const AllFoodCard = ({ food }) => {
  const { _id } = food;

  if (!food) return <Loading />;
  return (
    <div>
      <motion.div
          className="w-11/12 max-w-md mx-auto bg-[var(--color-base-100)] dark:bg-[var(--color-base-100)] text-[var(--color-base-content)] shadow-md rounded-xl overflow-hidden border border-gray-200 dark:border-[var(--color-neutral)] hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <figure className="relative h-52 overflow-hidden">
          <motion.img
            src={food.image || "/placeholder-food.jpg"}
            alt={food.name}
            className="w-full h-full object-cover transition-transform duration-300"
            whileHover={{ scale: 1.08 }}
          />
          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full shadow">
            🔥 {food.purchaseCount || 0} sold
          </span>
        </figure>

        <div className="p-5 flex flex-col justify-between min-h-[250px]">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-[var(--color-base-content)] truncate">
              {food.name || "Food Item"}
            </h3>
           <p className="text-sm text-[var(--color-base-content)] opacity-70 mt-1 line-clamp-3">
              {food.description || "No description available."}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-green-600 dark:text-green-400 font-bold text-lg">
              ${food.price}
            </span>

            <Link className="flex items-centers" to={`/foods/${_id}`}>
               <button className="bg-[var(--color-secondary)] text-white font-semibold py-2 px-5 rounded-2xl shadow-md transition duration-300 hover:scale-105 hover:shadow-lg">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AllFoodCard;
