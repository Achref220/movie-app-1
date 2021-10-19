import React from 'react'
import { useParams } from 'react-router'

function Trailer({ movies }) {
    let { id } = useParams();
    const movie = movies.find((e) => id == e.id);

    return (
        <div className="trailer-main">
            <h1>{movie.title}</h1>
            <iframe
                title="trailer"
                width="800"
                height="350"
                src={movie.trailer}
            ></iframe>
            <p>{movie.description}</p>
        </div>
    )
}

export default Trailer