import React from 'react'
import { Input } from 'react-native-elements'
import { StyleSheet } from 'react-native'

export default function Telvero(props) {
    const { containerStyle, label, placeholder, placeholderTextColor } = props
    return (
        <Input
            containerStyle={[styles.containerStyle, containerStyle]}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            labelStyle={styles.labelStyle}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            label={label}
            renderErrorMessage={false}
        />
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingBottom: 5,
        height: 40,
    },
    input: {
        paddingBottom: 0,
        fontFamily: 'Lato_400Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22
    },
    labelStyle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        lineHeight: 16,
        color: '#333333',
        marginBottom: 3,
    },
    errorStyle: {
        margin: 0
    }
})