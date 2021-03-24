import { CHANGE_MOVIE_SEARCH_FIELD } from "../constants/searchFieldConstants"

import {
  REQUEST_ALL_MOVIES_PENDING,
  REQUEST_ALL_MOVIES_SUCCESS,
  REQUEST_ALL_MOVIES_FAILED,

  REQUEST_TRENDING_PENDING,
  REQUEST_TRENDING_SUCCESS,
  REQUEST_TRENDING_FAILED,

  REQUEST_POPULAR_PENDING,
  REQUEST_POPULAR_SUCCESS,
  REQUEST_POPULAR_FAILED,

  REQUEST_NEW_RELEASE_PENDING,
  REQUEST_NEW_RELEASE_SUCCESS,
  REQUEST_NEW_RELEASE_FAILED,

  REQUEST_CURRENTLY_AIRING_PENDING,
  REQUEST_CURRENTLY_AIRING_SUCCESS,
  REQUEST_CURRENTLY_AIRING_FAILED
} from "../constants/moviesConstants"

const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4ea1a39dbbbf151bd11a686a7c6ee604&page=1`

const API_TRENDING_DAY = `https://api.themoviedb.org/3/trending/all/day?api_key=4ea1a39dbbbf151bd11a686a7c6ee604`

const POPULAR_ON_TV = `https://api.themoviedb.org/3/tv/popular?api_key=4ea1a39dbbbf151bd11a686a7c6ee604&language=en-US&page=1`

const UPCOMING_RELEASES_MOVIES = `https://api.themoviedb.org/3/movie/upcoming?api_key=4ea1a39dbbbf151bd11a686a7c6ee604&language=en-US&page=1`

const ON_AIR_TV_SERIES = `https://api.themoviedb.org/3/tv/on_the_air?api_key=4ea1a39dbbbf151bd11a686a7c6ee604&language=en-US&page=1`


//############### All Movies ################
export const setSearchFieldMovies = (text) => ({
  type: CHANGE_MOVIE_SEARCH_FIELD,
  payload: text,
})

export const requestAllMovies = () => dispatch => {
  dispatch({ type: REQUEST_ALL_MOVIES_PENDING })
  fetch(API_URL)
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_ALL_MOVIES_SUCCESS, payload: data.results }))
    .catch(error => dispatch({ type: REQUEST_ALL_MOVIES_FAILED, payload: error }))
}

// ############# Trending ###################
export const requestTrendingDaily = () => dispatch => {
  dispatch({ type: REQUEST_TRENDING_PENDING })
  fetch(API_TRENDING_DAY)
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_TRENDING_SUCCESS, payload: data.results }))
    .catch(error => dispatch({ type: REQUEST_TRENDING_FAILED, payload: error }))
}

// ############## Popular ####################
export const requestPopular = () => dispatch => {
  dispatch({ type: REQUEST_POPULAR_PENDING })
  fetch(POPULAR_ON_TV)
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_POPULAR_SUCCESS, payload: data.results }))
    .catch(error => dispatch({ type: REQUEST_POPULAR_FAILED, payload: error }))
}

// ############## New Realeases ###############
export const requestNewRealeses = () => dispatch => {
  dispatch({ type: REQUEST_NEW_RELEASE_PENDING })
  fetch(UPCOMING_RELEASES_MOVIES)
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_NEW_RELEASE_SUCCESS, payload: data.results }))
    .catch(error => dispatch({ type: REQUEST_NEW_RELEASE_FAILED, payload: error }))
}

// ############## Currently Airing ###############
export const requestCurrentlyAiring = () => dispatch => {
  dispatch({ type: REQUEST_CURRENTLY_AIRING_PENDING })
  fetch(ON_AIR_TV_SERIES)
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_CURRENTLY_AIRING_SUCCESS, payload: data.results }))
    .catch(error => dispatch({ type: REQUEST_CURRENTLY_AIRING_FAILED, payload: error }))
}