import React from "react"

const PopularShowsComponent = (props) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
  const { movie, giveGenre } = props

  return(
    <div className="movie-container">
      <div className="movie-container-image">
        <img
          src={IMG_PATH + movie.poster_path}
          alt={movie.original_name || movie.name}
        />
        <div className="rating"><i className="fas fa-star"></i> {movie.vote_average}</div>
      </div>

      <div className="movie-container-info">
        <h2>{movie.original_name}</h2>
        <h3>Genre: <em>{giveGenre(movie.genre_ids[0])}</em></h3>
        <p>
          <span style={{marginLeft: 0}}><strong>Language: </strong>{movie.original_language}</span>
        </p>
        <p>
          <strong>Release Date: </strong> {movie.first_air_date}
        </p>
      </div>
    </div>
  )
}

export default PopularShowsComponent