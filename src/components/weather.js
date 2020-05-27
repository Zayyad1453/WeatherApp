import React from 'react';
import { View, Text, Animated, Easing, TouchableHighlight } from 'react-native';
import styles from '../../assets/style/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WeatherDeck from './weatherDeck';
import SearchCard from './searchCard';
import * as HELPERS from '../utils/helpers';
import HourlyModal from '../components/hourlyModal'
import {
    MenuProvider, Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
// import Modal, { ModalContent } from 'react-native-modals';


class Weather extends React.Component {

    state = {
        units: 'C',
        showMore: false,
        hourlyData: '',
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

    showHourly = (hourlyData) => {
        this.setState({
            showMore: true,
            hourlyData: hourlyData,
        })
    }

    render() {
        const { props } = this;
        const { units, showMore, hourlyData } = this.state;

        let fahrenheit;
        let fahrenheitLow;
        let ref;
        let iconName;
        let weatherCondition;
        if (props.selectedCard) {
            // console.log('here', props.selectedCard)
            fahrenheit = ((props.selectedCard.temperatureHigh * 9 / 5) + 32).toFixed(1);
            fahrenheitLow = ((props.selectedCard.temperatureLow * 9 / 5) + 32).toFixed(1);
            // let iconName = HELPERS.ICONS_REF.find(item => item.condition === props.selectedCard.weatherCondition);
            ref = HELPERS.IMAGES_REF[props.selectedCard.icon];
            iconName = ref.icon;
            weatherCondition = ref.name;
        }

        // console.log('inWeatherJS', props.selectedCard);
        // console.log('locding', props.loading);


        let isToday;
        let date;
        let dateText;
        if (props.selectedCard) {
            isToday = new Date(props.selectedCard.time).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
            date = props.selectedCard.date.toString();
            dateText = props.selectedCard && isToday ? `Today` : date.substr(-1) === '1' ? `${date}st` : date.substr(-1) === '2' ? `${date}nd` : date.substr(-1) === '3' ? `${date}rd` : `${date}th`;
        }

        const optionStyles = {
            optionTouchable: {
                underlayColor: '#EDEDED',
                justifyContent: 'space-evenly',
                activeOpacity: 40,
            },
            optionWrapper: {
                flexDirection: 'row',
                backgroundColor: '#EEE',
                justifyContent: 'space-evenly',
                margin: 5,
            },
            optionText: {
                color: 'black',
            },
        };
        return (
            <MenuProvider>
                <View style={[styles.container, { backgroundColor: 'rgba(0,0,0,0.25)' }]}>
                    <View style={styles.dateAddContainer}>
                        <SearchCard
                            location={props.location}
                            selectLocation={props.selectLocation}
                        />
                        {!props.loading &&
                            <Text style={[styles.textBold, styles.defaultText, styles.marginSm, { flex: 1 }]}>
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

                            <Menu>
                                <MenuTrigger>
                                    <View style={styles.weatherInfoBarItem}>
                                        <MaterialCommunityIcons size={20} name={'water-percent'} color={'#fff'} />
                                        <Text style={[styles.tempText, styles.subText, { lineHeight: 18 }]}>
                                            &nbsp;
                                         {props.selectedCard.humidity}
                                        </Text>
                                    </View>
                                </MenuTrigger>
                                <MenuOptions style={[styles.viewShadow, styles.tooltip]}>
                                    <MenuOption
                                        customStyles={optionStyles}
                                    >
                                        <MaterialCommunityIcons size={20} name={'water-percent'} color={'#000'} />
                                        <Text>
                                            Humidity
                                            </Text>
                                        <Text style={{ lineHeight: 18 }}>
                                            &nbsp;
                                                {props.selectedCard.humidity}
                                        </Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>


                            <Menu>
                                <MenuTrigger>
                                    <View style={styles.weatherInfoBarItem}>
                                        <MaterialCommunityIcons size={20} name={'weather-windy'} color={'#fff'} />
                                        <Text style={[styles.tempText, styles.subText, { lineHeight: 20 }]}>
                                            &nbsp;
                                        {props.selectedCard.windSpeed} Mps
                                </Text>
                                    </View>
                                </MenuTrigger>
                                <MenuOptions style={[styles.viewShadow, styles.tooltip]}>
                                    <MenuOption
                                        customStyles={optionStyles}
                                    >
                                        <MaterialCommunityIcons size={20} name={'weather-windy'} color={'#000'} />
                                        <Text>Wind Speed</Text>
                                        <Text style={{ lineHeight: 20 }}>
                                            &nbsp;
                                            {props.selectedCard.windSpeed} Mps
                                                </Text>

                                    </MenuOption>
                                </MenuOptions>
                            </Menu>



                            <Menu>
                                <MenuTrigger>
                                    <View style={styles.weatherInfoBarItem}>
                                        <MaterialCommunityIcons size={20} name={'eye-off'} color={'#fff'} />
                                        <Text style={[styles.tempText, styles.subText, { lineHeight: 20 }]}>
                                            &nbsp;
                             {props.selectedCard.visibility} Km
                        </Text></View>
                                </MenuTrigger>
                                <MenuOptions style={[styles.viewShadow, styles.tooltip]}>
                                    <MenuOption
                                        customStyles={optionStyles}
                                    >


                                        <MaterialCommunityIcons size={20} name={'eye-off'} color={'#000'} />
                                        <Text>Visibility</Text>
                                        <Text style={{ lineHeight: 20 }}>
                                            &nbsp;
                                            {props.selectedCard.visibility} Km
                                        </Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>

                        </View>
                    </View>
                    <View style={styles.bodyContainer}>
                        <WeatherDeck
                            loading={props.loading}
                            selectCard={props.selectCard}
                            selectedCard={props.selectedCard}
                            deck={props.deck}
                            iconsRef={props.iconsRef}
                            firstIndex={props.firstIndex}
                        />
                    </View>
                </View>

                <HourlyModal
                    showMore={showMore}
                    hourlyData={hourlyData}
                />
            </MenuProvider>



        );
    }

};


export default Weather;
