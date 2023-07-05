import React from 'react';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="#">
            <h1 className='text-3xl font-bold'><span className='text-accent'>Foysal</span> Hossain</h1>
          </a>
          {/* button */}
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>

  )
};

export default Header;
