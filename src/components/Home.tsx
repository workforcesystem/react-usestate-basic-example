import React, { use } from 'react'
import "../styles/Home.css"
import MovieCard from './MovieCard'
import { useState } from 'react'


const Home = () => {

  const [constantInput, notConstantInput] = useState("");
  // one represent constant state and the other represent the updated state

  const handleSearch = (e) => {
    e.preventDefault();
    // To hold the input value even after an event like Form Submission
  };
  
  const movies = [
    { id: 1, title: 'Richard: The Psycho Killer', release_date: '2020', url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bd3c5216258857.562a81ae4110a.jpg' },
    { id: 2, title: 'The Silent Witness', release_date: '2019', url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bd3c5216258857.562a81ae4110a.jpg' },
    { id: 3, title: 'Echoes of the Past', release_date: '2018', url: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bd3c5216258857.562a81ae4110a.jpg' },
  ];

  return (
    <>
    <div className="main">


      {/* Search Input Form */}
    <form onSubmit={handleSearch} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-secondary text-white border-0"
              placeholder="Search a movie..."
              value={constantInput}
              onChange={(e) => notConstantInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </form>
        {/* Search Input Form Ends */}

        <div className="row" style={{}}>
        {movies
            .filter((movie) => movie.title.toLowerCase().includes(constantInput.toLowerCase()))
            .map((movie, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <MovieCard movie={movie} />
              </div>
            ))}
        </div>

















    </div>
    </>
  )
}

export default Home;