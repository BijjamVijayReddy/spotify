import React, { useState } from 'react'
import { accessUrl, getAccessToken } from './spotify'
import Login from './login/Login';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './player/Player';
import { DataLayerValue } from './features/dataLayer/DataLayer';

const spotify = new SpotifyWebApi();

const App = () => {
  // const [isToken, setIsToken] = useState(null);
  const [{token,}, dispatch] = DataLayerValue();

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

    } else {
    }
  }, []);

  // console.log("User " + user)
  // console.log(" Dispatch token " + token);
  // console.log("token " + isToken)



  return (
    <div>
      {token ? (<Player  spotify={spotify} />) : <Login />}
    </div>
  )
}

export default App
