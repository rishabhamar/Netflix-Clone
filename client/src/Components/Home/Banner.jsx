import React from "react";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movies } from "../../Data/MovieData";
import FlexMovieItems from "../FlexMovieItems";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Banner() {
    return(
        <div className="relative w-full">
            <Swiper
                direction="horizontal"
                spaceBetween={0} 
                slidesPerView={1} 
                loop={true}
                speed={1000}
                modules={[Autoplay]} 
                autoplay={{ delay:4000, disableOnInteraction: false}}
                className="w-full xl:h-[40rem] bg-dry lg:h-64 h-48"
            >
                {
                    Movies.slice(0,6).map((movie, index) => (
                        <SwiperSlide key={index} className="relative rounded overflow-hidden">
                            <img
                                src={`/images/movies/${movie.image}`}
                                alt={movie.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
                                <h1 className="xl:text-7xl capitalize font-sans sm:text-2xl text-2xl font-bold">
                                    {movie.name}
                                </h1>
                                <div className="flex gap-6 items-center text-dryGray">
                                    <FlexMovieItems movie={movie}/>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <Link to={`/movie/${movie.name}`} className="bg-subMain hover:text-main transitions text-white px-7 py-4 rounded font-bold sm:text-lg text-xs">
                                        Watch Now
                                    </Link>
                                    <button className="bg-white hover:text-subMain transitions text-white px-4 py-4 rounded text-sm bg-opacity-30">
                                        <FaHeart />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Banner;

// import React from "react";
// import { Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Movies } from "../../Data/MovieData";
// import FlexMovieItems from "../FlexMovieItems";
// import { Link } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";
// import { fetchData } from "../../Redux/APIs/Youtube";

// function Banner() {
//     return(
//         <div className="relative w-full">
//             <Swiper
//                 direction="horizontal"
//                 spaceBetween={0} 
//                 slidesPerView={1} 
//                 loop={true}
//                 speed={1000}
//                 modules={[Autoplay]} 
//                 autoplay={{ delay:4000, disableOnInteraction: false}}
//                 className="w-full xl:h-[40rem] bg-dry lg:h-64 h-48"
//             >
//                 {
//                     fetchData(Movies).slice(0,6).map((movie, index) => (
//                         <SwiperSlide key={index} className="relative rounded overflow-hidden">
//                             <img
//                                 src={`/images/movies/${movie.image}`}
//                                 alt={movie.title}
//                                 className="w-full h-full object-cover"
//                             />
//                             <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
//                                 <h1 className="xl:text-7xl capitalize font-sans sm:text-2xl text-2xl font-bold">
//                                     {movie.name}
//                                 </h1>
//                                 <div className="flex gap-6 items-center text-dryGray">
//                                     <FlexMovieItems movie={movie}/>
//                                 </div>
//                                 <div className="flex gap-5 items-center">
//                                     <Link to={`/movie/${movie.name}`} className="bg-subMain hover:text-main transitions text-white px-7 py-4 rounded font-bold sm:text-lg text-xs">
//                                         Watch Now
//                                     </Link>
//                                     <button className="bg-white hover:text-subMain transitions text-white px-4 py-4 rounded text-sm bg-opacity-30">
//                                         <FaHeart />
//                                     </button>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))
//                 }
//             </Swiper>
//         </div>
//     );
// };

// export default Banner;