import React, { useState } from 'react'
import Layout from '../Layout/Layout';
import { Link, useParams } from 'react-router-dom';
import { Movies } from '../Data/MovieData';
import { BiArrowBack } from 'react-icons/bi';
import { FaCloudDownloadAlt, FaHeart, FaPlay } from 'react-icons/fa';

function WatchPage() {
    let {id} = useParams()
    const movie = Movies.find((movie) => movie.name === id );
    const [play, setPlay] = useState(false)
    return (
    <Layout>
        <div className='container mx-auto bg-dry p-6 mb-12'>
            <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
                <Link to={`/movie/${movie?.name}`} className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'>
                    <BiArrowBack /> {movie?.name}
                </Link>
                <div className='flex-btn sm:w-auto w-full gap-5'>
                    <button className='bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm'>
                        <FaHeart />
                    </button>
                    <button className='bg-subMain flex-rows gap-2 hover:text-main transitions text-white rounded px-8 font-medium py-3 text-sm'>
                        <FaCloudDownloadAlt /> Download
                    </button>
                </div>
            </div>
            {/* watch video */}
            {
                play ? (
                    <video controls autoPlay={play} className="w-full h-full rounded">
                        <source src= {`/images/movies/${movie.video}`} type="video/mp4" title={movie?.name} />
                    </video>
                ) : (
                    <div className='w-full h-screen rounded-lg overflow-hidden relative'>
                        <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo '>
                            <button 
                            onClick={() => setPlay(true)} 
                            className="bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl">
                                <FaPlay />
                            </button>
                        </div>
                        <img src={movie?.image ? `/images/movies/${movie.image}` : "images/user.png"} alt={movie?.name} className='w-full h-full object-cover rounded-lg' />
                    </div>
                )
            }
            </div>
        
    </Layout>
    )
}

export default WatchPage

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from '../Layout/Layout';
// import { Link, useParams } from 'react-router-dom';
// import { BiArrowBack } from 'react-icons/bi';
// import { FaCloudDownloadAlt, FaHeart, FaPlay } from 'react-icons/fa';
// import YouTube from 'react-youtube';

// function WatchPage() {
//     let {id} = useParams();
//     const [play, setPlay] = useState(false);
//     const [movie, setMovie] = useState(null);

//     useEffect(() => {
//         axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCX6OQ3DkcsbYNE6H8uQQuVA&maxResults=25&order=viewCount&type=video&key=AIzaSyD20OJUwMvgKeI3MY_Vt1GykzgpLjHYBoI`)
//             .then(response => {
//                 setMovie(response.data.items[0]);
//             })
//             .catch(error => {
//                 console.error('Error fetching data from YouTube API', error);
//             });
//     }, [id]);

//     const opts = {
//         height: '1080',
//         width: '1485',
//         playerVars: {
//             autoplay: play ? 1 : 0,
//         },
//     };

//     return (
//         <Layout>
//             <div className='container mx-auto bg-dry p-6 mb-12'>
//                 <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6'>
//                     <Link to={`/movie/${movie?.snippet?.title}`} className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'>
//                         <BiArrowBack /> {movie?.snippet?.title}
//                     </Link>
//                     <div className='flex-btn sm:w-auto w-full gap-5'>
//                         <button className='bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm'>
//                             <FaHeart />
//                         </button>
//                         <button className='bg-subMain flex-rows gap-2 hover:text-main transitions text-white rounded px-8 font-medium py-3 text-sm'>
//                             <FaCloudDownloadAlt /> Download
//                         </button>
//                     </div>
//                 </div>
//                 {
//                     play ? (
//                         <YouTube videoId={movie?.id.videoId} opts={opts} onReady={event => event.target.playVideo()} className='w-full h-full rounded'/>
//                     ) : (
//                         <div className='w-full h-screen rounded-lg overflow-hidden relative'>
//                             <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo '>
//                                 <button 
//                                 onClick={() => setPlay(true)} 
//                                 className="bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl">
//                                     <FaPlay />
//                                 </button>
//                             </div>
//                             <img src={movie?.snippet?.thumbnails?.high?.url ? movie?.snippet?.thumbnails?.high?.url : "images/user.png"} alt={movie?.snippet?.title} className='w-full h-full object-cover rounded-lg' />
//                         </div>
//                     )
//                 }
//             </div>
//         </Layout>
//     )
// }

// export default WatchPage
