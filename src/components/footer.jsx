import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      &copy;{new Date().getFullYear()} Woodbeard
      <div className="social"></div>
    </div>
  )
}
