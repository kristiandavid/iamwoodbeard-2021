import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import * as styles from './navigation.module.scss'

export default function Nav() {
  return (
    <StaticQuery
      query={graphql`
        query Nav {
          allContentfulAsset(filter: {title: {eq: "logo"}}) {
            edges {
              node {
                id
                file {
                  url
                  fileName
                  contentType
                }
                title
              }
            }
          }
        }
      `}
      render={data => (
        <div className={styles.header}>
          <div className={styles.headerGrid}>
            <div className={styles.logo}>
              <Link to="/"><img src={data.allContentfulAsset.edges[0].node.file.url} alt="Woodbeard logo" /></Link>
            </div>
            <nav role="navigation">
              <ul className={styles.navigation}>
                <li className={styles.navigationItem}>
                  <Link to="/">Home</Link>
                </li>
                <li className={styles.navigationItem}>
                  <Link to="/about/">About</Link>
                </li>
                <li className={styles.navigationItem}>
                  <Link to="/products/">Products</Link>
                </li>
                <li className={styles.navigationItem}>
                  <Link to="/contact/">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    />
  )
}
