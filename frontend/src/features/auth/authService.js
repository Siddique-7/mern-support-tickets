import axios from 'axios'
// package.json frontend proxy: 
  // "proxy": "https://support-desk-app-gyct.onrender.com/",
// const API_URL = '/api/users'


const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/users`

const register = async (user) => {
    const response = await axios.post(`${API_URL}/register`, user)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const login = async (user) => {
  const response = await axios.post(`${API_URL}/login`, user)
  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
    }
    
    return response.data
}

const logout = ( ) => localStorage.removeItem('user')

const authService = {
    register,
    logout,
    login
}
export default  authService