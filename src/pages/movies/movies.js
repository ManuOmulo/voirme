import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import {
  requestTrendingDaily,
  requestPopular,
  requestNewRealeses,
  requestCurrentlyAiring
} from "../../actions/moviesAction"

import SearchMoviesContainer from "./searchMoviesContainer"

const Movies = () => {
  const trending = useSelector(state => state.requestTrendingReducer.trending)
  const popularShows = useSelector(state => state.requestPopularReducer.popularTv)
  const newReleases = useSelector(state => state.requestNewRealesesReducer.newReleases)
  const currentlyAiring = useSelector(state => state.requestCurrentlyAiringReducer.currentlyAiring)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestTrendingDaily())
    dispatch(requestPopular())
    dispatch(requestNewRealeses())
    dispatch(requestCurrentlyAiring())
  }, [dispatch])


  console.log(trending)
  console.log(popularShows)
  console.log(newReleases)
  console.log(currentlyAiring)

  return(
    <div>
      <h1>Movies &#38; Series</h1>
      <div className="movie-container">
        <h2>All other movies</h2>
      </div>
      <SearchMoviesContainer />
    </div>
  )
}

export default Movies