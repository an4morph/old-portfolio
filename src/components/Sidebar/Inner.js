import React from 'react'
import { Link } from 'gatsby'
import styles from './inner.module.css'
import Button from '../Button'
import Avatar from '../../images/avatar.jpg'

const Inner = ({ className }) => {
  const lis = [
    { id: 1, text: 'About', link: '/' },
    { id: 2, text: 'Resume', link: '/resume' },
    { id: 3, text: 'Portfolio', link: '/portfolio' },
    { id: 4, text: 'Contact', link: '/contact' },
  ]

  return (
    <div className={className}>
      <div className={styles.head}>
        <div className={styles.avatar}>
          <img src={Avatar} alt="avatar" />
        </div>
        <h1 className={styles.title}>Antonova Polina</h1>
      </div>

      <ul className={styles.menu}>
        {
          lis.map(li => (
            <li key={li.id}>
              <Link
                to={li.link}
                className={styles.sidebarLink}
                activeClassName={styles.sidebarLinkActive}
              >
                {li.text}
              </Link>
            </li>
          ))
        }
      </ul>

      <div className={styles.social}>
        <Button
          link="https://www.linkedin.com/in/polina-antonova-b08436161/"
          external
          className="socialBtn"
        >
          <i className="fa fa-linkedin" />
        </Button>
        <Button
          link="https://github.com/an4morph/Resume"
          external
          className="socialBtn"
        >
          <i className="fa fa-github" />
        </Button>
        <Button
          link="https://t.me/an4morph"
          external
          className="socialBtn"
        >
          <i className="fa fa-telegram" />
        </Button>
      </div>
    </div>
  )
}

export default Inner
