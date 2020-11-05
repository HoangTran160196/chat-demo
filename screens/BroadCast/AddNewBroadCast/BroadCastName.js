import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TelveroTextInput from './common/TelveroTextInput.js'

export default function BroadCastName(props) {
    const { note, style } = props
    return (
        <View style={[styles.container, style]}>
            <TelveroTextInput 
                label='Broadcast Name *'
                placeholder='Enter broadcast name'
                placeholderTextColor='#B0B0B0'
            />
            <Text style={styles.note}>
                {note}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    note: {
        marginTop: 12,
        fontFamily: 'Lato_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#808080'
    }
})