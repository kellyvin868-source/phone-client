import React from 'react'
import { Phone, Mail, Phone as PhoneIcon, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='mt-20 bg-linear-to-b from-gray-900 to-black text-white py-12'>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-10'>
                <div className=''>
                    <div className='flex items-center gap-2 mb-4'>
                        <Phone className='w-8 h-8 text-indigo-400'/>
                        <h2 className='text-3xl font-black'>Timothy<span className='text-indigo-400'>Phones</span></h2>
                    </div>
                    <p className='text-gray-400 text-base leading-relaxed'>Get premium quality phones at the most affordable prices. We provide authentic devices with guaranteed quality and excellent customer support.</p>

                </div>
                <div className=''>
                    <h3 className='text-xl font-bold mb-6 text-indigo-400'>Quick Links</h3>
                    <ul className='space-y-3'>
                        <li className='text-gray-300 font-semibold hover:text-indigo-400 cursor-pointer transition-colors text-base'>Home</li>
                        <li className='text-gray-300 font-semibold hover:text-indigo-400 cursor-pointer transition-colors text-base'>About</li>
                        <li className='text-gray-300 font-semibold hover:text-indigo-400 cursor-pointer transition-colors text-base'>Collections</li>
                        <li className='text-gray-300 font-semibold hover:text-indigo-400 cursor-pointer transition-colors text-base'>FAQs</li>
                    </ul>
                </div>
                <div className=''>
                    <h3 className='text-xl font-bold mb-6 text-indigo-400'>Get In Touch</h3>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-3'>
                            <PhoneIcon className='w-5 h-5 text-indigo-400 shrink-0'/>
                            <p className='text-gray-300 font-semibold text-base cursor-pointer hover:text-indigo-400 transition-colors'>+254-114-895-068</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Mail className='w-5 h-5 text-indigo-400 shrink-0'/>
                            <p className='text-gray-300 font-semibold text-base cursor-pointer hover:text-indigo-400 transition-colors'>kellyvin868@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <MapPin className='w-5 h-5 text-indigo-400 shrink-0'/>
                            <p className='text-gray-300 font-semibold text-base'>Kenya</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='border-t border-gray-700 pt-8'>
                <p className='text-center text-gray-400 font-semibold'>© Copyright KellyDev {new Date().getFullYear()} • All rights reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
