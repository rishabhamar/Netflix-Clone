import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Movie({movie}) {
    return(
        <>
        <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
            <Link to={`/movie/${movie?.name}`} className="w-full">
                <img src={`/images/movies/${movie?.image}`} alt={movie?.name} className="w-full h-64 object-cover"/>
            </Link>
            <div className="absolute flex-btn gap-4 bottom-0 right-0 left-0 bg-black bg-opacity-60 text-white px-4 py-4">
                <h3 className="text-lg font-bold truncate">{movie?.name}</h3>
                <button className="h-10 w-10 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white flex-shrink-0">
                    <FaHeart />
                </button>
            </div>
        </div>
        </>
    );
}

export default Movie;