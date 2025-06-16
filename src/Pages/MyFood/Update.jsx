import axios from "axios";
import React, { useContext } from "react";

import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { FirebaseAuthContext } from "../../Firebase/FirebaseAuthContext";

const Update = () => {
  const food = useLoaderData();
  const { user } = useContext(FirebaseAuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newListing = Object.fromEntries(formData.entries());
    console.log(newListing);
    axios
      .put(
        `https://reasturent-management-server.vercel.app/foods/${food._id}?email=${user.email}`,newListing,
        { withCredentials: true }
      )

      .then((data) => {
        if (data.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: " updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  };
  return (
    <div>
      <div>
        <div className="p-24">
          <div className="p-12 text-center space-y-4">
            <h1 className="text-6xl font-bold">Update Food</h1>
            <p className="text-lg"></p>
          </div>
          <form
            onSubmit={handleUpdate}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block font-medium mb-1">Food Name</label>
              <input
                type="text"
                name="name"
                defaultValue={food.name}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Food Image URL</label>
              <input
                type="text"
                name="image"
                defaultValue={food.image}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Food Category</label>
              <input
                type="text"
                name="category"
                defaultValue={food.category}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                defaultValue={food.quantity}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Price ($)</label>
              <input
                type="number"
                name="price"
                defaultValue={food.price}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Food Origin (Country)
              </label>
              <input
                type="text"
                name="origin"
                defaultValue={food.origin}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block font-medium mb-1">Food Description</label>
              <textarea
                name="description"
                defaultValue={food.description}
                required
                rows="4"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-black font-semibold py-3 px-6 rounded-xl shadow transition-all hover:scale-105 hover:shadow-lg"
              >
                Update Food
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
