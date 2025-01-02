import React, { useEffect,useState } from 'react'
import './Player.css'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useParams,useNavigate } from 'react-router-dom'

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type:"",
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
    }
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));

  }, [])
  return (
    <div className='player'>
      <IoArrowBackCircleOutline className='btn' onClick={()=>{navigate(-2)} } />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`}></iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
