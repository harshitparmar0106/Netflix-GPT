import { API_OPTIONS } from "../assets/Constants";
import { useDispatch,useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const nowPlayingMoviesData = useSelector((store) => store?.movies?.nowPlayingMovies);

    useEffect(() => {
         if (nowPlayingMoviesData && nowPlayingMoviesData.length > 0) return; // Already fetched

        const nowPlayingMovies = async () => {
            const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
            const data = await response.json();
            if (!response.ok) {
                toast.error("Unable to fulfil your request.Try again later!", {
                    position: "top-center",
                    autoClose: 3000,
                    pauseOnHover: false,
                    hideProgressBar: false,
                });
            }
            dispatch(addNowPlayingMovies(data.results));
        }

        nowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;