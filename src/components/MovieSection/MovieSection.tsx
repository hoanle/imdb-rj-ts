import React from 'react';
import Configuration from '../../types/Configuration';
import TrendingNow from '../TrendingNow/TrendingNow';
import './MovieSection.css';
import ListMovie from './../ListMovie/ListMovie';

type MovieSectionProps = {
    configuration: Configuration | undefined;
}

const MovieSection = (props: MovieSectionProps) => {
    return(
        <div className="MovieSection-div">
            <TrendingNow configuration={props.configuration}/>
            <ListMovie configuration={props.configuration} />
        </div>
    );
}

export default MovieSection;