import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import {Planet, Ghost, Cat, Backpack, Chocolate, IceCream, Mug} from 'react-kawaii';

import styles from './404.module.scss'

const kawaii = [
  <Planet size={200} mood="ko" color="#fda7dc" />,
  <Ghost size={200} mood="shocked" color="#e0e4e8" />,
  <Cat size={320} mood="sad" color="#B83F3D" />,
  <Backpack size={320} mood="ko" color="#FFD882" />,
  <Chocolate size={320} mood="sad" color="#fc105c" />,
  <IceCream size={300} mood="shocked" color="#66A0CC" />,
  <Mug size={170} mood="sad" color="#A6E191" />

]
const randomKawaii = kawaii[Math.floor(Math.random()*kawaii.length)];

function ErrorIndex() {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')

  return (
    <Layout>
      <div className={styles.error}>
        <Helmet title={siteTitle} />
        <h1>What did you do?!</h1>
        {randomKawaii}
        <p>Looks like this page isn't here. Sorry about that.</p>
        <p><Link to="/">Click here to go back home</Link></p>
      </div>
    </Layout>
  )
}

export default ErrorIndex
