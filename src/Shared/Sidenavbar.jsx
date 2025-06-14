import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import { FaMoon } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { CiSun } from "react-icons/ci";

const Sidenavbr = () => {
  const { user, logOut } = useContext(FirebaseAuthContext);
  const [theme, setTheme] = useState("light");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Auto-close dropdowns on route change
  useEffect(() => {
    setDropdownOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  // Theme toggle
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
            isActive ? "text-[#F3DB89] text-2xl" : "text-white text-2xl"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#F3DB89] text-2xl" : "text-white text-2xl"
          }
          to="/allfoods"
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#F3DB89] text-2xl" : "text-white text-2xl"
          }
          to="/gellery"
        >
          Gellery
        </NavLink>
      </li>
      {user && <></>}
      <button onClick={toggleTheme} className="my-2 mx-2">
        {theme === "light" ? <FaMoon size={30} /> : <CiSun size={30} />}
      </button>
    </>
  );

  return (
    <div className="bg-[#403F2B] sticky top-0 z-40">
      <div className="w-11/12 mx-auto">
        <div className="navbar">
          {/* Mobile Dropdown */}
          <div className="navbar-start">
            <div className="dropdown relative">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="mr-3 lg:hidden cursor-pointer"
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
              {dropdownOpen && (
                <div className="absolute top-10 left-0 w-60 bg-[#403F2B] rounded-box shadow z-50 p-4">
                  <ul onClick={() => setDropdownOpen(false)}>{links}</ul>
                </div>
              )}
            </div>

            <h1 className="text-[#F3F1C4] text-xl lg:text-2xl">
              <i>RestroFlow</i>
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {/* Right Side: Auth & Avatar */}
          <div className="navbar-end">
            <div className="flex items-center space-x-4">
              {!user ? (
                <NavLink
                  to="/login"
                  className="bg-[#F3DB89] btn px-8 py-1 text-2xl border-none rounded-4xl text-[#403F2B] hover:bg-[#403F2B] hover:text-[#F3DB89]"
                >
                  Login
                </NavLink>
              ) : (
                <>
                  {/* Avatar Dropdown */}
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

                    {userDropdownOpen && (
                      <ul
                        tabIndex={0}
                        className="absolute right-0 mt-3 w-52 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-50"
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
                        <li className="">
                          <button
                            onClick={handleLogout}
                            className="bg-red-500 lg:btn w-[50%] items-center py-1 border-none rounded-4xl text-white hover:bg-red-500 hover:text-black"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    )}
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

export default Sidenavbr;
