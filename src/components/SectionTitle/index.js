import React from 'react'
import styles from './sectionTitle.module.css'

const SectionTitle = ({ title, description }) => (
  <div className={styles.sectionTitle}>
    <h2>{title}</h2>
    {description && <h5>{description}</h5>}
  </div>
)

export default SectionTitle
