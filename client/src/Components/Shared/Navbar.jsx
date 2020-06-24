import React from "react";
import "./Layout.css";
import "./Nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <Link to="/About" class="nav-links">ABOUT</Link>
        <Link to="/Dreams" class="nav-links">DREAMS</Link>
      <div class="hover-link-1">
        <Link to="/Interpret" class="nav-links">INTERPRET <p>Learn More</p></Link>
      </div>
      <div class="hover-link-1">
        <Link to="/WakeUp" class="nav-links">WAKE UP<p>Get Active</p></Link>
      </div>
      <div class="hover-link">
        <Link to="/DozeOff" class="nav-links">DOZE OFF<p>Submit a Dream</p></Link>
      </div>
        <Link to="/Contact" class="nav-links">CONTACT</Link>
    </nav>
  );
};

export default Navbar;