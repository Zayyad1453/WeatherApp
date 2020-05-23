import React from 'react';
import {
    View, Text, FlatList, Dimensions, TouchableOpacity,
    Animated, Easing
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import WeatherCard from './weatherCard';
import styles from '../../assets/style/styles';

class WeatherDeck extends React.Component {

    scrollToCard = (item, index) => {
        this.flatList.snapToItem(index);
        this.props.selectCard(item);
    }

    getLayout = (index) => {
        return { length: windowWidth / 5, offset: windowWidth / 5 * index, index }
    }

    render() {
        const { selectedCard, deck, iconsRef } = this.props;
        // console.log('WEATHER_REPORT', CONTANTS.WEATHER_REPORT,)
        const windowWidth = Dimensions.get('window').width;
        // console.log(selectedCard.index);
        let test;

        return (
            <View>
                {
                    !!selectedCard &&
                    <Carousel
                        ref={(ref) => this.flatList = ref}
                        data={deck}
                        sliderWidth={windowWidth}
                        enableSnap={true}
                        itemWidth={windowWidth / 4.7}
                        // itemHeight={"60px"}
                        containerCustomStyle={styles.weatherCardContainer}
                        renderItem={({ item, index }) =>
                            <WeatherCard action={this.scrollToCard} item={item} index={index} iconsRef={iconsRef} />
                        }
                        firstItem={30}
                        initialNumToRender={deck.length}
                    />
                }
            </View>
        );
    }

};


export default WeatherDeck;
