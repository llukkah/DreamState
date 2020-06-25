import React from "react";
import { Link } from "react-router-dom";
import "./Splash.css";
import DSLogo from './Shared/Assets/DSIcon.png'
import splashBG from './Shared/Assets/splashBG.jpg'

export default function Splash () {
    return (
        <div class="splash">
            <div>
                <img 
                    class="splashBG"
                    alt="DreamState SplashBG"
                    src={splashBG}/>
                <Link
                    to="/Home"
                    class="dream">
                    DREAM
                </Link>
                <img
                    class="DSSplashLogo"
                    alt="DreamState Logo"
                    src={DSLogo}/>
                <Link
                    to="/Home"
                    class="state">
                    STATE
                </Link>    
            </div>
       </div>
    );
 }

