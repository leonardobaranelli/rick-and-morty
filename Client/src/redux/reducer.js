import { CLEAN_DETAILS, GET_CHAR_BY_ID, GET_CHAR_DETAILS, ADD_FAV, REMOVE_FAV } from "./actionTypes";

const initialState = { 
    characters: [],
    characterDetails: {},
    myFavorites: [],
    charactersFav: [],
};
  
const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {    
        case GET_CHAR_BY_ID:
            return {...state,
                characters: [...state.characters, payload]};
        
        case GET_CHAR_DETAILS:            
            return {...state, 
                characterDetails: payload};    
                
        case CLEAN_DETAILS:
            return {...state,
                characterDetails: {}};

        case ADD_FAV:
            return {...state,
                myFavorites: payload,
                charactersFav: payload
            };        
        
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
                charactersFav: payload
            };

        default:
            return {...state};
    };
};

export default rootReducer;