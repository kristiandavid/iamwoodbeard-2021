import React from 'react'
import feather from 'feather-icons'
import Bmc from '../assets/icons/coffeeLogo.svg'
import Linktree from '../assets/icons/linktree.svg'
// import Etsy from '../assets/icons/etsy.svg'

import * as styles from './footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      &copy;{new Date().getFullYear()} Woodbeard
      <div className={styles.social}>
        <a href="https://www.instagram.com/iamwoodbeard" target="_blank" rel="noreferrer" aria-label="Instagram link"><div dangerouslySetInnerHTML={{__html: feather.icons.instagram.toSvg()}} /></a>
        <a href="https://www.youtube.com/channel/UCgHTiaMci4Dl-SDPDasvToA" target="_blank" rel="noreferrer" aria-label="YouTube link"><div dangerouslySetInnerHTML={{__html: feather.icons.youtube.toSvg()}} /></a>
        <a href="https://buymeacoffee.com/woodbeard" target="_blank" rel="noreferrer" aria-label="Buy me a coffee link"><Bmc /></a>
        <a href="https://linktr.ee/woodbeard" target="_blank" rel="noreferrer" aria-label="Linktree link"><Linktree /></a>
        {/* <a href="https://www.etsy.com/ca/shop/WoodbeardShop" target="_blank" rel="noreferrer" aria-label="Etsy link"><Etsy /></a> */}
      </div>
    </div>
  )
}
