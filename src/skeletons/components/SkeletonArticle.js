import React from 'react'
import Shimmer from "../Shimmer";
import SkeletonElement from "../SkeletonElement";

const SkeletonArticle = (props) => {
  const { theme } = props
  const themeClass = theme || "light"

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonArticle
