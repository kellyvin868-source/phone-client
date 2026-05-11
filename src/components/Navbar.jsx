import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import { assests } from '../assets/asset';

const Navbar = ({token,setToken,userData}) => {
const Navigate=useNavigate();
const [toggle,setToggle]=useState(false);
  return (
    <>
    <div className='w-full flex items-center justify-between px-4 sm:px-8 py-4 shadow-md bg-white sticky top-0 z-40'>
        <div onClick={()=>Navigate('/')} className='flex items-center gap-2 font-bold text-xl sm:text-2xl cursor-pointer hover:opacity-80 transition-opacity'>
             <Phone className='w-7 h-7 text-indigo-600'/>
            <p className='text-2xl sm:text-3xl font-bold'>Timothy<span className='text-indigo-600 font-black'>Phones</span></p>
        </div>
        <div className=' hidden sm:flex items-center text-gray-700 gap-8'>
            <NavLink className={'capitalize font-semibold text-base hover:text-indigo-600 transition-colors'} to='/collection'>Collections</NavLink>
             <NavLink  className={'capitalize font-semibold text-base hover:text-indigo-600 transition-colors'} to='/bookings'>Bookings</NavLink>
              <NavLink className={'capitalize text-base font-semibold hover:text-indigo-600 transition-colors'} to='/about'>About</NavLink>
        </div>
        <div className=' hidden sm:block'>
          {
            token?(
       
                <div className=''>
                  <div className='relative group'>
                    <div className='bg-blue-700  w-9 h-9 items-center text-center justify-center flex text-2xl font-semibold  text-white cursor-pointer rounded-full'>
                      {
                        userData.name[0].toUpperCase()
                      }
                    </div>

                      <div className='hidden absolute bg-gray-400 w-24 p-2 rounded-2xl shadow group-hover:block  dropdown-menu'>
                    <div className='flex flex-col text-center text-white gap-2'>
                      <li onClick={()=>setToken('')} className='list-none hover:text-blue-600 cursor-pointer text-sm font-semibold '>Logout</li>
                        <li onClick={()=>Navigate('/bookings')} className='list-none hover:text-blue-600 cursor-pointer text-sm font-semibold '>My Phones</li>
                    </div>

                  </div>
                

                  </div>

                </div>
              
              

            ):(

                <button onClick={()=>Navigate('/login')} className='bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-lg px-6 py-3 rounded-lg border-none outline-none cursor-pointer transition-all shadow-lg hover:shadow-xl transform hover:scale-105'>
          
            </button>
             

            )
          }
          
        </div>
        <div onClick={()=>setToggle(true)} className='flex sm:hidden cursor-pointer'>
            <Menu className='w-7 h-7 text-gray-800'/>
        </div>

      
    </div>
      <div className={`fixed transition-all z-50 top-0 bottom-0 bg-white left-0 overflow-hidden ${toggle?'w-full':'w-0'}`}>
        <div className='pt-6 px-6'>
            <div className='flex justify-between items-center mb-8'>
              <p className='text-2xl font-bold'>Menu</p>
              <X onClick={()=>setToggle(false)} className='w-7 h-7 cursor-pointer hover:text-red-500 transition-colors'/>
            </div>
          
            <div className=' flex flex-col gap-5'>
                <NavLink onClick={()=>setToggle(false)} to={'/'} className={'text-2xl font-bold bg-linear-to-r from-indigo-600 to-indigo-700 px-4 py-3 rounded-lg text-white hover:from-indigo-700 hover:to-indigo-800 transition-all'}>Home</NavLink>
                 <NavLink  onClick={()=>setToggle(false)}to={'/about'} className={'text-2xl font-bold bg-linear-to-r from-indigo-600 to-indigo-700 px-4 py-3 rounded-lg text-white hover:from-indigo-700 hover:to-indigo-800 transition-all'}>About</NavLink>
                  <NavLink onClick={()=>setToggle(false)} to={'/collection'} className={'text-2xl font-bold bg-linear-to-r from-indigo-600 to-indigo-700 px-4 py-3 rounded-lg text-white hover:from-indigo-700 hover:to-indigo-800 transition-all'}>Collections</NavLink>
                   <NavLink onClick={()=>setToggle(false)} to={'/bookings'} className={'text-2xl font-bold bg-linear-to-r from-indigo-600 to-indigo-700 px-4 py-3 rounded-lg text-white hover:from-indigo-700 hover:to-indigo-800 transition-all'}>My Bookings</NavLink>

                  {
                    token?(
                      <button onClick={()=>setToken('')} className='w-full mt-3 bg-blue-600 text-white text-xl font-semibold px-3 py-3 rounded-lg '>Logout</button>
                    ):(
                         <NavLink onClick={()=>setToggle(false)} to={'/login'} className={'text-2xl font-bold bg-linear-to-r from-indigo-600 to-indigo-700 px-4 py-3 rounded-lg text-white hover:from-indigo-700 hover:to-indigo-800 transition-all'}></NavLink>
                    )
                  }

            </div>
        </div>

        </div>
        </>
    
  )
}

export default Navbar
