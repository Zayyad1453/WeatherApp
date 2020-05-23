import React from 'react';
import { View, Text, Animated, Easing, TouchableHighlight } from 'react-native';
import styles from '../../assets/style/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WeatherDeck from './weatherDeck';
import SearchCard from './searchCard';
import * as HELPERS from '../utils/helpers';





class Weather extends React.Component {

    state = {
        units: 'C',
        showMore: false,
        condition: '',
        value: '',
        icon: '',
    }

    toggleUnits = () => {
        let currentUnit = this.state.units;
        let newUnit;
        if (currentUnit === "F") {
            newUnit = "C";
        } else if (currentUnit === "C") {
            newUnit = "F";
        }
        this.setState({
            units: newUnit,
        })
    }

    // showMore = (condition, value, icon) => {
    //     console.log('here')
    //     this.setState({
    //         showMore: true,
    //         condition: condition,
    //         value: value,
    //         icon: icon,
    //     }, () => {
    //         setTimeout() (this.setState({
    //             showMore: true,
    //             condition: '',
    //             value: '',
    //             icon: '',
    //         }),)
    //     }
    //     )

    // }

    render() {
        const { props } = this;
        const { units, showMore, condition, value, icon } = this.state;

        let fahrenheit;
        let fahrenheitLow;
        let ref;
        let iconName;
        let weatherCondition;
        if (props.selectedCard) {
            fahrenheit = ((props.selectedCard.temperatureHigh * 9 / 5) + 32).toFixed(1);
            fahrenheitLow = ((props.selectedCard.temperatureLow * 9 / 5) + 32).toFixed(1);
            // let iconName = HELPERS.ICONS_REF.find(item => item.condition === props.selectedCard.weatherCondition);
            ref = HELPERS.IMAGES_REF[props.selectedCard.icon];
            iconName = ref.icon;
            weatherCondition = ref.name;
        }

        console.log('inWeatherJS', props.selectedCard, props.location);


        let isToday;
        let date;
        let dateText;
        if (props.selectedCard) {
            isToday = new Date(props.selectedCard.time).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
            date = props.selectedCard.date.toString();
            dateText = props.selectedCard && isToday ? `Today` : date.substr(-1) === '1' ? `${date}st` : date.substr(-1) === '2' ? `${date}nd` : date.substr(-1) === '3' ? `${date}rd` : `${date}th`;
        }

        // console.log('showMore', showMore);
        return (
            <View style={[styles.container, { backgroundColor: props.bg }]}>
                <View style={styles.dateAddContainer}>
                    <SearchCard
                        location={props.location}
                        getWeather={props.getWeather}
                    />
                    {props.loading ? <Text>Loading...</Text> :
                        <Text style={[styles.textBold, styles.defaultText,styles.marginSm, { flex: 1 }]}>
                            {/* {props.selectedCard && new Date(props.selectedCard.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0) ? "Today" : `${props.selectedCard.day.substr(0, 3)}, ${props.selectedCard.date.getDate()} ${props.selectedCard.month.substr(0, 3)}, ${props.selectedCard.date.getFullYear()} `} */}
                            {!!isToday && dateText}
                            {!isToday && `${props.selectedCard.day.substr(0, 3)}, ${dateText} ${props.selectedCard.month.substr(0, 3)} ${props.selectedCard.year}`}
                        </Text>
                    }

                </View>
                <View style={styles.weatherContainer}>
                    <View style={styles.weatherMain}>
                        <Text style={[styles.weather, styles.majorText]}>
                            {weatherCondition}
                            <MaterialCommunityIcons size={48} name={iconName} color={'#fff'} />
                        </Text>
                        <Text style={styles.textLight, styles.subText, styles.tempText}>
                            {props.selectedCard.summary}
                        </Text>
                        <Text
                            style={[styles.tempText, styles.megaText, styles.textBold, styles.textShadow]}
                            onPress={() => this.toggleUnits()}
                        >
                            {units === "C" ?
                                (`${props.selectedCard.temperatureHigh}˚C`) :
                                (`${fahrenheit}˚F`)
                            }
                        </Text>
                        <Text style={[styles.textLight, styles.defaultText, styles.textBold, styles.textShadow, { textAlign: 'right' }]}>
                            /{units === "C" ?
                                (`${props.selectedCard.temperatureLow}˚`) :
                                (`${fahrenheitLow}˚`)

                            }</Text>
                    </View>
                    <View style={styles.weatherInfoBar}>
                        {/* 
                        {showMore ?
                            <View style={styles.weatherInfoBarItem} onPress={() => this.showMore('Humidity', props.selectedCard.humidity, 'water-percent')}>
                                <MaterialCommunityIcons size={20} name={icon} color={'#fff'} />
                            </View>
                            :
                            <TouchableHighlight style={styles.weatherInfoBarItem} onPress={() => this.showMore('Humidity', props.selectedCard.humidity, 'water-percent')}>
                                <View>
                                    <MaterialCommunityIcons size={20} name={'water-percent'} color={'#fff'} />
                                    <Text style={[styles.tempText, styles.subText, { lineHeight: 18 }]}>
                                        &nbsp;
                                    {props.selectedCard.humidity}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        } */}
                        <View style={styles.weatherInfoBarItem}>
                            <MaterialCommunityIcons size={20} name={'water-percent'} color={'#fff'} />
                            <Text style={[styles.tempText, styles.subText, { lineHeight: 18 }]}>
                                &nbsp;
                                    {props.selectedCard.humidity}
                            </Text>
                        </View>
                        <View style={styles.weatherInfoBarItem}>
                            <MaterialCommunityIcons size={20} name={'weather-windy'} color={'#fff'} />
                            <Text style={[styles.tempText, styles.subText, { lineHeight: 20 }]}>
                                &nbsp;
                             {props.selectedCard.windSpeed} Mps
                        </Text></View>
                        <View style={styles.weatherInfoBarItem}>
                            <MaterialCommunityIcons size={20} name={'eye-off'} color={'#fff'} />
                            <Text style={[styles.tempText, styles.subText, { lineHeight: 25 }]}>
                                &nbsp;
                             {props.selectedCard.visibility} Km
                        </Text></View>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <WeatherDeck
                        loading={props.loading}
                        selectCard={props.selectCard}
                        selectedCard={props.selectedCard}
                        deck={props.deck}
                        iconsRef={props.iconsRef}
                    />
                </View>
            </View>
        );
    }

};


export default Weather;
