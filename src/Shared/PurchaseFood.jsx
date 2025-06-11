import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const PurchaseFood = () => {
  const { user } = useContext(FirebaseAuthContext);
  const { name, quantity, price } = useLoaderData();

  const getFormattedDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const purchasedQty = parseInt(form.quantity.value);

    const purchaseData = {
      foodName: name,
      price: price,
      quantity: purchasedQty,
      buyerName: user.displayName,
      buyerEmail: user.email,
      purchaseDate: getFormattedDateTime(),
    };

    axios
      .post("http://localhost:4000/purchasefood", purchaseData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "This Food successfully added in purchase database",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 my-10 bg-white mt-10 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Purchase Food
      </h1>
      <form onSubmit={handlePurchase} className="space-y-6">
        <div>
          <label className="block text-gray-600 font-semibold mb-1">
            Food Name
          </label>
          <input
            type="text"
            defaultValue={name}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-semibold mb-1">
            Price (per unit)
          </label>
          <input
            type="text"
            defaultValue={`$${price}`}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-semibold mb-1">
            Quantity (max: {quantity})
          </label>
          <input
            type="number"
            name="quantity"
            min={1}
            max={quantity}
            required
            placeholder="Enter quantity"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-semibold mb-1">
            Buyer Name
          </label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-semibold mb-1">
            Buyer Email
          </label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-black font-semibold py-3 px-6 rounded-xl shadow transition-all hover:scale-105 hover:shadow-lg"
        >
          Confirm Purchase
        </button>
      </form>
    </div>
  );
};

export default PurchaseFood;
