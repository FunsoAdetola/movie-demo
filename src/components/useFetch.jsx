import React, {useState, useEffect} from 'react';



export default function useFetch() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
 

    const fetchData = async() => {
        const url = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";
        try{
            setLoading(true);
            await fetch(url)
            .then(results => results.json())
            .then(data => {
           
            setLoading(false);
           
           setMovies(data.entries);
           return data.entries;
            })
        } catch(err){
            setLoading(false);
            setError(true);
            console.log(err);
        }
        
     };

    useEffect(() => {
       if(movies.length === 0) {
        fetchData();
        console.log(movies);
       }
    },[movies]);

    return [movies, isLoading, error];
}