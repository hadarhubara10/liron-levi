import axios from 'axios';
const serverURL = process.env.REACT_APP_API_URL;

export const createUser = (data) => {
  return axios.post(`${serverURL}/users`, data);
};
