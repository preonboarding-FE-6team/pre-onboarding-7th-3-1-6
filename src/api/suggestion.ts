/* eslint-disable object-shorthand */
import axios from 'axios';

// const SERVER = process.env.REACT_APP_SERVER;

const SERVER = {
  baseURL: process.env.REACT_APP_SERVER,
  headers: { 'Content-Type': 'application/json' },
  validityState: function (status: number) {
    return status >= 200 && status < 300;
  },
};

const api = axios.create(SERVER);

api.interceptors.request.use(
  (config) => config,
  () => ({ message: '런타임 에러가 발생했습니다!' })
);
api.interceptors.response.use(
  (config) => config,
  (error) => error.response
);

export const getSuggestions = async (param: string) => {
  const { data } = await api.get<Sick[]>(`${SERVER.baseURL}/sick?sickNm_like=${param}`);
  return {
    data,
    errorMsg: {
      default: '데이터를 불러오는데 실패하였습니다!',
    },
  };
};
