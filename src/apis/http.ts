import Axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.REACT_APP_DB_URL;

const axios = Axios.create({
  baseURL,
});

export const http = {
  get: function get<Response = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ) {
    return axios
      .get<Response>(url, config)
      .then(res => res.data)
      .catch(e => e.response.data);
  },
};
