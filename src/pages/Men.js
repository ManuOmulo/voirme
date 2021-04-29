import React from "react"
import { NavLink } from "react-router-dom"

// css
import "../scss/men.scss"

import Nav from "../Nav"

const MenSection = () => {
  return (
    <div className="mens-window">
      <Nav />

      <div className="top">
        <div className="mens-logo">
          <p className="p1">Voirme</p>
          <p className="p2">Men</p>
          <div className="men-avatar"></div>
        </div>
      </div>

      <div className="fashion-navigation">
        <NavLink
          to="/men/shoes"
          exact
          className="fashion-navlink"
          activeClassName="fashion-navlink-active"
        >
          Shoes
        </NavLink>

        <NavLink
          to="/men/clothing"
          exact
          className="fashion-navlink"
          activeClassName="fashion-navlink-active"
        >
          Clothing
        </NavLink>
      </div>

    </div>
  )
}

export default MenSection