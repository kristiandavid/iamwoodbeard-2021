import React from 'react'

// images
import hero from "../assets/img/hero.jpg"
import heroLg from "../assets/img/hero_lg.jpg"

import * as styles from './hero.module.scss'

export default ({ data }) => (
  <div className={styles.hero}>

    <picture>
      <source srcset={hero} media="(max-width: 499px)" />
      <img src={heroLg} alt="Woodbeard" aria-hidden="true" />
    </picture>
  </div>
)
