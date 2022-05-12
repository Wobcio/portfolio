import React, { useRef, useState } from 'react';
import clsx from 'clsx'
import { BsMailbox } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import emailjs from '@emailjs/browser'

import styles from './Contact.module.scss'
import { Scrollama, Step } from 'react-scrollama';

const Contact = ({ setActiveNav }) => {

   const [currentStepIndex, setCurrentStepIndex] = useState(null);

   // This callback fires when a Step hits the offset threshold. It receives the
   // data prop of the step, which in this demo stores the index of the step.
   const onStepEnter = ({ data }) => {
      setCurrentStepIndex(data);
      setActiveNav(data);
      console.log('mee scrollama', currentStepIndex);
   };

   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_rdiw8mf', 'template_ft5zu5f', form.current, 'TinNQYB4RFH7Dw_Yw')
         .then(() => {
            e.target.reset();
         });
   };

   return (
      <Scrollama onStepEnter={onStepEnter} offset={0.5}>
         <Step data={'#contact'}>
            <section id='contact'>
               <h5>Get In Touch</h5>
               <h2>Contact Me</h2>

               <div className={clsx('container', styles.container)}>
                  <div className={styles.options}>

                     <article className={styles.option}>
                        <BsMailbox className={styles.icon} />
                        <h4>Email</h4>
                        <h5>igor.batko.batko@gmail.com</h5>
                        <a href='mailto:igor.batko.batko@gmail.com' target='_blank' rel='noreferrer'>Send a message</a>
                     </article>

                     <article className={styles.option}>
                        <RiMessengerLine className={styles.icon} />
                        <h4>Messenger</h4>
                        <h5>Igor Batko</h5>
                        <a href='https://m.me/igor.batko.7' target='_blank' rel='noreferrer'>Send a message</a>
                     </article>

                     <article className={styles.option}>
                        <AiOutlineWhatsApp className={styles.icon} />
                        <h4>WhatsApp</h4>
                        <h5>+48 503 129 296</h5>
                        <a href='https://api.whatsapp.com/send?phone=+48503129296' target='_blank' rel='noreferrer'>Send a message</a>
                     </article>

                  </div>
                  <form className={styles.form} ref={form} onSubmit={sendEmail}>
                     <input type="text" name='name' placeholder='Your Full Name' required />
                     <input type="email" name='email' placeholder='Your Email' required />
                     <textarea type="message" name='message' rows='7' placeholder='Your Message' required ></textarea>
                     <button type='submit' className='btn btn-primary'>Send Message</button>
                  </form>
               </div>
            </section>
         </Step>
      </Scrollama>

   )
}

export default Contact