import axios from "axios";
import { GET_CHAR_BY_ID, GET_CHAR_DETAILS, CLEAN_DETAILS, ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actionTypes";

export const getCharById = (id) => {
    return async (dispatch) => {
        const apiData = await axios.get(
            `http://localhost:3001/rickandmorty/character/${id}`
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
            `http://localhost:3001/rickandmorty/character/${id}`
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

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {               
        const response = await axios.post(endpoint, character)
        dispatch({
            type: ADD_FAV,
            payload: response.data,      
        });       
   };
};

export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
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