import React, { useState, useEffect } from 'react'
import axios from '../../utils/axios'
import requests from '../../utils/requests'
import './Banner.css'


function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const movies = request.data.results;
        //randomly diplay one image out of the total number fetched
        setMovie(movies[Math.floor(Math.random() * movies.length)]);
      } catch (error) {
        console.error("Error fetching Netflix Originals:", error);
      }
    })();
  }, []);

  function truncate(str, n) {

    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header 
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        //? is for optional chaining, wait until the image loads
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button play'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        {/* Uncomment the below line and implement the truncate function if needed */}
        <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className='banner_fadeBottom' />
    </header>
  );
}

export default Banner;


