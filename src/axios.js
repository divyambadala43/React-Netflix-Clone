import axios from 'axios'

// base url -> to send requests to TMDB

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

//example 
// instance.get("link") -> https://api.themoviedb.org/3/link

export default instance;