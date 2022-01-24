import React from 'react'
import './base.scss'
import Navigation from './navigation'
import Footer from './footer'

import * as styles from './layout.module.scss'

const Template = (props) => {
  const { children } = props

  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.bodyContent}>{children}</div>
      <Footer />
    </div>
  )
}

export default Template
