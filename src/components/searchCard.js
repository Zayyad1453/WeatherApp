import React from 'react';
import { View, Text, ScrollView, TouchableHighlight, TextInput, ActivityIndicator } from 'react-native';
import styles from '../../assets/style/styles';
import * as CONSTANTS from '../utils/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';

const selectLocation = async (placeId, fetchDetails, fetchWeather) => {
    console.log('WPROPS', fetchDetails, placeId)
    const resp = await fetchDetails(placeId)
    fetchWeather(resp)
    console.log('resp', resp);
}

const LocationItem = (props) => {
    console.log('PROPS', props)
    return (
        <TouchableHighlight
            onPress={() => {
                selectLocation(props.place_id, props.fetchDetails, props.selectLocation)
            }}
            style={[styles.testBg, styles.paddingSm, styles.viewShadow, { backgroundColor: '#fff', zIndex: 8, elevation: 8 }]}
        >
            <Text>
                {props.description}
            </Text>
        </TouchableHighlight>
    )
}

const ClearButton = (props) => {
    return (
        <TouchableHighlight
            onPress={props.clearSearch}>
            <MaterialCommunityIcons size={30} name={'close-circle'} color={'#555'} />
        </TouchableHighlight>
    )
}

const SearchCard = (props) => {
    return (
        <GoogleAutoComplete
            apiKey={CONSTANTS.GOOGLE_PLACES_API_KEY}
            debounce={500}
            minLength={3}
            queryTypes={"(cities)"}
        >
            {({ handleTextChange, locationResults, fetchDetails, isSearching, clearSearch, inputValue }) => (
                <React.Fragment>
                    <View>
                        <TextInput
                            style={[styles.paddingSm, styles.textLight, styles.defaultTextBlack, styles.testBg, styles.viewShadow]}
                            placeholder='search locations'
                            onChangeText={handleTextChange}
                            defaultValue={props.location}
                        />
                        <View style={{ position: 'absolute', right: 5, top: 8, zIndex: 9000, elevation: 30 }} >
                            {isSearching ? <ActivityIndicator size='large' color="#000" /> : <ClearButton clearSearch={clearSearch} />}
                        </View>
                    </View>

                    <ScrollView
                        style={{ zIndex: 3, position: 'absolute', left: 0, right: 0, top: 45 }}
                    >
                        {locationResults.map(item => (
                            <LocationItem
                                {...item}
                                key={item.id}
                                fetchDetails={fetchDetails}
                                selectLocation={props.selectLocation}
                            />
                        ))}
                    </ScrollView>
                </React.Fragment>
            )}
        </GoogleAutoComplete>
    );
};


export default SearchCard;
