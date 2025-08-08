import { API_OPTIONS } from "../assets/Constants";
import { useDispatch,useSelector } from "react-redux";
import { addTopratedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const useTopratedMovies = () => {

    const dispatch = useDispatch();
    const TopratedMoviesData = useSelector((store) => store?.movies?.TopratedMovies);


    useEffect(() => {
         if (TopratedMoviesData && TopratedMoviesData.length > 0) return; // Already fetched

        const fetchTopratedMovies = async () => {
            const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=3", API_OPTIONS);
            const data = await response.json();
            if (!response.ok) {
                toast.error("Unable to fulfil your request.Try again later!", {
                    position: "top-center",
                    autoClose: 3000,
                    pauseOnHover: false,
                    hideProgressBar: false,
                });
            }
            dispatch(addTopratedMovies(data.results));
        }

        fetchTopratedMovies();
    }, []);
}   

export default useTopratedMovies;