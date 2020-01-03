import axios from 'axios';

/*
 * cancel axios request to prevent memory leak
 * */

export const source = axios.CancelToken.source();

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 4000, //control whether cancel this request if waiting time is longer than this
  headers: { 'Content-type': 'application/json' },
});
instance.interceptors.request.use(
  async (config) => {
    let token = await localStorage.getItem('');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log('config', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default instance;
