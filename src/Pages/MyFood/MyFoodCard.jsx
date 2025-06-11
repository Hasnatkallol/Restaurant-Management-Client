import React from "react";

const MyFoodCard = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Food Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Origin</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {userFoods.map((food, index) => (
              <tr key={food._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img src={food.image} alt={food.name} />
                    </div>
                  </div>
                </td>
                <td>{food.name}</td>
                <td>{food.category}</td>
                <td>{food.quantity}</td>
                <td>${food.price}</td>
                <td>{food.origin}</td>
                <td>
                  <button className="btn btn-sm btn-outline btn-primary">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {userFoods.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No food items found.</p>
        )}
      </div>
    </div>
  );
};

export default MyFoodCard;
