import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import {
  requestTrendingDaily,
  requestPopular,
  requestNewRealeses,
  requestCurrentlyAiring,
  requestMovieGenres,
  requestTvGenres
} from "../../actions/moviesAction"

import SearchMoviesContainer from "./searchMoviesContainer"

import TrendingComponent from "./categories/~TrendingComponent"
import PopularShowsComponent from "./categories/~PopularshowsComponent"

const Movies = () => {
  const trending = useSelector(state => state.requestTrendingReducer.trending)
  const popularShows = useSelector(state => state.requestPopularReducer.popularTv)
  const newReleases = useSelector(state => state.requestNewRealesesReducer.newReleases)
  const currentlyAiring = useSelector(state => state.requestCurrentlyAiringReducer.currentlyAiring)
  const movieGenres = useSelector(state => state.requestMovieGenresReducer.movieGenres)
  const tvGenres = useSelector(state => state.requestTvGenresReducer.tvGenres)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestTrendingDaily())
    dispatch(requestPopular())
    dispatch(requestNewRealeses())
    dispatch(requestCurrentlyAiring())
    dispatch(requestMovieGenres())
    dispatch(requestTvGenres())
  }, [dispatch])

  const allGenres = movieGenres.concat(tvGenres)

  const giveGenre = (id) => {
    for (let genre of allGenres) {
      if (genre.id === id) {
        return genre.name
      }
    }
    return ""
  }

  const TrendingMovies = trending.map(movie => {
    return (
      <TrendingComponent movie={movie} giveGenre={giveGenre} key={movie.id} />
    )
  })

  const PopularShows = popularShows.map(show => {
    return (
      <PopularShowsComponent movie={show} giveGenre={giveGenre} key={show.id} />
    )
  })

  console.log(newReleases)
  console.log(currentlyAiring)

  return(
    <div>
      <h1>Movies &#38; Series</h1>
      <div className="allmovies-container">
        <div className="trending-container">
          <h2>Trending Movies And Series</h2>
          {TrendingMovies}
        </div>

        <div className="popular-container">
          <h2>Most Viewed and Searched</h2>
          {PopularShows}
        </div>
      </div>
      <SearchMoviesContainer />
    </div>
  )
}

export default Movies