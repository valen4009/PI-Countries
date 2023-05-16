import axios from "axios";
import { GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_COUNTRY_BY_NAME, GET_ACTIVITIES, ADD_ACTIVITY  } from "./actions-types";

const SERVER_URL = "https://localhost:3001";

export const getCountries = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${SERVER_URL}/countries`);
            const data = response.data;
            const countries = data.map(country => {
                return{
                    id: country.id,
                    name: country.name,
                    flag: country.image,
                    continent: country.region,
                }
            });
            return dispatch({ type: GET_COUNTRIES, payload: countries });
        } catch (error) {
            console.log(error);
        };
    };
};

export const getCountryDetail = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${SERVER_URL}/countries/${id}`)
            const data = response.data;
            const country = data.map(country => {
                return{
                    id: country.id,
                    name: country.name,
                    flag: country.image,
                    region: country.region,
                    capital: country.capital,
                    continent: country.subregion,
                    area: country.area,
                    population: country.population,
                    activity: country.activity.map(activity => {
                        return{
                            id: activity.id,
                            name: activity.name,
                            difficult: activity.difficult,
                            duration: activity.duration,
                            season: activity.season,
                        }
                    }),
                }
            });
            return dispatch({ type: GET_COUNTRY_DETAIL, PAYLOAD: country });
        } catch (error) {
            console.log(error);    
        };
    };
};

export const getCountryByName = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${SERVER_URL}/countries/name?name=${name}`);
            const data = response.data;
            const countryName = data.map(country => {
                return{
                    id: country.id,
                    name: country.name,
                    flag: country.image,
                    continent: country.region,
                }
            });
            return dispatch({ type: GET_COUNTRY_BY_NAME, PAYLOAD: countryName });
        } catch (error) {
            console.log(error);  
        };
    };
};

export const getActivities = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${SERVER_URL}/activities`);
            const data = response.data;
            const activities = data.map(activity => {
                return{
                    id: activity.id,
                    name: activity.name,
                    difficult: activity.difficult,
                    duration: activity.duration,
                    season: activity.season,
                };
            });
            return dispatch({ type: GET_ACTIVITIES, PAYLOAD: activities });
        } catch (error) {
            console.log(error);
        };
    };
};

export const addActivity = (activityData) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${SERVER_URL}/activities`, activityData);
            const activity = response.data;
            return dispatch({ type: ADD_ACTIVITY, payload: activity });
        } catch (error) {
            console.log(error);
        };
    };
};