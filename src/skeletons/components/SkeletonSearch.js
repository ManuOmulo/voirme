import React from 'react'
import Shimmer from "../Shimmer";
import SkeletonElement from "../SkeletonElement";

const SkeletonSearch = (props) => {
  const { theme } = props
  const themeClass = theme || "light"

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-search">
        <SkeletonElement type="search-poster" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <div className="skeleton-overview">
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
        <Shimmer />
      </div>
    </div>
  )
}

export default SkeletonSearch
