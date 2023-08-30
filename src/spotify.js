// Spotify Login Page;
export const authEndpoint = "https://accounts.spotify.com/authorize";

// redirect Url;
const redirectUri = "http://localhost:3000/";


//Client Id from spotify;
const clientId = "56313740204f4a74b762f1e6e5e3bb6f";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//Access Token from URL;
export const getAccessToken = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};

// Url 
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;