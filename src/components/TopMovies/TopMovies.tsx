import React, { useEffect, useState } from 'react';
import MovieApis from './../../apis/MovieApis';
import TopMovieItem from './../TopMovieItem/TopMovieItem';
import MovieResult from './../../types/MovieResult';
import Configuration from '../../types/Configuration';
import './TopMovies.css';

type TopMoviesReponse = {
    page: number, 
    results: MovieResult[]
}

type TopMoviesProps = {
    configuration: Configuration | undefined;
}

const TopMovies = (props: TopMoviesProps) => {
    
    const [movies, setMovies] = useState<MovieResult[]>([]);

    const getTopMovies = () => {
        MovieApis.getTopMovies(1).then((response: any) => {
            console.log(response.data);
            setMovies(response.data.results);
        }).catch((error: any) => {
            console.log("Error happened");
        });
    }

    useEffect(() => {
        if (props.configuration != undefined) {
            console.log("config is not undefined");
            getTopMovies();
        }

        return () => {
            
        }
    }, [props.configuration])
    
    return(
        <div className="TopMovies-main-div">
            <h5>ALL TIME RANKINGS</h5>
            <div className="TopMovies-list">
                {
                    movies.map(movie => {
                        return  <TopMovieItem movie={movie} key={movie.id} configuration={props.configuration}/>
                    })
                }
            </div>
        </div>
    );
}

export default TopMovies;