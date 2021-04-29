import React from "react"
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { setIsVisible } from "../../actions/navbarAction"

import "./scss_movies/movie_nav.scss"

const MovieNav = () => {
  const isVisible = useSelector(state => state.navbarReducer.isVisible)
  const dispatch = useDispatch()

  const toggleClass = (e) => {
    e.preventDefault()
    dispatch(setIsVisible(!isVisible))
  }

  return (
    <div className={isVisible ? "nav visible nav-white" : "nav nav-white"}>
      <div className={isVisible ? "nav visible nav-red" : "nav nav-red"}>
        <div className={isVisible? "nav visible nav-black" : "nav nav-black"}>
          <button className="nav-btn close-btn" onClick={toggleClass}>
            <i className="fas fa-times"></i>
          </button>

          <div className="logo">
            <h2>Voirme</h2>
            <h3>Flix</h3>
            <div className="popcorn"></div>
          </div>

          <ul className="list">
            <li onClick={toggleClass}><Link to="/">HOME</Link></li>
            <li onClick={toggleClass}><Link to="/movies">TRENDING DAILY</Link></li>
            <li onClick={toggleClass}><Link to="/movies/search">SEARCH FAVOURITE</Link></li>
          </ul>

          <div className="delivery-contacts">
            <p><strong>For Delivery Call: </strong><br />+254 700 400 321</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieNav