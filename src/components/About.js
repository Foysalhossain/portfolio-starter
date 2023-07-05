import React from 'react';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion 
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import img from '../assets/foysal.jpg';

const About = () => {
  const [ref] = useInView({
    threshold: 0.5
  })
  return (
    <div className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='grid lg:grid-cols-2 gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img className='h-[400px] lg:h-[700px] mx-auto rounded-xl bg-purple-500 shadow-lg shadow-purple-500/50  ' src={img} alt="" />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('up', 0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='mb-4'>
              Hi There! I am a full stack developer with a strong programming background and experience in React.js, Node.js, Headless/Serverless applications, API development, MongoDB, PostgreSQL, WordPress, and Shopify.
            </h3>
            <h3>
              I have excellent communication skills and can communicate technical ideas clearly and effectively. I am an extrovert professional, and an excellent team player who knows how to do the job efficiently and effectively. I am currently open to projects and full time opportunities (remote/relocation).
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  )
};

export default About;