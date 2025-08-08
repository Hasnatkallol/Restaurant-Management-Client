import React, { useContext, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { NavLink, Outlet } from "react-router";
import {
  FaPlus,
  FaList,
  FaShoppingCart,
  FaTachometerAlt,
} from "react-icons/fa";




import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, theme } = useContext(FirebaseAuthContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeSidebar = () => {
    if (isMobile) setSidebarOpen(false);
  };

  if (!user) return <Loading />;

  const navLinks = [
    {
      path: "/dashboard",
      icon: <FaTachometerAlt className="text-lg" />,
      label: "Dashboard Home",
    },
    {
      path: "/dashboard/addfood",
      icon: <FaPlus className="text-lg" />,
      label: "Add Food",
    },
    {
      path: "/dashboard/myfood",
      icon: <FaList className="text-lg" />,
      label: "My Food",
    },
    {
      path: "/dashboard/myorder",
      icon: <FaShoppingCart className="text-lg" />,
      label: "My Order",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar />

      {/* Mobile Header */}
      <div
        className={`lg:hidden sticky top-16 z-40 flex justify-between items-center px-4 py-3 w-full border-b ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`text-xl rounded-full p-2 transition-colors ${
            theme === "dark"
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {sidebarOpen ? <IoMdClose /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Backdrop */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside
          className={`fixed h-[calc(100vh-4rem)] w-64 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          } shadow-md z-40 transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <nav className="flex flex-col p-4 gap-2 font-medium overflow-y-auto h-full">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? theme === "dark"
                        ? "bg-blue-700 text-white"
                        : "bg-blue-100 text-blue-700"
                      : theme === "dark"
                      ? "hover:bg-gray-700"
                      : "hover:bg-gray-100"
                  }`
                }
                end
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 min-h-[calc(100vh-4rem)] p-4 lg:p-6 ml-0 lg:ml-64 transition-all duration-300 overflow-auto ${
            theme === "dark" ? "bg-gray-900" : "bg-gray-50"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
