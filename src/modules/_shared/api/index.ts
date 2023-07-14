import axios, { AxiosError } from 'axios';
import { store } from 'modules/_shared/store/store';
import { setIsLoading, setError } from 'modules/_shared/store/global/reduser';
import { notification } from 'antd';

export const request = axios.create({
  baseURL: 'baseUrl',
  responseType: 'json',
});

const showErrorMsg = (description: string): void => {
  notification.open({
    type: 'error',
    message: 'Response',
    description,
  });
};

request.interceptors.request.use(
  (config) => {
    store.dispatch(setIsLoading(true));

    // const token = localStorage.getItem('LOCALSTORAGE_TOKEN_KEY');
    // if (token !== null) {
    //   config.headers.authorization = `Bearer ${token}`;
    // }
    return config;
  },

  async (error: AxiosError) => {
    store.dispatch(setIsLoading(false));
    return await Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    store.dispatch(setIsLoading(false));
    return response;
  },
  async (error: AxiosError) => {
    store.dispatch(setIsLoading(false));
    if (error) {
      store.dispatch(setError('error from api'));
      showErrorMsg('error from api');
    }

    // if (error?.response?.status === 401) {
    //   localStorage.removeItem('LOCALSTORAGE_TOKEN_KEY');
    //   location.replace(routes.authorization);
    // }

    return await Promise.reject(error);
  },
);
