import React, {useState, useEffect} from 'react'
import './Banner.css'
import axios from './axios'
import requests from './requests'

const Banner = () => {
    const [randomMovie, setRandomMovie] = useState([])

    useEffect(() => {
        async function fetchRandomMovie() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setRandomMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
        }
        fetchRandomMovie();
    }, [])
    console.log( randomMovie)

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}")`
            }}
        >
            <div className="banner__content">
                {/* TITLE */}
                <h1 className="banner__title">
                    {randomMovie?.title || randomMovie?.name || randomMovie?.original_name}
                </h1>
                {/* BUTTONS */}
                <div className="banner__buttons">
                    <button className="banner__button">
                        Play
                    </button>

                    <button className="banner__button">
                        My List
                    </button>
                </div>
                {/* DESCRIPTION */}
                <h1 className="banner__description">
                    {truncate(randomMovie?.overview, 150)}
                </h1>
            </div>
            <div className="banner__fadeBottom" />
        </header>
    )
}

export default Banner
