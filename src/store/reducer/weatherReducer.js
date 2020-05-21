import { combineReducers } from 'redux';
import * as actionTypes from '../action/actionTypes';

const INITIAL_STATE = {
    loading: false,
    weatherReport: [],
};

const weatherReducer = (state = INITIAL_STATE, action) => {
    const { type, outcome, loading, data } = action;
    switch (type) {
        case actionTypes.LOADING_WEATHER:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.WEATHER_STATUS:
            return {
                ...state,
                weatherReport: data,
                loading: loading,
            }
        default:
            return state
    }
};
export default weatherReducer;
