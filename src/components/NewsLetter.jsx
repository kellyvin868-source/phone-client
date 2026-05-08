import React, { useState } from 'react'
import {toast} from 'react-toastify'

const NewsLetter = () => {
    const [message,setMessage]=useState('');
    const handleMessage=(e)=>{
        e.preventDefault();
        toast.success(`Thank you for the subscription ${message}`)
        setMessage('');

    }
  return (
    <div className='mt-30'>
        <div className='text-center text-gray-600'>
            <h3 className='sm:text-2xl text-xl capitalize font-semibold'>Subscribe to our newsletter and get 20% off</h3>

        </div>
        <div className='w-full mt-5 sm:w-1/2 m-auto'>
        <form onSubmit={handleMessage} className='grid  grid-cols-2 gap-2 space-x-3' action="">
            <input value={message} onChange={(e)=>setMessage(e.target.value)} className='border rounded-lg  px-4 py-2 w-full' type="email" required placeholder='Enter your email' />
            <button className='px-4 py-2  rounded-lg text-2xl font-semibold cursor-pointer bg-gray-500 text-white'>SUBSCRIBE</button>
        </form>



        </div>
      
    </div>
  )
}

export default NewsLetter
