import React from 'react'
import { Link } from 'gatsby'
import BlockTitle from '../BlockTitle'
import styles from './portfolioItem.module.css'

const PortfolioItem = ({
  id, alt, imgUrl, description, title, link
}) => (
  <div className={styles.wrapper}>
    <Link to={`/portfolio/${link}`}>
      <BlockTitle title={title} hover />
    </Link>
    <div className={styles['portfolioItem']}>
      <Link to={`/portfolio/${link}`} className={styles.image}>
        <img className={styles[`itemImage${id}`]} src={imgUrl} alt={alt} />
      </Link>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  </div>
)

export default PortfolioItem
