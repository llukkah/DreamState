import React, { useState, useEffect } from "react";
import { getFood } from "../Services/api-helper";
import "./Food.css";
import { Link } from "react-router-dom";





export default function Food () {
    
    useEffect(() => {
        const fetchData = async () => {
            const resp = await getFood();
            setFood(resp);
        };
        fetchData();
    }, []);

    const [allFood, setFood] = useState([]);




    return (
        <div>
            <div className="interpret-list">
                <Link to="/Interpret" class="interpret-link">
                &#60;&#60;Back
                </Link>
                <h1 class="interpret-header">Food</h1>
                <p class="interpret-disclaimer"> To add a company to the list, send your suggestions via the form on the contact page.</p>
                <p class="interpret-disclaimer-2">Story, Mission Statement and/or About descriptions, taken directly from company’s website unless otherwise noted.</p>

                {allFood.map((food, index) => (
                <div key={index}>
                    <div class="interpret-info">
                        <a href={food.website_url} target="_blank"><img class="interpret-image"  alt="Food Image" src={food.image_url}/></a>
                        <div>
                            <p class="interpret-name">{food.name}</p>
                            <p class="interpret-description">{food.description}</p>
                        </div>
                    </div>
                </div>
                    ))}
            </div>
        </div>
    );
 }


// # Food/Beauty/Podcasts/Fashion/Tech/Media: Story, Mission Statement and/or About descriptions, taken directly from company’s website unless otherwise noted.
// # Books: Descriptions taken directly from Author's website unless otherwise noted.