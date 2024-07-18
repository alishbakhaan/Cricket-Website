import React, { useRef } from "react";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew  } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import '../../App.css'
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

const Carousel = ({ data, loading }) => {
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    const skItem = () => {
        return (
            <div className="flex-shrink-0 w-[125px] lg skeletonItem">
                <div className="mb-[30px] rounded-xl w-full aspect-[1/1.5] posterBlock skeleton"></div>
                <div className="flex flex-col textBlock">
                    <div className="mb-[10px] w-full h-5 skeleton title"></div>
                    <div className="w-[75%] h-5 date skeleton"></div>
                </div>
            </div>
        );
    };

    return (
        <div className="carousel">

            <div className="m-auto p-5 max-xl:w-[600px] min-[1536px]:w-[1000px] max-w-[1200px] align-middle contentWrapper">

                {!loading ? (
                    <div className="flex gap-[10px] md:gap-5 md:m-0 mx-[-20px] px-5 py-0 md:p-0 md:overflow-hidden overflow-y-hidden carouselItems" ref={carouselContainer}>
                        {data?.map((item) => {
                            const posterUrl = item.poster_path
                                ? url.poster + item.poster_path
                                : PosterFallback;
                            return (
                                <div
                                    key={item.id}
                                    className="flex-shrink-0 w-[150px] min-[1536px]:w-[250px] cursor-pointer carouselItem"
                                    onClick={() =>
                                        navigate(
                                            `/${item.media_type || endpoint}/${item.id
                                            }`
                                        )
                                    }
                                >
                                    <div className="relative flex justify-between items-end bg-cover bg-center mb-[30px] p-[10px] w-full aspect-[1/1.5] posterBlock">
                                        <Img src={posterUrl} />

                                    </div>

                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="flex md:gap-5 md:m-0 mx-[-20px] px-5 py-0 md:p-0 md:overflow-hidden overflow-y-hidden gap loadingSkeleton">
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </div>
                )}

                <div className="md:flex flex-row justify-start items-start gap-4 space-x-4 hidden p-4">
                    <MdOutlineArrowBackIosNew
                        className="bg-[#C7C7C7] p-2 rounded-full text-5xl text-white cursor-pointer arrow carouselLeftNav"
                        onClick={() => navigation("left")}
                    />
                    <MdOutlineArrowForwardIos
                        className="bg-[#1DB954] p-2 rounded-full text-5xl text-white cursor-pointer arrow carouselRightNav"
                        onClick={() => navigation("right")}
                    />
                </div>

            </div>
        </div>
    )
}

export default Carousel