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

  const { user } = useContext(FirebaseAuthContext);
  const userEmail = user?.email;
  const foodOwnerEmail = addBy?.email;

  useEffect(() => {
    fetch(`https://reasturent-management-server.vercel.app/foods/${_id}`)
      .then((res) => res.json())
      .then((data) => console.log("Fetched food item:", data))
      .catch((err) => console.error(err));
  }, [_id]);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-base-100 shadow-2xl rounded-2xl my-10 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={image}
          alt={name}
          className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-md"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold text-base-content mb-2">{name}</h2>
            <p className="text-sm text-secondary mb-4 italic">
              Category: {category}
            </p>
            <p className="text-base-content mb-6">{description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div>
                <p className="font-semibold text-secondary">Origin</p>
                <p className="text-base-content">{origin}</p>
              </div>
              <div>
                <p className="font-semibold text-secondary">Quantity Available</p>
                <p className="text-base-content">{quantity}</p>
              </div>
              <div>
                <p className="font-semibold text-secondary">Price</p>
                <p className="text-success font-semibold">${price}</p>
              </div>
              <div>
                <p className="font-semibold text-secondary">Purchased</p>
                <p className="text-info font-medium">
                  {purchaseCount || 0} times
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <div className="border-t pt-4 border-neutral">
              <p className="text-sm text-base-content-content">Added by:</p>
              <p className="text-base-content font-semibold">
                {addBy?.name || user?.displayName}
              </p>
              <p className="text-base-content">{addBy?.email || user?.email}</p>
            </div>

            <div>
              {user && userEmail === foodOwnerEmail ? (
                <button className="bg-neutral text-base-content font-semibold py-3 my-4 px-6 rounded-2xl shadow-md transition duration-300 hover:scale-105 hover:shadow-lg">
                  You cannot purchase your own food item.
                </button>
              ) : (
                <Link className="flex items-center" to={`/purchase/${_id}`}>
                  <button className="bg-secondary text-white font-semibold py-3 my-4 px-6 rounded-2xl shadow-md transition duration-300 hover:bg-accent hover:scale-105 hover:shadow-lg">
                    Purchase
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDetails;
