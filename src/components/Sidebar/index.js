import React from 'react'
import Inner from './Inner'
import styles from './sidebar.module.css'

const Sidebar = ({ toggleSidebar, isOpen }) => (
  <React.Fragment>
    <Inner className={styles.desktop} />

    <div
      onClick={toggleSidebar}
      className={isOpen ? styles['overlayOpen'] : styles['overlayClosed']}
    />
    <Inner
      className={isOpen ? styles['mobileOpen'] : styles['mobileClosed']}
    />
  </React.Fragment>
)


export default Sidebar
