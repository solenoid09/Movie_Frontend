import { createContext ,useContext, useState, useEffect, use } from "react";


const MoviesContext = createContext();

export const useMoviecontext = () => {
    return useContext(MoviesContext);
}

export const MoviesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    
    useEffect(() => {    
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
        }, []);    
    
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = [...prevFavorites, movie];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    const removeFromFavorites = (movieId) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = prevFavorites.filter((movie) => movie.id !== movieId);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    }

    const isfavorite = (movieId) => {
        return favorites.some((movie) => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isfavorite
        
    };

    return (
        <MoviesContext.Provider value={{movies, setMovies, loading, setLoading, error, setError}}>
            {children}
        </MoviesContext.Provider>
    );
}

/*
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    */

