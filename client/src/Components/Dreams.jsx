import React, { useState, useEffect } from "react";
import { getAllDreams } from "../Services/api-helper";
import "./Dreams.css";
import Layout from "./Shared/Layout";

export default function Dreams () {
    useEffect(() => {
        const fetchData = async () => {
            const resp = await getAllDreams();
            setAllDreams(resp);
        };
        fetchData();
    }, []);

    const [allDreams, setAllDreams] = useState([]);

    return (
        <Layout>
            <div class ="dream-div">
                <p class="dream-header">Dreams</p>
                <p class="dreams-disclaimer"> To add a Dream to the list, send your suggestions via the form on the contact page.</p>
                {allDreams.map((Dream, index) => (
                    <div key={index}>
                        <div class="dreams-info">
                            <p>{Dream.story} </p>
                        <div class="dream-stat">
                            <p class="dream-name">{Dream.location}, {Dream.year}</p>
                        </div>
                        </div>
                    </div>
                ))}
                <div class="filler"></div>
            </div>
        </Layout>
    );
 }