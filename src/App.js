import React, { useEffect, useState} from 'react';
import './App.css';
import Login from './Components/Login'
import { getTokenFromResponse} from './Components/spotify'
import SpotifyWebAPI from 'spotify-web-api-js'
import Player from './Components/Player'
import { useDataLayerValue } from './DataLayer'

function App() {
  const [token, setToken] = useState()
  const Spotify = new SpotifyWebAPI();
  const [{user}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    console.log("token", hash.access_token)
    window.location.hash = "";
    const _token = hash.access_token

    if (_token) {
      setToken(_token);
      Spotify.setAccessToken(_token);
      Spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user:user
        })
      })
    }
  }, [])

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
