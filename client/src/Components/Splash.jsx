import React from "react";
import { Link } from "react-router-dom";
import "./Splash.css";
import DSLogo from './Shared/Assets/DSIcon.png'

export default function Splash () {
    return (
        <div>
            <Link to="/Home" class="">DREAM</Link>
            <img class="DSLogo"  alt="DreamState Logo" src={DSLogo}/>
            <Link to="/Home" class="">STATE</Link>
       </div>
    );
 }

