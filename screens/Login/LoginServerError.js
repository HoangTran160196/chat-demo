import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function LoginServerError(props) {
    const { serverError } = props
    return (
        <View style={styles.serverErrorContainer}>
            <Text style={styles.serverErrorContent}>{serverError}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    serverErrorContainer: {
        backgroundColor: '#FF4D49',
        borderRadius: 2,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    serverErrorContent: {
        fontFamily: 'Lato_400Regular',
        fontSize: 14,
        lineHeight: 20,
        color: '#fff'
    }
})