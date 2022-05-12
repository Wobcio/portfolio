import clsx from 'clsx'
import React, { useState } from 'react'
import { Scrollama, Step } from 'react-scrollama'
import IMG1 from '../../images/portfolio1.png'
import IMG2 from '../../images/portfolio2.png'
import IMG3 from '../../images/portfolio3.png'
import IMG4 from '../../images/portfolio4.png'

import styles from './Portfolio.module.scss'


const Portfolio = ({ setActiveNav }) => {

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
         img: IMG1,
         title: 'Pizzeria',
         github: 'https://github.com/Wobcio/project-pizzeria',
         demo: 'https://pizzeria-wobcio.herokuapp.com/'
      },
      {
         id: 2,
         img: IMG2,
         title: 'To Do List',
         github: 'https://github.com/Wobcio/react-todo',
         demo: 'https://wobcio-to-do-list.herokuapp.com/'
      },
      {
         id: 3,
         img: IMG3,
         title: 'React Shop',
         github: 'https://github.com/Wobcio/react-shop',
         demo: 'https://wobcio-react-shop.herokuapp.com/'
      },
      {
         id: 4,
         img: IMG4,
         title: 'Waiters App',
         github: 'https://github.com/Wobcio/waiters.app',
         demo: 'https://waiters-app-wobcio.herokuapp.com/'
      },
   ]
   return (
      <Scrollama onStepEnter={onStepEnter} offset={0.5}>
         <Step data={'#portfolio'}>
            <section id='portfolio'>
               <h5>My Recent Work</h5>
               <h2>Portfolio</h2>

               <div className={clsx('container', styles.container)}>
                  {
                     data.map(({ id, img, title, github, demo }) => {
                        return (
                           <article key={id} className={styles.item}>
                              <div className={styles.item__image}>
                                 <img src={img} alt={title} />
                              </div>
                              <h3>{title}</h3>
                              <div className={styles.item__details}>
                                 <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                                 <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                              </div>
                           </article>
                        )
                     })
                  }
               </div>
            </section>
         </Step>
      </Scrollama>

   )
}

export default Portfolio