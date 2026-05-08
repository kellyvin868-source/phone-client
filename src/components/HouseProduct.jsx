import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HouseContext } from '../assets/context/HouseContext'

const HouseProduct = ({id,name,image}) => {
    const {currency,url}=useContext(HouseContext);
  return (
    <Link className='shadow-lg rounded-8xl hover:skew-2 transition-all ' to={`/phone/${id}`}>
    <div className='p-2'>
        <div className='overflow-hidden'>
            <img className='w-full h-60 object-contain hover:scale-130 rounded-2xl transition-all' src={image} alt="" />

        </div>
        <p>{name}</p>
    </div>
    </Link>
  )
}

export default HouseProduct
