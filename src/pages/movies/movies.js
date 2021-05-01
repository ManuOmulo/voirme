import React, { useEffect } from "react"

import "./scss_movies/movie.scss"

// Redux
import { useSelector, useDispatch } from "react-redux"
import { setIsVisible } from "../../actions/navbarAction"
import {
  requestTrendingDaily,
  requestPopular,
  requestNewRealeses,
  requestCurrentlyAiring,
  requestMovieGenres,
  requestTvGenres
} from "../../actions/moviesAction"

// navbar
import MovieNav from "./movieNav"

// Displays
import TrendingComponent from "./categories/~TrendingComponent"
import PopularShowsComponent from "./categories/~PopularshowsComponent"
import NewReleasesComponent from "./categories/~NewReleasesComponent"
import CurrentlyAiringComponent from "./categories/~CurrentlyAiringComponent"
import SkeletonMovies from "../../skeletons/components/SkeletonMovies";

const Movies = () => {
  const trending = useSelector(state => state.requestTrendingReducer.trending)
  const isPendingTrending = useSelector(state => state.requestTrendingReducer.isPending)
  const popularShows = useSelector(state => state.requestPopularReducer.popularTv)
  const isPendingPopular = useSelector(state => state.requestPopularReducer.isPending)
  const newReleases = useSelector(state => state.requestNewRealesesReducer.newReleases)
  const isPendingNew = useSelector(state=> state.requestNewRealesesReducer.isPending)
  const currentlyAiring = useSelector(state => state.requestCurrentlyAiringReducer.currentlyAiring)
  const isPendingCurrent = useSelector(state=>state.requestCurrentlyAiringReducer.isPending)
  const movieGenres = useSelector(state => state.requestMovieGenresReducer.movieGenres)
  const tvGenres = useSelector(state => state.requestTvGenresReducer.tvGenres)
  const isVisible = useSelector(state => state.navbarReducer.isVisible)
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

  const toggleClass = (e) => {
    e.preventDefault()
    dispatch(setIsVisible(!isVisible))
  }

  const loading = [1,2,3,4,5,6,7].map(index => (
    <SkeletonMovies key={index} theme="dark"/>
  ))

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

  const NewReleases = newReleases.map(movie => {
    return (
      <NewReleasesComponent movie={movie} giveGenre={giveGenre} key={movie.id} />
    )
  })

  const CurrentlyAiring = currentlyAiring.map(series => {
    return (
      <CurrentlyAiringComponent movie={series} giveGenre={giveGenre} key={series.id} />
    )
  })

  return(
    <div className="movie-window">
      <button className="nav-btn open-btn" onClick={toggleClass}>
        <i className="fas fa-bars"></i>
      </button>

      <MovieNav />

      <div className="banner">
        <h2>Unlimited Movies &#38; Series</h2>
        <p>Search and we Deliver</p>
      </div>

      <div className="allmovies-container">
        <div className="trending-container">
          <h2 className="individual-header">Trending Movies And Series</h2>
          <div className="trending">
            {isPendingTrending ? loading : TrendingMovies}
          </div>
        </div>

        <div className="popular-container">
          <h2 className="individual-header">Weekly Hot Searches</h2>
          <div className="popular">
            {isPendingPopular ? loading : PopularShows}
          </div>
        </div>

        <div className="newReleases-container">
          <h2 className="individual-header">New Releases</h2>
          <div className="newReleases">
            {isPendingNew ? loading : NewReleases}
          </div>
        </div>

        <div className="currentlyAiring-container">
          <h2 className="individual-header">Currently on Tv</h2>
          <div className="currently">
            {isPendingCurrent ? loading : CurrentlyAiring}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movies