import React, { useState } from 'react'
import { accessUrl, getAccessToken } from './spotify'
import Login from './login/Login';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './player/Player';

const spotify = new SpotifyWebApi();

const App = () => {
  const [token ,setToken] = useState(null)

  React.useEffect(() => {
    const hash = getAccessToken();
    const _token = hash.access_token
  
    window.location.hash = "";

    if(_token) { 
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getUser().then(user => {
        console.log("User " + JSON.stringify( user ))
      })
      // console.log("Token Is there :)");

    } else{
      // console.log("Token Is not there :(");
    }
  },[])

  return (
    <div>
      {token ? ( <Player />) : <Login />}
    </div>
  )
}

export default App
