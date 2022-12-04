import clsx from 'clsx'
import React, { useState } from 'react'
import {BsCheckCircle} from 'react-icons/bs'
import { Scrollama, Step } from 'react-scrollama'
import CERT from '../../images/cert.pdf'

import styles from './Skills.module.scss'

const Skills = ({setActiveNav}) => {

   const [currentStepIndex, setCurrentStepIndex] = useState(null);

   // This callback fires when a Step hits the offset threshold. It receives the
   // data prop of the step, which in this demo stores the index of the step.
   const onStepEnter = ({ data }) => {
     setCurrentStepIndex(data);
     setActiveNav(data);
     console.log('mee scrollama', currentStepIndex);
   };

   const data = [
      {
         id: 1,
         technology: 'React',
         level: 'Intermidiate',
      },
      {
         id: 2,
         technology: 'JavaScript ES6',
         level: 'Intermidiate',
      },
      {
         id: 3,
         technology: 'HTML',
         level: 'Intermidiate',
      },
      {
         id: 4,
         technology: 'SCSS',
         level: 'Intermidiate',
      },
      {
         id: 5,
         technology: 'Git',
         level: 'Intermidiate',
      },
      {
         id: 6,
         technology: 'RWD',
         level: 'Intermidiate',
      },
      {
         id: 7,
         technology: 'AJAX',
         level: 'Beginner',
      },
      {
         id: 8,
         technology: 'Redux',
         level: 'Beginner',
      },
   ]
   return (

      <Scrollama onStepEnter={onStepEnter} offset={0.5}>
         <Step data={'#skills'}>
            <section id='skills'>

            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className={clsx('container', styles.container)}>
               <div className={styles.card}>

                  {
                     data.map(({id, technology,level}) => {
                        return (
                           <article key={id} className={styles.details}>
                              <BsCheckCircle className={styles.icon}/>
                              <div>
                                 <h4>{technology}</h4>
                                 {/* <small>{level}</small> */}
                              </div>
                           </article>
                        )
                     })
                  }

               </div>
               <a href={CERT} download className='btn btn-primary'>See My Certificate</a>
            </div>

            </section>
         </Step>
      </Scrollama>
      
   )
}

export default Skills