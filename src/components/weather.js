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

    toggleHourly = () => {
        this.setState({
            showMore: !this.state.showMore,
        })
    }

    render() {
        // const { props } = this;
        const {
            selectCard, selectedCard, deck,
            location, selectLocation,
            loading,
            iconsRef, firstIndex,
            hourlyData, bg,
        } = this.props;

        const { units, showMore } = this.state;

        let fahrenheit;
        let fahrenheitLow;
        let ref;
        let iconName;
        let weatherCondition;
        if (selectedCard) {
            // console.log('here', selectedCard)
            fahrenheit = ((selectedCard.temperatureHigh * 9 / 5) + 32).toFixed(1);
            fahrenheitLow = ((selectedCard.temperatureLow * 9 / 5) + 32).toFixed(1);
            // let iconName = HELPERS.ICONS_REF.find(item => item.condition === selectedCard.weatherCondition);
            ref = HELPERS.IMAGES_REF[selectedCard.icon];
            iconName = ref.icon;
            weatherCondition = ref.name;
        }

        let isToday;
        let date;
        let dateText;
        if (selectedCard) {
            isToday = new Date(selectedCard.time).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
            date = selectedCard.date.toString();
            dateText = selectedCard && isToday ? `Today` : date.substr(-1) === '1' ? `${date}st` : date.substr(-1) === '2' ? `${date}nd` : date.substr(-1) === '3' ? `${date}rd` : `${date}th`;
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
                            location={location}
                            selectLocation={selectLocation}
                        />
                        {!loading &&
                            <Text style={[styles.textBold, styles.defaultText, styles.marginSm, { flex: 1 }]}>
                                {/* {selectedCard && new Date(selectedCard.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0) ? "Today" : `${selectedCard.day.substr(0, 3)}, ${selectedCard.date.getDate()} ${selectedCard.month.substr(0, 3)}, ${selectedCard.date.getFullYear()} `} */}
                                {!!isToday && dateText}
                                {!isToday && `${selectedCard.day.substr(0, 3)}, ${dateText} ${selectedCard.month.substr(0, 3)} ${selectedCard.year}`}
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
                                {selectedCard.summary}
                            </Text>
                            <Text
                                style={[styles.tempText, styles.megaText, styles.textBold, styles.textShadow]}
                                onPress={() => this.toggleUnits()}
                            >
                                {units === "C" ?
                                    (`${selectedCard.temperatureHigh}˚C`) :
                                    (`${fahrenheit}˚F`)
                                }
                            </Text>
                            <Text style={[styles.textLight, styles.defaultText, styles.textBold, styles.textShadow, { textAlign: 'right' }]}>
                                /{units === "C" ?
                                    (`${selectedCard.temperatureLow}˚`) :
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
                                         {selectedCard.humidity}
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
                                                {selectedCard.humidity}
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
                                        {selectedCard.windSpeed} Mps
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
                                            {selectedCard.windSpeed} Mps
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
                             {selectedCard.visibility} Km
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
                                            {selectedCard.visibility} Km
                                        </Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>

                        </View>
                    </View>
                    <View style={styles.bodyContainer}>
                        <WeatherDeck
                            loading={loading}
                            selectCard={selectCard}
                            selectedCard={selectedCard}
                            deck={deck}
                            iconsRef={iconsRef}
                            firstIndex={firstIndex}
                            showHourly={this.toggleHourly}
                            toggleUnits={this.toggleUnits}
                            units={units}
                        />
                    </View>
                </View>

                <HourlyModal
                    showMore={showMore}
                    hourlyData={hourlyData}
                    hideHourly={this.toggleHourly}
                    iconsRef={iconsRef}
                    toggleUnits={this.toggleUnits}
                    units={units}
                    bg={bg}
                />
            </MenuProvider>



        );
    }

};


export default Weather;
