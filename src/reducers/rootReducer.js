
import { combineReducers } from "redux"

// ################# movies ####################
import { searchMoviesReducer } from "../reducers/searchMoviesReducer"
import {
  requestAllMoviesReducer,
  requestTrendingReducer,
  requestPopularReducer,
  requestNewRealesesReducer,
  requestCurrentlyAiringReducer
} from "../reducers/movieReducer"

const rootReducer = combineReducers({
  searchMoviesReducer,
  requestAllMoviesReducer,
  requestTrendingReducer,
  requestPopularReducer,
  requestNewRealesesReducer,
  requestCurrentlyAiringReducer
})

export default rootReducer