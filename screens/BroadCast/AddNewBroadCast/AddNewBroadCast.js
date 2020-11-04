import React from 'react'
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri';
import BroadCastName from './BroadCastName.js'
import BroadCastRecipient from './BroadCastRecipient.js'
import BroadCastTimeSetting from './BroadCastTimeSetting.js'
import BroadCastMessage from './BroadCastMessage.js'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default function AddNewBroadCast() {
    return (
        <KeyboardAwareScrollView 
            style={styles.container}
            enableOnAndroid={true}
        >
            <BroadCastName 
                note='Create a personalized message that will be sent to multiple people.'
                style={styles.broadCastSectionContainer}
            />
            <BroadCastRecipient 
                style={styles.broadCastSectionContainer}
            />
            <BroadCastTimeSetting 
                style={[styles.broadCastSectionContainer, styles.broadCastTimeSetting]}
            />
            <BroadCastMessage 
                style={styles.broadCastSectionContainer}
            />
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEFF3',
    },
    broadCastSectionContainer: {
        padding: 16,
        marginBottom: 4,
    },
    broadCastTimeSetting: {
        paddingBottom: 24
    }

})