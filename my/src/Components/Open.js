import React,{useState,useEffect} from 'react'
import "./Open.css"
import { useParams ,NavLink} from 'react-router-dom';
function Open({movies}) {
    const [movie,setMovie]= useState("")
    const {Titl}= useParams()
    useEffect(() => {
        setMovie (movies.find((el)=> el.Titl===Titl)); 
    },[])
  
    return (
        <div className="centent">
         <h1>{movie.Titl}</h1>
         <h4>{movie.Description}</h4>
         <div>
             <iframe width="560" height="315"  src={movie.TrailerURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
             </iframe>
         </div>
         <NavLink to={"/"} ><button className='btnn' > Back home</button>
       </NavLink>
        </div>
    )
}

export default Open
