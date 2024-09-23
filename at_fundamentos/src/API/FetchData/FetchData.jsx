import axios from 'axios';


const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    console.log('Usuários:', response.data);
    return response.data
  } catch (error) {
    console.error('Erro ao buscar usuários', error);
    throw error;
  }
};



const fetchPosts = async (userId) => {
  try {
    const response = await api.get(`/posts/?userId=${userId}`);
    console.log('Posts:', response.data);
    return response.data
  } catch (error) {
    console.error('Erro ao buscar posts', error);
    throw error;
  }
};


const fetchComments = async (postId) => {
  try {
    const response = await api.get(`comments?postId=1${postId}`);
    console.log('Comentários', response.data);
    return response.data
  } catch (error) {
    console.error('Erro ao buscar comentários', error);
    throw error;
  }
};






export default { fetchComments, fetchPosts, fetchUsers }