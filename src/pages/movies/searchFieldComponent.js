import React from "react"

const SearchFieldComponent = (props) => {

  const { onSearchSubmit, handleChange, searchMovies } = props
  return (
    <div className="searchbar">
      <input
        type="search"
        name="searchItem"
        placeholder="search movie or tv series"
        onChange= {handleChange}
        onKeyUp={searchMovies}
      />
      <button className="search-button" onClick={onSearchSubmit}>
        Search
      </button>
    </div>
  )
}

export default SearchFieldComponent