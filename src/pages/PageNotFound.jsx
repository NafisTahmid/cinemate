import React from 'react';
import notFound from "../assets/images/pagenotfound.png";
import {Link} from "react-router-dom";
import { useTitle } from '../hooks/useTitle';

function PageNotFound() {
  useTitle({title:"Not found / cinemate"})
  
  return (
    <main>
      <section>
        <div className="flex flex-col justify-center items-center mt-7">
          <p className="text-7xl text-gray-700 dark:text-white font-bold">404, Oops!</p>
          <div className="max-w-lg my-5">
            <img className="rounded" src={notFound} alt="not found" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link to="/">
            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back to Cinemate</button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default PageNotFound