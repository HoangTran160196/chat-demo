import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BroadCastDropdown from './BroadCastDropdown.js'
import TelveroAddingTags from './common/TelveroAddingTags.js'
import BroadCastTextInform from '../BroadCastTextInform.js'
import TelveroDropdown from '../../BroadCast/AddNewBroadCast/common/TelveroDropdown.js'

const IMAGE = {
    RECIPIENTS: require('../../../assets/img/user.svg'),
    DROPDOWN: require('../../../assets/img/chevron-down.svg'),
}

export default function BroadCastRecipient(props) {
    const [isDropdownShow, toggleDropdown] = useState(false)
    const { style } = props
    const list = [
        {id: '0', title: 'Hoang', selected: false},
        {id: '1', title: 'Hoang', selected: false},
        {id: '2', title: 'Hoang', selected: false},
        {id: '3', title: 'Hoang', selected: false}
    ]
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.header}>Recipient</Text>
            <View style={styles.dottedSeparator}></View>
            <BroadCastDropdown 
                style={styles.marginTop}
                label='Individuals'
                placeholder='Enter phone numbers'
                // hasError={true}
                // textError='Please input the contact number'
                icon={IMAGE.DROPDOWN}
                isRequired={true}
                onPress={() => toggleDropdown(!isDropdownShow)}
            />
            <TelveroDropdown 
                show={isDropdownShow}
                list={list}
            />
            <BroadCastDropdown 
                style={styles.marginTop}
                label='From Previous Broadcast'
                placeholder='Enter broadcast name'
                icon={IMAGE.DROPDOWN}
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