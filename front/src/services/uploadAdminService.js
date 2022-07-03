import axios from 'axios';
const serverURL = process.env.REACT_APP_API_URL;

export const getAllImages = () => {
  return axios.get(`${serverURL}/images`);
};
