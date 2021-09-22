import React from 'react'


const Nav = () => {
    return (
        <div className="main-nav">
            <div className="logo">
                <h2>MovieApp</h2>
            </div>
            <div>
            <input className="search" type="text" placeholder="Search for a specific movie.."></input>
            </div>
            <div className="dv-li">
                <ul className="main-li">
                    <li><a href=""><b>home</ b></a></li>
                    <li><a id="active1" href=""><b>Movie list</b></a></li>
                    <li><a href=""><b>Contact</b></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
