import axios from 'axios';
import { createUser as createUserFromUsers } from './usersService';
const serverURL = process.env.REACT_APP_API_URL + '/users';

export const checkToken = (token) => {
  return axios.post(`${serverURL}/verifyToken`, null, {
    headers: { authorization: `Bearer ${token}` },
  });
};
export const checkAdmin = (data) => {
  return axios.post(`${serverURL}/checkAdmin`, data);
};

export const getAllUsers = () => {
  return axios.get(`${serverURL}`);
};
export const createUser = createUserFromUsers;

export const editUser = ({ id, field, value }) => {
  return axios.patch(`${serverURL}/${id}`, { [field]: value });
};
export const deleteUser = (userID) => {
  // console.log(data);
  return axios.delete(`${serverURL}/${userID}`);
};
