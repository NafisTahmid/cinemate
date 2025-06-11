import React from 'react';
import Card from '../components/Card';
import useFetch from "../hooks/useFetch";
import { useTitle } from '../hooks/useTitle';
function MovieList({apiPath}) {
 useTitle({title:"Home / cinemate"})

  const {data:movies} = useFetch(apiPath);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-start [other]:justify-evenly other:bg-red-600">
          {
            movies.map((movie) => (
              <Card key={movie.id} movie={movie}/>
            ))
          }
         
        </div>
      </section>
    </main>
  )
}

export default MovieList