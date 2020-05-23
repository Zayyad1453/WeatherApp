import React from 'react';
import { View, Text, Animated, Easing, TouchableHighlight } from 'react-native';
import styles from '../../assets/style/styles';
import * as CONSTANTS from '../utils/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const SearchCard =(props)=> {
    // render() {
        // const { location, getWeather } = this.props;
        return (
            <View style={{flex:1}}>
                <GooglePlacesAutocomplete
                    // placeholder='Search'
                    container={[styles.viewShadow, styles.testBg, {flex: 1}]}
                    textInput={[styles.textLight, styles.defaultText, styles.testBg, styles.viewShadow]}
                    placeholder={"Search Locations"}
                    currentLocation={true}
                    fetchDetails={true}
                    // listViewDisplayed=
                    onPress={(data, details = null) => {
                        console.log(data)
                        console.log(details)
                        props.getWeather(details)
                        // alert(data, details);
                    }}

                    getDefaultValue={
                        () => props.location.toString()
                    }
                    
                    requestUrl={
                        {
                            url: `${CONSTANTS.PROXY}https://maps.googleapis.com/maps/api`,
                            useOnPlatform: 'web'
                        }
                    }
                    query={{
                        key: CONSTANTS.GOOGLE_PLACES_API_KEY,
                        language: 'en',
                        types: '(cities)'
                    }}
                    styles={{
                        container: [{ flex: 1, flexDirection: 'row' }, styles.testBg,],
                        textInputContainer: [styles.viewShadow, styles.testBg, { flex: 1 }],
                        textInput: [styles.textLight, styles.defaultTextBlack, styles.testBg,{ width: 50, flex: 1 }],
                        listView: [{ position: 'absolute', backgroundColor: '#FFF', zIndex: 9998, elevation: 9998, top: 50, alignSelf: 'stretch', backgroundColor: 'blue', left: 0, right: 0, }, styles.viewShadow],
                        row: [styles.testBg, { zIndex: 9999, elevation: 9999,  backgroundColor: 'orange' }],
                        separator: [{height: 0, width: 0}]
                    }}
                />

            </View>
        );
    // }
};
 

export default SearchCard;
