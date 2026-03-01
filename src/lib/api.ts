import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ayurveda-backend.onrender.com/api',
})

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  try {
    const stored = localStorage.getItem('ayurveda-auth')
    if (stored) {
      const { state } = JSON.parse(stored)
      if (state?.token) {
        config.headers.Authorization = `Bearer ${state.token}`
      }
    }
  } catch {}
  return config
})

export default api
