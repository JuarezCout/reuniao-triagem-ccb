import api from '../services/api'

export const fetchLists = () => api.get('/api');
export const createList = (newList) => api.post('/api', newList);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);