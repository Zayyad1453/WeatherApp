
import React from 'react';
import { Modal, View, TouchableHighlight, Text } from 'react-native';
import styles from '../../assets/style/styles';



const ErrorModal = props => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.showLocationError}
            onRequestClose={() => { }}
            style={styles.manager}
        >

            <View style={[{ justifyContent: 'center', alignSelf: 'center' }, styles.manager]}>
                <View style={[styles.paddingSm, styles.marginSm, { width: 300, borderWidth: 3, borderRadius: 4 }]}>
                    <TouchableHighlight>
                        <View>
                            <Text style={[styles.textBold, styles.center]}>Uh Oh!</Text>
                            <Text style={[styles.center, styles.textLight]}>
                                Your location needs to be fully enabled for this app to work properly.
                                </Text>
                            <Text style={[styles.center, styles.textLight, styles.marginSm]}>
                                You can turn it on in settings here:
                                </Text>
                            <TouchableHighlight style={[styles.viewShadow, styles.marginSm, { backgroundColor: '#000' }]} onPress={props.openSettings}>
                                <Text style={[styles.center, styles.tempText, styles.textBold, styles.paddingSm]}>Enable Location Settings</Text>
                            </TouchableHighlight>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>

        </Modal>

    );
}



export default ErrorModal;