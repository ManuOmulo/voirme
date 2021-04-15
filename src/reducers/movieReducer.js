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
  REQUEST_CURRENTLY_AIRING_FAILED,

  REQUEST_TV_SERIES_GENRES_PENDING,
  REQUEST_TV_SERIES_GENRES_SUCCESS,
  REQUEST_TV_SERIES_GENRES_FAILED,

  REQUEST_MOVIE_GENRES_PENDING,
  REQUEST_MOVIE_GENRES_SUCCESS,
  REQUEST_MOVIE_GENRES_FAILED
} from "../constants/moviesConstants"

// ###################### All Movies #######################
const initialStateMovies = {
  isPending: false,
  allMovies: [],
  error: ""
}

export const requestAllMoviesReducer = (state=initialStateMovies, action={}) => {
  switch (action.type) {
    case REQUEST_ALL_MOVIES_PENDING:
      return { ...state, isPending: true }

    case REQUEST_ALL_MOVIES_SUCCESS:
      return { ...state, allMovies: action.payload, isPending: false }

    case REQUEST_ALL_MOVIES_FAILED:
      return { ...state, error: action.payload, isPending: false }

    default:
      return state
  }
}

// ################# Trending Daily #########################
const initialStateTrending = {
  isPending: false,
  trending: [],
  error: ""
}

export const requestTrendingReducer = (state=initialStateTrending, action={}) => {
  switch (action.type) {
    case REQUEST_TRENDING_PENDING:
      return { ...state, isPending: true }

    case REQUEST_TRENDING_SUCCESS:
      return { ...state, trending: action.payload, isPending: false }

    case REQUEST_TRENDING_FAILED:
      return { ...state, error: action.payload, isPending: false }

    default:
      return state
  }
}

// ################## Popular on TV ###########################
const initialStatePopularTv = {
  isPending: false,
  popularTv: [],
  error: ""
}

export const requestPopularReducer = (state=initialStatePopularTv, action={}) => {
  switch (action.type) {
    case REQUEST_POPULAR_PENDING:
      return { ...state, isPending: true }

    case REQUEST_POPULAR_SUCCESS:
      return { ...state, popularTv: action.payload, isPending: false }

    case REQUEST_POPULAR_FAILED:
      return { ...state, error: action.payload, isPending: false }

    default:
      return state
  }
}

// ################## New Releases ##########################
const initialStateNewReleases = {
  isPending: false,
  newReleases: [],
  error: ""
}

export const requestNewRealesesReducer = (state=initialStateNewReleases, action={}) => {
  switch (action.type) {
    case REQUEST_NEW_RELEASE_PENDING:
      return { ...state, isPending: true }

    case REQUEST_NEW_RELEASE_SUCCESS:
      return { ...state, newReleases: action.payload, isPending: false }

    case REQUEST_NEW_RELEASE_FAILED:
      return { ...state, error: action.payload, isPending: false }

    default:
      return state
  }
}

// ################# Currently Airing #######################
const initialStateCurrentlyAiring = {
  isPending: false,
  currentlyAiring: [],
  error: ""
}

export const requestCurrentlyAiringReducer = (state=initialStateCurrentlyAiring, action={}) => {
  switch (action.type) {
    case REQUEST_CURRENTLY_AIRING_PENDING:
      return { ...state, isPending: true }

    case REQUEST_CURRENTLY_AIRING_SUCCESS:
      return { ...state, currentlyAiring: action.payload, isPending: false }

    case REQUEST_CURRENTLY_AIRING_FAILED:
      return { ...state, error: action.payload, isPending: false }

    default:
      return state
  }
}

// ################### Movie Genres ##################
const initialStateMovieGenres = {
  isPending: false,
  movieGenres: [],
  error: ""
}

export const requestMovieGenresReducer = (state=initialStateMovieGenres, action={}) => {
  switch(action.type) {
    case REQUEST_MOVIE_GENRES_PENDING:
      return { ...state, isPending: true }

    case REQUEST_MOVIE_GENRES_SUCCESS:
      return { ...state, movieGenres: action.payload, isPending: false }

    case REQUEST_MOVIE_GENRES_FAILED:
      return { ...state, error: action.payload, isPending: false }

    default:
      return state
  }
}

// ################## Tv Series Genres ##################
const initialStateTvGenres = {
  isPending: false,
  tvGenres: [],
  error: ""
}

export const requestTvGenresReducer = (state=initialStateTvGenres, action={}) => {
  switch(action.type) {
    case REQUEST_TV_SERIES_GENRES_PENDING:
      return { ...state, isPending: true }

    case REQUEST_TV_SERIES_GENRES_SUCCESS:
      return { ...state, tvGenres: action.payload, isPending: false }

    case REQUEST_TV_SERIES_GENRES_FAILED:
      return { ...state, error: action.payload, isPending:false }

    default:
      return state
  }
}
