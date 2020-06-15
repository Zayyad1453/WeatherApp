import React from 'react';
import { View, Text, ScrollView, TouchableHighlight, TextInput, ActivityIndicator } from 'react-native';
import styles from '../../assets/style/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import { GOOGLE_PLACES_API_KEY } from 'react-native-dotenv';

const selectLocation = async (placeId, fetchDetails, fetchWeather) => {
    const resp = await fetchDetails(placeId)
    fetchWeather(resp);
}

const LocationItem = (props) => {
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

const SearchTextInput = React.forwardRef((props, ref) => (
    <TextInput
        ref={ref}
        style={[styles.paddingSm, styles.textLight, styles.defaultTextBlack, styles.testBg, styles.viewShadow]}
        placeholder='Search cities'
        onChangeText={(e) => props.handleTextChange(e.replace(/_/g, ' '))}
        defaultValue={props.location.replace(/_/g, ' ')}
    />
))

const ClearButton = (props) => {
    return (
        <TouchableHighlight
            onPress={(e) => {
                props.clearSearch(e);
                ref.current.clear();
                ref.current.focus();
            }}>
            <MaterialCommunityIcons size={30} name={'close'} color={'#555'} />
        </TouchableHighlight>
    )
}

const ref = React.createRef();
const SearchCard = (props) => {

    return (
        <GoogleAutoComplete
            apiKey={GOOGLE_PLACES_API_KEY}
            debounce={500}
            minLength={4}
            queryTypes={"(cities)"}
        >
            {({ handleTextChange, locationResults, fetchDetails, isSearching, clearSearch, inputValue }) => (
                <React.Fragment>
                    <View style={[styles.viewShadow]}>
                        <SearchTextInput
                            ref={ref}
                            handleTextChange={handleTextChange}
                            location={props.location}
                            inputValue={inputValue}
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
