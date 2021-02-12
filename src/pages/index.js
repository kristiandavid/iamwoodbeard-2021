import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Img from "gatsby-image"
import Layout from '../components/layout'

import styles from "./index.module.scss";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const ig = get(this, 'props.data.instagram.edges')
    const home = get(this, 'props.data.home.edges[0].node')
    return (
      <Layout location={this.props.location}>
        <div className={styles.pageContent}>
          <Helmet title={siteTitle} />
          <div className={styles.intro} dangerouslySetInnerHTML={{__html: home.content.childMarkdownRemark.html}} />
          <div className={styles.insta}>
            <div>
              <a className={styles.instaGrid} href="https://www.instagram.com/iamwoodbeard" target="_blank" rel="noreferrer" aria-label="Go to Woodbeard's Instagram" >
                {ig.map((obj, index) => {
                  const imgsrc = obj.node.localImage ? [obj.node.localImage.childImageSharp.fluid] : [obj.node.media_url];
                  return (
                    <Img
                      fluid={imgsrc}
                      alt="Instagram Image"
                      className={styles.instaImg}
                      key={obj.node.id} />
                  )
                })}
              </a>
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
    site: site {
      id
      siteMetadata {
        title
        description
        author
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
    instagram: allInstagramContent(limit: 14, filter: {localImage: {id: {ne: null}}}) {
      edges {
        node {
          id
          localImage {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 600, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          permalink
          caption
          media_url
        }
      }
    }
  }
`
