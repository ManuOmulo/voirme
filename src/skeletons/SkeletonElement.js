import React from 'react'
import "./skeleton.scss"

const SkeletonElement = (props) => {
  const { type } = props
  const classes = `skeleton ${type}`

  return (
    <div className={classes}></div>
  )
}

export default SkeletonElement
