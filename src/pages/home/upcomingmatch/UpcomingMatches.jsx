import React from 'react'
import card1 from '../../../assets/r1.png'
import card2 from '../../../assets/r2.png'
import card3 from '../../../assets/r3.png'
import rec1 from '../../../assets/r4.png'
import rec2 from '../../../assets/r5.png'
import rec3 from '../../../assets/r6.png'
import rec4 from '../../../assets/r7.png'
import rec5 from '../../../assets/r8.png'
import rec6 from '../../../assets/r9.png'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

const UpcomingMatches = () => {
  return (
<>
<Header/>
    <div className='relative mt-40 mb-20 crouselsection'>
    
      <h1 className='mx-40 my-4 font-normal text-4xl text-white max-[1280px]:text-center crouselTitle'>Upcoming Matches</h1>
  

    <div className="flex flex-wrap justify-center gap-10">
      <img src={card1} alt="" />
      <img src={card2} alt="" />
      <img src={card3} alt="" />
      <img src={rec1} alt="" />
      <img src={rec2} alt="" />
      <img src={rec3} alt="" />
      <img src={rec4} alt="" />
      <img src={rec5} alt="" />
      <img src={rec6} alt="" />
    </div>
  </div>
  <Footer/>
</>
  )
}

export default UpcomingMatches