import { CHANGE_MOVIE_SEARCH_FIELD } from "../constants/searchFieldConstants"

const initialStateSearch = {
  searchFieldMovies: ""
}

export const searchMoviesReducer = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_MOVIE_SEARCH_FIELD:
      return { ...state, searchFieldMovies: action.payload }

    default:
      return state
  }
}