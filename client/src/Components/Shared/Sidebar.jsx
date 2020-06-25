import React from "react";
import "./Sidebar.css"
import DSLogo from './Assets/DSIcon.png'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <Link to="/Home">
      <img class="DSLogo" src={DSLogo}/></Link>
      <p class="DSLogoText">DREAMSTATE</p>
    </aside>
  );
};

export default Sidebar;
