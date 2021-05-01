import React from 'react'
import Shimmer from "../Shimmer";
import SkeletonElement from "../SkeletonElement";

const SkeletonMovies = (props) => {
  const { theme } = props
  const themeClass = theme || "light"

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-movie">
        <SkeletonElement type="poster" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <Shimmer />
      </div>
    </div>
  )
}

export default SkeletonMovies
