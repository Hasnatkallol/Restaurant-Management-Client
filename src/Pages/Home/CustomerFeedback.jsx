// import React from "react";

// const feedbackStats = {
//   averageRating: 4.6,
//   totalReviews: 230,
//   satisfactionRate: 94,
//   recent: [
//     {
//       name: "Emily Carter",
//       rating: 5,
//       comment: "Incredible service and delicious meals! Highly recommend.",
//     },
//     {
//       name: "Liam Scott",
//       rating: 4,
//       comment: "Great experience, just a little slow on the drinks.",
//     },
//     {
//       name: "Noah Brooks",
//       rating: 5,
//       comment: "Staff were amazing, and the food was top-notch.",
//     },
//   ],
// };

// const StarDisplay = ({ value }) => {
//   return (
//     <div className="flex gap-1 text-yellow-400">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <span key={i}>{i < value ? "★" : "☆"}</span>
//       ))}
//     </div>
//   );
// };

// const CustomerFeedback = () => {
//   return (
//     <div className="bg-[#39392A] py5 lg:py-10">
//       <div className="p-6 rounded-xl  max-w-5xl mx-auto ">
//         <h2 className="text-3xl text-[#F3DB89] font-semibold mb-4 text-center">
//           Customer Insights
//         </h2>
//         <div className="flex justify-between  items-center mb-6 flex-wrap gap-4">
//           <div>
//             <p className="text-5xl font-bold text-yellow-500">
//               {feedbackStats.averageRating.toFixed(1)}
//             </p>
//             <p className="text-white text-sm">Average Rating</p>
//           </div>
//           <div>
//             <p className="text-2xl font-bold">{feedbackStats.totalReviews}</p>
//             <p className="text-white  text-sm">Total Reviews</p>
//           </div>
//           <div>
//             <p className="text-2xl font-bold">
//               {feedbackStats.satisfactionRate}%
//             </p>
//             <p className="text-white  text-sm">Customer Satisfaction</p>
//           </div>
//         </div>
//         <div className="grid md:grid-cols-3 gap-6 ">
//           {feedbackStats.recent.map((item, index) => (
//             <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
//               <div className="flex justify-between items-center mb-2">
//                 <h4 className="font-medium">{item.name}</h4>
//                 <StarDisplay value={item.rating} />
//               </div>
//               <p className="text-sm text-gray-700">{item.comment}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerFeedback;

import React from "react";

const feedbackStats = {
  averageRating: 4.6,
  totalReviews: 230,
  satisfactionRate: 94,
  recent: [
    {
      name: "Emily Carter",
      rating: 5,
      comment: "Incredible service and delicious meals! Highly recommend.",
    },
    {
      name: "Liam Scott",
      rating: 4,
      comment: "Great experience, just a little slow on the drinks.",
    },
    {
      name: "Noah Brooks",
      rating: 5,
      comment: "Staff were amazing, and the food was top-notch.",
    },
  ],
};

const StarDisplay = ({ value }) => {
  return (
    <div className="flex gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < value ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

const CustomerFeedback = () => {
  return (
    <div className="bg-base-200 py-10">
      <div className="p-6 rounded-xl max-w-5xl mx-auto">
        <h2 className="text-3xl text-accent font-semibold mb-4 text-center">
          Customer Insights
        </h2>

        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <div>
            <p className="text-5xl font-bold text-warning">
              {feedbackStats.averageRating.toFixed(1)}
            </p>
            <p className="text-base-content text-sm">Average Rating</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-base-content">
              {feedbackStats.totalReviews}
            </p>
            <p className="text-base-content text-sm">Total Reviews</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-success">
              {feedbackStats.satisfactionRate}%
            </p>
            <p className="text-base-content text-sm">Customer Satisfaction</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {feedbackStats.recent.map((item, index) => (
            <div
              key={index}
              className="bg-base-100 text-base-content p-4 rounded-lg shadow-md border border-base-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{item.name}</h4>
                <StarDisplay value={item.rating} />
              </div>
              <p className="text-sm">{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;

