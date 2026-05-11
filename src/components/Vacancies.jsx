import React, { useContext,useState,useEffect } from 'react'
import { HouseContext } from '../assets/context/HouseContext'
import HouseProduct from './HouseProduct';
import { Star } from 'lucide-react'

const Vacancies = () => {
const {phones}=useContext(HouseContext);
const[vacancy,setVacancy]=useState([]);
useEffect(()=>{
    setVacancy(phones.filter(item=>item.bestseller)) 
    
},[]);

  return (
    <div className='sm:mt-20 mt-16'>
        <div className='text-center text-gray-800 mb-12'>
            <div className='flex items-center justify-center gap-2 mb-3'>
              <Star className='w-6 h-6 text-yellow-500 fill-yellow-500'/>
              <h3 className='sm:text-4xl text-3xl capitalize font-black'>Top Best Selling Phones</h3>
              <Star className='w-6 h-6 text-yellow-500 fill-yellow-500'/>
            </div>
            <p className='text-gray-600 text-lg font-semibold'>Discover our most popular and highly-rated phones loved by customers</p>

        </div>

        {
            vacancy.length !==0?(
                     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                vacancy.map((item,index)=>(
                  <HouseProduct key={index} id={item._id} name={item.name}  image={item.image[0]}/>
                ))
            }

        </div>

            ):(
                <div className='text-center mt-12 py-12 bg-gray-100 rounded-2xl'>
                    <h3 className='capitalize font-bold text-2xl text-gray-700'>No phones available at the moment!</h3>
                    <p className='text-gray-600 font-semibold mt-2'>Check back soon for new arrivals</p>
                </div>

            )
        }

   
      
    </div>
  )
}

export default Vacancies
