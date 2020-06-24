import React, { useState, useEffect } from "react";
import { getBeauty } from "../Services/api-helper";
import "./Food.css";
import { Link } from "react-router-dom";

export default function Beauty () {
    useEffect(() => {
        const fetchData = async () => {
            const resp = await getBeauty();
            setBeauty(resp);
        };
        fetchData();
    }, []);

    const [allBeauty, setBeauty] = useState([]);

    return (
        <div>
            <div className="interpret-list">
                <Link to="/Interpret" class="interpret-link">
                &#60;&#60;Back
                </Link>
                <h1 class="interpret-header">Beauty</h1>
                <p class="interpret-disclaimer"> To add a company to the list, send your suggestions via the form on the contact page.</p>
                <p class="interpret-disclaimer-2">Story, Mission Statement and/or About descriptions, taken directly from company’s website unless otherwise noted.</p>

                {allBeauty.map((beauty, index) => (
                <div key={index}>
                    <div class="interpret-info">
                        <a href={beauty.website_url} target="_blank"><img class="interpret-image" src={beauty.image_url}/></a>
                        <div>
                            <p class="interpret-name">{beauty.name}</p>
                            <p class="interpret-description">{beauty.description}</p>
                        </div>
                    </div>
                </div>
                    ))}
            </div>
        </div>
    );
 }