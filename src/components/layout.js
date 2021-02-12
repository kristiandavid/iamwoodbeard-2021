import React from 'react'
import './base.scss'
import Container from './container'
import Navigation from './navigation'
import Footer from './footer'

import styles from './layout.module.scss'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Navigation />
        <div className={styles.bodyContent}>{children}</div>
        <Footer />
      </Container>
    )
  }
}

export default Template
