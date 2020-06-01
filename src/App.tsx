import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomNavBar from './components/CustomNavBar/CustomNavBar';
import HomePage from './pages/HomePage/HomePage';
import { Route } from 'react-router-dom';
import TvPage from './pages/TvPage/TvPage';
import Configuration from './types/Configuration';
import MovieApis from './apis/MovieApis';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const App = () => {
  const [configuration, setConfiguration] = useState<Configuration | undefined>(undefined);

  const getAppNecesities = () => {
    MovieApis.getAppNecessities().then(function (responses) {

      let genresResponse = responses[0];
      let configurationResponse = responses[1];

      let config: Configuration = {
        change_keys: configurationResponse.data.change_keys,
        images: configurationResponse.data.images,
        genres: genresResponse.data.genres
      }

      setConfiguration(config)
    })
  }

  useEffect(() => {
    getAppNecesities();
  }, [])

  return (
    <div className="App">
      <div className="App-homepage-navbar">
        <CustomNavBar />
      </div>
      <div className="App-homepage-container">
        <Route exact={true} path="/" component={() => <HomePage configuration={configuration} />} />
        <Route exact={true} path="/tv" component={() => <TvPage configuration={configuration} />} />
      </div>
    </div>
  );
}

export default App;
