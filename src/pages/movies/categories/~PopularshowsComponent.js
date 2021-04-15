import React from "react"

const PopularShowsComponent = (props) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
  const { movie, giveGenre } = props

  return(
    <div className="movie-container">
      <img
        src={IMG_PATH + movie.poster_path}
        alt={movie.original_name || movie.name}
      />
      <div className="movie-container-info">
        <hs>{movie.original_name}</hs>
        <h3><strong>Genre: {giveGenre(movie.genre_ids[0])}</strong></h3>
        <span><i className="fas fa-star"></i> {movie.vote_average}</span>
        <span><strong>Language: </strong>{movie.original_language}</span>
        <p>
          <strong>Release Date: {movie.first_air_date}</strong>
        </p>
      </div>
    </div>
  )
}

export default PopularShowsComponent