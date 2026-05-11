import React, { useContext, useState } from 'react'
import { HouseContext } from '../assets/context/HouseContext';
import { toast,ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = ({setToken}) => {
    const [state,setState]=useState('log');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {isLogin,setIsLogin,url,setUserData}=useContext(HouseContext);
    const Navigate=useNavigate();
    

   async function handleFormSub(e){

        e.preventDefault();
        if(state==='log'){
          try {
            const res=await fetch(`${url}/api/auth/login`,{
              method:'POST',
              headers:{
                "Content-Type":"application/json",
              },
              credentials:"include",
              body:JSON.stringify({email,password})
            })

            const result=await res.json();
            if(res.ok){
              toast.success(result.message);
              localStorage.setItem("token",result.token);
              setToken(result.token);
              setTimeout(() => {
                Navigate('/')
              }, 4000);
              setEmail('');
              setPassword('');
            }else{
              toast.error(result.message);
            }
            
          } catch (error) {
            console.log(error);
            toast.error(error.message)
            
          }
        
            
        

        }else{

            try {
            const res=await fetch(`${url}/api/auth/register`,{
              method:'POST',
              headers:{
                "Content-Type":"application/json",
              },
              credentials:"include",
              body:JSON.stringify({name,email,password})
            })

            const result=await res.json();
            if(res.ok){
              toast.success(result.message);
              localStorage.setItem("token",result.token);
              setToken(result.token);
              setEmail('');
              setPassword('');
              setName('');
              
            }else{
              toast.error(result.message);
            }
            
          } catch (error) {
            console.log(error);
            toast.error(error.message)
            
          }
        
            
        
           

        }
    }

 
  return (
    <div className='min-h-screen flex w-full items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 p-4'>
      <ToastContainer/>
        <div className='w-full sm:w-96 formfade rounded-2xl shadow-2xl bg-white p-8'>
            <div className='text-gray-800 text-center flex flex-col gap-4 mb-8'>
                {
                    state==='log'?<h1 className='font-black text-3xl sm:text-3xl'>Welcome Back</h1>:<h1 className='font-black text-3xl'>Create Account</h1>
                    
                }
                {
                    state==='log'?<p className='text-base sm:text-base font-semibold text-gray-600'>Enter your email and password to login</p>:<p className='text-base font-semibold text-gray-600'>Join us today and start shopping</p>
                }
            </div>
            <form onSubmit={handleFormSub} className='flex flex-col gap-5' action="">
              {
                state!=='log' &&  <div>
                    <label className='font-bold text-base text-gray-700 block mb-2'>Username</label>
                    <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-indigo-600 text-base font-semibold transition-colors' type="text" id='name' placeholder='Enter your username' required />
                </div>
              }
              <div>
                <label className='font-bold text-base text-gray-700 block mb-2'>Email Address</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-indigo-600 text-base font-semibold transition-colors' type="email" id='email' placeholder='your@email.com' required />
              </div>
              <div>
                <label className='font-bold text-base text-gray-700 block mb-2'>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-indigo-600 text-base font-semibold transition-colors' type="password" placeholder='••••••••' required id='pass' />
              </div>
              {state === 'log' && <p className='text-sm font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer hover:underline'>Forgot password?</p>}
              <button type='submit' className='w-full px-4 py-3 bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 rounded-xl font-bold text-lg text-white cursor-pointer transition-all shadow-lg hover:shadow-xl transform hover:scale-105'>{state==='log'?'Sign In':'Sign Up'}</button>
              
              <div className='text-center'>
                {
                  state==='log'?<span onClick={()=>setState('reg')} className='text-base font-semibold text-gray-700 cursor-pointer'>Don't have an account? <span className='text-indigo-600 hover:text-indigo-700 hover:underline'>Register</span></span>:<span onClick={()=>setState('log')} className='text-base cursor-pointer font-semibold text-gray-700'>Already have an account? <span className='text-indigo-600 hover:text-indigo-700 hover:underline'>Sign In</span></span>
                }
              </div>
                
            </form>
        </div>
        
        
      
    </div>
  )
}

export default Login
