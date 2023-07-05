import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// images
import img1 from '../assets/html5.png'
import img2 from '../assets/css.png'
import img3 from '../assets/bootstrap.png'
import img4 from '../assets/Tailwind.png'
import img5 from '../assets/js.png'
import img6 from '../assets/react.png'
import img7 from '../assets/nodejs.png'
import img8 from '../assets/mongo.png'
import img9 from '../assets/express.png'
import img10 from '../assets/firebase.png'
import img11 from '../assets/git.png'
import img12 from '../assets/github.png'

const Skills = () => {
    return (
        <div className='section' id='skills'>
            <div className='container mx-auto'>
                <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='text-center mb-20'>
                    <h3 className='h2 text-accent'>My Skills</h3>
                    <p>These are my skills that I am highly confident about</p>
                </motion.div>
                <motion.div
                    variants={fadeIn('right', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='grid grid-cols-4 gap-20 justify-items-center'>
                    <img className='w-20' src={img1} alt="" />
                    <img className='w-20' src={img2} alt="" />
                    <img className='w-20' src={img3} alt="" />
                    <img className='w-20' src={img4} alt="" />
                    <img className='w-20' src={img5} alt="" />
                    <img className='w-20' src={img6} alt="" />
                    <img className='w-20' src={img7} alt="" />
                    <img className='w-20' src={img8} alt="" />
                    <img className='w-20' src={img9} alt="" />
                    <img className='w-20' src={img10} alt="" />
                    <img className='w-20' src={img11} alt="" />
                    <img className='w-20' src={img12} alt="" />
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;