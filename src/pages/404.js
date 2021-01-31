import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

class ErrorIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          Oops!!!
        </div>
      </Layout>
    )
  }
}

export default ErrorIndex
