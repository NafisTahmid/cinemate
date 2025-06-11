import { useSearchParams } from 'react-router-dom';
import React from 'react'
import useFetch from '../hooks/useFetch';
import Card from '../components/Card';
import { useTitle } from '../hooks/useTitle';
function Search({apiPath}) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("query");
  const {data:movies} = useFetch(apiPath, queryTerm);
  useTitle({title: `Search results for ${queryTerm} / cinemate`});
  return (
     <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0 ? `No movies found` : `Search results for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
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

export default Search