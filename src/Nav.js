import React from "react"
import { NavLink } from "react-router-dom"

import "./scss/nav.scss"

const Nav = () => {

  return (
    <div className="main-nav">
      <ul>
        <NavLink
          to="/"
          exact
          className="main-navlink"
          activeClassName="main-navlink-active"
        >
          <i className="fas fa-home"></i>
          <p>Home</p>
        </NavLink>

        <NavLink
          to="/men"
          exact
          className="main-navlink"
          activeClassName="main-navlink-active"
        >
          <i className="fas fa-male"></i>
          <p>Men</p>
        </NavLink>

        <NavLink
          to="/photography"
          exact
          className="main-navlink"
          activeClassName="main-navlink-active"
        >
          <i className="fas fa-camera"></i>
          <p>Photography</p>
        </NavLink>


        <NavLink
          to="/women"
          exact
          className="main-navlink"
          activeClassName="main-navlink-active"
        >
          <i className="fas fa-female"></i>
          <p>Women</p>
        </NavLink>

        <NavLink
          to="/movies"
          exact
          className="main-navlink"
          activeClassName="main-navlink-active"
        >
          <i className="fas fa-film"></i>
          <p>Movies</p>
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav