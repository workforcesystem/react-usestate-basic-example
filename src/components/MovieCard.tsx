import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <>
    <div className="col-md-4 col-lg-3 mb-4" style={{width:'300px', padding: '20px', backgroundColor: 'grey', borderRadius: '6px', margin: '10px'}}>
      <div className="card text-white bg-dark shadow-lg border-0">
        <img
          src={movie.url}
          className="card-img-top"
          alt={movie.title}
          style={{ height: "100%", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">Release Year: {movie.release_year}</p>
          <button className="btn btn-outline-light w-100">❤️ Favorite</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default MovieCard;