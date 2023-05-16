import { GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_COUNTRY_BY_NAME, GET_ACTIVITIES, ADD_ACTIVITY  } from "./actions-types";

const initialState = {
    countries: [],
    country: {},
    activities: [],
    newActivity: "",
};

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case GET_COUNTRIES:
            return{
                ...state,
                countries: payload
            }
        case GET_COUNTRY_DETAIL:
            return{
                ...state,
                countryDetail: payload
            }
        case GET_COUNTRY_BY_NAME:
            return{
                ...state,
                country: payload
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                activities: payload  
            }
        case ADD_ACTIVITY:
            return{
                ...state,
                activity: payload
            }
        default:
            return {...state}
    }
}

export default reducer;