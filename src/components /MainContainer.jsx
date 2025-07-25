import React from 'react'
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () => {
    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
    
    if(nowPlayingMovies === null) return;
    const mainMovies = nowPlayingMovies?.[1];

    const { title,overview, id } = mainMovies
    
    return (
        <div>
            <VideoBackground movieId={id} />
            <VideoTitle title={title} overview={overview} />
        </div>
    )
}

export default MainContainer