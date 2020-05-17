import { combineReducers } from 'redux';
import * as actionTypes from '../action/actionTypes';

const INITIAL_STATE = {
    loading: false,
    weatherReport: [],
};

const weatherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case actionTypes.LOADING_WEATHER:
            // console.log('here3');
            return {
                ...state,
                loading: true,
            }
        case actionTypes.WEATHER_STATUS:
            return {
                ...state,
                weatherReport: action.payload.data,
                loading: false,
            }
        default:
            return state
    }
};
export default weatherReducer;

// export default combineReducers({
//     weather: weatherReducer,
// });