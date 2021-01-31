import React from 'react'
import './base.scss'
import Container from './container'
import Navigation from './navigation'

import styles from './layout.module.scss'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Navigation />
        <div className={styles.bodyContent}>{children}</div>
      </Container>
    )
  }
}

export default Template
