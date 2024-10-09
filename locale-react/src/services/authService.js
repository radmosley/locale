import api from './api'
import axios from 'axios';
import Cookies from 'js-cookie'; // make sure to install js-cookie


export const login = async (username, password) => {
  const response = await api.post('/api/token/', { username, password });
  if (response.data.access) {
    Cookies.set('access_token', response.data.access, { secure: true, sameSite: 'Strict' });
    Cookies.set('refresh_token', response.data.refresh, { secure: true, sameSite: 'Strict' });
    api.defaults.headers['Authorization'] = 'Bearer ' + response.data.access;
    return true;
  }
  return false;
};

export const refreshToken = async () => {
    const refreshToken = Cookies.get("refresh_token");
    if(refreshToken) {
        const response = await api.post("/api/token/refresh/", { refresh: refreshToken });
        if(response.data.access) {
            Cookies.set("access_token", response.data.access, {secure: true, sameSite: "Strict"});
            api.defaults.headers["Authorization"] = "Bearer " + response.data.access;
            return true;
        }
    }
    return false;
};

export const logout = () => {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
  delete api.defaults.headers['Authorization'];
};
