import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { FirebaseAuthContext } from "../../Firebase/FirebaseAuthContext";

const MyOrder = () => {

  const [myOrder, setMyOrder] = useState([]);
  // const [errmsg, setErrmsg] = useState("");

  useEffect(() => {
 
    axios
      .get("http://localhost:4000/purchasefood")
      .then((response) => {
        setMyOrder(response.data);
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);
  console.log(myOrder);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/purchasefood/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.deletedCount);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully .",
                icon: "success",
              });

              const remainingFood = myOrder.filter(
                (element) => element._id !== _id
              );
              setMyOrder(remainingFood);
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">My Orders</h1>

      <p className="text-center text-gray-500 mb-6">
        Below are the foods you’ve Order. You can cancel order.
      </p>

      <div className="overflow-x-auto rounded-lg shadow-lg mb-5">
        <table className="min-w-full text-sm text-left text-gray-700 bg-white">
          <thead className="text-xs uppercase bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="px-6 py-4 font-semibold">Image</th>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 font-semibold">Food Owner</th>
              <th className="px-6 py-4 font-semibold">
                Purchase Data and Time
              </th>
              <th className="px-6 py-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myOrder.map((order, index) => (
              <tr
                key={order._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50 transition duration-150`}
              >
                <td className="px-6 py-4">
                  {" "}
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4">{order.foodName}</td>
                <td className="px-6 py-4">${order.price}</td>
                <td className="px-6 py-4">{order.foodOwnerName}</td>
                <td className="px-6 py-4">{order.purchaseDate}</td>
                <td className="px-6 py-4 text-center space-x-2">
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold px-4 py-1 rounded-xl shadow-sm hover:scale-105 transition text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {myOrder.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No Order added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
   
      </div>
    </div>
  );
};

export default MyOrder;
