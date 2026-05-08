import React, { useEffect, useState } from 'react'
import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Houses from './pages/Houses'
import HouseDetails from './pages/HouseDetails'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import About from './pages/About'
import Bookings from './pages/Bookings'
import {ToastContainer} from 'react-toastify';
import Footer from './components/Footer'
import Login from './pages/Login'
import { Loader } from 'lucide-react'
import Bot from './pages/Bot'
import ResetPass from './pages/resetPass'
import Admin from './pages/Admin'
import Lom from './pages/Lom'
import {Outlet} from 'react-router-dom'


const App = () => {
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

  
  return (
    <div className=' relative px-3 bg-gray-50 sm:px-[8vw]'>
      <ToastContainer/>
      <Navbar/>
      <Bot/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Houses/>}/>
        <Route path='/phone/:id' element={<HouseDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='bookings' element={<Bookings/>}/>
        <Route path='/reset-pass' element={<ResetPass/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route  path='/admin' element={<Admin/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    
      <Footer/>
      
      
    </div>
  )
}

export default App
