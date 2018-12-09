import React from 'react';

const MovieIndexItem = (props) => {
    let movie = props.movie;
    return(
        <div className="MovieItem">
             <h1 className="MovieTitle">{movie.title}</h1>
             <h2>{movie.release_date}</h2>
             <p className="MovieOverview">
                {movie.overview}
             </p>
        </div>
    )
}
export default MovieIndexItem;