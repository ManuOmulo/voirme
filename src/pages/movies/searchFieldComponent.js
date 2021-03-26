import React from "react"

const SearchFieldComponent = (props) => {

  const { onSearchSubmit, handleChange, searchMovies } = props
  return (
    <div>
      <input
        type="search"
        name="searchItem"
        placeholder="search movie or tv series"
        onChange= {handleChange}
        onKeyUp={searchMovies}
      />
      <button onClick={onSearchSubmit}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  )
}

export default SearchFieldComponent