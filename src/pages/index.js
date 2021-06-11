import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/seo';
import Layout from '../components/layout'

import styles from "./index.module.scss";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDesc = get(this, 'props.data.site.siteMetadata.description')
    const siteImg = get(this, 'props.data.site.siteMetadata.image')
    const home = get(this, 'props.data.home.edges[0].node')
    return (
      <Layout location={this.props.location}>
        <SEO
          title={siteTitle}
          description={siteDesc}
          image={siteImg}
          titleTemplate="Woodbeard | Custom Woodworking"
        />
        <div className={styles.pageContent}>
          <div className={styles.intro} dangerouslySetInnerHTML={{__html: home.content.childMarkdownRemark.html}} />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site: site {
      siteMetadata {
        image
        title
        titleTemplate
        description
        url
        author
        twitterUsername
      }
    }
    home: allContentfulPage(filter:{slug:{eq:"home"}}) {
  		edges {
  			node {
  				title
          seoDescription
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
