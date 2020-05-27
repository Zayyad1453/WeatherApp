import React from 'react';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import WeatherCard from './weatherCard';
import styles from '../../assets/style/styles';

class WeatherDeck extends React.Component {

    scrollToCard = (item, index) => {
        // console.log('index', index)
        // console.log('currentIndex',this.flatList.currentIndex)
        this.flatList.snapToItem(index);
        this.props.selectCard(item);
    }

    render() {
        const { selectedCard, deck, iconsRef, firstIndex } = this.props;
        // console.log('WEATHER_REPORT', CONTANTS.WEATHER_REPORT,)
        const windowWidth = Dimensions.get('window').width;
        // console.log(selectedCard);
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
                        containerCustomStyle={styles.weatherCardContainer}
                        // contentContainerCustomStyle={{ backgroundColor: 'green' }}
                        renderItem={({ item, index }) =>
                            <WeatherCard
                                action={this.scrollToCard}
                                item={item}
                                index={index}
                                iconsRef={iconsRef}
                                selectedCard={selectedCard}
                            />
                        }
                        inactiveSlideScale={0.8}
                        firstItem={firstIndex}
                        initialNumToRender={deck.length}
                    />
                }
            </View>
        );
    }

};


export default WeatherDeck;
