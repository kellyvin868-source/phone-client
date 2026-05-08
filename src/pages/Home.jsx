import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Vacancies from '../components/Vacancies'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <>
    <div>
      <Hero/>
      <Vacancies/>
      <NewsLetter/>
    </div>
    
    </>
  )
}

export default Home
