import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri';
import TelveroTextInput from './common/TelveroTextInput.js'
import BroadCastDropdown from './BroadCastDropdown.js'
import TelveroAddingTags from './common/TelveroAddingTags.js'
import BroadCastTextInform from '../BroadCastTextInform.js'

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
                containerStyle={[styles.marginTop, styles.telveroAddingTags]}
                label='Tags'
            />
            <BroadCastTextInform 
                title='Total number of recipients'
                value={0}
                icon={IMAGE.RECIPIENTS}
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
    marginTop: {
        marginTop: 16,
    },
    telveroAddingTags: {
        marginBottom: 23,
    },
})