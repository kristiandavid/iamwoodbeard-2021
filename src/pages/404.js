import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

import styles from './404.module.scss'

class ErrorIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div className={styles.error}>
          <Helmet title={siteTitle} />
          Oops!!!
        </div>
      </Layout>
    )
  }
}

export default ErrorIndex
