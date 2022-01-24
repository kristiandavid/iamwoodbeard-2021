import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo';

import * as styles from '../templates/page.module.scss'

export default function Page({ data }) {
  const post = data.about.edges[0].node
  const pageDesc = post.seoDescription;
  const siteTitle = data.site.siteMetadata.title;
  const siteImg = data.site.siteMetadata.image;

  return (
    <Layout>
    <Seo
        title={`About Woodbeard | ${siteTitle}`}
        description={pageDesc}
        image={siteImg}
        titleTemplate="Hi! I'm Woodbeard! | Custom Woodworking"
      />
      <div className={styles.content}>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.content.childMarkdownRemark.html}} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query PageQuery {
    site: site {
      siteMetadata {
        image
        title
        titleTemplate
        siteUrl
        author
        twitterUsername
      }
    }
    about: allContentfulPage(filter:{slug:{eq:"about"}}) {
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