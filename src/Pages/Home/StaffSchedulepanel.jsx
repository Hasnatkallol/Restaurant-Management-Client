// import React from "react";

// const schedule = [
//   { name: "Sophia Lee", role: "Head Chef", shift: "9:00 AM – 5:00 PM" },
//   { name: "James Kim", role: "Server", shift: "12:00 PM – 8:00 PM" },
//   { name: "Olivia Brown", role: "Host", shift: "10:00 AM – 6:00 PM" },
//   { name: "Ethan Smith", role: "Barista", shift: "8:00 AM – 4:00 PM" },
// ];

// const StaffSchedulePanel = () => {
//   return (
//     <div className="bg-[#403F2B] py-5">
//       <div className=" p-6 rounded-xl  max-w-5xl mx-auto">
//         <div className="flex justify-center items-center mb-6">
//           <h2 className="text-3xl font-semibold text-center text-[#F3DB89] justify-center items-center">
//             Today's Staff Schedule
//           </h2>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="table w-full">
//             <thead>
//               <tr>
//                 <th>Staff</th>
//                 <th>Role</th>
//                 <th>Shift Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {schedule.map((staff, idx) => (
//                 <tr key={idx}>
//                   <td>{staff.name}</td>
//                   <td>{staff.role}</td>
//                   <td>{staff.shift}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StaffSchedulePanel;
import React from "react";

const schedule = [
  { name: "Sophia Lee", role: "Head Chef", shift: "9:00 AM – 5:00 PM" },
  { name: "James Kim", role: "Server", shift: "12:00 PM – 8:00 PM" },
  { name: "Olivia Brown", role: "Host", shift: "10:00 AM – 6:00 PM" },
  { name: "Ethan Smith", role: "Barista", shift: "8:00 AM – 4:00 PM" },
];

const StaffSchedulePanel = () => {
  return (
    <div className="bg-base-200 py-10">
      <div className="p-6 rounded-xl max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-accent">
            Today's Staff Schedule
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full bg-base-100 text-base-content rounded-lg shadow">
            <thead className="bg-base-300 text-base font-bold">
              <tr>
                <th>Staff</th>
                <th>Role</th>
                <th>Shift Time</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((staff, idx) => (
                <tr key={idx} className="hover:bg-base-200">
                  <td>{staff.name}</td>
                  <td>{staff.role}</td>
                  <td>{staff.shift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffSchedulePanel;

