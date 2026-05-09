import React, { useContext, useState } from 'react'
import { HouseContext } from '../assets/context/HouseContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [state,setState]=useState('log');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {isLogin,setIsLogin,url,setUserData}=useContext(HouseContext);
    const Navigate=useNavigate();
    

   async function handleFormSub(e){
    console.log(url)
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
              setTimeout(() => {
                Navigate('/admin')
              }, 4000);
              setEmail('');
              setPassword('');
              setIsLogin(true);
            }else{
              toast.error("Failed to login");
            }
            
          } catch (error) {
            console.log(error);
            toast.error("Please try agin later!")
            
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
              setEmail('');
              setPassword('');
              setIsLogin(true);
            }else{
              toast.error(result.message);
            }
            
          } catch (error) {
            console.log(error);
            toast.error("Please try agin later!")
            
          }
        
            
        
           

        }
    }

 
  return (
    <div className='min-h-screen flex w-full items-center justify-center'>
        <div className='w-md formfade rounded-lg shadow-lg bg-white m-auto p-5'>
            <div className='text-gray-700 text-center flex flex-col gap-3'>
                {
                    state==='log'?<h1 className='font-semibold sm:text-xl text-2xl'>Login Here</h1>:<h1 className='font-semibold text-xl'>Create An Account</h1>
                    
                }
                {
                    state==='log'?<p className='text-xl sm:text-sm font-semibold'>Provide Your Email And Password</p>:<p className='text-sm font-semibold'>Fill in your credentials</p>
                }
            </div>
            <form onSubmit={handleFormSub} className='grid grid-cols-1 gap-1.5 space-x-6 text-gray-700' action="">
              {
                state!=='log' &&  <div>
                    <label className='font-semibold text-xl sm:text-sm' htmlFor="name">Username:</label>
                    <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-100 rounded-lg outline-none focus:border-orange-500' type="text" id='name' placeholder='Enter your username' required />
                </div>
              }
              <div>
                <label className='font-semibold text-xl sm:text-sm' htmlFor="email">Email:</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-100 rounded-lg outline-none focus:border-orange-500' type="email" id='email' placeholder='provide emailId' required />
              </div>
              <div>
                <label className='font-semibold text-xl sm:text-sm' htmlFor="pass">Password:</label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-100 rounded-lg outline-none focus:border-orange-500' type="password" placeholder='Enter a strong password' required id='pass' />
              </div>
              <p className='text-sm font-semibold hover:underline cursor-pointer'>Forgot password?</p>
              <button type='submit' className='w-full px-4 py-2 bg-indigo-700  rounded-lg font-semibold text-xl text-white cursor-pointer focus:bg-indigo-600'>{state==='log'?'Login':'Register'}</button>
              {
                state==='log'?<span onClick={()=>setState('reg')} className='text-sm font-semibold cursor-pointer'>Don't have an account?Register</span>:<span onClick={()=>setState('log')} className='text-sm cursor-pointer font-semibold'>Already have an account?Login</span>
              }

              

                
            </form>
        </div>
        
        
      
    </div>
  )
}

export default Login
