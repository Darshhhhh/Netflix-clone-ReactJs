import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './requests';
function Banner() {

  const [movie,setMovie] = useState([]);
  useEffect(() =>{
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random()* request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  },[]);

  function truncate(string,n){
    return string?.length > n ? string.substr(0,n-1) + '...' : string;
  }
  return (
  <header className='banner' style={{
      backgroundSize : "cover",
      backgroundImage : `url('https://image.tmdb.org./t/p/original/${movie?.backdrop_path}')`,
      backgroundPosition : 'center center',
      
      
  }} >
    
      <div className='banner_contents'>
            <h1 className='banner_title'>{movie?.original_name}</h1> 
            
          <div className='banner_buttons'>
            <button className='banner_button1'>Play</button>
            <button className='banner_button'>+ My List</button>
          </div>
          <h1 className='banner_discription'>
            {truncate(movie?.overview,150)}
            </h1>
      </div>
      <div className='banner_fadeBottom' />
  </header>
  )
}
export default Banner;
