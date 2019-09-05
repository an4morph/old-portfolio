import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import styles from './styles.module.css'

const Layout = (props) => {
  const [isOpen, setOpen] = useState(false)
  const toggleSidebar = () => setOpen(!isOpen)
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <i
          className="fa fa-bars"
          onClick={toggleSidebar}
        />
        <h1>Antonova Polina</h1>
      </header>
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout
