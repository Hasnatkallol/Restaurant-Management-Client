import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { FirebaseAuthContext } from "../../Firebase/FirebaseAuthContext";
import Swal from "sweetalert2";

const Update = () => {
  const { user } = useContext(FirebaseAuthContext);
  const food = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newListing = Object.fromEntries(formData.entries());
    fetch(`http://localhost:4000/foods/${food._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
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
      <div className="max-w-3xl mx-auto mt-10  shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Update Food
        </h2>
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
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Food Image URL</label>
            <input
              type="text"
              name="image"
              required
              defaultValue={food.image}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Food Category</label>
            <input
              type="text"
              name="category"
              required
              defaultValue={food.category}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              required
              defaultValue={food.quantity}
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
            <label className="block font-medium mb-1">
              Food Description (ingredients, procedure)
            </label>
            <textarea
              name="description"
              defaultValue={food.description}
              required
              rows="4"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Added by (Name)</label>
            <input
              type="text"
              name="name"
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
              Update Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
