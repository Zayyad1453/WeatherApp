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
        const limit = dates.length;
        for (let i = 0; i < limit; i++) {
            // console.log('weatherCall', i, dates.length, currentState);
            let queryDate = `${dates[i].getFullYear()}-${dates[i].getMonth() + 1 < 10 ? "0" + (dates[i].getMonth() + 1) : dates[i].getMonth() + 1}-${dates[i].getDate() < 10 ? "0" + dates[i].getDate() : dates[i].getDate()}`;
            const url = `${CONSTANTS.DARKSKY_BASE_URL}/${CONSTANTS.DARKSKY_API_KEY}/${latitude},${longitude},${queryDate}T00:00:00?exclude=currently,minutely,hourly,flags,alerts&units=si`;

            if (Platform.OS !== 'android' && Platform.OS !== 'ios') {
                url = CONSTANTS.PROXY + url
            }

            // console.log('url', url);
            axios.get(url)
                .then(response => {
                    // console.log('response', response.data.daily)
                    if (response.status === 200) {
                        const resp = cloneDeep(response.data.daily.data[0]);
                        // console.log('weatherCall', i, currentState.length, limit);
                        currentState.push(resp);
                        if (currentState.length === limit) {
                            // console.log('currentState', currentState);
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
        // let weatherState = [...getState().weatherReport];
        let weatherState = [];
        let latitude;
        let longitude;

        if (data.coords) {
            latitude = data.coords.latitude;
            longitude = data.coords.longitude;
        } else {
            // console.log("in search", data.geometry.location.lat,data.geometry.location.lng)
            latitude = data.geometry.location.lat;
            longitude = data.geometry.location.lng;
        }

        dispatch(weatherCall(HELPERS.DATES, weatherState, latitude, longitude));
    }
};
