import React from 'react'
import { useState } from 'react';



const Addmovie = ({setMovies}) => {
    const [add, setAdd] = useState(false); 
    const [title, setTitle] = useState("");
    const [poster, setPoster] = useState("");

    const updateTitle = e => {
        setTitle(e.target.value)
    };
    const updatePoster = e => {
        setPoster(e.target.value)
    };

    const addCard = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {title: title, poster: poster}]);
    };
    
    return (
        <div>
            
        <button type="button" class="btn btn-primary btn-rounded" onClick={() => setAdd(true)}><b>Add movie ➕</b></button>
        {add ? <div className="insideT">
            
            <button onClick={() => setAdd(false)} type="button" class="btn-close" aria-label="Close"></button>
            <div className="text66">
                <form onSubmit={addCard}>
                    <input type="text" name="title" value={title} onChange={updateTitle} />
                    <input type="text" name="poster" value={poster} onChange={updatePoster} />
                    <button>Submit</button>
                </form>
            </div>
        </div> : null}
        </div>
    )
}

export default Addmovie
