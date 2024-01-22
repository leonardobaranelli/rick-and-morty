import axios from "axios";

export const _createAccount = async (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/auth';
  
    try {
      const { data } = await axios.post(URL, { email, password }, { withCredentials: true });
      return data.user;
    } catch (error) {
      throw error.response?.data?.error || 'Unexpected error occurred';
    }
  };
  