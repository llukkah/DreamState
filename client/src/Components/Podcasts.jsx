import React, { useState, useEffect } from "react";
import { getPodcast } from "../Services/api-helper";
import "./Food.css";
import { Link } from "react-router-dom";

export default function Podcast () {
    useEffect(() => {
        const fetchData = async () => {
            const resp = await getPodcast();
            setPodcast(resp);
        };
        fetchData();
    }, []);

    const [allPodcast, setPodcast] = useState([]);

    return (
        <div>
            <div className="interpret-list">
                <Link to="/Interpret" class="interpret-link">
                &#60;&#60;Back
                </Link>
                <h1 class="interpret-header">Podcast</h1>
                <p class="interpret-disclaimer"> To add a company to the list, send your suggestions via the form on the contact page.</p>
                <p class="interpret-disclaimer-2">Story, Mission Statement and/or About descriptions, taken directly from company’s website unless otherwise noted.</p>

                {allPodcast.map((Podcast, index) => (
                <div key={index}>
                    <div class="interpret-info">
                        <a href={Podcast.website_url} target="_blank"><img class="interpret-image" src={Podcast.image_url}/></a>
                        <div>
                            <p class="interpret-name">{Podcast.name}</p>
                            <p class="interpret-description">{Podcast.description}</p>
                        </div>
                    </div>
                </div>
                    ))}
            </div>
        </div>
    );
 }
