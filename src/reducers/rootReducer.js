
import { combineReducers } from "redux"

// ################# movies ####################
import { searchMoviesReducer } from "./searchMoviesReducer"
import { navbarReducer } from "./navbarReducer"
import {
  requestAllMoviesReducer,
  requestTrendingReducer,
  requestPopularReducer,
  requestNewRealesesReducer,
  requestCurrentlyAiringReducer,
  requestMovieGenresReducer,
  requestTvGenresReducer
} from "./movieReducer"

const rootReducer = combineReducers({
  searchMoviesReducer,
  navbarReducer,
  requestAllMoviesReducer,
  requestTrendingReducer,
  requestPopularReducer,
  requestNewRealesesReducer,
  requestCurrentlyAiringReducer,
  requestTvGenresReducer,
  requestMovieGenresReducer
})

export default rootReducer