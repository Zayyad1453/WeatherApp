import React from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from '../../assets/style/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as CONSTANTS from '../utils/constants';

const WeatherCard = (props) => {
    // console.log(props)
    let iconName = props.iconsRef[props.item.icon].icon;


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
    let isToday =  new Date(props.item.time).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);


    let date = props.item.date.toString();
    const dateText = props.item && isToday ? `Today` :  date.substr(-1) === '1' ? `${date}st` : date.substr(-1) === '2' ? `${date}nd` : date.substr(-1) === '3' ? `${date}rd` : `${date}th`;
    // const dateText = new Date(props.item.date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0) ? `Today` :  date.substr(-1) === '1' ? ` st` : date.substr(-1) === '2' ? ` nd` : date.substr(-1) === '3' ? ` rd` : ` th`;
    // const dateText = false ? 'this' : true ? 'that' : 'those';
    // const textObj = <Text>{dateText}</Text>
    return (
        <AnimatedTouchable
            style={transformStyle}
            delayPressIn={100} delayPressOut={100} delayLongPress={100}
            onPressIn={() => {
                // alert("");
                animate();
            }}
            onPressOut={() => {
                props.action(props.item, props.index);
            }}
        >
            <View
                style={[styles.weatherCard, styles.viewShadow, isToday ? styles.selectedCard : styles.unselectedCard]}
            >
                {!!dateText && (<Text style={[styles.subText, styles.center, styles.tempText]}>

                    {dateText}

                </Text>)}

                <MaterialCommunityIcons style={styles.center} size={20} name={iconName} color={'#fff'} />
                <Text style={[styles.subText, styles.textBold, styles.center, styles.tempText]}>{props.item.temperatureHigh}˚C</Text>
            </View>
        </AnimatedTouchable>
    );
};


export default WeatherCard;
