import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import styles from './page.module.scss'

const bmc = <a href="https://www.buymeacoffee.com/woodbeard" target="_blank" rel="noreferrer" className={styles.bmc}><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style={{height: 60, width: 217}} /></a>;

export default function BlogPost({ data }) {
  const post = data.contentfulPage
  return (
    <Layout>
      <div className={styles.content}>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.content.childMarkdownRemark.html}} />
        {post.slug === "contact" ? bmc : null}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
