import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri';
import BroadCastButton from './BroadCastButton.js'
import BroadCastDropdown from './BroadCastDropdown.js'

const IMAGE = {
    RADIO_CHECKED: require('../../../assets/img/radio_checked.svg'),
    RADIO_UNCHECKED: require('../../../assets/img/radio_unchecked.svg'),
}

export default function BroadCastTimeSetting(props) {
    const { title, style } = props
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.header}>Recipient</Text>
            <View style={styles.dottedSeparator}></View>
            <BroadCastButton 
                title='Send Now'
                iconChecked={IMAGE.RADIO_CHECKED}
                iconUnchecked={IMAGE.RADIO_UNCHECKED}
                containerStyle={styles.marginTop16}
            />
            <BroadCastButton 
                title='Send Later'
                iconChecked={IMAGE.RADIO_CHECKED}
                iconUnchecked={IMAGE.RADIO_UNCHECKED}
                containerStyle={styles.marginTop16}
            />
            <BroadCastDropdown 
                style={[styles.marginTop16, styles.paddingHorizontal16]}
                label='Date'
                placeholder='mm/dd/yyyy'
            />
            <BroadCastDropdown 
                style={[styles.marginTop16, styles.paddingHorizontal16]}
                label='Time'
                placeholder='-- : --   --'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    header: {
        fontFamily: 'Lato_700Bold',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        color: '#333333'
    },
    dottedSeparator: {
        borderColor: '#BDBDBD',
        borderWidth: 0.5,
        borderStyle: 'dashed',
        borderRadius: 1, // add radius => work in android
        marginTop: 12,
    },
    marginTop16: {
        marginTop: 16
    },
    paddingHorizontal16: {
        paddingHorizontal: 16,
    }
})