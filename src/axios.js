import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-julian0816.herokuapp.com'
});

export default instance;