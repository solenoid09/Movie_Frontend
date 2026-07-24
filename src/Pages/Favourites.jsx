import '../css/Favourites.css'
import { useMoviecontext } from '../context/Moviescontext';
import MovieCard from '../components/MovieCard';

function Favourites() {
    const { favourites } = useMoviecontext();

    if (favourites) {
        return (
            <div className='favourites'>
                <h2>My Favourite Movies</h2>
                <div className="movie-grid">
                    <ul>
                        {favourites.map(
                            (movie) => 
                                movie.title.toLowerCase().startsWith(searchquery) && (
                                    <movie-card key={movie.id}>
                                        <MovieCard movie={{ title: movie.title, release_date: movie.year, description:  movie.description, rating: movie.rating, posterUrl: movie.posterUrl}} />
                                    </movie-card>)
                        /*<li key={movie.id}>
                        <MovieCard movie={{ title: movie.title, release_date: movie.year, description:  movie.description, rating: movie.rating, posterUrl: movie.posterUrl}} /> 
                        </li>*/
                    )}
                    </ul>
            </div>
        </div>)
        }

  return (
    <div className="favourite-empty">
      <h2>No Favourites Movie yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
}

export default Favourites;