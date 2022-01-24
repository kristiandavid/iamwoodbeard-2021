// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import Seo from '../components/seo';

// import * as styles from './page.module.scss'

// const bmc = <a href="https://www.buymeacoffee.com/woodbeard" target="_blank" rel="noreferrer" className={styles.bmc}><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style={{height: 60, width: 217}} /></a>;

// export default function Page({ data, props }) {
//   const post = data.contentfulPage
//   const pageDesc = post.seoDescription;
//   const siteImg = props.data.site.siteMetadata.image
//   console.log("pageDesc: ", pageDesc);

//   return (
//     <Layout>
//     <Seo
//       title={`${post.title} | Woodbeard`}
//       description={pageDesc}
//       image={siteImg}
//       titleTemplate={`${post.title} | Woodbeard`}
//     />
//       <div className={styles.content}>
//         <h1>{post.title}</h1>
//         <div dangerouslySetInnerHTML={{__html: post.content.content}} />
//         {post.slug === "contact" || post.slug === "products" ? bmc : null}
//       </div>
//     </Layout>
//   )
// }
// export const query = graphql`
//   query($slug: String!) {
//     site: site {
//       siteMetadata {
//         image
//         title
//         titleTemplate
//         siteUrl
//         author
//         twitterUsername
//       }
//     }
//     contentfulPage(slug: { eq: $slug }) {
//       title
//       slug
//       seoDescription
//       content {
//         content
//       }
//     }
//   }
// `