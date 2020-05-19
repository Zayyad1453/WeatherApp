import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    manager: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    subText: {
        fontSize: 15,
        fontWeight: '300',
    },
    defaultText: {
        fontSize: 20,
        color: '#fff',
    },
    majorText: {
        fontSize: 48,
    },
    megaText: {
        fontSize: 100,
    },
    textLight: {
        fontWeight: '300',
    },
    textBold: {
        fontWeight: '700',
    },
    center: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    viewShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 3,
        shadowRadius: 0,
        elevation: 20,
        zIndex: 99,
    },
    textShadow: {
        textShadowColor: '#000',
        textShadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 3,
        shadowRadius: 0,
        elevation: 20,
        zIndex: 99,
    },
    container: {
        padding: 30,
        flex: 1,
        // backgroundColor: 'rgba(247,183,51,0.5)',//default
        // backgroundColor: 'rgba(252, 198, 3,0.5)',//new orange
        // backgroundColor: 'rgba(199, 254, 255,0.5)',//new cool blue
        // backgroundColor: 'rgba(47, 81, 130,0.5)',//new dark blue
        // backgroundColor: 'rgba(162, 186, 186,0.5)',//new grey blue

    },
    dateAddContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    testBg: {
        backgroundColor: '#FFF',
        color: '#000',
        padding: 10,
        transform: [
            { skewY: '-10deg' },
        ],
    },
    weatherContainer: {
        flex: 3,
        // alignItems: 'flex-start',
        borderTopWidth: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    weatherMain: {
        flex: 1,
        flexGrow: 1,
    },
    weatherInfoBar: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        // flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',        
        padding: 10,
        borderRadius: 4,
        // alignContent: 'space-between',
    },
    tempText: {
        color: '#fff'
    },
    bodyContainer: {
        // flex: 1,
        // alignItems: '',
    },
    weatherCardContainer: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-evenly',
        alignSelf: 'stretch',
        overflow: 'hidden',
        marginRight: 30,
        marginLeft: -30,
    },
    weatherCard: {
        // flex: 1,
        // flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 110,
        margin: 2,
        backgroundColor: 'rgba(0,0,0,0.5)',

        borderRadius: 3,
        // borderWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    selectedCard: {
        // borderColor: 'rgba(255,223,0,0.5)',
        borderColor: '#000',
        borderWidth: 2,
    },
    unselectedCard: {
        borderColor: '#FFF',
    }


});
export default styles;