import React from "react"

const TrendingComponent = (props) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
  const { movie, giveGenre } = props

  const type = movie.media_type === "movie" ? "Movie" : "Series"

  return (
    <div className="movie-container">
      <img
        src={IMG_PATH + movie.poster_path}
        alt={movie.title || movie.original_title || movie.original_name}
      />
      <div className="movie-container-info">
        <h2>{movie.title || movie.original_name}</h2>
        <h3><strong>Genre: {giveGenre(movie.genre_ids[0])}</strong></h3>
        <span><strong>Type: </strong>{type}</span>
        <span><i className="fas fa-star"></i> {movie.vote_average}</span>
        <span><strong>Language: </strong>{movie.original_language}</span>
        <p>
          <strong>Release Date: {movie.release_date || movie.first_air_date}</strong>
        </p>
      </div>
    </div>
  )
}

export default TrendingComponent