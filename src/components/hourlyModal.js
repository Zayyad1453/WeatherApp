
import React from 'react';
import { Modal, View, TouchableHighlight, Text, Dimensions, ImageBackground, ScrollView } from 'react-native';
import styles from '../../assets/style/styles';
import Carousel from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as HELPERS from '../utils/helpers';



const HourlyItem = props => {
    const date = new Date(props.item.time * 1000);
    const time = `${date.getHours() === 0 ? 12 : date.getHours()}.00 ${date.getHours() < 12 ? 'AM' : 'PM'}`
    let iconName = props.iconsRef[props.item.icon].icon;
    let fahrenheit = ((props.item.temperature * 9 / 5) + 32).toFixed(1);

    return (
        <View style={styles.hourlyItem}>
            <View>
                <Text style={styles.tempText}>
                    {time} &nbsp;&nbsp;
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <ScrollView horizontal={true} style={{ alignSelf: 'stretch' }}>
                        <Text style={styles.tempText}>
                            {props.item.summary}&nbsp;
                    </Text>
                    </ScrollView>
                    <MaterialCommunityIcons size={20} name={iconName} color={'#fff'} />
                </View>
            </View>
            <TouchableHighlight onPress={() => props.toggleUnits(props.item.temperature)}>
                <Text style={styles.tempText}>
                    {props.units === "C" ?
                        (`${props.item.temperature}˚C`) :
                        (`${fahrenheit}˚F`)
                    }
                    &nbsp;
                </Text>
            </TouchableHighlight>
        </View>
    )
};


const HourlyModal = props => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    // let iconName = props.iconsRef[hourlyData.icon].icon;
    // console.log(props.hourlyData)

    const firstIndex = props.hourlyData.data.findIndex(x => new Date(x.time * 1000).getHours() === new Date().getHours());

    let ref;
    let iconName;
    let weatherCondition;

    if (props.hourlyData) {
        ref = HELPERS.IMAGES_REF[props.hourlyData.icon];
        iconName = ref.icon;
        weatherCondition = ref.name;
    }



    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.showMore}
            onRequestClose={() => { }}
        // style={styles.manager}
        >

            <View style={[{ justifyContent: 'center', alignSelf: 'center' }, styles.manager]}>
                <View style={[styles.marginSm, styles.testBg, styles.hourlyContainer, { width: windowWidth - 30, flex: 1 }]}>
                    <ImageBackground source={props.bg} style={{ alignSelf: 'stretch' }}>
                        <View style={styles.hourlyHeader}>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    {!!weatherCondition && <Text style={[styles.hourlyHeaderText, styles.textBold,]}>
                                        {weatherCondition}
                                    </Text>}
                                    <MaterialCommunityIcons size={30} name={iconName} color={'#000'} />
                                </View>
                                <ScrollView horizontal={true}>
                                    <Text style={[styles.subText, styles.defaultTextBlack, {}]}>
                                        {props.hourlyData.summary}
                                    </Text>
                                </ScrollView>
                            </View>

                            <TouchableHighlight
                                onPress={() => props.hideHourly()}>
                                <MaterialCommunityIcons size={30} name={'close'} color={'#000'} />
                            </TouchableHighlight>
                        </View>
                    </ImageBackground>

                    <Carousel
                        data={props.hourlyData.data}
                        vertical={true}
                        enableSnap={true}
                        sliderHeight={300}
                        itemHeight={60}
                        containerCustomStyle={styles.hourlyBody}
                        renderItem={({ item, index }) =>
                            <HourlyItem
                                item={item}
                                index={index}
                                iconsRef={props.iconsRef}
                                units={props.units}
                                toggleUnits={props.toggleUnits}
                            />
                        }
                        inactiveSlideScale={0.9}
                        firstItem={firstIndex}
                    />


                </View>
            </View>

        </Modal>

    );
}



export default HourlyModal;