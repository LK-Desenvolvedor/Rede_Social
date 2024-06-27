import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Substitua pela URL correta da sua API

const api = axios.create({
  baseURL: API_URL,
});

export const authApi = {
  register: (userData: any) => api.post('/auth/register', userData),
  login: (credentials: any) => api.post('/auth/login', credentials),
};

export const eventApi = {
  createEvent: (eventData: any) => api.post('/events', eventData),
  getEvents: () => api.get('/events'),
  updateEvent: (eventId: string, eventData: any) => api.put(`/events/${eventId}`, eventData),
  deleteEvent: (eventId: string) => api.delete(`/events/${eventId}`),
};

export const participantApi = {
  createUser: (userData: any) => api.post('/participants', userData),
  getAllUsers: () => api.get('/participants'),
  updateUser: (userId: string, userData: any) => api.put(`/participants/${userId}`, userData),
  deleteUser: (userId: string) => api.delete(`/participants/${userId}`),
  getUserById: (userId: string) => api.get(`/participants/${userId}`),
};

export const postApi = {
  createPost: (postData: any) => api.post('/posts', postData),
  getPosts: () => api.get('/posts'),
};

export const commentApi = {
  createComment: (commentData: any) => api.post('/comments', commentData),
  getCommentsByPost: (postId: string) => api.get(`/comments/${postId}`),
};

export const uploadApi = {
  uploadImage: (formData: FormData) => api.post('/upload', formData),
};

export default api;
