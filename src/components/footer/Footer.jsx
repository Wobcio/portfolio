import React from 'react'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className={styles.logo}>Wobcio</a>

      <ul className={styles.permalinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className={styles.socials}>
        <a href="https://www.facebook.com/igor.batko.7" target='_blank' rel='noreferrer'><AiOutlineFacebook /></a>
        <a href="https://www.instagram.com/wobcio/?hl=pl" target='_blank' rel='noreferrer'><AiOutlineInstagram /></a>
        <a href="https://www.linkedin.com/in/igor-batko-680470238/" target='_blank' rel='noreferrer'><AiOutlineLinkedin /></a>
      </div>

      <div className={styles.copyright}>
        <small>&copy; Wobcio. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer