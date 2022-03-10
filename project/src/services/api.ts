import axios, {AxiosInstance} from 'axios';
import {BACKEND_URL, REQUEST_TIMEOUT} from '../const';

export const createAPI = (): AxiosInstance => {
  return axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });
};
