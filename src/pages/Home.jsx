import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

   useEffect(() => {
    
    const fetchedMovies = [
      { id: 1, title: "Doctor Strange" },
      { id: 2, title: "The Imitation Game" },
      { id: 3, title: "Black Mass" }
    ];
    setMovies(fetchedMovies);
  }, []);

  return (
    <>
      <header>
         <NavBar />
      </header>
      <main>
       <h1>Home Page</h1>
        <section>
          {movies.map((movie) => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
