import { useState, useEffect, React } from 'react'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import '../../../App.css'

const HeroBanner = () => {
  const [endpoint, setEndpoint] = useState("day");
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  

  const [background, setBackground] = useState("");
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  return (
    <div className='relative flex bg-[#04152d] w-full h-[450px] md:h-[800px] heroBanner'>

      {!loading && (
        <div className="top-0 left-0 absolute opacity-50 backdrop-img w-[650px] md:w-full h-[800px] object-cover">
          <Img src={background} />
        </div>
      )}


      <div className='relative min-[1536px]:flex flex-none gap-20'>

        <div className='pt-[200px] pl-[0px] min-[1536px]:pl-[200px] w-[650px] min-[1536px]:w-[850px] text-center min-[1536px]:text-left'>
          <h1 className="mb-3 font-medium text-4xl text-center text-white md:text-5xl min-[1536px]:text-left title">Experience Every Moment of the World Cup Live!</h1>
          <p className="mb-5 font-light text-[#C7C7C7] text-center text-xl min-[1536px]:text-left leading-[2rem] subTitle">
            Watch the most thrilling cricket action unfold in real-time. Gain access to every match, every inning, and every highlight from the World Cup tournament. Don't miss a single ball – join our community of passionate cricket fans today!
          </p>
          <span><button className='bg-[#1DB954] px-4 py-2 rounded-md font-medium text-white hover:text-[#C7C7C7]'>Watch Now</button></span>
        </div>

        <div className='flex pt-[40px] min-[1536px]:pt-[150px] w-[450px]'>
        <Carousel data={data?.results} loading={loading}/>
        </div>

      </div>

    </div>
  )
}

export default HeroBanner