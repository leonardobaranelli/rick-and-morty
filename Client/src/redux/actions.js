import axios from "axios";
import { 
    GET_CHAR_BY_ID,
    GET_CHAR_DETAILS,
    CLEAN_DETAILS,
    ADD_FAV,
    REMOVE_FAV,
    ORDER,
    FILTER,
    LOGIN,    
    LOGOUT,
} from "./actionTypes";

export const getCharById = (id) => {
    return async (dispatch) => {
        const apiData = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/rickandmorty/character/${id}`
        );
        const character = apiData.data;
        dispatch({
            type: GET_CHAR_BY_ID, payload: character
        });
    };
};

export const getCharDetails = (id) => {
    return async (dispatch) => {
        const apiData = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/rickandmorty/character/${id}`
        );        
        const character = apiData.data;        
        dispatch({
            type: GET_CHAR_DETAILS, payload: character 
        });
    };
};

export const cleanDetails = () => {
    return { type: CLEAN_DETAILS };
};

export const addFav = (character, userId) => {
    const endpoint = `${process.env.REACT_APP_BACKEND_URL}/rickandmorty/fav`;
    return async (dispatch) => {
        const payload = { ...character, userId };

        try {
        const response = await axios.post(endpoint, payload);
        dispatch({
            type: ADD_FAV,
            payload: response.data,
        });
        } catch (error) {
        console.error('Error adding favorite:', error);
        }
    };
};
  
export const removeFav = (id, userId) => {    
    const endpoint = `${process.env.REACT_APP_BACKEND_URL}/rickandmorty/fav/${id}/${userId}`;
    return async (dispatch) => {      
        const response = await axios.delete(endpoint)
        dispatch({
            type: REMOVE_FAV,
            payload: response.data,
        });    
    };
};

export const orderCards = (order) => {
    return {type: ORDER, payload: order}
}

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const login = (access, id) => ({
  type: LOGIN,
  payload: { access, id },
});

export const logout = () => {        
    return { type: LOGOUT };
};