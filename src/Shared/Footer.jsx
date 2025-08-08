
import React from "react";
import { Link } from "react-router"; // Ensure correct import

const Footer = () => {
  return (
    <footer className="bg-[#252525] border-t-1  text-base-content py-12 shadow-inner">
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

