import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HouseContext } from '../assets/context/HouseContext'
import { ShoppingCart } from 'lucide-react'

const HouseProduct = ({id,name,image}) => {
    const {currency,url}=useContext(HouseContext);
  return (
    <Link className='group' to={`/phone/${id}`}>
    <div className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2'>
        <div className='overflow-hidden bg-gray-100 relative'>
            <img className='w-full h-64 object-contain hover:scale-110 transition-transform duration-300 p-4' src={image} alt={name} />
            <div className='absolute top-2 right-2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity'>New</div>
        </div>
        <div className='p-4'>
            <p className='text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors line-clamp-2'>{name}</p>
            <div className='mt-3 flex items-center justify-between'>
              <span className='text-indigo-600 font-bold text-sm'>View Details</span>
              <ShoppingCart className='w-5 h-5 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity'/>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default HouseProduct
