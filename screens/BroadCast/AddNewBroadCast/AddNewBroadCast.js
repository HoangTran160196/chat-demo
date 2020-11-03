import React from 'react'
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri';
import BroadCastName from './BroadCastName.js'
import BroadCastRecipient from './BroadCastRecipient.js'
BroadCastRecipient
export default function AddNewBroadCast() {
    return (
        <ScrollView style={styles.container}>
            <BroadCastName 
                note='Create a personalized message that will be sent to multiple people.'
                style={styles.broadCastSectionContainer}
            />
            <BroadCastRecipient 
                style={styles.broadCastSectionContainer}
            />
        </ScrollView>
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
    }

})