import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import {BiTime} from 'react-icons/bi';

function FlexMovieItems({movie}) {
    return(
        <>
            <div className="flex items-center gap-3">
                <span className="sm:text-2xl text-lg font-medium">
                    {movie.category}
                </span>
            </div>
            <div className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-subMain w-5 h-5" />
                <span className="sm:text-xl text-lg font-medium">
                    {movie.year}
                </span>
            </div>
            <div className="flex items-center gap-2">
                <BiTime className="text-subMain w-5 h-5" />
                <span className="sm:text-xl text-lg font-medium">
                    {movie.time}
                </span>
            </div>
        </>
    );
}

export default FlexMovieItems;