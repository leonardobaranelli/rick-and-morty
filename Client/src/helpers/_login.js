import axios from "axios";
import { login, addFav } from "../redux/actions";

export const _login = (userData) => async (dispatch) => {
  
  try {
    const { email, password } = userData;
    const URL = `${BACKEND_URL}/rickandmorty/login`;
    
    const response = await axios.post(URL, { email, password });
    
    const { access, userId } = response.data;        
    
    if (access){
      await dispatch(login(true, userId ));
      await dispatch(addFav({name : "_login"}, userId));  
    }  

  } catch (error) {        
    throw error.response?.data?.error || 'Unexpected error occurred';     
  };
};