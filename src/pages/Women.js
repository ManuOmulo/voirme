import React from "react"
import { NavLink } from "react-router-dom"

// css
import "../scss/women.scss"

import Nav from "../Nav"

const WomenSection = () => {
  return (
    <div className="womens-window">
      <Nav />

      <div className="top">
        <div className="womens-logo">
          <p className="p1">Voirme</p>
          <p className="p2">Women</p>
          <div className="women-avatar"></div>
        </div>
      </div>

      <div className="fashion-navigation">
        <NavLink
          to="/women/shoes"
          exact
          className="fashion-navlink"
          activeClassName="fashion-navlink-active"
        >
          Shoes
        </NavLink>

        <NavLink
          to="/women/clothing"
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

export default WomenSection