import React from 'react';
// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase } from 'react-icons/bs';
import { Link } from 'react-scroll';
// import {BsClipboardData, BsBriefCase}

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      {/* nav inner */}
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
        <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiHomeAlt />
        </Link>
        <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiUser />
        </Link>
        <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsClipboardData />
        </Link>
        <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsBriefcase />
        </Link>
      </div>
    </nav>
  )
};

export default Nav;
