import React from 'react'
import { useState } from 'react';


const Addmovie = ({ addMovies }) => {
    const [add, setAdd] = useState(false); 
    const [title, setTitle] = useState("");
    const [poster, setPoster] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState(0);


    const handleSubmit = (e) => {
        addMovies({ title, poster, description, rate });
        e.preventDefault();
    };

    
    
    return (
        <div>
            
        <button type="button" class="btn btn-primary btn-rounded" onClick={() => setAdd(true)}><b>Add movie ➕</b></button>
        {add ? <div className="insideT">
            
            <button onClick={() => setAdd(false)} type="button" class="btn-close" aria-label="Close"></button>
            <div className="text66">
                <form className="addform" onSubmit={handleSubmit}>
                    <input placeholder="title" type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} />
                    <input placeholder="poster" type="url" id="poster" name="poster" onChange={(e) => setPoster(e.target.value)} />
                    <label htmlFor="description">Description :</label>
                    <textarea name="decription" id="description" onChange={(e) => setDescription(e.target.value)} />
                    <label htmlFor="description">Rate :</label>
                    <input className="ratefilm" type="number" name="rate" id="rate" onChange={(e) => setRate(Number(e.target.value))} />
                    <button className="button55" type="submit">Add Movie</button>
                </form>
            </div>
        </div> : null}
        </div>
    )
}

export default Addmovie
