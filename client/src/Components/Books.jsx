import React, { useState, useEffect } from "react";
import { getBooks } from "../Services/api-helper";
import "./Food.css";
import { Link } from "react-router-dom";

export default function Books () {
    useEffect(() => {
        const fetchData = async () => {
            const resp = await getBooks();
            setBooks(resp);
        };
        fetchData();
    }, []);

    const [allBooks, setBooks] = useState([]);

    return (
        <div>
            <div className="interpret-list">
                <Link to="/Interpret" class="interpret-link">
                &#60;&#60;Back
                </Link>
                <h1 class="interpret-header">Books</h1>
                <p class="interpret-disclaimer"> To add a Book to the list, send your suggestions via the form on the contact page.</p>
                <p class="interpret-disclaimer-2">Quotes, Summaries and/or Synopsis taken directly from Author’s website unless otherwise noted.</p>

                {allBooks.map((books, index) => (
                <div key={index}>
                    <div class="interpret-info">
                        <a href={books.website_url} target="_blank"><img class="interpret-image" src={books.image_url}/></a>
                        <div>
                            <p class="interpret-name">{books.name}</p>
                            <p class="interpret-description">{books.description}</p>
                        </div>
                    </div>
                </div>
                    ))}
            </div>
        </div>
    );
 }