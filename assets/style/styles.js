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
        alignItems: 'flex-start',
        borderTopWidth: 10,
    },
    tempText: {
        color: '#fff'
    },
    bodyContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    weatherCardContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    weatherCard: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // width: 60,
        margin: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
    
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 0,
        },
        shadowOpacity: 0.9,
        shadowRadius: 4.00,

        elevation: 24,
    },
    selectedCard: {
        borderColor: '#FF0000',
    },
    unselectedCard: {
        borderColor: '#FFF',
    }


});
export default styles;