import React from 'react';
import MovieResult from '../../types/MovieResult';
import { Col } from 'react-bootstrap';
import './TvDetailPopOver.css';
import TvResult from '../../types/TvResult';

type TvDetailPopOver = {
    tv: TvResult
}
const TvDetailPopOver = (props: TvDetailPopOver) => {

    return (<Col className="TvDetailPopOver-div ol-md-3 sol-sm-12">
        <div className="TvDetailPopOver-title">{props.tv.name}</div>
        <div>{props.tv.overview}</div>
    </Col>);
}

export default TvDetailPopOver;