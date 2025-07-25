import { useSelector} from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer.js';

const VideoBackground = ({ movieId }) => {

  const trailerId = useSelector((store) => store.movies?.trailerVideo?.key);
  useMovieTrailer({ movieId });

  return (
    <div className='w-screen h-screen'>
      <iframe
        className=' aspect-video pointer-events-none'
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&loop=1&pause=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </div>
  )
}

export default VideoBackground