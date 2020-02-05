import axios from 'axios';

const axiosCipher = axios.create({
    baseURL: 'http://localhost:8000/'
});

export default axiosCipher;
