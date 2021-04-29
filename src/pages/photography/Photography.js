import React from "react"

// css
import "../../scss/photography.scss"

import Nav from "../../Nav"

const Photography = () => {
  return (
    <div className="photo-window">
      <Nav />

      <div className="top">
        <div className="photo-logo">
          <p className="p1">Voirme</p>
          <p className="p2">Clix</p>
          <div className="photo-avatar"></div>
        </div>
      </div>

    </div>
  )
}

export default Photography