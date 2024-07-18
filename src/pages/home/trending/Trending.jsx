import React from 'react'
import { Link } from 'react-router-dom';
import card1 from '../../../assets/r1.png'
import card2 from '../../../assets/r2.png'
import card3 from '../../../assets/r3.png'

const Trending = () => {
 
  return (
    <div className='relative md:my-20 mt-96 mb-20 crouselsection'>
      <div className='flex justify-between mx-40 my-10 p-5 align-middle contentWrapper'>
        <span className='font-normal text-4xl text-white crouselTitle'>Upcoming Matches</span>
        <Link to="/upcomingmatches">
          <button className='bg-[#1DB954] px-8 py-2 rounded-md font-medium text-white hover:text-[#C7C7C7]'>View All</button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        <img src={card1} alt="" />
        <img src={card2} alt="" />
        <img src={card3} alt="" />
      </div>
    </div>
  )
}

export default Trending