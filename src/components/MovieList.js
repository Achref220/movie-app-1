import React from 'react'

const MovieList = (props) => {
    let FilterComponent = props.filterComponent;
    return (
        <>
            {props.movies.map((movie) => <div className="image-container d-flex justify-content-start m-3">
                <img style={{width:"200px", height:"300px"}} src={movie.poster} alt="movie1" ></img>
                <div className="title-img">{movie.title}</div>
                <div className="rating">{movie.rating}</div>
                <div onClick={() => props.handleFavouritesClick(movie)}
                 className="overlay d-flex align-items-center justify-content-center">
                    <FilterComponent />
                </div>
            </div> )}
              
        </>
    );
};

export default MovieList
