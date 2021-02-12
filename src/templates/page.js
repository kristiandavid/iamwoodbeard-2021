import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import styles from './page.module.scss'

export default function BlogPost({ data }) {
  const post = data.contentfulPage
  return (
    <Layout>
      <div className={styles.content}>
        <h1>{post.title}</h1>
        <div>{post.content.raw}</div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
