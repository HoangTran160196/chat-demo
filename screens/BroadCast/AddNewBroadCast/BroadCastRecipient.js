import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri';
import TelveroTextInput from './common/TelveroTextInput.js'
import BroadCastDropdown from './BroadCastDropdown.js'
import TelveroAddingTags from './common/TelveroAddingTags.js'

const IMAGE = {
    RECIPIENTS: require('../../../assets/img/user.svg'),
}

export default function BroadCastRecipient(props) {
    const { title, style } = props
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.header}>Recipient</Text>
            <View style={styles.dottedSeparator}></View>
            <TelveroTextInput 
                containerStyle={styles.marginTop}
                label='Individuals'
                placeholder='Enter phone numbers'
                placeholderTextColor='#B0B0B0'
            />
            <BroadCastDropdown 
                style={styles.marginTop}
                label='From Previous Broadcast'
                placeholder='Enter broadcast name'
            />
            <TelveroAddingTags 
                containerStyle={styles.marginTop}
                label='Tags'
            />
            <View style={styles.bottomContent}>
                <SvgUri style={styles.tinyIcon} width="16" height="16" source={IMAGE.RECIPIENTS} />
                <Text style={[styles.fontLato700Bold, styles.bottomText]}>Total number of recipients: 
                    <Text style={styles.bottomRightText}>  0</Text>
                </Text>
            </View>
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
    marginTop: {
        marginTop: 16
    },
    bottomContent: {
        marginTop: 23,
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomText: {
        color: '#808080'
    },
    bottomRightText: {
        color: '#333333'
    },
    tinyIcon: {
        marginRight: 4
    },
    fontLato700Bold: {
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        lineHeight: 16,
        fontWeight:'bold',
    }
})