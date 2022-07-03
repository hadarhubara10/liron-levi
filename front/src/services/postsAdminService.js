import axios from 'axios';
const serverURL = process.env.REACT_APP_API_URL + '/posts';

export const getAllPosts = () => {
  return axios.get(`${serverURL}/admin`);
};

export const editPost = ({ id, field, value }) => {
  return axios.patch(`${serverURL}/${id}`, { [field]: value });
};

export const deletePost = (postID) => {
  return axios.delete(`${serverURL}/${postID}`);
};

export const createPost = (data) => {
  const { category, contentsInPost, img, previewContent, title } = data;

  const formData = new FormData();
  formData.append('category', category);
  formData.append('contentsInPost', contentsInPost[0]);
  formData.append('img', img);
  formData.append('previewContent', previewContent);
  formData.append('title', title);
  console.log(formData.get('title'));
  return axios.post(`${serverURL}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
