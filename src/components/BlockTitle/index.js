import React from 'react'
import PropTypes from 'prop-types'
import styles from './blockTitle.module.css'

const BlockTitle = ({ title, hover }) => {
  const getStyles = () => styles[hover ? 'blockTitleHovered' : 'blockTitle']
  return (
    <h3 className={getStyles()}>{title}</h3>
  )
}

BlockTitle.propTypes = {
  title: PropTypes.string,
  hover: PropTypes.bool,
}

export default BlockTitle
