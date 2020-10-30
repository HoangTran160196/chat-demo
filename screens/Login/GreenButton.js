import React from 'react'
import { Text, TouchableOpacity, StyleSheet,  } from 'react-native'

const GreenButton = props => {
    const { title, style } = props
    return (
        <TouchableOpacity style={[styles.buttonContainer, style]}>
            <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default GreenButton

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#1ACE77',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    buttonTitle: {
        fontFamily: 'Lato',
        fontWeight: '700',
        fontSize: 'normal',
        fontSize: 16,
        lineHeight: 22.4,
        color: '#fff'
    }
})