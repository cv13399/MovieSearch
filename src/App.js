import { React, useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
// import staticMovies from './staticMovieData';
import MovieCard from './MovieCard.jsx';

const api_url = 'http://www.omdbapi.com?apikey=b5b87478';

const App = () => {
    // let sampleMovie = staticMovies[0];

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // get movie data from API
    const fetchMovies = async(title) =>{
        const response = await fetch(`${api_url}&s=${title}`);
        const data = await response.json();
        console.log("DATA: ", data);

        if (data.Response === "True") {
            setMovies(data.Search);
        }else{
            alert("Can't fetch movie data");
            console.log(data);
        }
    };

    // with [] as second param, this will only run onReload
    useEffect(() => {
        fetchMovies("One Day");
    }, []);

    return (
        <div className='app'>
            {/* <button className='menu'>
                menu
            </button> */}

            {/* <h1>MovieLand</h1> */}
            <img
                src='logo.png'
                alt='MovieLand'
                className="movieHeader"
            />

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                />
                <img key="searchIconKey"
                    src={searchIcon}
                    alt="search"
                    onClick={() => fetchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ):(
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App