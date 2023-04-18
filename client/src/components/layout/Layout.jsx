import React, { useEffect } from "react";
import "./layout.css";
import { Outlet, useNavigate } from "react-router";
const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/register");
  }, []);
  return (
    <main className="main_container">
      <h1 className="title">Best Books Library</h1>
      <Outlet />
    </main>
  );
};
export default Layout;
