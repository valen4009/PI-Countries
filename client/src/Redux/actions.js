import axios from "axios";
import { GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_COUNTRY_BY_NAME, GET_ACTIVITIES, ADD_ACTIVITY, CHANGE_PAGE, ORDER_COUNTRIES, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY } from "./actions-types";

const SERVER_URL = "http://localhost:3001";

export const getCountries = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${SERVER_URL}/countries`);
            const data = response.data;
            return dispatch({ type: GET_COUNTRIES, payload: data });
        } catch (error) {
            alert("this country has not been found")
        };
    };
};

export const getCountryByName = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${SERVER_URL}/countries/name?name=${name}`);
            const data = response.data;
            return dispatch({ type: GET_COUNTRY_BY_NAME, payload: data });
        } catch (error) {
            alert("this country has not been found")
        };
    };
};

export const getCountryDetail = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${SERVER_URL}/countries/${id}`)
            const data = response.data;
            return dispatch({ type: GET_COUNTRY_DETAIL, payload: data });
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
            return dispatch({ type: GET_ACTIVITIES, payload: data });
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

export const changePage = (pageNumber) => {
    return {
      type: CHANGE_PAGE,
      payload: pageNumber,
    };
};

export const orderCountries = (orderOption) => {
    return{
        type: ORDER_COUNTRIES,
        payload: {orderOption}
    };
};

export const filterByContinent = (payload) => {
    return{
        type: FILTER_BY_CONTINENT,
        payload,
    }
}

export const filterByActivity = (activity) => {
    return{
        type: FILTER_BY_ACTIVITY,
        payload: activity
    }
}