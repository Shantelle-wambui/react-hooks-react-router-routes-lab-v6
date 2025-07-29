import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
   const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/actors")
      .then((res) => res.json())
      .then(setActors);
  }, []);

  return (
    <>
      <header>
       <NavBar />
      </header>
      <main>
         <h1>Actors Page</h1>
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, i) => (
                <li key={i}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
