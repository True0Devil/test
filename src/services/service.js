import axios from 'axios';

const API = axios.create({ baseURL: 'http://vindev.cx.ua' });

export const fetchData = async () => {
  const { data } = await API.get('/dashboard');

  return data;
};
