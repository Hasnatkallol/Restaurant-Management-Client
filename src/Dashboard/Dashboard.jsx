import React, { useState } from 'react';
import { Link, Outlet } from 'react-router';
import { FaBars, FaTimes } from 'react-icons/fa';

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  const menuItems = [
    { label: 'Add Food', to: '/addfood' },
    { label: 'My Food', to: '/myfood' },
    { label: 'My Order', to: '/myorder' },
    { label: 'Home', to: '/' },
  ];

  return (
    <div className="flex min-h-screen bg-base-100 text-base-content">
      
      {/* Sidebar (visible on large screens) */}
      <aside className="hidden lg:flex flex-col w-56 bg-neutral text-base-content p-5 fixed h-full z-40">
        <h2 className="text-2xl font-bold mb-8 text-center">Dashboard</h2>
        <ul className="space-y-4">
          {menuItems.map(item => (
            <li key={item.to}>
              <Link to={item.to} className="hover:text-secondary">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Topbar (mobile) */}
      <div className="lg:hidden flex justify-between items-center w-full p-4 bg-base-100 shadow-md fixed top-0 z-50">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button onClick={toggleDrawer}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Drawer menu (mobile) */}
      {isDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <div className="w-64 bg-neutral h-full p-5">
            <div className="flex justify-end mb-6">
              <button onClick={closeDrawer}>
                <FaTimes size={24} className="text-white" />
              </button>
            </div>
            <ul className="space-y-4 text-white">
              {menuItems.map(item => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={closeDrawer}
                    className="hover:text-secondary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-5 mt-16 lg:mt-0 lg:ml-56">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
