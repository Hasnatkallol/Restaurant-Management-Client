import React, { useContext, useEffect, useState } from "react";
import { FirebaseAuthContext } from "../../Firebase/FirebaseAuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

const MyFood = () => {
  const { user } = useContext(FirebaseAuthContext);
  const [myFood, setMyFood] = useState([]);
  const [errmsg, setErrmsg] = useState("");

  useEffect(() => {
    setErrmsg("");
    if (user?.email) {
      const email = user.email;
      axios
        .get(
          `https://reasturent-management-server.vercel.app/foods?email=${email}`,
          { withCredentials: true }
        )
        .then((response) => {
          setMyFood(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch listings:", error);
          setErrmsg(error.response?.data?.message || "Failed to fetch foods");
        });
    }
  }, [user?.email]);

  const handleDelete = (_id) => {
    setErrmsg("");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--color-secondary)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://reasturent-management-server.vercel.app/foods/${_id}?email=${user.email}`,
            { withCredentials: true }
          )
          .then((data) => {
            if (data.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully.",
                icon: "success",
              });

              const remainingFood = myFood.filter(
                (element) => element._id !== _id
              );
              setMyFood(remainingFood);
            }
          })
          .catch((error) => {
            console.error("Failed to delete item:", error);
            setErrmsg(error.response?.data?.message || "Failed to delete item");
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-4 text-[var(--color-base-content)]">
        My Foods
      </h1>

      <p className="text-center text-[var(--color-base-content)] opacity-70 mb-6">
        Below are the foods you’ve added. You can update or delete them.
      </p>

      <div className="overflow-x-auto rounded-lg shadow-lg mb-5">
        <table className="min-w-full text-sm text-left text-[var(--color-base-content)] bg-[var(--color-base-100)]">
          <thead className="text-xs uppercase bg-[var(--color-secondary)] text-white">
            <tr>
              <th className="px-6 py-4 font-semibold">Image</th>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 font-semibold">Category</th>
              <th className="px-6 py-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myFood.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-[var(--color-base-content)] opacity-60"
                >
                  No foods added yet.
                </td>
              </tr>
            )}
            {myFood.map((food, index) => (
              <tr
                key={food._id}
                className={`${
                  index % 2 === 0
                    ? "bg-[var(--color-neutral)]"
                    : "bg-[var(--color-base-100)]"
                }`}
              >
                <td className="px-6 py-4">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4">{food.name}</td>
                <td className="px-6 py-4">${food.price}</td>
                <td className="px-6 py-4">{food.category}</td>
                <td className="px-6 py-4 text-center space-x-2">
                  <Link to={`/update/${food._id}`}>
                    <button className="bg-[var(--color-secondary)] text-white font-semibold px-4 py-1 rounded-xl shadow-sm text-xs">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="bg-[var(--color-error)] text-white font-semibold px-4 py-1 rounded-xl shadow-sm text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {errmsg && (
          <p className="text-red-500 dark:text-[var(--color-error)] text-center pb-5 text-2xl">
            {errmsg}
          </p>
        )}
      </div>
    </div>
  );
};

export default MyFood;
