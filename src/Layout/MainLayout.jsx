import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer";
import Sidenavbar from "../Shared/Sidenavbar";

const MainLayout = () => {
  return (
    <div>
  
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-463px)]">
     
        <main>
          <Outlet></Outlet>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
