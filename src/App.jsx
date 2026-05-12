import React, { useContext, useEffect, useState } from 'react'
import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Houses from './pages/Houses'
import HouseDetails from './pages/HouseDetails'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import About from './pages/About'
import Bookings from './pages/Bookings'
import {toast, ToastContainer} from 'react-toastify';
import Footer from './components/Footer'
import Login from './pages/Login'
import { Loader } from 'lucide-react'
import Bot from './pages/Bot'
import Lom from './pages/Lom'
import {Outlet} from 'react-router-dom'
import { HouseContext } from './assets/context/HouseContext'


const App = () => {
  const {url}=useContext(HouseContext);
  const[userData,setUserData]=useState({});
  const[token,setToken]=useState(()=>{
    return localStorage.getItem("token" || "");
  })
  useEffect(()=>{
    if(token){
      localStorage.setItem("token",token)
    }else{
      localStorage.removeItem("token")
    }

  },[token])

 

  async function fetchUserData(){
    try {
      const res=await fetch(`${url}/api/auth/user-data`,{
        method:'GET',
        headers:{
          "authorization":`Bearer ${token}`
        },
        credentials:"include"
      })
      const result=await res.json();
      if(res.ok){
        setUserData(result.data)
      }else{
        console.log(result.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      
    }
  }

  useEffect(()=>{
    fetchUserData();

  },[userData])
  const Location=useLocation();
  const main=Location.pathname;
  const[loading,setLoading]=useState(true);
  
  setTimeout(() => {
    setLoading(false)
    
  },500);

  useEffect(()=>{
    setLoading(true);

  },[main])

  if(loading){
    return <div className='min-h-screen flex w-full items-center justify-center'>
      <Loader className='text-5xl w-5 h-10 animate-spin font-bold'/>
    </div>
  }

  
  return token?(
    
    <div className=' relative px-3 bg-gray-50 sm:px-[8vw]'>
      <ToastContainer/>
      <Navbar token={token} setToken={setToken} userData={userData}/>
      <Bot/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Houses/>}/>
        <Route path='/phone/:productId' element={<HouseDetails token={token}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='bookings' element={<Bookings token={token}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    
      <Footer/>
      
      
    </div>
  ):(
    <Login setToken={setToken}/>
  )
}

export default App
