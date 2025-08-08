import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";

const PurchaseFood = () => {
  const { user } = useContext(FirebaseAuthContext);
  const { name, image, quantity, price, addBy } = useLoaderData();

  const time = moment().format("MMMM Do YYYY, h:mm:ss a");

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const purchasedQty = parseInt(form.quantity.value);

    const purchaseData = {
      foodName: name,
      image: image,
      price: price,
      quantity: purchasedQty,
      buyerName: user.displayName,
      buyerEmail: user.email,
      purchaseDate: time,
      foodOwnerName: addBy.name,
    };

    if (quantity === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Items is not available!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return;
    }

    if (purchasedQty > quantity) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Purchase quantity exceeds available stock",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return;
    }

    axios
      .post(
        "https://reasturent-management-server.vercel.app/purchasefood",
        purchaseData
      )
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
    <div className="max-w-2xl mx-auto px-6 py-10 my-10 rounded-2xl shadow-lg bg-base-100 text-base-content">
      <h1 className="text-3xl font-bold mb-8 text-center">Purchase Food</h1>
      <form onSubmit={handlePurchase} className="space-y-6">
        {/* Food Name */}
        <div>
          <label className="block font-semibold mb-1">Food Name</label>
          <input
            type="text"
            defaultValue={name}
            readOnly
            className="w-full p-3 border border-neutral rounded-lg bg-neutral text-base-content"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block font-semibold mb-1">Image</label>
          <input
            type="url"
            name="image"
            defaultValue={image}
            readOnly
            className="w-full p-3 border border-neutral rounded-lg bg-neutral text-base-content"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price (per unit)</label>
          <input
            type="text"
            defaultValue={`$${price}`}
            readOnly
            className="w-full p-3 border border-neutral rounded-lg bg-neutral text-base-content"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-semibold mb-1">
            Quantity ({quantity === 0 ? "Not Available" : "max:" + quantity})
          </label>
          <input
            type="number"
            name="quantity"
            min={1}
            required
            placeholder="Enter quantity"
            className="w-full p-3 border border-neutral rounded-lg bg-base-100 text-base-content"
          />
        </div>

        {/* Buyer Name */}
        <div>
          <label className="block font-semibold mb-1">Buyer Name</label>
          <input
            type="text"
            value={user?.displayName || ""}
            readOnly
            className="w-full p-3 border border-neutral rounded-lg bg-neutral text-base-content"
          />
        </div>

        {/* Buyer Email */}
        <div>
          <label className="block font-semibold mb-1">Buyer Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full p-3 border border-neutral rounded-lg bg-neutral text-base-content"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={quantity === 0}
          className="w-full bg-secondary text-base-100 font-semibold py-3 px-6 rounded-xl shadow transition-all hover:bg-accent hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirm Purchase
        </button>
      </form>
    </div>
  );
};

export default PurchaseFood;
