import React, {useState, useEffect} from 'react';
import Configuration from '../../types/Configuration';
import TopTvItem from '../TopTvItem/TopTvItem';
import TvResult from '../../types/TvResult';
import TvApis from './../../apis/TvApis';
import './TopTvs.css';
type TopTvsProps = {
    configuration: Configuration | undefined;
}

const TopTvs = (props: TopTvsProps) => {
    const [tvs, setTvs] = useState<TvResult[]>([]);

    const getTopMovies = () => {
        TvApis.getTopTvs(1).then((response: any) => {
            console.log(response.data);
            setTvs(response.data.results);
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
        <div className="TopTvs-main-div">
            <h5>ALL TIME RANKINGS</h5>
            <div className="TopTvs-list">
                {
                    tvs.map(tv => {
                        return  <TopTvItem key={tv.id} tv={tv} configuration={props.configuration}/>
                    })
                }
            </div>
        </div>
    );
}

export default TopTvs;