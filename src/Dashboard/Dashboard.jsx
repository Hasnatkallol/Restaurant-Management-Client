import React from "react";
import { Link, Outlet } from "react-router"; // Outlet for nested routes rendering
import { FaPlusCircle, FaUtensils, FaShoppingCart, FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Side Navbar */}
      <nav
        style={{
          width: "220px",
          backgroundColor: "#2c3e50",
          color: "white",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          position: "fixed",
          height: "100%",
          top: 0,
          left: 0,
        }}
      >
        <h2 style={{ marginBottom: "30px", textAlign: "center" }}>Dashboard</h2>
        <ul style={{ listStyle: "none", padding: 0, flexGrow: 1 }}>
          <li style={{ marginBottom: "20px" }}>
            <Link
              to="/addfood"
              style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <FaPlusCircle style={{ marginRight: "10px" }} />
              Add Food
            </Link>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <Link
              to="/myfood"
              style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <FaUtensils style={{ marginRight: "10px" }} />
              My Food
            </Link>
          </li>
          <li style={{ marginBottom: "20px" }}>
            <Link
              to="/myorder"
              style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <FaShoppingCart style={{ marginRight: "10px" }} />
              My Order
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center" }}
            >
              <FaHome style={{ marginRight: "10px" }} />
              Home
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main
        style={{
          marginLeft: "220px", // same as sidebar width
          padding: "30px",
          flexGrow: 1,
          backgroundColor: "#ecf0f1",
          minHeight: "100vh",
        }}
      >
        <Outlet /> {/* Nested routes content will appear here */}
      </main>
    </div>
  );
};

export default Dashboard;
