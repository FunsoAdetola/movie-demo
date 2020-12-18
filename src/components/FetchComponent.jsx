import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import uuid from "uuid";
import Header from "./Header";
import useFetch from "./useFetch";
import {arrayFunction} from "./arrayFunction";



export default function FetchComponent({type}) {

    const [newMovies, setNewMovies] = useState([]);
    const [movies, isLoading, error] = useFetch();
    const Loading = ()=> <div className="loading">Loading...</div>
    const Error = ()=> <div className="error">Oops! Error Loading Page</div>

    
useEffect(()=>{
    movies && arrayFunction(type, movies).then((sortedList)=>{
    setNewMovies(sortedList)
    })
}, [movies, type])


    console.log(movies, error, isLoading);
    console.log(newMovies);

    return (
        <div className="movie-page">
        <Header>{`Popular ${type}`}</Header>
           <div>
           <Link className="back-btn" to="/">Back</Link> 
           <div className="series-list">
           { error ? <Error /> : "" }
           { isLoading ? <Loading /> :
           newMovies.map(item => 
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