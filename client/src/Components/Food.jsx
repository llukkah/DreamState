import React, { useState, useEffect } from "react";
import { getFood } from "../Services/api-helper";





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
            <div className="food-list">
                {allFood.map((food, index) => (
                <div key={index}>
                    {food.name} | {food.description} | {food.description}
                </div>
                    ))}
            </div>
        </div>
    );
 }