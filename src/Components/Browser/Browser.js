import React, { useState, useEffect } from 'react';
import './index.css'
import dp from "../../Drawables/user.png"
import {useNavigate} from 'react-router-dom';
function Browser() {
  const [movieLists, setMovieLists] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch user-selected genres from localStorage
    const selectedGenres = JSON.parse(localStorage.getItem('Selections')) || [];

    if (selectedGenres.length > 0) {
      selectedGenres.forEach((genre) => {
        fetchMoviesByGenre(genre);
      });
    }
  }, []);

  const fetchMoviesByGenre = (genre) => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=2c2331ed7dada877adc09da40b440d3a`)
      .then((response) => response.json())
      .then((data) => {
        const genreId = data.genres.find((g) => g.name === genre)?.id;

        if (genreId) {
          // Fetch popular movies for the specific genre
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2c2331ed7dada877adc09da40b440d3a&with_genres=${genreId}&page=1&per_page=4`)
            .then((response) => response.json())
            .then((data) => {
              // Limit the movies to 4 for this genre
              setMovieLists((prevLists) => ({
                ...prevLists,
                [genre]: data.results.slice(0, 4), // Slice the array to contain a maximum of 4 movies
              }));
            })
            .catch((error) => {
              console.error(`Error fetching ${genre} movies:`, error);
            });
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  function handlebackpage(){
    navigate('../page3')
  }
  return (
    <div class="browserbody">
      <div className='navb'>
        <div id='logo'>Super App</div>
        <div className='dplogo'><img src={dp} id='logo' onClick={handlebackpage}/></div>
      </div>
      <div className='MovieGenre'>
        {Object.keys(movieLists).map((genre) => (
          <div key={genre} id="flexmovie">
            <h1>{genre} Movies</h1>
            <div className="movie-grid">
              {movieLists[genre].map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt={movie.title} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browser;
