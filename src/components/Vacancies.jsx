import React, { useContext,useState,useEffect } from 'react'
import { HouseContext } from '../assets/context/HouseContext'
import HouseProduct from './HouseProduct';

const Vacancies = () => {
const {phones}=useContext(HouseContext);
const[vacancy,setVacancy]=useState([]);
useEffect(()=>{
    setVacancy(phones.filter(item=>item.bestseller)) 
    
},[]);

  return (
    <div className='sm:mt-90 mt-150'>
        <div className='text-center text-gray-800 '>
            <h3 className='sm:text-3xl capitalize  mb-2 font-semibold'>Top Best Sold Phones</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolorem Dolorum, sit.</p>

        </div>

        {
            vacancy.length !==0?(
                     <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 space-x-6 gap-2'>
            {
                vacancy.map((item,index)=>(
                  <HouseProduct key={index} id={item._id} name={item.name}  image={item.image}/>
                ))
            }

        </div>

            ):(
                <div className='text-center mt-6'>
                    <h3 className='capitalize font-semibold text-2xl '>No avilable phones at the moment!</h3>
                </div>

            )
        }

   
      
    </div>
  )
}

export default Vacancies
