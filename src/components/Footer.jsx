import React from 'react'


const Footer = () => {
  return (
    <div className='mt-30 '>
        
        <div className=' flex sm:flex-row  text-gray-800 flex-col gap-9 justify-between'>
            <div className='sm:basis-[30%]'>
                <h2 className='text-2xl font-semibold mb-2'>Timothy Phones</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id cepturi obcaecati at ut?</p>

            </div>
            <div>
                <ul>
                    <li className='font-semibold mb-1.5 hover:text-gray-400 cursor-pointer'>Home</li>
                    <li className='font-semibold mb-1.5 hover:text-gray-400 cursor-pointer'>About</li>
                    <li className='font-semibold mb-1.5 hover:text-gray-400 cursor-pointer'>Contacts</li>
                    <li className='font-semibold mb-1.5 hover:text-gray-400 cursor-pointer'>FAQs</li>
                </ul>
            </div>
            <div className='text-xl'>
                <h2 className='text-2xl font-semibold capitalize'>Reach Us</h2>
                <p className='cursor-pointer text-sm'>+254-114-111-111</p>
                <p className='cursor-pointer text-sm'>kellyvin868@gmail.com</p>
                <div>
                    
                </div>
            </div>

        </div>
        <hr />
        <div className='text-center'>
            <p>@Copyright KellyDev {new Date().getFullYear()}</p>

        </div>
      
    </div>
  )
}

export default Footer
