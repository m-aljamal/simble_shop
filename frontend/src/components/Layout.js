import React from "react";
import NavBar from "./NavBar/NavBar";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Link to="/admin/dashboard">Dashboard</Link>
      <hr />
      <h1
        style={{ marginTop: "20px", fontWeight: "700", letterSpacing: "-1px" }}
      >
        Simple Shop.
      </h1>

      <ReactNotification />
      {children}
      <div className="info">
        <div className="footerLinks">Links</div>
        <div className="subscribe">email</div>
      </div>
      <hr />
      <div>Footer</div>
    </div>
  );
};

export default Layout;
