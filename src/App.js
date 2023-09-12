import React, { useState } from 'react'
import { accessUrl, getAccessToken } from './spotify'
import Login from './login/Login';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './player/Player';
import { DataLayerValue } from './features/dataLayer/DataLayer';

const spotify = new SpotifyWebApi();

const App = () => {
  // const [isToken, setIsToken] = useState(null);
  const [{ token,response }, dispatch] = DataLayerValue();

  React.useEffect(() => {
    const hash = getAccessToken();
    const _token = hash.access_token

    window.location.hash = "";

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // setIsToken(_token);
      spotify.setAccessToken(_token);


      spotify.getUser().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: playlist
        });

        spotify.getPlaylist("43MaGQWbxfcdVtyk4V6u79").then((response) => { 
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        })
      })

    } else {
    }
  }, []);

// console.log("discover_weekly " + response)



  return (
    <div>
      {token ? (<Player spotify={spotify} />) : <Login />}
    </div>
  )
}

export default App
