import React from 'react'
import { Input } from 'react-native-elements'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const LoginTextLink = props => {
    const { text } = props
    return (
        <Text style={styles.text}>{text}</Text>
    )
}

export default LoginTextLink

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