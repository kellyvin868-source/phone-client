import React from 'react'
import {PhoneCallIcon} from 'lucide-react';

const Bot = () => {
  return (
    <a href="tel:254114895068">
         <div className='fixed animate-pulse z-50 bottom-2 flex flex-col items-center right-4 bg-gray-800 text-white px-2 py-1  rounded-lg'>
             <PhoneCallIcon/>
      
    </div>

    </a>
   
  )
}

export default Bot
