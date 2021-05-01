import React, { useEffect } from "react"

import "./scss_movies/search_page.scss"

import { useSelector, useDispatch } from "react-redux"
import { requestAllMovies } from "../../actions/moviesAction"
import { setIsVisible } from "../../actions/navbarAction"
import { requestMovieGenres, requestTvGenres } from "../../actions/moviesAction"

// navbar
import MovieNav from "./movieNav"

import Search from "./Search"
import MovieComponent from "./movieComponent"
import SkeletonSearch from "../../skeletons/components/SkeletonSearch";

const SearchMoviesContainer = () => {
  const movieList = useSelector(state => state.requestAllMoviesReducer.allMovies)
  const isPendingMovies = useSelector(state => state.requestAllMoviesReducer.isPending)
  const movieGenres = useSelector(state => state.requestMovieGenresReducer.movieGenres)
  const tvGenres = useSelector(state => state.requestTvGenresReducer.tvGenres)
  const isVisible = useSelector(state => state.navbarReducer.isVisible)
  const dispatch = useDispatch()

  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4ea1a39dbbbf151bd11a686a7c6ee604&page=1`

  useEffect(() => {
    dispatch(requestAllMovies(API_URL))
    dispatch(requestMovieGenres())
    dispatch(requestTvGenres())
  }, [dispatch, API_URL])

  const toggleClass = (e) => {
    e.preventDefault()
    dispatch(setIsVisible(!isVisible))
  }

  const allGenres = movieGenres.concat(tvGenres)

  const giveGenre = (id) => {
    if (id === undefined) {
      return ""
    }
    for (let genre of allGenres) {
      if (genre.id === id) {
        return genre.name
      }
    }
    return ""
  }

  const allMovies = movieList === undefined ?
    <div className="search-error-container">
      <p>Please add title to search</p>
    </div>
    :
    movieList.length === 0 ?
    <div className="search-error-container">
      <p>Movie title not found</p>
      <p style={{marginTop: 10}}>Might be a spelling mistake. Try again..</p>
    </div>
    :
    movieList.map(movie => {
    return (
      <MovieComponent key={movie.id} movie={movie} giveGenre={giveGenre} />
    )
  })

  const loading = [1,2,3,4,5,6,7,8,9,10].map(index => (
    <SkeletonSearch key={index} theme="dark"/>
  ))

  return (
    <div className="movie-window-search">
      <button className="nav-btn open-btn" onClick={toggleClass}>
        <i className="fas fa-bars"></i>
      </button>

      <div className="search-banner">
        <h2>Unlimited Movies &#38; Series</h2>
        <p>Search and we Deliver</p>
      </div>

      <div className="logo-top">
        <h2>Voirme</h2>
        <h3>Flix</h3>
        <div className="popcorn"></div>
      </div>

      <MovieNav />
      <Search />

      <div className="allmovies-search">
        {isPendingMovies? loading : allMovies }
      </div>
    </div>
  )
}

export default SearchMoviesContainer