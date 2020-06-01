import axiosClient from './Base';
import axios from 'axios';

const API_KEY = "14571cc48a09b723f51bd74640df3d50";

const getMovieVideos = (id: number) => {
    return axiosClient.get(`/3/movie/${id}/videos`, {
        params: {
            api_key: API_KEY,
            language: 'en-US'
        }
    })
}

const getTvVideos = (id:number) => {
    return axiosClient.get(`/3/tv/${id}/videos`, {
        params: {
            api_key: API_KEY,
        }
    })
}


const VideoApis = {
    getMovieVideos, 
    getTvVideos
}

export default VideoApis;