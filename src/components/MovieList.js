import React from 'react'
import MovieCard from './MovieCard';


function MovieList(props) {
    let Filter= props.movies.filter((movie, key)=>(
        movie.title.toLowerCase().includes(props.search.toLowerCase()) && (movie.rate) >= props.rate)
    );
    return (
        <>
        {Filter.map((movie, index) => (
            <MovieCard movie={movie} key={index}/>
        ))} 
        </>
    )
}

export default MovieList

