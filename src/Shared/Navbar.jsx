import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import { FaMoon, FaTimes } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(FirebaseAuthContext);
  const [theme, setTheme] = useState("light");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setDropdownOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    logOut()
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold text-2xl tracking-wide"
              : "text-base-content hover:text-accent transition-colors text-xl"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold text-2xl tracking-wide"
              : "text-base-content hover:text-accent transition-colors text-xl"
          }
          to="/allfoods"
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold text-2xl tracking-wide"
              : "text-base-content hover:text-accent transition-colors text-xl"
          }
          to="/gellery"
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold text-2xl tracking-wide"
              : "text-base-content hover:text-accent transition-colors text-xl"
          }
          to="/helpcenter"
        >
          Help Center
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold text-2xl tracking-wide"
              : "text-base-content hover:text-accent transition-colors text-xl"
          }
          to="/healthydiet"
        >
          Healthy & Diet
        </NavLink>
      </li>
      <button
        onClick={toggleTheme}
        className="my-2 mx-2 hidden lg:block text-accent hover:text-accent-focus transition-colors"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? <FaMoon size={30} /> : <CiSun size={30} />}
      </button>
    </>
  );

  return (
    <nav className="bg-base-200 sticky top-0 z-50 shadow-md">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-base-content hover:text-accent hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              aria-label="Toggle menu"
              aria-expanded={dropdownOpen}
            >
              {dropdownOpen ? (
                <FaTimes size={24} />
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-accent text-2xl font-semibold italic tracking-wide"
            >
              RestroFlow
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-8">
            <ul className="flex space-x-6 items-center">{links}</ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle for mobile */}
            <button
              onClick={toggleTheme}
              className="lg:hidden text-base-content hover:text-accent transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <FaMoon size={20} /> : <CiSun size={20} />}
            </button>

            {/* Auth Buttons */}
            {!user ? (
              <NavLink
                to="/login"
                className="inline-block px-4 py-2 rounded-md bg-accent text-base-200 font-semibold hover:bg-accent-focus transition"
              >
                Login
              </NavLink>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden border-2 border-accent hover:border-accent-focus focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
                  aria-haspopup="true"
                  aria-expanded={userDropdownOpen}
                  aria-label="User menu"
                  data-tooltip-id="user-tooltip"
                  data-tooltip-content={user.displayName || "User"}
                >
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User Avatar"}
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* User Dropdown */}
                <ul
                  className={`origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-base-100 ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform transform ${
                    userDropdownOpen
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0 pointer-events-none"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-base-content hover:bg-base-200"
                      role="menuitem"
                     
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/addfood"
                      className="block px-4 py-2 text-sm text-base-content hover:bg-base-200"
                      role="menuitem"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      Add Food
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myfood"
                      className="block px-4 py-2 text-sm text-base-content hover:bg-base-200"
                      role="menuitem"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      My Food
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myorder"
                      className="block px-4 py-2 text-sm text-base-content hover:bg-base-200"
                      role="menuitem"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      My Order
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left block px-4 py-2 text-sm text-error hover:bg-error/20 hover:text-error-focus"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
                <Tooltip id="user-tooltip" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-base-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          dropdownOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-base-300">
          <h2 className="text-accent text-2xl font-semibold italic tracking-wide">
            RestroFlow
          </h2>
          <button
            onClick={() => setDropdownOpen(false)}
            className="text-base-content hover:text-accent focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="mt-6 px-6">
          <ul className="space-y-6 text-xl" onClick={() => setDropdownOpen(false)}>
            {links}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
