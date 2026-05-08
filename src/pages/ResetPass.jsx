import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify';

const ResetPass = () => {
    const Navigate=useNavigate();
    const[email,setEmail]=useState('');
    const[newPass,setNewPass]=useState('');
    const[conNewPass,setConNewPass]=useState('');

    const handleFormResetPass=(e)=>{
        e.preventDefault();
        if(newPass.length<6){
            toast.error("Password should be at least 6 characters");
            return
        }
        if(conNewPass!==newPass){
            toast.error("Password does not match");
            return
            
        }
        toast.success("Password changed successfully");
        setTimeout(() => {
            Navigate('/login')
            
        },4000);
    }
  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
    <div className='bg-slate-900 fade fadeUp text-white sm:w-md m-auto w-[95%] rounded-lg shadow-lg p-5'>
        <form onSubmit={handleFormResetPass} className='flex flex-col gap-2' action="">
            <div>
                <label className='text-2xl font-semibold' htmlFor="old">Email:</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className='py-2 mt-1.5 focus:border-orange-600 w-full px-3 border border-gray-300 outline-none rounded-lg  ' type="email" required placeholder='Enter your registered email' />
            </div>
            <div>
                <label className='text-2xl font-semibold' htmlFor="new">New Password:</label>
                <input value={newPass} onChange={(e)=>setNewPass(e.target.value)} className='py-2 mt-1.5 focus:border-orange-600 w-full px-3 border border-gray-300 outline-none rounded-lg  ' type="text" required placeholder='Enter your new password!' />
    
            </div>
            <div>
                <label className='text-2xl font-semibold' htmlFor="con">Confirm New Password:</label>
                <input value={conNewPass} onChange={(e)=>setConNewPass(e.target.value)}  className='py-2 mt-1.5 focus:border-orange-600 w-full px-3 border border-gray-300 outline-none rounded-lg   'type="text" placeholder='confirm new password' required />
            </div>
            <div className='flex sm:justify-around justify-between gap-3.5 mt-4'>
                <button className='bg-blue-600 px-3 py-3 w-40 rounded-lg cursor-pointer' type='submit'>Reset</button>
                <span onClick={()=>Navigate('/login')} className='w-40 bg-red-500 px-3 text-center py-3 rounded-lg cursor-pointer'>Cancel</span>
            </div>
        </form>
    </div>
      
    </div>
  )
}

export default ResetPass
