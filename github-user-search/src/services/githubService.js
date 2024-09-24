import axios from 'axios'

const API_BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
 try{
    const response = await axios.get(`${API_BASE_URL}/users/${username}`, {
        headers:{
            Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
        },
    });
    return response.data;
 } catch (error) {
    console.error('Error finding user data:', error);
    throw error;
 }
};
