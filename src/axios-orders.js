import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-bder-default-rtdb.firebaseio.com/'
});

export default instance;
