import React from 'react'

function MovieList(props) {
    const Filter= props.movies.filter((movie,key)=>(
        movie.title.includes(props.search))
      );
    return (
        <>
        {Filter.map((movie) => <div className="image-container d-flex justify-content-start m-3">
            <img style={{width:"200px", height:"300px"}} src={movie.poster} alt="movie1" ></img>
            <div className="title-img">{movie.title}</div>
            <div className="rating">{movie.rating}</div>
            </div>
        )} 
    </>
    )
}

export default MovieList

