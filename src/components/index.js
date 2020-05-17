
import React from 'react';
import { ImageBackground, Animated } from 'react-native';
import styles from '../../assets/style/styles';
import { connect } from 'react-redux';
import * as actions from '../store/'
import Weather from './weather';
import * as CONSTANTS from '../utils/constants';


class Index extends React.Component {
    state = {
        selectedCard: '',
        loading: true,
        bg: '',
        tint: '',
        fade: new Animated.Value(0.6),
    }


    componentDidMount() {

        let selection = CONSTANTS.WEATHER_REPORT.find(item => new Date(item.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
        let bg = CONSTANTS.updateBg(selection.weatherCondition);
        let image = bg.image
        let tint = bg.tint;
        this.setState({
            selectedCard: selection,
            bg: image,
            tint: tint,
            loading: false,
            fade: new Animated.Value(0.6),
        }, () => {
            this.fadeIn();
        })
    }

    selectCard = (item) => {
        // console.log(bg);
        let bg = CONSTANTS.updateBg(item.weatherCondition);
        let image = bg.image;
        let tint = bg.tint;
        this.setState({
            selectedCard: item,
            bg: image,
            tint: tint,
            fade: new Animated.Value(0.6),
        }, () => {
            this.fadeIn();
        });
    }


    fadeIn = () => {
        Animated.timing(this.state.fade, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    render() {
        const { loadingWeather, weatherStatus } = this.props;
        const { loading, selectedCard, bg, tint, fade } = this.state;
        
        return (            
                <Animated.View style={[styles.manager, { opacity: fade }]}>
                    <ImageBackground source={bg} style={styles.imageBackground} >
                        <Weather
                            bg={tint}
                            selectCard={this.selectCard}
                            selectedCard={selectedCard}
                            loading={loading}
                            deck={CONSTANTS.WEATHER_REPORT}
                        />
                    </ImageBackground>
                </Animated.View >            
        );
    }
}


const mapStateToProps = (weatherReducer) => {
    const { loadingWeather, weatherStatus } = weatherReducer;
    return {
        loadingWeather, weatherStatus,
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