// import React from "react";

// const Footer = () => {
//   return (
//     <div className="bg-[#29291F]">
//       <span className="">
//         {" "}
//         <i>
//           {" "}
//           <h1 className="text-[#F3F1C4] text-4xl font-bold text-center py-10 lg:py-30">
//             RestroFlow{" "}
//           </h1>
//         </i>
//       </span>
//       <div className="md:flex text-center lg:text-start items-center md:justify-around pb-10">
//         <div>
//           <p className="text-[#D2D0A9]">123-456-789</p>
//           <p className="text-[#D2D0A9]">info@mysite.com</p>
//           <p className="text-[#D2D0A9]">500 Terry Francine St.</p>
//           <p className="text-[#D2D0A9]">San Francisco, CA 94158</p>
//         </div>
//         <div className="mt-5 md:mt-0">
//           <p className="text-[#D2D0A9] ">Privacy Policy</p>
//           <p className="text-[#D2D0A9] ">Accessibility Statement</p>
//           <p className="text-[#D2D0A9] ">Terms & Conditions</p>
//           <p className="text-[#D2D0A9] ">Refund Policy</p>
//         </div>
//       </div>
//       <p className="text-[#F3F1C4] text-center pb-20">
//         © 2035 by B for Buffet. Powered and secured by hasnat{" "}
//       </p>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router"; // Ensure correct import

const Footer = () => {
  return (
    <footer className="bg-[#252525]  text-base-content py-12 shadow-inner">
      <div className="w-11/12  mx-auto px-6 md:flex md:justify-between md:items-start space-y-10 md:space-y-0">
        {/* Brand */}
        <div>
          <h1 className="text-4xl font-bold italic text-[#EA580C] mb-4">
            RestroFlow
          </h1>
          <p className="max-w-sm text-white">
            Bringing you the best flavors with passion and love. Your go-to spot for unforgettable dining.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-semibold text-secondary mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3 text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-accent text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/allfoods"
                className="hover:text-accent text-white transition-colors duration-300"
              >
                All Foods
              </Link>
            </li>
            <li>
              <Link
                to="/gellery"
                className="hover:text-accent text-white transition-colors duration-300"
              >
                Gellery
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold text-secondary mb-4">
            Contact
          </h2>
          <p className='text-white'>📞 123-456-789</p>
          <p className='text-white'>✉️ info@restroflow.com</p>
          <p className='text-white'>📍 500 Terry Francine St., San Francisco, CA 94158</p>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="mt-12 border-t border-neutral pt-6 text-center text-secondary font-semibold">
        © {new Date().getFullYear()} RestroFlow. Powered and secured by Hasnat
      </div>
    </footer>
  );
};

export default Footer;

