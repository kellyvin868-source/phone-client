import React from 'react'
import {SearchIcon} from 'lucide-react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { HouseContext } from '../assets/context/HouseContext';
import { useState } from 'react';



const Search = ({setPhone}) => {
    const{phones}=useContext(HouseContext);
    const [search,setSearch]=useState('');
    useEffect(()=>{
      let phoneCopy=phones.slice();
      setPhone(phoneCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())));

    },[search])
  
  return (
    <div className=' sm:w-1/2 m-auto mb-10 border border-gray-400 rounded-lg shadow'>
        <div className='w-full flex items-center px-3 '>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className='w-full px-3 py-2 outline-none rounded-lg ' placeholder='Search any phone' />
            <SearchIcon className='cursor-pointer'/>

        </div>
      
    </div>
  )
}

export default Search
