import React, { useState, useEffect } from "react";
import { getMovies } from "../Services/api-helper";
import "./Food.css";
import { Link } from "react-router-dom";

export default function Movies () {
    useEffect(() => {
        const fetchData = async () => {
            const resp = await getMovies();
            setMovies(resp);
        };
        fetchData();
    }, []);

    const [allMovies, setMovies] = useState([]);

    return (
        <div>
            <div className="interpret-list">
                <Link to="/Interpret" class="interpret-link">
                &#60;&#60;Back
                </Link>
                <h1 class="interpret-header">Movies</h1>
                <p class="interpret-disclaimer"> To add a company to the list, send your suggestions via the form on the contact page.</p>
                <p class="interpret-disclaimer-2">Story, Mission Statement and/or About descriptions, taken directly from company’s website unless otherwise noted.</p>

                {allMovies.map((Movies, index) => (
                <div key={index}>
                    <div class="interpret-info">
                        <a href={Movies.website_url} target="_blank"><img class="interpret-image" alt="Movie Image" src={Movies.image_url}/></a>
                        <div>
                            <p class="interpret-name">{Movies.name}</p>
                            <p class="interpret-description">{Movies.description}</p>
                        </div>
                    </div>
                </div>
                    ))}
            </div>
        </div>
    );
 }
