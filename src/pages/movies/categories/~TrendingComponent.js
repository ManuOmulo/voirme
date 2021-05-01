import React from "react"
import SkeletonElement from "../../../skeletons/SkeletonElement";

const TrendingComponent = (props) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
  const { movie, giveGenre } = props
  const poster = IMG_PATH + movie.poster_path

  const type = movie.media_type === "movie" ? "Movie" : "Series"

  return (
    <div className="movie-container">
      <div className="movie-container-image">
        <img
          src={poster || <SkeletonElement type="poster"/>}
          alt={movie.title || movie.original_title || movie.original_name}
        />
        <div className="rating"><i className="fas fa-star"></i> {movie.vote_average}</div>
      </div>

      <div className="movie-container-info">
        <h2>{movie.title || movie.original_name}</h2>
        <h3>Genre: <em>{giveGenre(movie.genre_ids[0])}</em></h3>
        <p>
          <strong>Type: </strong>{type}
          <span><strong>Lang: </strong>{movie.original_language}</span>
        </p>
        <p>
          <strong>Release Date: </strong>{movie.release_date || movie.first_air_date}
        </p>
      </div>
    </div>
  )
}

export default TrendingComponent