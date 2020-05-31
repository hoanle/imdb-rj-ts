import axiosClient from './Base';
import axios from 'axios';

const API_KEY = "14571cc48a09b723f51bd74640df3d50";

const getTopMovies = (page: number) => {
    return axiosClient.get('/3/movie/top_rated', {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: page
        }
    })
}

const getConfiguration = () => {
    return axiosClient.get('/3/configuration', {
        params: {
            api_key: API_KEY,
        }
    })
}

const getTrendingNow = () => {
    return axiosClient.get('/3/trending/all/day', {
        params: {
            api_key: API_KEY,
        }
    })
}


const getPopularMovieList = (page:number) => {
    return axiosClient.get('/3/movie/popular', {
        params: {
            page: page,
            api_key: API_KEY,
        }
    })
}

const getMovieGenres = () => {
    return axiosClient.get('/3/genre/movie/list', {
        params: {
            api_key: API_KEY,
        }
    })
}

const getAppNecessities = () => {
    return axios.all([getMovieGenres(), getConfiguration()]);
}

const MovieApis = {
    getConfiguration,
    getTopMovies,
    getTrendingNow,
    getPopularMovieList,
    getMovieGenres,
    getAppNecessities
}

export default MovieApis;