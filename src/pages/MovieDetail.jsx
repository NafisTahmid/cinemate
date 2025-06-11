import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import defaultImage from "../assets/images/backup.png";
import { useTitle } from '../hooks/useTitle';

function MovieDetail() {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useTitle({title: `${movie.title} / cinemate`})

  
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImage;

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setMovie(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching movie:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchMovie();
  }, [id]);
 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={movie.title}/>
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
           <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.title}</h1>
           <p className="my-4 ">{movie.overview}</p>
           {
            movie.genres ? (
              <p className="flex flex-wrap gap-2 my-7">
              {movie.genres.map((genre) => (
                <span className="mr-2 border border-gray-200 rounded p-3 dark:border-gray-600" key={genre.id}>{genre.name}</span>
              ))}
            </p>
            ) : " "
           }


          <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ms-2 text-md font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className="text-sm font-medium text-gray-900  dark:text-white">{movie.vote_count}</span>
          </div>

          <p className="my-2">
            <span className="font-bold">Runtime:</span>
            <span className="ml-2">{movie.runtime} min.</span>
          </p>

          <p className="my-2">
            <span className="font-bold">Budge:</span>
            <span className="ml-2">{movie.budget}</span>
          </p>

          <p className="my-2">
            <span className="font-bold">Revenue:</span>
            <span className="ml-2">{movie.revenue}</span>
          </p>
           
          <p className="my-2">
            <span className="font-bold">Release date:</span>
            <span className="ml-2">{movie.release_date}</span>
          </p>
          
        </div>
      </section>
    </main>
  );
}

export default MovieDetail;