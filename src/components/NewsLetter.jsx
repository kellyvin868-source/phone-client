import React, { useState } from 'react'
import {toast} from 'react-toastify'
import { Mail, Send } from 'lucide-react'

const NewsLetter = () => {
    const [message,setMessage]=useState('');
    const handleMessage=(e)=>{
        e.preventDefault();
        toast.success(`Thank you for subscribing! Check your email for a special offer.`)
        setMessage('');

    }
  return (
    <div className='mt-20 py-16 bg-linear-to-r from-indigo-600 to-indigo-700 rounded-3xl'>
        <div className='text-center text-white mb-8 px-4'>
            <div className='flex items-center justify-center gap-2 mb-4'>
              <Mail className='w-8 h-8'/>
              <h3 className='sm:text-4xl text-2xl capitalize font-black'>Stay Updated</h3>
            </div>
            <p className='text-lg font-semibold text-indigo-100'>Subscribe to our newsletter and get exclusive 20% discount on your first order</p>
        </div>
        <div className='w-full max-w-2xl mx-auto px-4'>
        <form onSubmit={handleMessage} className='flex flex-col sm:flex-row gap-3' action="">
            <input 
              value={message} 
              onChange={(e)=>setMessage(e.target.value)} 
              className='flex-1 border-2 border-white rounded-xl px-6 py-4 text-lg font-semibold bg-white text-gray-800 outline-none focus:border-indigo-300 transition-colors placeholder-gray-500' 
              type="email" 
              required 
              placeholder='Enter your email address' 
            />
            <button className='px-8 py-4 rounded-xl text-lg font-bold cursor-pointer bg-white text-indigo-600 hover:bg-indigo-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg'>
              <Send className='w-5 h-5'/>
              Subscribe
            </button>
        </form>

        </div>
      
    </div>
  )
}

export default NewsLetter
