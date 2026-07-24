import './css/App.css'
import MovieCard from './components/MovieCard';
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { MoviesProvider } from './context/Moviescontext';

function App() {
  return (
    <div>
      <Navbar />
    <main className="main-content">
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} /> 
      </Routes>
    </main>
    </div>
  );
  
  {/*
  const moviescard = 2;
  return (
    <>
      {
        moviescard === 1 ? (<MovieCard movie={{ title: "Inception", release_date: "2016", description: "A mind-bending thriller", rating: 8.8, posterUrl: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" }} />
         ) : (<MovieCard movie={{ title: "The Dark Knight", release_date: "2008", description: "A superhero film", rating: 9.0, posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" }} />)
      }
    </>
  );
*/}
}
/*
function Text({ display }) {
  return (
    <>
      <div className="Text">
        <p>{display}</p>
      </div>
    </>
  );
}
*/
export default App

/*
{is_logged_in: true, user_name: "user_7hp3e95xmb2",…}
aid
: 
"3gmeTt0/0irUf5w="
city_name
: 
"Bhubaneswar"
country_code
: 
"IN"
country_name
: 
"India"
csrf_token
: 
"13f42a7ab8b8b0d3a2b0379faa7a07e0dca6c915722ee67e113d044a79f890fd"
eidentifier
: 
"3gmeTt0/0irUf5w="
encrypted_id
: 
"3gmeTt0/0irUf5w="
exp
: 
1789716109
handle
: 
"user_7hp3e95xmb2"
iat
: 
1781940109
instituteId
: 
208
instituteName
: 
"Siksha O Anusandhan University Bhubaneswar"
isInterestSelected
: 
false
is_logged_in
: 
true
iss
: 
"https://www.geeksforgeeks.org/"
loading
: 
false
name
: 
"Subhrajeet Mallick"
pa
: 
1
profileUrl
: 
"https://media.geeksforgeeks.org/auth/profile/wdeqlt2rhclkvb7om9xw"
profile_form_last_filled_at
: 
"2026-06-20 12:47:24"
puid
: 
"um+NSdEx2C0="
region_code
: 
"OD"
region_name
: 
"Odisha"
show_profile_form
: 
false
time
: 
"14:16:57"
user_level
: 
"0"
user_name
: 
"user_7hp3e95xmb2"
ut_csrf_token
: 
"7307324ba5911207bdf50eda85f7d81e7b29008b877f09a01b2d745e98082564"
uuid
: 
"6376365f7446d066d8d6916166984e69"
https://www.geeksforgeeks.org/profile/user_7hp3e95xmb2?tab=activity
*/

