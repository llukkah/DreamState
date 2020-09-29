import React from "react";
import "./Dreams.css";
import "./WakeUp.css";
import Layout from "./Shared/Layout";

export default function DozeOff () {

    return (
        <Layout>
            <div class ="dream-div">
                <p class="dream-header">Dreams</p>
                <p class="dreams-disclaimer"> To submit a dream to DREAMSTATE, send them to 
                
                <a href="mailto:Realityof.DreamState@gmail.com" class="wakeup-links"> our email.</a></p>
            

            </div>
        </Layout>
    );
 }