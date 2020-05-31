import React, { useState, useEffect } from 'react';
import Configuration from '../../types/Configuration';
import './TrendingNow.css';
import Carousel from 'react-bootstrap/Carousel';
import MovieApis from './../../apis/MovieApis';
import MovieResult from '../../types/MovieResult';

type TrendingNowProps = {
    configuration: Configuration | undefined;
}

const TrendingNow = (props: TrendingNowProps) => {
    const [movies, setMovies] = useState<MovieResult[]>([]);

    const getAllTrendings = () => {

        MovieApis.getTrendingNow().then((response: any) => {
            console.log(response.data)
            setMovies(response.data.results)
        });
    }

    useEffect(() => {
        if (props.configuration != undefined) {
            getAllTrendings();
        }
    }, [props.configuration])

    const getName = (movie: MovieResult) => {
        if (movie.title != null) return movie.title;
        else if (movie.original_title != null) return movie.original_title;
        else if (movie.original_name != null) return movie.original_name;
    }
    return (
        <div className="BannerMovies-div">
            <Carousel>
                {
                    movies.map(movie => {
                        let url = `${props.configuration?.images.base_url}${props.configuration?.images.backdrop_sizes[2]}${movie.backdrop_path}`;
                        return (<Carousel.Item key={movie.id}> 
                            <img
                                className="d-block w-100 BannerMovies-img"
                                src={url}
                            />

                            <Carousel.Caption>
                                <h3 className="BannerMovies-title">{getName(movie)}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>)
                    })
                }
            </Carousel>

        </div>
    );
}

export default TrendingNow;