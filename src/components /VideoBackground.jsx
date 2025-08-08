import { useSelector} from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer.js';

const VideoBackground = ({ movieId }) => {

  const trailerId = useSelector((store) => store.movies?.trailerVideo?.key);
  useMovieTrailer({ movieId });

  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      <iframe
         className="absolute top-0 left-0 w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4  border-none"
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&loop=1&pause=0&repeat=1&playlist=${trailerId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
        style={{ border: "none" }}

      ></iframe>
    </div>
  )
}

export default VideoBackground