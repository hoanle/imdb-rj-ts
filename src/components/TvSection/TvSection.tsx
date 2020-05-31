import React from 'react';
import Configuration from '../../types/Configuration';
import TrendingNow from '../TrendingNow/TrendingNow';
import './TvSection.css';
import ListTv from '../ListTv/ListTv';

type TvSectionProps = {
    configuration: Configuration | undefined;
}

const TvSection = (props: TvSectionProps) => {
    return(
        <div className="TvSection-div">
            <ListTv configuration={props.configuration} />
        </div>
    );
}

export default TvSection;