import React from 'react'
import Addmovie from './Addmovie'

const Sidenavbar = ({setMovies}) => {
    return (
        <div>
            <div className="first-list">
                <ul className="ul1">
                    <h4>Movie type <span style={{fontSize:"17px"}}>🎥</span></h4>
                    <li>Action</li>
                    <li>Horor</li>
                    <li>Comedy</li>
                    <li>Adventure</li>
                    <li>Drama</li>
                    <li>more...</li>
                </ul>
                <ul className="ul2">
                    <h4>Languages <span style={{fontSize:"17px"}}>&#160;🌐</span></h4>
                    <li>English</li>
                    <li>French</li>
                    <li>Russian</li>
                    <li>Arabic</li>
                    <li>more...</li>
                </ul>
                <div className="toggle15">
                <Addmovie  setMovies={setMovies}/>
                </div>
            </div>
        </div>
    )
}

export default Sidenavbar
