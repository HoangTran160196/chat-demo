import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function LoginTextLink (props) {
    const { text } = props
    return (
        <Text style={styles.text}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Lato_400Regular',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 19.6,
        color: '#1ACE77'
    }
})