import * as React from "react"
import { graphql } from 'gatsby'
import feather from 'feather-icons'
import Seo from '../components/seo';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout'

import * as styles from "./index.module.scss";

// markup
const IndexPage = (props) => {
  const siteTitle = props.data.site.siteMetadata.title;
  const siteDesc = props.data.site.siteMetadata.description;
  const siteImg = props.data.site.siteMetadata.image;
  const ig = props.data.ig.edges;
  const homeContent = props.data.home.edges[0].node;
  
  return (
    <Layout location={props.location}>
      <Seo
        title={siteTitle}
        description={siteDesc}
        image={siteImg}
        titleTemplate="Hi! I'm Woodbeard! | Canadian Woodworker"
      />
      <div className={styles.pageContent}>
      <div className={styles.intro} dangerouslySetInnerHTML={{__html: homeContent.content.childMarkdownRemark.html}} />
        <div className={styles.insta}>
          <div>
            <div className={styles.instaIntro}>
              <span dangerouslySetInnerHTML={{__html: feather.icons['chevrons-down'].toSvg({'height': 15})}} /> Some Instagrams!
            </div>
            <a className={styles.instaGrid} href="https://www.instagram.com/iamwoodbeard" target="_blank" rel="noreferrer" aria-label="Go to Woodbeard's Instagram page" >
              {ig.map((obj) => {
                const image = getImage(obj.node.localFile)
                return (
                  <GatsbyImage
                    image={image}
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

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    site: site {
      siteMetadata {
        image
        title
        titleTemplate
        description
        siteUrl
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
    ig: allInstagramContent(limit: 14, filter: {localFile: {id: {ne: null}}, media_type: {ne: "VIDEO"}}, sort: {fields: timestamp, order: DESC}) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(width:600, height:600, quality:90)
            }
          }
        }
      }
    }
  }
`