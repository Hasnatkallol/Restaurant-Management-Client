import React, { useContext, useEffect, useState } from "react";

import { FirebaseAuthContext } from "../../Firebase/FirebaseAuthContext";
import { Link } from "react-router";

const MyFood = () => {
  const { user } = useContext(FirebaseAuthContext);
  const [myFood, setMyFood] = useState([]);
  useEffect(() => {
    if (user?.email) {
      const email = user.email;
      fetch(`http://localhost:4000/foods?email=${email}`)
        .then((res) => res.json())
        .then((data) => setMyFood(data))
        .catch((error) => console.error("Failed to fetch listings:", error));
    }
  }, [user.email]);
  const handleDelete = () => {
    console.log("delete");
  };
  return (
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">My Foods</h1>

      <p className="text-center text-gray-500 mb-6">
        Below are the foods you’ve added. You can update or delete them.
      </p>

      <div className="overflow-x-auto rounded-lg shadow-lg mb-5">
        <table className="min-w-full text-sm text-left text-gray-700 bg-white">
          <thead className="text-xs uppercase bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="px-6 py-4 font-semibold">Image</th>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myFood.map((myFood, index) => (
              <tr
                key={myFood._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50 transition duration-150`}
              >
                <td className="px-6 py-4">
                  {" "}
                  <img
                    src={myFood.image}
                    alt={myFood.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4">{myFood.name}</td>
                <td className="px-6 py-4">${myFood.price}</td>
                <td className="px-6 py-4">{myFood.category}</td>
                <td className="px-6 py-4 text-center space-x-2">
                  <Link to={`/update/${myFood._id}`}>
                    <button className="bg-gradient-to-r from-[#d4e9ff] via-[#eae6fb] to-[#f5ebff] text-black font-semibold px-4 py-1 rounded-xl shadow-sm hover:scale-105 transition text-xs">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(myFood._id)}
                    className="bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold px-4 py-1 rounded-xl shadow-sm hover:scale-105 transition text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {myFood.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No foods added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFood;
