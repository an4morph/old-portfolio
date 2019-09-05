import React from 'react'
import styles from './skills.module.css'

const Skills = ({ items, className }) => (
  <div className={className}>
    {
      items.map(item => (
        <div key={item.id} className={styles.skillsItem}>

          <div className={styles.top}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.percent}>{`${item.percent}%`}</div>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.percentage} style={{ width: `${item.percent}%` }} />
          </div>

        </div>
      ))
    }
  </div>
)

export default Skills
