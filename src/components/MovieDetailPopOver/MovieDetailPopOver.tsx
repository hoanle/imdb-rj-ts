import React from 'react';
import MovieResult from '../../types/MovieResult';
import { Col } from 'react-bootstrap';
import './MovieDetailPopOver.css';

type MovieDetailPopOver = {
    movie: MovieResult
}
const MovieDetailPopOver = (props: MovieDetailPopOver) => {

    return (<Col className="MovieDetailPopOver-div ol-md-3 sol-sm-12">
        <div className="MovieDetailPopOver-title">{props.movie.title}</div>
        <div>{props.movie.overview}</div>
    </Col>);
}

export default MovieDetailPopOver;