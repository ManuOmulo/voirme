import React from "react"

const NewReleasesComponent = (props) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
  const { movie, giveGenre } = props

  return (
    <div className="movie-container">
      <img
        src={IMG_PATH + movie.poster_path}
        alt={movie.title}
      />
    </div>
  )
}

export default NewReleasesComponent