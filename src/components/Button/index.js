import React from 'react'
import { Link } from 'gatsby'
import styles from './button.module.css'


const Button = ({
  children, onClick, type, className, link, external,
}) => {
  const getClassName = () => (className ? styles[className] : styles.btn)
  const btn = (
    <button
      className={getClassName()}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  )
  if (link && external) return <a href={link} rel="noopener noreferrer" target="_blank">{btn}</a>
  if (link) return <Link to={link}>{btn}</Link>
  return btn
}


export default Button
