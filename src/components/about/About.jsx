import clsx from 'clsx';
import React, { useState } from 'react'
import ME2 from '../../images/skis.png'
import ME from '../../images/windsurfing.png'
import {MdOutlineSurfing} from 'react-icons/md'
import {HiOutlineCode, HiOutlineLightBulb} from 'react-icons/hi'
import { Scrollama, Step } from 'react-scrollama';

import styles from './About.module.scss';



const About = ({setActiveNav}) => {

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
         <Step data={'#about'}>
            <section id='about'>
               <h5>Get To Know</h5>
               <h2>ABout Me</h2>

               <div className={clsx('container', styles.container)}>
                  <div className={styles.me}>
                     <div className={styles.me__image}>
                        <img className={styles.first} src={ME} alt="me-about" />
                        <img className={styles.second} src={ME2} alt="me-about" />
                     </div>
                  </div>
                  <div className={styles.content}>
                     <div className={styles.cards}>
                        <article className={styles.card}>
                           <MdOutlineSurfing className={styles.icon} />
                           <h5>Other jobs</h5>
                           <small>2 500+ hours of teaching windsurfing and skiing</small>
                        </article>

                        <article className={styles.card}>
                           <HiOutlineCode className={styles.icon} />
                           <h5>Coding</h5>
                           <small>Frontend React Developer bootcamp in Kodilla</small>
                        </article>

                        <article className={clsx(styles.card, styles.wide)}>
                           <HiOutlineLightBulb className={styles.icon} />
                           <h5>Math fan</h5>
                           <small>Love to solve logic tasks</small>
                        </article>
                     </div>
                     <p>
                        I am a bright and ambitious person. I can think analytically, which helped me fulfil myself as a sports instructor. I work in React but I also explore my knowledge in pure JavaScript. Interested in
                        computers since a child. Began programming few years ago as a hobby and started a front-end bootcamp in September 2021. Coding gives me the prospect of continuous development and makes me very excited and open to new experiences.
                     </p>
                     <a href="#contact" className='btn btn-primary'>Let's talk</a>
                  </div>
               </div>
            </section>
         </Step>
      </Scrollama>
      
   )
}

export default About;