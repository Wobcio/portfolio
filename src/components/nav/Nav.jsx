import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineUser, AiOutlineDesktop, AiOutlineMessage, AiOutlinePicture} from 'react-icons/ai'


import styles from './Nav.module.scss'

const Nav = ({setActiveNav, activeNav}) => {

  

  const handleClick = e => {
    setActiveNav(e.currentTarget.getAttribute("href"));
  }
  return (
      <div className={styles.nav}>
         <a href="#home" className={activeNav === '#home' ? styles.active : ''} onClick={handleClick}><AiOutlineHome /></a>
         <a href="#about" className={activeNav === '#about' ? styles.active : ''} onClick={handleClick}><AiOutlineUser /></a>
         <a href="#skills" className={activeNav === '#skills' ? styles.active : ''} onClick={handleClick}><AiOutlineDesktop /></a>
         <a href="#portfolio" className={activeNav === '#portfolio' ? styles.active : ''} onClick={handleClick}><AiOutlinePicture /></a>
         <a href="#contact" className={activeNav === '#contact' ? styles.active : ''} onClick={handleClick}><AiOutlineMessage /></a>
      </div>
  )
}

export default Nav