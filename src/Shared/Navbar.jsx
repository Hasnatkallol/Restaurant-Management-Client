import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-600 underline underline-offset-4 font-bold"
              : ""
          }
          to={"/"}
        >
          <li className="text-2xl mr-5">Home</li>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-600 underline underline-offset-4 font-bold"
              : ""
          }
          to={"/allfoods"}
        >
          <li className="text-2xl mr-5">All Foods</li>
        </NavLink>
      </li>

      {/* {user && (
        <>
          <li>
            <NavLink to="/myapplication">My Application</NavLink>
          </li>
          <li>
            <NavLink to="/addjob">Add Job</NavLink>
          </li>
          <li>
            <NavLink to="/mypostedjob">My POsted Job</NavLink>
          </li>
        </>
      )} */}
    </>
  );
  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn border-2 border-black">
            <Link>Log In</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
