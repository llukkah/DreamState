import React from "react";
import "./Layout.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="light-overlap-1" />
      <Navbar />
      <Sidebar />
      <div className="content-pane">{props.children}</div>
      <div className="dark-overlap-3" />
      <div className="light-overlap-2" />
      <footer />
    </div>
  );
};

export default Layout;
