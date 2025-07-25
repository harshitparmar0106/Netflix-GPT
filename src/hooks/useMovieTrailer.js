import React from 'react'
import { useEffect } from 'react';
import { API_OPTIONS } from "../assets/Constants.jsx";
import { useDispatch} from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice.js';


const useMovieTrailer = ({movieId}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getMovieVideo = async () => {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
          const data = await response.json();
    
          const filterData = data.results.filter(video => video.type === 'Trailer');
          const trailer = filterData.length ? filterData[0] : data.results[0];
          dispatch(addTrailerVideo(trailer));
        }
    
        getMovieVideo();
      }, [movieId]);
}

export default useMovieTrailer
