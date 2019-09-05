import React from 'react'
import styles from './timeline.module.css'

const Timeline = ({ items, className }) => (
  <div className={className}>
    {
      items.map(item => (
        <div key={item.id} className={styles.timelineItem}>

          <div className={styles.leftPart}>
            <div className={styles.date}>{item.date}</div>
            <div className={styles.company}>{item.company}</div>
          </div>

          <div className={styles.divider}>
            <div className={styles.line} />
            <div className={styles.circle}><i className="fa fa-clock-o" /></div>
          </div>

          <div className={styles.rightPart}>
            <div className={styles.position}>{item.position}</div>
            <div className={styles.description}>{item.description}</div>
          </div>

        </div>
      ))
    }
  </div>
)

export default Timeline
