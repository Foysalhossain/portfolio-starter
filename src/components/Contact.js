import React, { useRef } from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// emailjs
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  console.log(form);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_sl8oyvn',
      'template_7692bsp',
      form.current,
      'wqh3AXfhBeGDyo-F4')
      .then((result) => {
        console.log(result);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-3xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br />together!</h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" name="user_name" />
            <label>Email</label>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="email" name="user_email" />
            <label>Message</label>
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' name="message" />
            <input className='btn btn-lg' type="submit" value="Send" />
          </motion.form>
        </div>
      </div>
    </section>
  )
};

export default Contact;
