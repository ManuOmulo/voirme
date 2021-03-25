import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import {
  requestAllMovies,
  requestTrendingDaily,
  requestPopular,
  requestNewRealeses,
  requestCurrentlyAiring
} from "../../actions/moviesAction"

import MovieComponent from "./movieComponent"

const Movies = () => {
  const movieList = useSelector(state => state.requestAllMoviesReducer.allMovies)
  const trending = useSelector(state => state.requestTrendingReducer.trending)
  const popularShows = useSelector(state => state.requestPopularReducer.popularTv)
  const newReleases = useSelector(state => state.requestNewRealesesReducer.newReleases)
  const currentlyAiring = useSelector(state => state.requestCurrentlyAiringReducer.currentlyAiring)
  const dispatch = useDispatch()

  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4ea1a39dbbbf151bd11a686a7c6ee604&page=1`

  const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=4ea1a39dbbbf151bd11a686a7c6ee604&language=en-US&query=good%20girls&page=1`

  useEffect(() => {
    dispatch(requestAllMovies(API_URL))
    dispatch(requestTrendingDaily())
    dispatch(requestPopular())
    dispatch(requestNewRealeses())
    dispatch(requestCurrentlyAiring())
  }, [dispatch, API_URL])


  console.log(trending)
  console.log(popularShows)
  console.log(newReleases)
  console.log(currentlyAiring)

  const allMovies = movieList.map(movie => {
    return (
      <MovieComponent key={movie.id} movie={movie} />
    )
  })

  return(
    <div>
      <h1>Movies &#38; Series</h1>
      <div className="movie-container">
        {allMovies}
      </div>
    </div>
  )
}

export default Movies