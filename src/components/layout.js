import React from 'react'
import './base.scss'
import Navigation from './navigation'
import Footer from './footer'

import styles from './layout.module.scss'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className={styles.container}>
        <Navigation />
        <div className={styles.bodyContent}>{children}</div>
        <Footer />
      </div>
    )
  }
}

export default Template
