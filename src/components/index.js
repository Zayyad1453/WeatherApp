
import React from 'react';
import { ImageBackground, Animated, ActivityIndicator, Modal, Linking, Platform, View, KeyboardAvoidingView, Dimensions, ScrollView, AppState } from 'react-native';
import styles from '../../assets/style/styles';
import { connect } from 'react-redux';
import * as actions from '../store/'
import Weather from './weather';
import * as IntentLauncher from 'expo-intent-launcher';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location'
import * as HELPERS from '../utils/helpers';
import ErrorModal from '../components/errorModal';


class Index extends React.Component {
    state = {
        appState: AppState.currentState,
        location: '',
        // openSettings: true,
        showLocationError: false,
        selectedCard: '',
        bg: '',
        fade: new Animated.Value(0.6),
        weatherReport: '',
        firstIndex: 0,
    }


    componentDidMount() {
        // this.props.getWeather();
        // let selection = HELPERS.WEATHER_REPORT.find(item => new Date(item.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));        
        // if (AppState._eventHandlers.change.size === 0) {
        AppState.addEventListener('change', this.handleAppStateChange)
        // }
        this.fetchLocation();

    }

    componentWillUnmount() {
        console.log('unmounting');
        AppState.removeEventListener('change', this.handleAppStateChange)
    }

    handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active' && this.state.openSettings) {
            // console.log('App has come to the foreground!');
            this.fetchLocation();
        }
        this.setState({ appState: nextAppState });
    }

    fetchLocation = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        // console.log('before', status, this.state.showLocationError);
        if (status !== 'granted' && !this.state.showLocationError) {
            this.toggleLocationError(true);
            // console.log('inside', status, this.state.showLocationError);
            return;
        } else {
            const location = await Location.getCurrentPositionAsync();
            // console.log('location',location);
            if (location) {
                this.props.getWeather(location)
            }
        }
    }

    toggleLocationError = (bool) => {
        // alert('here2',this.state.showLocationError)
        this.setState({
            showLocationError: bool,
        }, () => {
            // alert('here3', this.state.showLocationError)
            return;
        })
    }

    openSettings = async () => {
        this.toggleLocationError(false);
        if (Platform.OS === 'ios') {
            Linking.openURL('app-settings:')
        } else {
            const intent = await IntentLauncher.startActivityAsync(
                IntentLauncher.ACTION_LOCATION_SOURCE_SETTINGS
            )
        }
        this.setState({
            openSettings: true,
        })
    }

    static getDerivedStateFromProps(props, state) {
        if (props.weatherReport && (props.weatherReport !== state.weatherReport)) {
            let bg;
            let image;

            let selection;
            let index;
            if (props.weatherReport.length > 0) {
                // console.log('data in report present')
                selection = props.weatherReport.find(item => new Date(item.time).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
                index = props.weatherReport.findIndex(item => new Date(item.time).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
                bg = HELPERS.IMAGES_REF[selection.icon];
                image = bg.img;
            }
            return {
                selectedCard: selection,
                bg: image,
                fade: new Animated.Value(1),
                weatherReport: props.weatherReport,
                iconsRef: HELPERS.IMAGES_REF,
                firstIndex: index,
            };
        }
        return null;
    }


    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log('indexerror', error, errorInfo);
    }

    selectCard = (item) => {
        let bg = HELPERS.IMAGES_REF[item.icon];
        let image = bg.img;
        this.setState({
            selectedCard: item,
            bg: image,
            fade: new Animated.Value(0.6),
        }, () => {
            this.fadeIn();
        });
    }

    selectLocation = (data) => {
        // let image = "";
        this.setState({
            // bg: image,
            fade: new Animated.Value(0.6),
        }, () => {
            this.fadeIn();
            this.props.getWeather(data)
        });
    }

    fadeIn = () => {
        Animated.timing(this.state.fade, {
            toValue: 0.9,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    render() {
        const { loading, weatherReport, location, hourlyReport } = this.props;
        const { selectedCard, firstIndex, bg, fade, iconsRef, showLocationError } = this.state;
        // console.log('reducer', loading, weatherReport, location)

        let hourlyData;
        if (hourlyReport && selectedCard) {
            hourlyReport.forEach(item => {
                hourlyData = hourlyReport.find(x => new Date(x.data[0].time * 1000).setHours(0, 0, 0, 0) === new Date(selectedCard.time).setHours(0, 0, 0, 0));
            })
        }

        return (
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps='handled'
            >
                <Animated.View style={[styles.manager, { opacity: fade }]}>

                    {showLocationError ?
                        <ErrorModal
                            showLocationError={showLocationError}
                            openSettings={this.openSettings}
                        />
                        :
                        <ImageBackground source={bg} style={styles.imageBackground} >
                            {
                                loading ?
                                    <ActivityIndicator size="large" color="#000" /> :
                                    <Weather
                                        selectCard={this.selectCard}
                                        selectedCard={selectedCard}
                                        hourlyData={hourlyData}
                                        loading={loading}
                                        location={location}
                                        selectLocation={this.selectLocation}
                                        // deck={HELPERS.WEATHER_REPORT}
                                        deck={weatherReport}
                                        iconsRef={iconsRef}
                                        firstIndex={firstIndex}
                                        bg={bg}
                                    />
                            }
                        </ImageBackground>
                    }

                </Animated.View >
            </ScrollView>
        );
    }
}


const mapStateToProps = (weatherReducer) => {
    const { loading, weatherReport, location, hourlyReport } = weatherReducer;
    return {
        loading, weatherReport,
        location,
        hourlyReport,
    }
};

const mapDispatcherToProps = (dispatcher) => {
    return {
        getWeather: (data) => dispatcher(actions.getWeather(data))
    }
};

export default connect(
    mapStateToProps,
    mapDispatcherToProps
)(Index);