import React, {useState, useEffect} from 'react';
import Header from "./Header";
import {Link} from "react-router-dom";
import uuid from "uuid";

const Loading = ()=> <div className="loading">Loading...</div>

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);


    const fetchData = async(e) => {
        setLoading(true);
        await fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
        .then(results => results.json())
        .then(data => {
           setMovies(data.entries);
           setLoading(false);
           console.log(movies);
    })
};

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="movie-page">
           <Header>Popular Movies</Header> 
           <div>
           <Link className="back-btn" to="/">Back</Link> 
           <div className="series-list">
           { isLoading ? <Loading /> : movies.filter(item => item.programType === "movie" && item.releaseYear >= 2010)
           .slice(0, 21)
           .sort((a, b) => a.title > b.title ? 1 : -1)
           .map(item => 
               <div className="card" key={uuid.v4()}>
               <img className="poster-image" src={item.images["Poster Art"].url} alt={`${item.title} poster art`}/>
                   <h3>{item.title}</h3>
               </div>
           )}
           </div>
           </div>
        </div>
    )
}
