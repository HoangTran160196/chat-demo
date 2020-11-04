import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri';

const IMAGE = {
    DROPDOWN: require('../../../assets/img/chevron-down.svg')
}

export default function BroadCastDropdown(props) {
    const { label, style, placeholder, enable, onPress } = props
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity 
                activeOpacity={enable ? 0.5 : 1}
                onPress={ enable && onPress()}
                style={[styles.buttonContainer]}
            >
                <Text style={styles.placeholder}>{placeholder}</Text>
                <SvgUri style={styles.tinyIcon} source={IMAGE.DROPDOWN} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    buttonContainer: {
        backgroundColor: '#fff',
        height: 40,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 4,
        flexDirection: 'row',
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        lineHeight: 16,
        color: '#333333',
        marginBottom: 3
    },
    placeholder: {
        fontFamily: 'Lato_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        color: '#B0B0B0'
    },
    picker: {
        backgroundColor: '#fff',
        height: 150,
    },
    pickerItem: {
        height: 150
    }
})