import React, { useState, useEffect } from "react";
import { getFashion } from "../Services/api-helper";
import "./Food.css";
import { Link } from "react-router-dom";
import Layout from "./Shared/Layout";

export default function Fashion () {
    useEffect(() => {
        const fetchData = async () => {
            const resp = await getFashion();
            setFashion(resp);
        };
        fetchData();
    }, []);

    const [allFashion, setFashion] = useState([]);

    return (
        <Layout>
            <div>
                <div className="interpret-list">
                    <Link
                        to="/Interpret"
                        class="interpret-link">
                        &#60;&#60;Back
                    </Link>
                    <h1 class="interpret-header">Fashion</h1>
                    <p class="interpret-disclaimer"> To add a company to the list, send your suggestions via the form on the contact page.</p>
                    <p class="interpret-disclaimer-2">Story, Mission Statement and/or About descriptions, taken directly from company’s website unless otherwise noted.</p>

                    {allFashion.map((Fashion, index) => (
                        <div key={index}>
                            <div class="interpret-info">
                                <a href={Fashion.website_url} target="_blank">
                                    <img
                                        class="interpret-image"
                                        alt="Fashion Logo"
                                        src={Fashion.image_url}/>
                                </a>
                            <div>
                                <p class="interpret-name">{Fashion.name}</p>
                                <p class="interpret-description">{Fashion.description}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
 }