import React from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import styles from '../../assets/style/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WeatherDeck from './weatherDeck';
import * as HELPERS from '../utils/helpers';





class Weather extends React.Component {

    state = {
        units: 'C',
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

    render() {
        const { props } = this;
        const { units } = this.state;

        let fahrenheit = (props.selectedCard.temperature * 9 / 5) + 32;
        let iconName = HELPERS.ICONS_REF.find(item => item.condition === props.selectedCard.weatherCondition);

        console.log(props.selectedCard);

        let isToday;
        let date;
        let dateText;
        if (props.selectedCard) {
            isToday = new Date(props.selectedCard.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
            date = props.selectedCard.date.getDate().toString();
            dateText = props.selectedCard && isToday ? `Today` : date.substr(-1) === '1' ? `${date}st` : date.substr(-1) === '2' ? `${date}nd` : date.substr(-1) === '3' ? `${date}rd` : `${date}th`;

        }

        return (
            <View style={[styles.container, { backgroundColor: props.bg }]}>
                <View style={styles.dateAddContainer}>
                    {props.loading ? <Text>Loading...</Text> :
                        <Text style={[styles.textBold , styles.defaultText]}>
                            {/* {props.selectedCard && new Date(props.selectedCard.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0) ? "Today" : `${props.selectedCard.day.substr(0, 3)}, ${props.selectedCard.date.getDate()} ${props.selectedCard.month.substr(0, 3)}, ${props.selectedCard.date.getFullYear()} `} */}
                            {!!isToday && dateText}
                            {!isToday && `${props.selectedCard.day.substr(0, 3)}, ${dateText} ${props.selectedCard.month.substr(0, 3)} ${props.selectedCard.date.getFullYear()}`}
                        </Text>
                    }
                    {props.loading ? <Text>Loading...</Text> :
                        <Text style={[styles.textLight, , styles.defaultText, styles.testBg, styles.viewShadow]}>
                            {props.selectedCard.city},&nbsp;
                        <Text style={styles.textBold}>
                                {props.selectedCard.countryCode}
                            </Text>
                        </Text>
                    }
                </View>
                <View style={styles.weatherContainer}>
                    <View style={styles.weatherMain}>
                        <Text style={[styles.weather, styles.majorText]}>
                            {props.selectedCard.weatherCondition}
                            <MaterialCommunityIcons size={48} name={iconName ? iconName.icon : null} color={'#fff'} />
                        </Text>
                        <Text
                            style={[styles.tempText, styles.megaText, styles.textBold, styles.textShadow]}
                            onPress={() => this.toggleUnits()}
                        >
                            {units === "C" ?
                                (`${props.selectedCard.temperature}˚C`) :
                                (`${fahrenheit}˚F`)
                            }
                        </Text>
                    </View>
                    <View style={styles.weatherInfoBar}>

                        <Text style={[styles.tempText, styles.subText]}>
                            <MaterialCommunityIcons size={15} name={iconName ? iconName.icon : null} color={'#fff'} />
                            : 3%
                        </Text>
                        <Text style={[styles.tempText, styles.subText]}>
                            <MaterialCommunityIcons size={15} name={iconName ? iconName.icon : null} color={'#fff'} />
                            : 3%
                        </Text>
                        <Text style={[styles.tempText, styles.subText]}>
                            <MaterialCommunityIcons size={15} name={iconName ? iconName.icon : null} color={'#fff'} />
                            : 3%
                        </Text>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <WeatherDeck
                        loading={props.loading}
                        selectCard={props.selectCard}
                        selectedCard={props.selectedCard}
                        deck={props.deck}
                    />
                </View>
            </View>
        );
    }

};


export default Weather;
