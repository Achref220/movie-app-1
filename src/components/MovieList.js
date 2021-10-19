import React from 'react'
import MovieCard from './MovieCard';


function MovieList(props) {
    const Filter= props.movies.filter((movie, key)=>(
        movie.title.toLowerCase().includes(props.search.toLowerCase())&&(movie.rate) >= props.rate)
    );
    return (
        <>
        {Filter.map((movie) => 
            <MovieCard movie={movie} />
        )} 
        </>
    )
}

export default MovieList

