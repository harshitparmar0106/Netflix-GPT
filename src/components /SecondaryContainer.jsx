import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  // This component is intended to display a list of top-rated movie
    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
    const popularMovies = useSelector((store) => store.movies?.popularMovies);
    const topratedMovies = useSelector((store) => store.movies?.TopratedMovies);
    const upcomingMovies = useSelector((store) => store.movies?.UpcomingMovies);

  return (
    nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20 flex flex-col gap-6">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Trending"} movies={popularMovies.slice().reverse()} />
          <MovieList
            title={"Top Rated Movies"}
            movies={topratedMovies}
          />
          <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer