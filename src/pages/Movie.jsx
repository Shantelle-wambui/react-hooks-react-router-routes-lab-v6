import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
   const { id } = useParams();             // Step 1: Get movie id from URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`) // Step 2: Fetch movie data
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;
  return (
    <>
      <header>
         <NavBar />    
      </header>
      <main>
        <h1>{movie.title}</h1>           
        <p>{movie.time}</p>               
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>   
          ))}
        </div>
      </main>
    </>
  );
};

export default Movie;
