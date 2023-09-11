import Axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.REACT_APP_DB_URL;

const axios = Axios.create({
  baseURL,
});

export const http = {
  get: function get<Response = unknown>(url: string) {
    return axios.get<Response>(url).then(res => res.data);
  },
};
