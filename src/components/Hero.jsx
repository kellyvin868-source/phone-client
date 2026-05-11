import React, { useContext } from 'react'
import { assests } from '../assets/asset'
import{ Contact, ArrowRight} from 'lucide-react'

const Hero = () => {
  return (
    <div className='sm:mt-10 rounded-3xl mt-24 border border-gray-200 overflow-hidden fade relative'>
        <div className='absolute z-0 rounded-3xl inset-0 w-full bg-[url(./phone-bg.jpg)] bg-cover bg-center'>
        </div>

       
        <div className='sm:grid top-0 bottom-0 right-0 min-h-96 sm:min-h-full z-10 absolute bg-black/75 w-full sm:grid-cols-2 flex flex-col items-center justify-center text-white gap-8 px-6 sm:px-0'>
            <div className='flex flex-col gap-6 sm:ml-12 ml-4' >
                <h1 className='font-black sm:text-5xl text-4xl leading-tight'>Timothy Phones' <br/><span className='sm:text-5xl text-4xl font-black text-indigo-300'>Best Distributions</span> </h1>
                <p className='font-semibold sm:text-2xl text-xl leading-relaxed text-gray-100'>Get any <span className='text-indigo-300 font-bold'>Premium Phone</span> of your choice at the most affordable price</p>
                <div className='flex flex-col sm:flex-row gap-5 mt-6'>
                    <button className='bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-8 py-4 rounded-xl font-bold text-lg sm:text-xl cursor-pointer transition-all hover:shadow-2xl flex items-center justify-center gap-2 transform hover:scale-105'>
                      Order Now <ArrowRight className='w-5 h-5'/>
                    </button>
                    <button className='bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 rounded-xl font-bold text-lg sm:text-xl cursor-pointer text-white transition-all hover:shadow-2xl flex items-center justify-center gap-2 transform hover:scale-105'>
                      Contact Us <Contact className='w-5 h-5'/>
                    </button>
                </div>

            </div>

          
         


        </div>
     
      
    </div>
  )
}

export default Hero
