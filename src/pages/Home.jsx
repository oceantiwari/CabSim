

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex flex-col justify-between w-full'>
        
        
        <img className='w-16 ml-8' src='https://banner2.cleanpng.com/20181110/bgu/kisspng-logo-brand-product-design-font-1713924320463.webp' alt='Uber logo' />

       
        <div className='bg-white p-7 py-4 px-4 '>
          <h2 className='text-3xl font-bold'>Get started with Uber</h2>
          <Link 
            to='/login' 
            className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
