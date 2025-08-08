import { API_OPTIONS } from "../assets/Constants";
import { useDispatch,useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const UpcomingMoviesData = useSelector((store) => store?.movies?.UpcomingMovies);


    useEffect(() => {
         if (UpcomingMoviesData && UpcomingMoviesData.length > 0) return; // Already fetched

        const fetchUpcomingMovies = async () => {
            const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=3", API_OPTIONS);
            const data = await response.json();
            if (!response.ok) {
                toast.error("Unable to fulfil your request.Try again later!", {
                    position: "top-center",
                    autoClose: 3000,
                    pauseOnHover: false,
                    hideProgressBar: false,
                });
            }
            dispatch(addUpcomingMovies(data.results));
        }

        fetchUpcomingMovies();
    }, []);
}   

export default useUpcomingMovies;