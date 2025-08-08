import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-463px)]">
        <main>
          <Outlet />
        </main>
      </div>

      {!isDashboard && <Footer />}
    </div>
  );
};

export default MainLayout;
