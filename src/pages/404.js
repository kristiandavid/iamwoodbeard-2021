import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import {Ghost} from 'react-kawaii';

import * as styles from './404.module.scss'

function ErrorIndex() {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')

  return (
    <Layout>
      <div className={styles.error}>
        <Helmet title={siteTitle} />
        <h1>What did you do?!</h1>
        <Ghost size={200} mood="shocked" color="#e0e4e8" />
        <p>Looks like this page isn't here. Sorry about that.</p>
        <p><Link to="/">Click here to go back home</Link></p>
      </div>
    </Layout>
  )
}

export default ErrorIndex
