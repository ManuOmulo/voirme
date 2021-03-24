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

  useEffect(() => {
    dispatch(requestAllMovies())
    dispatch(requestTrendingDaily())
    dispatch(requestPopular())
    dispatch(requestNewRealeses())
    dispatch(requestCurrentlyAiring())
  }, [dispatch])


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