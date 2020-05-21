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
    console.log('sws', outcome, loading, data)
    return {
        type: actionTypes.WEATHER_STATUS,
        outcome,
        loading,
        data
    }
};

const weatherCall = (dates, currentState) => {
    return (dispatch) => {

        // const cors = 'https://cors-anywhere.herokuapp.com/';
        // const url = 'https://api.darksky.net/forecast/8b01861d3b06ab86ba285ef08d52c88d/45.5898,-122.5951,2020-05-01T00:00:00?exclude=currently,hourly,flags';
        
        for (let i = 11; i <= 13; i++) {
            console.log('weatherCall', dates[0], currentState);
            let queryDate = `${dates[i].getFullYear()}-${dates[i].getMonth() + 1 < 10 ? "0" + (dates[i].getMonth() + 1) : dates[i].getMonth() + 1}-${dates[i].getDate() < 10 ? "0" + dates[i].getDate() : dates[i].getDate()}`;
            console.log(queryDate);
            const cors = 'https://cors-anywhere.herokuapp.com/';
            const url = `https://api.darksky.net/forecast/8b01861d3b06ab86ba285ef08d52c88d/45.5898,-122.5951,${queryDate}T00:00:00`;

            axios.get(cors + url)
                .then(response => {
                    if (response.status === 200) {
                        const resp = cloneDeep(response.data.daily.data[0]);
                        currentState.push(resp);
                        dispatch(setWeatherStatus('success', false, currentState));
                    } else {
                        console.log(response.status);
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
    }
}

export const getWeather = (data) => {
    return (dispatch, getState) => {
        dispatch(loadingWeatherReport(true));
        // console.log('here2');
        // const url = HELPERS.HISTORY_URL + data + HELPERS.API_KEY;
        let weatherState = [...getState().weatherReport];
        console.log('in getWeather', getState().weatherReport);

        dispatch(weatherCall(HELPERS.DATES, weatherState));
    }
};
