import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
   <>
   <Header/>
      <HeroBanner/>
      <Trending/>
   <Footer/>
    </>
  )
}

export default Home