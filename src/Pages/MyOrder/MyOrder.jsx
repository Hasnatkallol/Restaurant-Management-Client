import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FirebaseAuthContext } from "../../Firebase/FirebaseAuthContext";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { user } = useContext(FirebaseAuthContext);
  const [errmsg, setErrmsg] = useState("");

  useEffect(() => {
    setErrmsg("");
    axios
      .get(
        `https://reasturent-management-server.vercel.app/purchasefood?email=${user.email}`,
        { withCredentials: true }
      )
      .then((response) => {
        setMyOrder(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch listings:", error);
        setErrmsg(error.response?.data?.message || "Failed to fetch orders");
      });
  }, [user.email]);

  const handleDelete = (_id) => {
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
            `https://reasturent-management-server.vercel.app/purchasefood/${_id}?email=${user.email}`,
            { withCredentials: true }
          )
          .then((data) => {
            if (data.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Deleted Successfully.",
                icon: "success",
              });

              const remaining = myOrder.filter((el) => el._id !== _id);
              setMyOrder(remaining);
            }
          })
          .catch((error) => {
            console.error("Failed to delete order:", error);
            setErrmsg(error.response?.data?.message || "Failed to delete order");
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-4 text-[var(--color-base-content)]">
        My Orders
      </h1>

      <p className="text-center text-[var(--color-base-content)] opacity-70 mb-6">
        Below are the foods you’ve ordered. You can cancel them if needed.
      </p>

      <div className="overflow-x-auto rounded-lg shadow-lg mb-5">
        <table className="min-w-full text-sm text-left text-[var(--color-base-content)] bg-[var(--color-base-100)]">
          <thead className="text-xs uppercase bg-[var(--color-secondary)] text-white">
            <tr>
              <th className="px-6 py-4 font-semibold">Image</th>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 font-semibold">Food Owner</th>
              <th className="px-6 py-4 font-semibold">Purchase Date & Time</th>
              <th className="px-6 py-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myOrder.map((order, index) => (
              <tr
                key={order._id}
                className={`${
                  index % 2 === 0
                    ? "bg-[var(--color-neutral)]"
                    : "bg-[var(--color-base-100)]"
                }`}
              >
                <td className="px-6 py-4">
                  <img
                    src={order.image}
                    alt={order.foodName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4">{order.foodName}</td>
                <td className="px-6 py-4">${order.price}</td>
                <td className="px-6 py-4">{order.foodOwnerName}</td>
                <td className="px-6 py-4">{order.purchaseDate}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="bg-[var(--color-error)] text-white font-semibold px-4 py-1 rounded-xl shadow-sm text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {myOrder.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-[var(--color-base-content)] opacity-60"
                >
                  No orders yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {errmsg && (
        <p className="text-red-500 dark:text-[var(--color-error)] text-center pb-5 text-2xl">
          {errmsg}
        </p>
      )}
    </div>
  );
};

export default MyOrder;
