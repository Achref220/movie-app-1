import React from 'react'

const Sidenavbar = () => {
    return (
        <div>
            <div className="first-list">
                <ul className="ul1">
                    <h4>Movie type</h4>
                    <li>Action</li>
                    <li>Horor</li>
                    <li>Comedy</li>
                    <li>Adventure</li>
                    <li>Drama</li>
                    <li>more...</li>
                </ul>
                <ul className="ul2">
                    <h4>Languages <span style={{fontSize:"15px"}}>🌍</span></h4>
                    <li>English</li>
                    <li>French</li>
                    <li>Russian</li>
                    <li>Arabic</li>
                    <li>more...</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidenavbar
