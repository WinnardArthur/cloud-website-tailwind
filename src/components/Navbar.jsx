import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'



function Navbar() {
    const [nav, setNav] = useState(false);

    const  handleClick = () => setNav(!nav)
  return (
    <div className='w-full h-[80px] z-10 bg-zinc-200 sticky top-0 right-0 drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
                <ul className='hidden md:flex'>
                    <li><Link to="home" smooth={true} offset={0} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li><Link to="support" smooth={true} offset={-70} duration={500}>Support</Link></li>
                    <li><Link to="platform" smooth={true} offset={-120} duration={500}>Platform</Link></li>
                    <li><Link to="pricing" smooth={true} offset={-70} duration={500}>Pricing</Link></li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
            <div className='md:hidden' onClick={handleClick }>
                {!nav ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>    
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            }
                
            </div>
        </div>
        
        <ul className={nav ? 'absolute bg-zinc-200 w-full px-8' : 'hidden'}>
            <li><Link onClick={() => setNav(!nav)}  to="home" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link onClick={() => setNav(!nav)} to="about" smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link onClick={() => setNav(!nav)} to="support" smooth={true} offset={-70} duration={500}>Support</Link></li>
            <li><Link onClick={() => setNav(!nav)} to="platform" smooth={true} offset={-120} duration={500}>Platform</Link></li>
            <li><Link onClick={() => setNav(!nav)} to="pricing" smooth={true} offset={-70} duration={500}>Pricing</Link></li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>

    </div>
  )
}



export default Navbar