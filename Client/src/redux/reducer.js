import { CLEAN_DETAILS, GET_CHAR_BY_ID, GET_CHAR_DETAILS, ADD_FAV, REMOVE_FAV, ORDER } from "./actionTypes";

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

        case ORDER:
            const allCharactersFavCopy = [...state.charactersFav];
            return {
                ...state,
                myFavorites: 
                    payload === 'A'
                    ? allCharactersFavCopy.sort((a,b) => a.id - b.id) 
                    : allCharactersFavCopy.sort((a,b) => b.id - a.id) 
            };    

        default:
            return {...state};
    };
};

export default rootReducer;