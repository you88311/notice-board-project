import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});

const getAllPostData = async () => {
  const { data } = await apiClient.get('/api/questions');

  return data;
};

const getPostsByKeyword = async (keyword) => {
  const { data } = await apiClient.get(`/api/search?q=${keyword}`);

  return data;
};

const createPost = async (newPost) => {
  const { data } = await apiClient.post('/api/questions/ask', newPost);

  return data;
};

const putStatus = async (id, newStatus) => {
  return await apiClient.put(`/api/questions/${id}`, newStatus);
};

export { apiClient, getAllPostData, getPostsByKeyword, createPost, putStatus };
