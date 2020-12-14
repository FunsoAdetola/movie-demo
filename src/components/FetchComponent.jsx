import React from 'react';
import {Link} from "react-router-dom";
import uuid from "uuid";
import Header from "./Header";
import useFetch from "./useFetch";





export default function FetchComponent({programType}) {
    const Loading = ()=> <div className="loading">Loading...</div>
    const Error = ()=> <div className="error">Oops! Error Loading Page</div>

    const [movies, isLoading, error] = useFetch();

    return (
        <div className="movie-page">
        <Header>{`Popular ${programType}`}</Header>
           <div>
           <Link className="back-btn" to="/">Back</Link> 
           <div className="series-list">
           { error ? <Error /> : "" }
           { isLoading ? <Loading /> : movies.filter(item => item.programType === {programType} && item.releaseYear >= 2010)
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
