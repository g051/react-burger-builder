import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-bdr-default-rtdb.firebaseio.com/'
});

export default instance;
