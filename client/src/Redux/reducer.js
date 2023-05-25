import { GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_COUNTRY_BY_NAME, GET_ACTIVITIES, ADD_ACTIVITY, CHANGE_PAGE, ORDER_COUNTRIES, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY } from "./actions-types";

const initialState = {
    countries: [],
    countriesContinents:[],
    countriesActivities: [],
    countryDetail: {},
    activities: [],
    newActivity: "",
    page: 1,
};

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case GET_COUNTRIES:
            return{
                ...state,
                countries: payload,
                countriesContinents: payload,
                countriesActivities: payload
            }
        case GET_COUNTRY_DETAIL:
            return{
                ...state,
                countryDetail: payload
            }
        case GET_COUNTRY_BY_NAME:
            return{
                ...state,
                countries: payload
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                activities: payload  
            }
        case ADD_ACTIVITY:
            return{
                ...state,
                NewActivity: payload
            }
        case CHANGE_PAGE:
            return{
                ...state,
                page: payload
            }
        case ORDER_COUNTRIES:
            const { orderOption } = payload;
            let orderCountries

            if (orderOption === 'name_asc') {
                orderCountries = [...state.countries].sort((a, b) =>
                a.name.localeCompare(b.name)
                );
                } else if (orderOption === 'name_desc') {
                    orderCountries = [...state.countries].sort((a, b) =>
                    b.name.localeCompare(a.name)
                    );
                } else if (orderOption === 'population_asc') {
                    orderCountries = [...state.countries].sort((a, b) => 
                    a.population - b.population
                    );
                } else if (orderOption === 'population_desc') {
                    orderCountries = [...state.countries].sort((a, b) => 
                    b.population - a.population
                    );
                } else {
                    orderCountries = [...state.countries];
                }
            return {
                ...state,
                countries: orderCountries,
            };
        case FILTER_BY_CONTINENT:
            const continent = payload
            const allCountriesFiltered = state.countriesContinents;
            const filterByContinent = continent === 'all' ? allCountriesFiltered : allCountriesFiltered.filter(country => country.region === continent)
            return {
                ...state, 
                countries: filterByContinent
            };
        case FILTER_BY_ACTIVITY:
            const activity = payload
            const countriesFiltered = state.countriesActivities;
            const filterCountries = activity === 'all' ? countriesFiltered :  countriesFiltered.filter(country => country.Activities.length && country.Activities.some(act => act.id === Number(activity)))
            return {
                ...state, 
                countries: filterCountries
            };
            default:
                return{
                    ...state,
                };
    };
};

export default reducer;