import React from "react"

import { useDispatch, useSelector } from "react-redux"
import { requestAllMovies, setSearchFieldMovies } from "../../actions/moviesAction"

import SearchFieldComponent from "./searchFieldComponent"

const Search = () => {
  const searchField = useSelector(state => state.searchMoviesReducer.searchFieldMovies)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.preventDefault()
    dispatch(setSearchFieldMovies(e.target.value))
  }

  const onSearchSubmit = (e) => {
    e.preventDefault()
    dispatch(requestAllMovies(`https://api.themoviedb.org/3/search/multi?api_key=4ea1a39dbbbf151bd11a686a7c6ee604&language=en-US&page=1&query=${searchField}`))
  }

  const searchMovies = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      dispatch(requestAllMovies(`https://api.themoviedb.org/3/search/multi?api_key=4ea1a39dbbbf151bd11a686a7c6ee604&language=en-US&page=1&query=${searchField}`))
    }
  }

  return (
    <div>
      <SearchFieldComponent
        onSearchSubmit={onSearchSubmit}
        handleChange={handleChange}
        searchMovies={searchMovies}
      />
    </div>
  )
}

export default Search