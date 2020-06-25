import React, { useState, useEffect } from "react";
import { getRandomDream } from "../Services/api-helper";
import "./Home.css";

export default function Home () {
    useEffect(() => {
        const fetchData = async () => {
            const resp = await getRandomDream();
            setRandomDream(resp);
        };
        fetchData();
    }, []);

    const [randomDream, setRandomDream] = useState([]);

    return (
        <div class ="randdream-div">
            <p>{randomDream.story} </p>
            <p class="dream-name">{randomDream.location}, {randomDream.year}</p>

       </div>
    );
 }

