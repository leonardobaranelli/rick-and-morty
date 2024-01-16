import axios from "axios";
import { loginSuccess, loginFailure } from "../redux/actions";

export const login = (userData) => async (dispatch) => {
  try {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/auth';

    const response = await axios.post(URL, { email, password });
    
    const { access } = response.data;
    if (access) dispatch(loginSuccess(access));
    
  } catch (error) {    
    dispatch(loginFailure(error.message));
  }
};