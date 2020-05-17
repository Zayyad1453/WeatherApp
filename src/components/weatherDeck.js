import React from 'react';
import {
    FlatList, Dimensions, TouchableOpacity,
    Animated, Easing
} from 'react-native';
import WeatherCard from './weatherCard';
import styles from '../../assets/style/styles';

class WeatherDeck extends React.Component {
    // state = {        
    //     data: CONTANTS.WEATHER_REPORT,
    // }

    scrollToCard = (item, index) => {
        
        alert(index, typeof index);
        // let myIndex = 12;
        this.flatList.scrollToItem({
            item,
            animated: true,
          });
          this.props.selectCard(item);
    }
    
    render() {
        const { selectedCard, deck } = this.props;
        // console.log('WEATHER_REPORT', CONTANTS.WEATHER_REPORT,)
        // let flatListRef = React.createRef();

        // console.log(Dimensions.get('window'));
        return (
            <FlatList
                // Do something when animation ended
                // onMomentumScrollEnd={(e) => this.onScrollEnd(e)}
                ref={ (ref) => this.flatList = ref}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                persistentScrollbar={true}
                data={deck}
                keyExtractor={(item) => item.index.toString()}            
                getItemLayout={(data, index) => (
                    // Max 5 items visibles at once 
                    // { length: Dimensions.get('window').width / 5, offset: Dimensions.get('window').width / 5 * index, index }
                    { length: Dimensions.get('window').height / 6, offset: Dimensions.get('window').height / 6 * index, index }
                )}
                initialScrollIndex={0}
                snapToAlignment={'center'}
                
                style={{flex: 1}}                
                contentContainerStyle={styles.weatherCardContainer}
                renderItem={({ item, index }) =>
                    <WeatherCard action={this.scrollToCard} item={item} index={index} />
                }
            />
        );
    }

};


export default WeatherDeck;
