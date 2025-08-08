import { API_OPTIONS } from "../assets/Constants";
import { useDispatch,useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const usePopularMovies = () => {

    const dispatch = useDispatch();
    const popularMoviesData = useSelector((store) => store?.movies?.popularMovies);

    useEffect(() => {
         if (popularMoviesData && popularMoviesData.length > 0) return; // Already fetched

        const fetchPopularMovies = async () => {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?page=2", API_OPTIONS);
            const data = await response.json();
            if (!response.ok) {
                toast.error("Unable to fulfil your request.Try again later!", {
                    position: "top-center",
                    autoClose: 3000,
                    pauseOnHover: false,
                    hideProgressBar: false,
                });
            }
            dispatch(addPopularMovies(data.results));
        }

        fetchPopularMovies();
    }, []);
}

export default usePopularMovies;