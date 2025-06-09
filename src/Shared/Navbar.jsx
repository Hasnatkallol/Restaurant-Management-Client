import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import { FaMoon } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { CiSun } from "react-icons/ci";

const Navbar = () => {
  const { user, theme, setTheme, logOut } = use(FirebaseAuthContext);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#F3DB89] text-2xl" : "text-white text-2xl"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#F3DB89] text-2xl" : "text-white text-2xl"
          }
          to={"/allfoods"}
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#F3DB89] text-2xl" : "text-white text-2xl"
          }
          to={"/gellery"}
        >
          Gellery
        </NavLink>
      </li>

      <button onClick={toggleTheme} className="my-2 mx-2">
        {theme === "light" ? <FaMoon size={30} /> : <CiSun size={30} />}
      </button>
    </>
  );
  return (
    <div className="bg-[#403F2B]">
      <div className="w-11/12 mx-auto ">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="mr-3 text-white lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#403F2B] rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <h1 className="text-[#F3F1C4] text-2xl">
              {" "}
              <i> B for buffet</i>{" "}
            </h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center space-x-4">
              {!user ? (
                <>
                  <NavLink
                    to="/login"
                    className="bg-[#F3DB89] btn px-8 py-1 text-2xl border-none rounded-4xl text-[#403F2B] hover:bg-[#403F2B] hover:text-[#F3DB89]"
                  >
                    Login
                  </NavLink>
                </>
              ) : (
                <>
                  <button
                    onClick={handleLogout}
                    className="bg-[#F3DB89] btn px-8 py-1 text-2xl border-none rounded-4xl text-[#403F2B] hover:bg-[#403F2B] hover:text-[#F3DB89]"
                  >
                    Logout
                  </button>

                  <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user.displayName}
                  >
                    <img
                      className="w-[45px] h-[45px] object-cover  rounded-2xl"
                      src={user.photoURL}
                      alt="User Profile"
                    />
                  </a>
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
