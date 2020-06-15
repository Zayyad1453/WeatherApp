import * as actionTypes from '../action/actionTypes';

const INITIAL_STATE = {
    loading: true,
    weatherReport: [],
    hourlyReport: [],
    location: ''
};

const weatherReducer = (state = INITIAL_STATE, action) => {
    const { type, outcome, loading, data } = action;
    switch (type) {
        case actionTypes.LOADING_WEATHER:
            return {
                ...state,
                loading: loading,
            }
        case actionTypes.WEATHER_STATUS:
            return {
                ...state,
                weatherReport: data,
                loading: loading,
            }
        case actionTypes.HOURLY_STATUS:
            return {
                ...state,
                hourlyReport: data,
            }
        case actionTypes.LOCATION_STATUS:
            return {
                ...state,
                location: data,
            }
        default:
            return state
    }
};
export default weatherReducer;
