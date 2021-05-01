import React from "react"
import SkeletonElement from "../../skeletons/SkeletonElement";

import "./scss_movies/search_page.scss"

const MovieComponent = (props) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
  const { movie, giveGenre } = props

  const type = movie.media_type === "movie" ? "Movie" : "Series"
  const genre = movie.genre_ids ? movie.genre_ids[0] : undefined
  const poster = IMG_PATH + movie.poster_path

  return(
    <div className="movie-card">
      <img src={poster ? poster :  <SkeletonElement type="search-poster"/>} alt={movie.original_title}/>

      <div className="movie-info">
        <h3>{movie.title || movie.original_name}</h3>

        <div className="movie-rating">
          <span><strong>Type: </strong>{type}</span>
          <span className="rate"><strong>Rating: </strong><i className="fas fa-star"></i> {movie.vote_average}</span>
          <span className="lang">
            <strong>Language: </strong>{movie.original_language}
          </span>
        </div>

        <h4><strong>Genre: </strong><em>{giveGenre(genre) || <em>Not found</em>}</em></h4>
        <p><strong>Release Date: </strong>{movie.release_date || movie.first_air_date}</p>

        <div className="movie-overview">
          <h3>Overview</h3>
          <div className="overview-text">
            <p>{movie.overview || <em>No available description found</em>}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MovieComponent