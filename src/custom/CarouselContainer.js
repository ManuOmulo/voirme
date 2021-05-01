import React from "react"

import image1 from "../images/carossel-offer.jpg"
import image2 from "../images/Carossel-men.jpg"
import image3 from "../images/carossel-jeans.jpg"
import image4 from "../images/carossel-women-1.jpg"

import "../scss/home.scss"

const CarouselContainer = () => {
  return (
    <div className="slider">
      <figure>
        <img src={image1} alt="image1"/>
        <img src={image2} alt="image2"/>
        <img src={image3} alt="image3"/>
        <img src={image4} alt="image4"/>
        <img src={image1} alt="image1"/>
      </figure>
    </div>
  )
}

export default CarouselContainer