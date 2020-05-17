import React from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import styles from '../../assets/style/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WeatherDeck from './weatherDeck';
import * as CONSTANTS from '../utils/constants';





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
        let iconName = CONSTANTS.ICONS_REF.find(item => item.condition === props.selectedCard.weatherCondition);

        console.log(props.selectedCard);

        return (
            <View style={[styles.container, {backgroundColor: props.bg}]}>
                <View style={styles.dateAddContainer}>
                    {props.loading ? <Text>Loading...</Text> :
                        <Text style={[styles.textBold, styles.defaultText]}>
                            {props.selectedCard && new Date(props.selectedCard.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0) ? "Today" : `${props.selectedCard.day.substr(0, 3)}, ${props.selectedCard.date.getDate()} ${props.selectedCard.month.substr(0, 3)}, ${props.selectedCard.date.getFullYear()} `}
                        </Text>
                    }
                    {props.loading ? <Text>Loading...</Text> :
                        <Text style={[styles.textLight, , styles.defaultText, styles.testBg]}>
                            {props.selectedCard.city},&nbsp;
                        <Text style={styles.textBold}>
                                {props.selectedCard.countryCode}
                            </Text>
                        </Text>
                    }
                </View>
                <View style={styles.weatherContainer}>
                    <Text style={[styles.weather, styles.majorText]}>
                        {props.selectedCard.weatherCondition}
                        <MaterialCommunityIcons size={48} name={iconName ? iconName.icon : null} color={'#fff'} />
                    </Text>
                    <Text
                        style={[styles.tempText, styles.megaText, styles.textBold]}
                        onPress={() => this.toggleUnits()}
                    >
                        {units === "C" ?
                            (`${props.selectedCard.temperature}˚C`) :
                            (`${fahrenheit}˚F`)
                        }
                    </Text>

                    <Text style={styles.subText}>
                        Expecting
                        <Text style={styles.textBold}>
                            &nbsp;Rain&nbsp;
                        </Text>
                        in 2 hours
                    </Text>
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
