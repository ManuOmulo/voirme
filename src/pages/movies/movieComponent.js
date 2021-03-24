import React from "react"

const MovieComponent = (props) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
  const { movie } = props
  return(
    <div className="movie-card">
      <img src={IMG_PATH + movie.poster_path} alt={movie.original_title}/>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span><i className="fas fa-star"></i> {movie.vote_average}</span>
        <strong>{movie.release_date}</strong>
        <span>Language: {movie.original_language}</span>
      </div>
      <div className="movie-overview">
        <h3>Overview</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieComponent