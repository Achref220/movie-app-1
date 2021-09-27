import React from 'react'
import StarRating from './StarRating';

function MovieList(props) {
    const Filter= props.movies.filter((movie,key)=>(
        movie.title.includes(props.search))
      );
    return (
        <>
        {Filter.map((movie) => <div className="image-container d-flex justify-content-start m-3">
            <img style={{width:"150px", height:"180px"}} src={movie.poster} alt="movie1" ></img>
            <b><h6 className="title-img">{movie.title}<StarRating /></h6></b>
            </div>
        )} 
    </>
    )
}

export default MovieList

