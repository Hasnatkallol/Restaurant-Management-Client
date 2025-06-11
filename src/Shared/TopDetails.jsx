import React, { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";

const TopDetails = () => {
  const {
    _id,
    name,
    image,
    category,
    quantity,
    price,
    purchaseCount,
    description,
    origin,
    addBy,
  } = useLoaderData();
  const { user } = useContext(FirebaseAuthContext)

  useEffect(() => {
    fetch(`http://localhost:4000/foods/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched food item:", data);
      })
      .catch((err) => console.error(err));
  }, [_id]);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-2xl rounded-2xl my-10 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={image}
          alt={name}
          className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{name}</h2>
            <p className="text-sm text-indigo-500 mb-4 italic">
              Category: {category}
            </p>
            <p className="text-gray-700 mb-6">{description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div>
                <p className="font-semibold text-gray-600">Origin</p>
                <p className="text-gray-800">{origin}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">
                  Quantity Available
                </p>
                <p className="text-gray-800">{quantity}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Price</p>
                <p className="text-green-600 font-semibold">${price}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-600">Purchased</p>
                <p className="text-blue-600 font-medium">
                  {purchaseCount} times
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <div className="border-t pt-4">
              <p className="text-sm text-gray-500">Added by:</p>
              <p className="text-gray-800 font-semibold">{addBy?.name || user.displayName}</p>
              <p className="text-gray-600">{addBy?.email ||  user.email}</p>
            </div>

            <Link className="flex items-centers " to={`/purchase/${_id}`}>
              {" "}
              <button className="bg-gradient-to-r  from-[#e0f2ff] via-[#e9e7fc] to-[#f1e7ff] text-black font-semibold py-3 my-4 px-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:opacity-95">
                Purchase
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDetails;
