import React, { useState, useEffect } from "react";
import { getTech } from "../Services/api-helper";
import "./Food.css";
import { Link } from "react-router-dom";

export default function Tech () {
    useEffect(() => {
        const fetchData = async () => {
            const resp = await getTech();
            setTech(resp);
        };
        fetchData();
    }, []);

    const [allTech, setTech] = useState([]);

    return (
        <div>
            <div className="interpret-list">
                <Link to="/Interpret" class="interpret-link">
                &#60;&#60;Back
                </Link>
                <h1 class="interpret-header">Tech</h1>
                <p class="interpret-disclaimer"> To add a company to the list, send your suggestions via the form on the contact page.</p>
                <p class="interpret-disclaimer-2">Story, Mission Statement and/or About descriptions, taken directly from company’s website unless otherwise noted.</p>

                {allTech.map((Tech, index) => (
                <div key={index}>
                    <div class="interpret-info">
                        <a href={Tech.website_url} target="_blank"><img class="interpret-image"  alt="Tech Image" src={Tech.image_url}/></a>
                        <div>
                            <p class="interpret-name">{Tech.name}</p>
                            <p class="interpret-description">{Tech.description}</p>
                        </div>
                    </div>
                </div>
                    ))}
            </div>
        </div>
    );
 }