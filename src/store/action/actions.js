import { cloneDeep } from 'lodash';
import * as actionTypes from './actionTypes';
import * as CONSTANTS from '../../utils/constants';
import axios from 'react-native-axios';

const loadingWeatherReport = (loading) => {
    return {
        type: actionTypes.LOADING_WEATHER,
        loading
    } 
};

const setWeatherStatus = (outcome, loading, data) => {
    return {
        type: actionTypes.WEATHER_STATUS,
        outcome,
        loading,
        data
    }
};

export const getWeather = (data) => {
    return dispatch => {
        dispatch(loadingWeatherReport(true));
        // console.log('here2');
        // const url = CONSTANTS.HISTORY_URL + data + CONSTANTS.API_KEY;
        const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=50&lon=50&appid=4cb55903eaf440177d406b075274d0c1';
        console.log('in getWeather', url);
        axios.get(url)
            .then(response => {
                // console.log('r', response)
                if (response.data.responseCode === '200') {
                    console.log('here2');
                    const resp = cloneDeep(response.data);
                    dispatch(setWeatherStatus('success', false, resp.data));
                    dispatch(loadingWeatherReport(false));
                } else {
                    console.log(response.data.message);
                    dispatch(setWeatherStatus('error', false));
                    dispatch(loadingWeatherReport(false));
                }
            })
            .catch(error => {
                console.log(error);
                dispatch(setWeatherStatus('error', false));
                dispatch(loadingWeatherReport(false));
            });
    }
};
