import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// image
import img1 from '../assets/project_img/p1.png'
import img2 from '../assets/project_img/p2.png'
import img3 from '../assets/project_img/p3.png'

const Work = () => {
  return (
    <div className='section' id='work'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='text-center mb-20'>
          <h2 className='h2 text-accent'>My Latest Work</h2>
          <p>These are some of my best projects that I am really proud to share</p>
        </motion.div>
        {/* card */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='grid lg:grid-cols-3 gap-y-10 gap-x-20'>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='rounded-t-lg' src={img1} alt="Shoes" /></figure>
            <div className="card-body p-4 bg-slate-200 rounded-b-lg text-black text-center">
              <h2 className="card-title my-4">Music Instrument Website</h2>
              <div className="card-actions justify-end rounded-xl">
                <a href="https://github.com/Foysalhossain/musicy-client" target="_blank">
                  <button className="btn btn-sm">GitHub</button>
                </a>
                <a href="https://musicy-eebbd.web.app/" target="_blank">
                  <button className='btn btn-sm ml-4'>Live</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='rounded-t-lg' src={img2} alt="Shoes" /></figure>
            <div className="card-body p-4 bg-slate-200 rounded-b-lg text-black text-center">
              <h2 className="card-title my-4">Toys Car Website</h2>
              <div className="card-actions justify-end rounded-xl">
                <a href="https://github.com/Foysalhossain/top-gear-sports-car-as-11" target="_blank">
                  <button className="btn btn-sm">GitHub</button>
                </a>
                <a href="https://top-gear-sports-car-as-11.web.app/" target="_blank">
                  <button className='btn btn-sm ml-4'>Live</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='rounded-t-lg' src={img3} alt="Shoes" /></figure>
            <div className="card-body p-4 bg-slate-200 rounded-b-lg text-black text-center">
              <h2 className="card-title my-4">Restaurent Website</h2>
              <div className="card-actions justify-end rounded-xl">
                <a href="https://github.com/Foysalhossain/chef-recipe-hunter-assignment-10" target="_blank">
                  <button className="btn btn-sm">GitHub</button>
                </a>
                <a href="https://chef-recipe-hunter-as-10.web.app/" target="_blank">
                  <button className='btn btn-sm ml-4'>Live</button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default Work;
