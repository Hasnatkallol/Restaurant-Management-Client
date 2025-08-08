import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import { FaMoon } from "react-icons/fa";
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
            isActive ? "text-accent text-2xl" : "text-base-content text-2xl"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-accent text-2xl" : "text-base-content text-2xl"
          }
          to="/allfoods"
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-accent text-2xl" : "text-base-content text-2xl"
          }
          to="/gellery"
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-accent text-2xl" : "text-base-content text-2xl"
          }
          to="/helpcenter"
        >
          Help Center
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-accent text-2xl" : "text-base-content text-2xl"
          }
          to="/healthydiet"
        >
          Healthy & Diet
        </NavLink>
      </li>
      <button onClick={toggleTheme} className="my-2 mx-2 hidden lg:block">
        {theme === "light" ? <FaMoon size={30} /> : <CiSun size={30} />}
      </button>
    </>
  );

  return (
    <div className="bg-base-200 sticky top-0 z-40 shadow-md">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-1 items-center py-2 justify-between">
          {/* Mobile Dropdown Button */}
          <div className="navbar-start">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="mr-3 lg:hidden cursor-pointer flex items-center"
              aria-label="Toggle Menu"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setDropdownOpen(!dropdownOpen);
              }}
            >
              {dropdownOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </div>

            {/* Sidebar mobile menu */}
            <div
              className={`fixed top-0 left-0 h-screen w-64 bg-base-200 z-50 shadow transition-transform duration-300 ease-in-out transform lg:hidden ${
                dropdownOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex flex-col h-full p-4">
                {/* Logo inside drawer */}
                <div className="mb-6 flex justify-between items-center">
                  <h1 className="text-accent text-2xl font-semibold italic">RestroFlow</h1>
                  <button
                    onClick={() => setDropdownOpen(false)}
                    className="text-base-content text-2xl font-bold"
                    aria-label="Close Menu"
                  >
                    ✕
                  </button>
                </div>
                <ul onClick={() => setDropdownOpen(false)}>{links}</ul>
              </div>
            </div>

            <div>
              <h1 className="text-accent text-xl lg:text-2xl hidden lg:block font-semibold">
                <i>RestroFlow</i>
              </h1>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <button
                onClick={toggleTheme}
                className="my-2 mx-2 lg:hidden block"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? <FaMoon size={20} /> : <CiSun size={20} />}
              </button>
            </div>
            <h1 className="text-accent text-xl lg:text-2xl lg:hidden font-semibold">
              <i>RestroFlow</i>
            </h1>
          </div>

          {/* Auth & Avatar */}
          <div className="navbar-end">
            <div className="flex items-center space-x-4">
              {!user ? (
                <NavLink
                  to="/login"
                  className="rounded-[5px] bg-accent text-base-200 text-sxl lg:text-xl px-2 py-0.5 lg:py-1 lg:px-6 border-none hover:bg-base-200 hover:text-accent"
                >
                  Login
                </NavLink>
              ) : (
                <>
                  <div className="relative dropdown-end">
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setUserDropdownOpen((prev) => !prev)}
                      className="btn btn-ghost btn-circle avatar"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user.displayName}
                    >
                      <div className="w-10 rounded-full">
                        <img
                          className="w-[45px] h-[45px] object-cover rounded-2xl"
                          src={user.photoURL}
                          alt="User Profile"
                        />
                      </div>
                    </div>

                    <ul
                      tabIndex={0}
                      className={`absolute right-0 mt-3 w-32 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box items-center z-50 transition-all duration-300 ease-in-out transform origin-top ${
                        userDropdownOpen
                          ? "scale-y-100 opacity-100"
                          : "scale-y-0 opacity-0 pointer-events-none"
                      }`}
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      <li>
                        <Link to="/addfood">Add Food</Link>
                      </li>
                      <li>
                        <Link to="/myfood">My Food</Link>
                      </li>
                      <li>
                        <Link to="/myorder">My Order</Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="btn bg-error my-1 h-8 text-white hover:bg-error/80"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                  <Tooltip id="my-tooltip" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
