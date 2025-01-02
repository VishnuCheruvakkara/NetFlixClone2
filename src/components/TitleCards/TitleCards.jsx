import React, { useRef, useEffect, useState } from 'react'
import './TitleCards.css'
import {Link} from 'react-router-dom'

function TitleCards({ title, category }) {
  // state for handle the data from tmdb
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();
  // fetching data from the , The movie data base 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className="titlecards">
      <h3>{title ? title : "Popular on netflix"}</h3>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card">
              <img alt="poster" src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} />
              <p>{ card.original_title}</p>
            </Link>
          )
        })}


      </div>
    </div>
  )
}

export default TitleCards
