import React, { useState } from 'react'
import CTA from './CTA'
import ME from '../../images/me5.png'
import clsx from 'clsx';

import styles from './Header.module.scss'
import HeaderSocials from './HeaderSocials'
import { Scrollama, Step } from 'react-scrollama';

const Header = ({ setActiveNav }) => {

   const [currentStepIndex, setCurrentStepIndex] = useState(null);

   // This callback fires when a Step hits the offset threshold. It receives the
   // data prop of the step, which in this demo stores the index of the step.
   const onStepEnter = ({ data }) => {
      setCurrentStepIndex(data);
      setActiveNav(data);
      console.log('mee scrollama', currentStepIndex);
   };

   return (
      <Scrollama onStepEnter={onStepEnter} offset={0.5}>
         <Step data={'#home'}>
            <header id='home'>
               <div className={clsx(styles.container, 'container')}>
                  <h5>Hi, I'm</h5>
                  <h1>Wobcio</h1>
                  <h5 className='text-light'>Frontend Developer</h5>

                  <CTA />
                  <HeaderSocials />

                  <div className={styles.me}>
                     <img src={ME} alt="me" />
                  </div>

                  <a href="#contact" className={styles.scroll__down}>Scroll Down</a>
               </div>
            </header>
         </Step>
      </Scrollama>


   )
}

export default Header