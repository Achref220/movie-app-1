import React from 'react'
import { Link } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'


const Nav = ({setSearch,search,setRate,rate}) => {
    const handlesearch=(e)=>setSearch(e.target.value)

    return (
        <div className="main-nav">
            <div className="logo">
                <h2>Movie<span>App</span>🎬</h2>
            </div>
            <div>
            <input className="search" type="text" placeholder="Search for a specific movie..🔍" value={search} onChange={handlesearch}></input>
            <h4 className="rate">movie rating ✰</h4>
            <div className="rating"><StarRatingComponent value={rate}
                onStarClick={(nextValue, prevValue)=>{
                setRate(nextValue,prevValue)
            }
            }/></div>
            </div>
            <div className="dv-li">
                <ul className="main-li">
                    <Link className="link-1" exact to="/"><li><a href=""><b>home</ b></a></li></Link>
                    <li><a href=""><b>Movie list</b></a></li>
                    <li><a href=""><b>Contact</b></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
