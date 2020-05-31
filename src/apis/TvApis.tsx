import axiosClient from './Base';
import axios from 'axios';

const API_KEY = "14571cc48a09b723f51bd74640df3d50";

const getTopTvs = (page: number) => {
    return axiosClient.get('/3/tv/top_rated', {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: page
        }
    })
}

const getPopularTvList = (page:number) => {
    return axiosClient.get('/3/tv/popular', {
        params: {
            page: page,
            api_key: API_KEY,
        }
    })
}


const TvApis = {
    getTopTvs, 
    getPopularTvList
}

export default TvApis;