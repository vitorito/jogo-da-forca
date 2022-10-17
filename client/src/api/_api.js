import axios from 'axios';
import config from '../config/config';

const api = axios.create({
  baseURL: config.SERVER_URL,
});

export default api;
