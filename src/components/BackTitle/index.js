import React from 'react'
import { Link } from 'gatsby'
import styles from './backTitle.module.css'

const BackTitle = ({ text, link }) => (
  <Link to={link} className={styles.backTitle}>
    <i className="fa fa-arrow-left" />
    <span className={styles.backTitleText}>{text}</span>
  </Link>
)


BackTitle.defaultProps = {
  text: 'Go back',
}
export default BackTitle
