const axios = require('axios');

const axiosClient = axios.create(
    {
        baseURL: 'https://api.themoviedb.org/',
        timeout: 30000
    }
)

export default axiosClient;