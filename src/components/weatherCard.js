import React from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from '../../assets/style/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as CONSTANTS from '../utils/constants';

const WeatherCard = (props) => {
    // console.log(props)
    let iconName = CONSTANTS.ICONS_REF.find(item => item.condition === props.item.weatherCondition);


    let scaleValue = new Animated.Value(0); // declare an animated value
    const cardScale = scaleValue.interpolate({
        inputRange: [0, 0.25, 0.5, 1],
        outputRange: [1, 0.9, 1.2, 1]
    });
    let transformStyle = { transform: [{ scale: cardScale }] };
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

    function animate(params) {
        // alert("This");
        scaleValue.setValue(0);
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    }

    // console.log (new Date(props.item.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0),new Date(props.item.date).setHours(0, 0, 0, 0) , new Date().setHours(0, 0, 0, 0));
    let isToday =  props.item && new Date(props.item.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
    return (
        <AnimatedTouchable
            style={[transformStyle, isToday ? styles.selectedCard : styles.unselectedCard]}
            delayPressIn={100} delayPressOut={5} delayLongPress={5}
            onPressIn={() => {
                // alert("");
                animate();
            }}
            onPressOut={() => {
                props.action(props.item, props.index);
            }}
        >
            <View 
                style={styles.weatherCard}
            >
                <Text style={[styles.subText, styles.center, styles.tempText]}>

                    {
                       isToday ?
                        'Today ':
                            // props.item.day.substr(0, 3)
                            `${props.item.date.getDate()} ${props.item.date.getMonth() + 1} `
                    } 

                    {/* `${props.item.day.substr(0, 3)}, ${props.item.date.getDate()} ${props.item.month.substr(0, 3)}, ${props.item.date.getFullYear()} ` */}
                </Text>
                {/* <Text>{props.item.index}</Text>  */}
                <MaterialCommunityIcons style={styles.center} size={20} name={iconName ? iconName.icon : null} color={'#fff'} />
                <Text style={[styles.subText, styles.textBold, styles.center, styles.tempText]}>{props.item.temperature}˚C</Text>
            </View>
        </AnimatedTouchable>
    );
};


export default WeatherCard;
