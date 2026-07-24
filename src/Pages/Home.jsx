import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import '../css/home.css'
import { searchMovies,getpopularmovies } from "../services/api";


function Home() {
    
    const [searchquery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const loadpopularmovies = async () => {
            try {
                const popularMovies = await getpopularmovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error)
                setError("Failed to fetch popular movies. Please try again later.");
            } finally {
                /*console.log("Popular movies loaded successfully.");*/
                setLoading(false);
            }
        };
        loadpopularmovies();    
    }, []);
    /*
    const movies = [
        { id: 1, title: "The Shawshank Redemption", year: 1994, description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", rating: 9.3, posterUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },
        { id: 2, title: "The Godfather", year: 1972, description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", rating: 9.2, posterUrl: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg" },
        { id: 3, title: "The Dark Knight", year: 2008, description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.", rating: 9.0, posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" }
    ];
    */
    const handleSearch = async (event) => {
        event.preventDefault();
        /*alert(searchquery);*/
        if (!searchquery.trim()) {
            /*setError("Please enter a search query.");*/
            return;
        }
        if (loading) return
        setLoading(true);
        try {
            const searchResults = await searchMovies(searchquery);
            setMovies(searchResults);
            setError(null);
        } catch (error) {
            console.log(error)
            setError("Failed to search for movies");
        } finally {
                setLoading(false);
            }
        /*setSearchQuery("");
        const query = event.target.elements.search.value;
        console.log(`Searching for: ${query}`);*/
    
    }

    return (
        <div className="home">
        <h1>Welcome to the Movie App</h1>
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for a movie..." 
                className="search-input"
                value={searchquery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
            <button type="submit" className="search-button">Search</button>
        </form>
            {error && <div className="error-message">{error}</div>}
            {loading ? (
                <div className="loading-message">Loading popular movies...</div>
            ) : (   
            <div className="movie-grid">
                <ul>
                    {movies.map(
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
        </div>)}
        </div>
  );
}


export default Home;