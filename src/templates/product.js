import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default function BlogPost({ data }) {
  const post = data.contentfulProduct
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      title
    }
  }
`
