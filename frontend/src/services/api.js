import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api/v1';
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

// Interceptor para adicionar token automaticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Serviço existente de anúncios
export const adsService = {
  getAll: () => api.get('/ads'),
  getById: (id) => api.get(`/ads/${id}`),
  getByDonor: (donorId) => api.get(`/ads/donor/${donorId}`),
  create: (data) => api.post('/ads/new', data),
  update: (id, data) => api.put(`ads/${id}`, data),
  delete: (id) => api.delete(`/ads/${id}`),
  conclude: (id, recyclerCode) =>
    api.patch(`/ads/${id}/conclude?recyclerCode=${recyclerCode}`),
  search: (params) => api.get(`/ads?${params}`),
};

// Serviço existente de recicladores
export const recyclersService = {
  getAll: () => api.get('/recyclers'),
  search: (params) => api.get(`/recyclers?${params}`),
};

//  Serviço de perfil do reciclador//
export const recyclerProfileService = {
  // Buscar perfil do reciclador logado//
  getMyProfile: async () => {
    try {
      const response = await api.get('/recyclers/me');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      throw error;
    }
  },

  // Atualizar perfil do reciclador
  updateProfile: async (profileData) => {
    try {
      const response = await api.put('/recyclers/me', profileData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      throw error;
    }
  },

  // Upload de foto de perfil
  uploadProfilePicture: async (file) => {
    try {
      const formData = new FormData();
      formData.append('profilePicture', file);

      const response = await api.post('/recyclers/me/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer upload da foto:', error);
      throw error;
    }
  }
};


export default api;