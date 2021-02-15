import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import get from 'lodash/get'
import SEO from '../components/seo';

import styles from './page.module.scss'

const bmc = <a href="https://www.buymeacoffee.com/woodbeard" target="_blank" rel="noreferrer" className={styles.bmc}><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style={{height: 60, width: 217}} /></a>;

export default function BlogPost({ data }) {
  const post = data.contentfulPage
  const pageDesc = post.seoDescription;
  const siteImg = get(this, 'props.data.site.siteMetadata.image')
  console.log("pageDesc: ", pageDesc);

  return (
    <Layout>
    <SEO
      title={`${post.title} | Woodbeard`}
      description={pageDesc}
      image={siteImg}
      titleTemplate={`${post.title} | Woodbeard`}
    />
      <div className={styles.content}>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.content.childMarkdownRemark.html}} />
        {post.slug === "contact" || post.slug === "products" ? bmc : null}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    site: site {
      siteMetadata {
        image
        title
        titleTemplate
        url
        author
        twitterUsername
      }
    }
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      seoDescription
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
