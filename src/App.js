import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import Filter from './components/Filter';




function App() {
  const movies = ([
    {
      title: 'star wars',
      rating: '⭐⭐⭐⭐⭐',
      poster: 'https://static.metacritic.com/images/products/movies/2/ff18a25678e24961eee663ae7cb8ca42.jpg'
    },
    {
      title: 'The Last Mercenary',
      rating: '⭐⭐',
      poster: 'http://www.freshers-live.com/wp-content/uploads/2021/07/THE-LAST-MERCENARY-2021-SUBTITLES-DOWNLOAD-ENGLISH_11zon.jpg'
    },
    {
      title: 'Blood Red Sky',
      rating: '⭐⭐⭐⭐',
      poster: 'https://media.elcinema.com/uploads/_315x420_2c4f7c20ddc213caf84907fbcb363f846a0f72a15c0444536a53d6c401ecaa0d.jpg'
    },
    {
      title: 'Oxygen',
      rating: '⭐⭐',
      poster: 'https://m.media-amazon.com/images/M/MV5BMWQ3N2EzNjYtMzgwYS00YjdmLThmOTUtMzc4NDUxZjZkY2RhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'
    },
    {
      title: 'Below Zero',
      rating: '⭐⭐⭐',
      poster: 'https://m.media-amazon.com/images/M/MV5BZmMzYjg4ZmQtMjc2Yy00ZWQ4LWE0M2ItMzNmYTFlMDJlNzUyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
      title: 'Bartkowiak',
      rating: '⭐',
      poster: 'https://occ-0-1167-300.1.nflxso.net/dnm/api/v6/Da_vleYcahiCE7JMYt8LJRyoenc/AAAABV7m-NrH-JPSuX8PqOuVg9ID7tsYsf8lDRkk0QSJNh9gQZJpqtB15vyfqPXCyaHLomWQpN_NTmlLP3TQUuoVHzkLnRvlC72MkIdfpJOzetMNhVQKtq6UmdmK1CVLZA.jpg'
    }
  ]);
  const [favourites, setFavourites] = useState([]);
  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  }
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <MovieList 
          movies= {movies} 
          filterComponent={Filter} 
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>
      <div className="container-fluid">
        <MovieList 
          movies= {favourites} 
          filterComponent={Filter} 
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>
    </div>
  );
}

export default App;
