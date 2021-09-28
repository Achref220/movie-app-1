import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import Sidenavbar from './components/Sidenavbar';




function App() {
  const movies = ([
    {
      title: 'Army of the Dead',
      poster: 'https://static.metacritic.com/images/products/movies/2/ff18a25678e24961eee663ae7cb8ca42.jpg'
    },
    {
      title: 'The Last Mercenary',
      poster: 'https://m.media-amazon.com/images/M/MV5BNGNkZmJiZTAtY2M3MC00ZTNjLThkYmQtNmMxMTg3ZTJlNDA4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'
    },
    {
      title: 'Blood Red Sky',
      poster: 'https://media.elcinema.com/uploads/_315x420_2c4f7c20ddc213caf84907fbcb363f846a0f72a15c0444536a53d6c401ecaa0d.jpg'
    },
    {
      title: 'Oxygen',
      poster: 'https://m.media-amazon.com/images/M/MV5BMWQ3N2EzNjYtMzgwYS00YjdmLThmOTUtMzc4NDUxZjZkY2RhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'
    },
    {
      title: 'Below Zero',
      poster: 'https://m.media-amazon.com/images/M/MV5BZmMzYjg4ZmQtMjc2Yy00ZWQ4LWE0M2ItMzNmYTFlMDJlNzUyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
  ]);

  const [search, setSearch] = useState("");
  
  return (
    <div className="main5">
      <Nav search={search} setSearch={setSearch}/>
      <div className="main70">
      <Sidenavbar />
      <div className="container-fluid">
        <MovieList className="cards"
          movies= {movies} 
          search={search}
        />
      </div>
      </div>
    </div>
  );
}

export default App;
