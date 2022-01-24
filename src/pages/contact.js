import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from '../components/seo';

import * as styles from '../templates/page.module.scss'

export default function Page({ data }) {
  const post = data.contact.edges[0].node
  const pageDesc = post.seoDescription;
  const siteTitle = data.site.siteMetadata.title;
  const siteImg = data.site.siteMetadata.image;
  const bmc = <a href="https://www.buymeacoffee.com/woodbeard" target="_blank" rel="noreferrer" className={styles.bmc}><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style={{height: 60, width: 217}} /></a>;
  console.log("post: ", post)

  return (
    <Layout className="contactPage">
    <Seo
        title={`Get in touch with Woodbeard | ${siteTitle}`}
        description={pageDesc}
        image={siteImg}
        titleTemplate="Get in touch with Woodbeard | Woodbeard"
      />
      <div className={styles.content}>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.content.childMarkdownRemark.html}} />
        {bmc}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query ContactQuery {
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
    contact: allContentfulPage(filter:{slug:{eq:"contact"}}) {
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