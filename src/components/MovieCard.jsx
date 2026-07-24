import '../css/moviecard.css'
import { useMoviecontext } from '../context/Moviescontext';

function MovieCard({ movie }) {

    const { addToFavorites, removeFromFavorites, isfavorite } = useMoviecontext();
    const favorite = isfavorite(movie.id);


    function onFavoriteClick() {
        
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
        /*alert("clicked")
        console.log(`Added ${movie.title} to favorites!`);*/
    }   
return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        {/*
        <img src={movie.posterUrl} alt={movie.title} />
        */}
        <div className="movie-overlay">
            <button className={`favourite-btn ${favorite ? "active" : "" }`} onClick={onFavoriteClick}>
                <div className="favourite-icon" id="heart">
                    🤍
                    {/* 
                    <svg viewBox="-1 -1 34 32">
                    <path d="M23.6,0C20.9,0,18.4,1.6,17,4.1C15.6,1.6,
                    13.1,0,10.4,0C4.6,0,0,4.6,0,10.4c0,
                    8.1,12.9,15.2,16,18.5
                    c3.1-3.3,16-10.4,16-18.5C32,4.6,27.4,0,23.6,0z " 
                    stroke="white" strokeWidth="1" />
                    </svg>
                    */}
                </div>
            </button>
        </div>
        <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
        </div>
      </div>
    </div>
  );
}


export default MovieCard;   