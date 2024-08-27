import { useState, useEffect } from 'react'

const useFetch = (apiPath, queryTerm="") => {

    const [data, setData] = useState([]);
    const apikey = 'fa81bc92bcd81d5f16ec065f548604df';
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apikey}&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies() {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
          } catch (error) {
            console.error("Error fetching movies:", error);
          }
        }
        
        fetchMovies();
      }, [url]);

  return {data}
}

export default useFetch
