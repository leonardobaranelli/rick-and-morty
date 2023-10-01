import { GET_CHAR_BY_ID } from "./actionTypes";

const initialState = { 
    characters: []
};
  
const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {    
        case GET_CHAR_BY_ID:
            return {...state,
                characters: [...state.characters, payload]}

        default:
            return {
                ...state,
            };
    };
};

export default rootReducer;