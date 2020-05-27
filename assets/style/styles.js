import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    manager: {
        flex: 1,
        // justifyContent: 'center',
        zIndex: 1,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    subText: {
        fontSize: 15,
        fontWeight: '300',
    },
    defaultText: {
        fontSize: 20,
        color: '#ddd',
    },
    defaultTextBlack: {
        fontSize: 20,
        color: '#000',
    },
    paddingSm: {
        padding: 10,
    },
    marginSm: {
        marginTop: 20,
    },
    majorText: {
        fontSize: 48,
    },
    megaText: {
        fontSize: 90,
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
        textAlign: 'center',
    },
    viewShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 3,
        shadowRadius: 1,
        elevation: 2,
        zIndex: 99,
    },
    textShadow: {
        textShadowColor: '#111',
        textShadowOffset: { width: 1, height: 4 },
        textShadowRadius: 1,
        elevation: 2,
        zIndex: 99,
    },
    container: {
        padding: 30,
        flex: 1,
    },
    dateAddContainer: {
        flex: 1,
        flexDirection: 'column',
        zIndex: 3,
        elevation: 3,
    },
    testBg: {
        backgroundColor: '#FFF',
    },
    weatherContainer: {
        flex: 3,
        // borderTopWidth: 3,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    weatherMain: {
        flex: 1,
        flexGrow: 1,
    },
    weatherInfoBar: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',       
        padding: 10,
        borderRadius: 4,
    },
    weatherInfoBarItem: {
        flexDirection: 'row',
    },
    tempText: {
        color: '#ddd'
    },
    bodyContainer: {
        // flex: 1,
        // alignItems: '',
    },
    weatherCardContainer: {
        alignSelf: 'stretch',
        overflow: 'hidden',
        marginRight: 30,
        marginLeft: -30,
    },
    weatherCard: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 110,
        margin: 2,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 3,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    selectedCard: {        
        borderColor: '#fff',
        borderWidth: 2,
    },
    unselectedCard: {
        borderColor: '#FFF',
    },
    tooltip: {
        backgroundColor: '#808080',
        justifyContent: 'space-between',
    }

});
export default styles;