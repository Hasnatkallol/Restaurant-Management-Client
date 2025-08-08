import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="bg-neutral py-12 lg:pb-25">
      <div className="w-11/12 mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-secondary text-4xl md:text-6xl lg:text-8xl font-bold mb-6"
        >
          Welcome to RestroFlow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base-content text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto opacity-90"
        >
          Streamline your restaurant operations with ease. From tracking
          top-selling dishes to managing staff and inventory, RestroFlow brings
          everything you need into one simple dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
         <Link  to="/login" >
          <button className="btn btn-secondary text-base-100">
            Get Started
          </button>
         </Link>
        <Link to="/helpcenter">  <button className="btn btn-accent text-base-100">
            Learn More
          </button></Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
