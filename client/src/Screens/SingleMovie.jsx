import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { Movies } from "../Data/MovieData";
import Movieinfo from "../Components/Single/Movieinfo";
import MovieCasts from "../Components/Single/MovieCasts";
import MovieRates from "../Components/Single/MovieRates";
import Titles from "../Components/Titles";
import { BsCollectionFill } from "react-icons/bs";
import Movie from "../Components/Movie";
import ShareMovieModal from "../Components/Modals/ShareModal";

function SingleMovie() {
    const [modalOpen, setModalOpen] = useState(false);
    const {id} =useParams()
    const movie = Movies.find((movie) => movie.name === id)
    const RelatedMovies = Movies.filter((m) => m.category === movie.category );
    return(
        <Layout>
            <ShareMovieModal 
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                movie={movie}
                />
            <Movieinfo movie={movie} setModalOpen={setModalOpen}/>
            <div className="conatiner mx-auto min-h-screen px-6 my-6">
                <MovieCasts />
                {/* rate */}
                <MovieRates movie={movie} />
                {/* realted */}
                <div className="my-16">
                    <Titles title="Related Movies" Icon={BsCollectionFill} />
                    <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                    {RelatedMovies.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                    ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SingleMovie;