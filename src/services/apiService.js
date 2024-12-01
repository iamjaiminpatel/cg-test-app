import axios from "axios";
import config from "@/config";

export const loginAPI = (data) => axios.post(`${config.API_URL}/login`, data);
export const registerAPI = (data) => axios.post(`${config.API_URL}/register`, data);
export const forgotPasswordAPI = (data) => axios.post(`${config.API_URL}/password/email`, data);
export const resetPasswordAPI = (data) => axios.post(`${config.API_URL}/password/reset`, data);
export const profileAPI = async (token) => {
    try {
      const response = await axios.get(`${config.API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching profile or cards');
    }
};

export const albumAPI = async (token) => {
    try {
        const response = await axios.get(`${config.API_URL}/album`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching album');
    }
};


export const logoutAPI = async (token) => {
    try {
        const response = await axios.get(`${config.API_URL}/logout`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching album');
    }
};