import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
// import Hero from '../components/hero'
import Layout from '../components/layout'
// import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const ig = get(this, 'props.data.instagram.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <div className="ig">
              {ig.map(({ node }) => {
                return (
                  <div key={node.id}>
                    <p>{node.caption}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    instagram: allInstagramContent(limit: 10) {
      edges {
        node {
          caption
          media_type
          media_url
          children {
            id
          }
        }
      }
    }
  }
`
