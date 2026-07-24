const API_KEY = "791ad8837a7e8dbc2e6cbd4363c9423d"; // Replace with your actual API key
const BASE_URL = "https://api.themoviedb.org/3"; // Replace with your actual base URL

export const getpopularmovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results; // Return the array of popular movies
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return []; // Return an empty array in case of an error
  }
};
export const searchMovies = async (searchQuery) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`);
    const data = await response.json();
    return data.results; // Return the array of search results
  } catch (error) {
    console.error("Error searching for movies:", error);
    return []; // Return an empty array in case of an error
  }
};
/*
export async function fetchMovies(searchQuery) {
*/