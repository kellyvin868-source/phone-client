import React, { useContext } from 'react'
import { assests } from '../assets/asset'
import{ Contact} from 'lucide-react'



const Hero = () => {
  return (
    <div className=' sm:mt-10 rounded-2xl  relative mt-20 border border-gray-300 sm:p-19 p-5 fade'>
        <div className='absolute z-0 rounded-2xl  inset-0 sm:h-100 h-125  w-full bg-[url(./phone-bg.jpg)] bg-cover bg-center'>
        </div>

       
        <div className='sm:grid top-0 bottom-0 right-0 sm:h-100 h-125 z-0  absolute bg-black/80   flex flex-col items-center justify-center text-white gap-8 sm:grid-cols-2'>
            <div className='flex flex-col sm:ml-6 ml-4 gap-3' >
                <h1 className='font-semibold sm:text-4xl  text-4xl'>Timothy Phones' <br/><span className='sm:text-4xl text-2xl font-bold text-gray-200'>Distributions</span> </h1>
                <h4 className='font-semibold sm:text-xl mr-3.5 capitalize text-2xl'>Get any <span className='text-2xl font-semibold text-gray-300 '>Phone</span> Of Your choice at affordable price</h4>
                <div className='flex flex-col sm:flex-row gap-4 mt-5'>
                    <button className='bg-gray-600 text-white px-3 sm:w-full w-1/2 sm:py-2 py-3 rounded-2xl font-semibold text-2xl cursor-pointer transition-all hover:bg-indigo-500'>Order Now</button>
                    <button className='bg-blue-400 sm:w-full w-1/2  px-5 sm:py-2 py-3 rounded-2xl font-semibold text-2xl cursor-pointer text-white transition-all hover:bg-blue-500'>Contact Us</button>
                </div>

            </div>

          
         


        </div>
     
      
    </div>
  )
}

export default Hero
