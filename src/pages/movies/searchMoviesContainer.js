import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { requestAllMovies } from "../../actions/moviesAction"

import Search from "./Search"
import MovieComponent from "./movieComponent"

const SearchMoviesContainer = () => {
  const movieList = useSelector(state => state.requestAllMoviesReducer.allMovies)
  const dispatch = useDispatch()

  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4ea1a39dbbbf151bd11a686a7c6ee604&page=1`

  useEffect(() => {
    dispatch(requestAllMovies(API_URL))
  }, [dispatch, API_URL])

  const allMovies = movieList.map(movie => {
    return (
      <MovieComponent key={movie.id} movie={movie} />
    )
  })

  return (
    <div className="movie-section">
      <Search />
      {allMovies}
    </div>
  )
}

export default SearchMoviesContainer