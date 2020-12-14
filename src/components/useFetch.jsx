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
            setMovies(data.entries);
            setLoading(false);
            console.log(movies);
            })
        } catch(err){
            setLoading(false);
            setError(true);
            console.log(err);
        }
        
     };

    useEffect(() => {
        fetchData();
    },[]);

    return [movies, isLoading, error];
}

