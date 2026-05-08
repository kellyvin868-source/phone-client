import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Phone } from 'lucide-react'

const Navbar = () => {
const Navigate=useNavigate();
const [toggle,setToggle]=useState(false);
  return (
    <>
    <div className='w-full flex items-center justify-between px-4 py-2 shadow'>
        <div onClick={()=>Navigate('/')} className='text-2xl flex items-center font-semibold capitalize cursor-pointer'>
             <Phone/>
            <p className='text-3xl sm:text-2xl font-semibold'>Timothy <span className='text-gray-800'>Phones</span></p>
           

        </div>
        <div className=' hidden sm:flex items-center text-gray-600 gap-5'>
            <NavLink className={'capitalize ml-3 text-sm font-semibold'} to='/collection'>collections</NavLink>
             <NavLink  className={'capitalize ml-3 text-sm font-semibold'}to='/bookings'>Bookings</NavLink>
              <NavLink className={'capitalize text-sm ml-3 font-semibold'} to='/about'>About</NavLink>
        </div>
        <div className=' hidden sm:block border rounded-full border-none py-1   sm:py-1 px-3 cursor-pointer bg-indigo-400  hover:bg-indigo-600'>
            <button onClick={()=>Navigate('/login')} className='outline-none border-none text-white font-medium text-xl cursor-pointer capitalize'>Get Started</button>
        </div>
        <div onClick={()=>setToggle(true)} className='flex flex-col gap-2 sm:hidden'>
            <span className='w-5 h-1 bg-gray-900'></span>
            <span className='w-5 h-1 bg-gray-900'></span>
            <span className='w-5 h-1 bg-gray-900'></span>
        </div>

      

      
      
    </div>
      <div className={`absolute transition-all z-50 top-0 bottom-0 bg-white left-0 overflow-hidden ${toggle?'w-full':'w-0'}`}>
        <div className='pl-5 mt-9 text-center'>
            <p onClick={()=>setToggle(false)} className='absolute left-2 top-0 font-semibold cursor-pointer text-3xl'>&times;</p>
          
            <div className=' flex flex-col gap-4'>
                <NavLink onClick={()=>setToggle(false)} to={'/'} className={'text-xl font-semibold bg-gray-600 px-2 py-1 rounded-lg text-white'}>Home</NavLink>
                 <NavLink  onClick={()=>setToggle(false)}to={'/about'} className={'text-xl font-semibold bg-gray-600 px-2 py-1 rounded-lg text-white'}>About</NavLink>
                  <NavLink onClick={()=>setToggle(false)} to={'/collection'} className={'text-xl font-semibold bg-gray-600 px-2 py-1 rounded-lg text-white'}>Collections</NavLink>
                   <NavLink onClick={()=>setToggle(false)} to={'/login'} className={'text-xl font-semibold bg-gray-600 px-2 py-1 rounded-lg text-white'}>Get Started</NavLink>

            </div>
        </div>

        </div>
        </>
    
  )
}

export default Navbar
