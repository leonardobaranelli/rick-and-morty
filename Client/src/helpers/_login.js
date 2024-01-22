import axios from "axios";
import { login } from "../redux/actions";

export const _login = (userData) => async (dispatch) => {
  try {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login';

    const response = await axios.post(URL, { email, password });
    
    const { access, id } = response.data;    
    if (access) await dispatch(login(true, id ));
    
  } catch (error) {        
    throw error.response?.data?.error || 'Unexpected error occurred';     
  };
};