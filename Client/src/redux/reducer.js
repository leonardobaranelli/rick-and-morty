import {
    CLEAN_DETAILS,
    GET_CHAR_BY_ID,
    GET_CHAR_DETAILS,
    ADD_FAV,
    REMOVE_FAV,
    ORDER,
    FILTER,
    LOGIN,
    LOGOUT,
} from "./actionTypes";

const initialState = { 
    characters: [],
    characterDetails: {},
    myFavorites: [],
    charactersFav: [],
    login: {
        access: false,
        error: null,
    },
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

        case FILTER:            
            return{
                ...state,
                myFavorites: 
                payload === 'AllCharacters'
                ? [...state.charactersFav]
                : state.charactersFav.filter(
                    char => char.gender === payload )
            };        
            
        case LOGIN:
            if(payload.access){
                return {
                    ...state,
                    login: {
                        ...state.login,
                        access: true,
                        error: null,
                    },
                };
            }
            else {
                return {
                    ...state,
                    login: {
                        ...state.login,
                        access: false,
                        error: payload.error,
                    },
                };    
            }
            
        case LOGOUT:
            return {
                ...state,
                login: {
                    ...state.login,
                    access: false,
                    error: null,
                },
            };  

        default:
            return {...state};
    };
};

export default rootReducer;