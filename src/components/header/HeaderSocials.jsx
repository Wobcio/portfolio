import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


import styles from './Header.module.scss'

const HeaderSocials = () => {
  return (
    <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/igor-batko-680470238/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/Wobcio" target='_blank' rel='noreferrer'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials