import axios from "axios";
import { GET_CHAR_BY_ID } from "./actionTypes";

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