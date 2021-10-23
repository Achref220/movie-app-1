import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import Sidenavbar from './components/Sidenavbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Trailer from './components/Trailer';





function App() {
  let [movies, setMovies] = useState([
    {
      title: 'Army of the Dead',
      poster: 'https://static.metacritic.com/images/products/movies/2/ff18a25678e24961eee663ae7cb8ca42.jpg',
      rate:2,
      trailer: "https://www.youtube.com/embed/tI1JGPhYBS8", 
      description: "Description : Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble, venturing into the quarantine zone to pull off the greatest heist ever attempted.",
      id: 1
    },
    {
      title: 'The Last Mercenary',
      poster: 'https://m.media-amazon.com/images/M/MV5BNGNkZmJiZTAtY2M3MC00ZTNjLThkYmQtNmMxMTg3ZTJlNDA4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
      rate:3,
      trailer: "https://www.youtube.com/embed/G4_ULVw5L04",
      description: "Description : A mysterious former secret service agent must urgently return to France when his estranged son is falsely accused of arms and drug trafficking by the government, following a blunder by an overzealous bureaucrat and a mafia operation.",
      id: 2
    },
    {
      title: 'Blood Red Sky',
      poster: 'https://media.elcinema.com/uploads/_315x420_2c4f7c20ddc213caf84907fbcb363f846a0f72a15c0444536a53d6c401ecaa0d.jpg',
      rate:5,
      trailer: "https://www.youtube.com/embed/U8M_1eyrBtQ", 
      description: "Description : When a group of terrorists hijacks an overnight transatlantic flight, a mysteriously ill woman must unleash a monstrous secret to protect her young son",
      id: 3
    },
    {
      title: "Oxygen",
      poster: 'https://m.media-amazon.com/images/M/MV5BMWQ3N2EzNjYtMzgwYS00YjdmLThmOTUtMzc4NDUxZjZkY2RhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      rate:4,
      trailer: "https://www.youtube.com/embed/8IqXgZd-P98",
      description: "Description : A woman awakens in an airtight medical cryogenic unit, and discovers that she is trapped and that the unit's oxygen levels are falling rapidly. Suffering from memory loss, she does not remember who she is or how she got there. She is assisted by an advanced A.I.",
      id: 4
    },
    {
      title: 'Below Zero',
      poster: 'https://m.media-amazon.com/images/M/MV5BZmMzYjg4ZmQtMjc2Yy00ZWQ4LWE0M2ItMzNmYTFlMDJlNzUyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      rate:3,
      trailer: "https://www.youtube.com/embed/UCLz92vUYJY",
      description: "Description : On a lonely road, a prison transport is brutally assaulted. On a lonely road, a prison transport is brutally assaulted. ... Martin, the policeman who was driving, survives and fortifies his position while the con men search for a way to finish him.",
      id: 5
    },
    
  ]);

  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(false);
  



  
  return (
    <BrowserRouter>
      <div className="main5">
        <Nav search={search}  rate={rate}  setSearch={setSearch} setRate={setRate}/>
        <Switch>
          <div className="main70">
            <Sidenavbar  setMovies={setMovies}/>
              <div className="container-fluid">
              <Route exact path="/">
                <MovieList className="cards"
                  movies= {movies} 
                  search={search}
                  rate={rate}
                />
              </Route>
              <Route path="/Trailer/:id">
              <Trailer movies={movies} />
              </Route>
              </div>
          </div>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
