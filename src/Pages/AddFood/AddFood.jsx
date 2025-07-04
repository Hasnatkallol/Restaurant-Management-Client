import React, { useContext, useState } from "react";
import { FirebaseAuthContext } from "../../Firebase/FirebaseAuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(FirebaseAuthContext);
  const [errmsg, setErrmsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newListing = {
      name: form.name.value,
      image: form.image.value,
      category: form.category.value,
      quantity: parseInt(form.quantity.value, 10),
      price: parseFloat(form.price.value),
      purchaseCount: 0,
      description: form.description.value,
      origin: form.origin.value,
      addBy: {
        name: user.displayName,
        email: user.email,
      },
    };

    axios
      .post(
        `https://reasturent-management-server.vercel.app/foods?email=${user.email}`, newListing,{ withCredentials: true},
      )
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "This Food successfully stored in  database",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => setErrmsg(error?.response?.data?.message));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10  shadow-xl rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Add New Food Item
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label className="block font-medium mb-1">Food Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Food Image URL</label>
          <input
            type="text"
            name="image"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Food Category</label>
          <input
            type="text"
            name="category"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Price ($)</label>
          <input
            type="number"
            name="price"
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
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium mb-1">
            Food Description (ingredients, procedure)
          </label>
          <textarea
            name="description"
            required
            rows="4"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Added by (Name)</label>
          <input
            type="text"
            name="username"
            className="w-full border rounded px-3 py-2"
            value={user.displayName}
            readOnly
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Added by (Email)</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded px-3 py-2"
            value={user.email}
            readOnly
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-black font-semibold py-3 px-6 rounded-xl shadow transition-all hover:scale-105 hover:shadow-lg"
          >
            Add Food
          </button>
        </div>
      </form>
      {errmsg ? (
        <p className="text-red-500 text-center pb-5 text-2xl">{errmsg}</p>
      ) : undefined}
    </div>
  );
};

export default AddFood;
