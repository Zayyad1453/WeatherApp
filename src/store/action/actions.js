import { cloneDeep } from 'lodash';
import * as actionTypes from './actionTypes';
import * as CONSTANTS from '../../utils/constants';
import * as HELPERS from '../../utils/helpers';
import axios from 'react-native-axios';
import { PLatfrom, Platform } from 'react-native'

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

const setLocation = (data) => {
    return {
        type: actionTypes.LOCATION_STATUS,
        data,
    }
}

const weatherCall = (dates, currentState, latitude, longitude) => {
    return (dispatch) => {

        // const cors = 'https://cors-anywhere.herokuapp.com/';
        // const url = 'https://api.darksky.net/forecast/8b01861d3b06ab86ba285ef08d52c88d/45.5898,-122.5951,2020-05-01T00:00:00?exclude=currently,hourly,flags';

        for (let i = 11; i <= 13; i++) {
            // console.log('weatherCall', dates[0], currentState);
            let queryDate = `${dates[i].getFullYear()}-${dates[i].getMonth() + 1 < 10 ? "0" + (dates[i].getMonth() + 1) : dates[i].getMonth() + 1}-${dates[i].getDate() < 10 ? "0" + dates[i].getDate() : dates[i].getDate()}`;

            const url = `${CONSTANTS.DARKSKY_BASE_URL}/${CONSTANTS.DARKSKY_API_KEY}/${latitude},${longitude},${queryDate}T00:00:00?exclude=currently,hourly,flags&units=si`;

            if (Platform.OS !== 'android' && Platform.OS !== 'ios') {
                url = CONSTANTS.PROXY + url
            }

            console.log('url', url);
            axios.get(url)
                .then(response => {
                    if (response.status === 200) {
                        const resp = cloneDeep(response.data.daily.data[0]);
                        console.log('waiting for 3');
                        currentState.push(resp);
                        if (currentState.length === 3) {
                            console.log('currentState', currentState);
                            currentState = HELPERS.addDates(currentState);
                            dispatch(setLocation(response.data.timezone));
                            dispatch(setWeatherStatus('success', false, currentState));
                        }

                    } else {
                        console.log('response', response.status);
                        dispatch(setWeatherStatus('not 200', false));
                        dispatch(loadingWeatherReport(false));
                    }
                })
                .catch(error => {
                    console.log('error', error);
                    dispatch(setWeatherStatus('error', false));
                    dispatch(loadingWeatherReport(false));
                });
        }
    }
}

export const getWeather = (data) => {
    return (dispatch, getState) => {
        dispatch(loadingWeatherReport(true));

        // const url = HELPERS.HISTORY_URL + data + HELPERS.API_KEY;
        // let weatherState = [...getState().weatherReport];
        let weatherState = [];
        let latitude;
        let longitude;

        if (data.coords) {
            latitude = data.coords.latitude;
            longitude = data.coords.longitude;
        } else {
            console.log("in search", data.geometry.location.lat,data.geometry.location.lng)
            // weatherState = [];
            latitude = data.geometry.location.lat;
            longitude = data.geometry.location.lng;
        }

        dispatch(weatherCall(HELPERS.DATES, weatherState, latitude, longitude));
    }
};
