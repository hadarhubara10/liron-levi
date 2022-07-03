import axios from 'axios';
const serverURL = process.env.REACT_APP_API_URL;

export const getAllPosts = () => {
  return axios.get(`${serverURL}/posts`);
};
