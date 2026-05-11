import React, { useContext, useEffect, useState } from 'react'
import { HouseContext } from '../assets/context/HouseContext'
import HouseProduct from '../components/HouseProduct';
import Search from '../components/Search';

const Houses = () => {
    const{phones,currency,url}=useContext(HouseContext);
    const[phone,setPhone]=useState([]);
    const [sortType,setSortType]=useState('relevant');
    useEffect(()=>{
        setPhone(phones)

    },[phones])
   
    

    const sortPhones=()=>{
     
      
        let phoneCopy=phones.slice();
        switch(sortType){
            case "high-low":
                phoneCopy=phoneCopy.sort((a,b)=>(b.deposit-a.deposit))
                break;
            case "low-high":
                phoneCopy=phoneCopy.sort((a,b)=>(a.deposit-b.deposit))
                break;
            default:
                setPhone()
                break;


        }
        setPhone(phoneCopy);

    }

    useEffect(()=>{
        sortPhones();
    },[sortType]);


  return (
    <div className='sm:mt-20 fade mt-14'>
        <Search setPhone={setPhone}/>
        <div className='flex flex-col justify-between sm:flex-row gap-2'>
            <div>
                <h2 className='font-semibold text-2xl'>Filter By Deposit</h2>

                
            </div>
            <div>
                <select onChange={(e)=>setSortType(e.target.value)} className='w-30 px-3 py-2 border rounded-lg cursor-pointer border-gray-500 outline-none focus:border-orange-500' name="" id="">
                    <option value="relevant">Relavant</option>
                    <option value="high-low">High to low</option>
                    <option value="low-high">Low To High</option>
                </select>
            </div>

        </div>

        <div className='mt-5'>
          {
            phone.length !==0?(
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    phone.map((item,index)=>(
                        <HouseProduct key={index} id={item._id} image={item.image[0]}  name={item.name}/>
                    ))
                }

            </div>
            ):(
                <div className='text-center text-2xl font-semibold capitalize'>No avilable phones at the moment,please come back later!</div>
            )
          }
            
        </div>



      
    </div>
  )
}

export default Houses
