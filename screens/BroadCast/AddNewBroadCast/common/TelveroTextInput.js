import React from 'react'
import { Input } from 'react-native-elements'
import { Text, StyleSheet } from 'react-native'

export default function Telvero(props) {
    const { containerStyle,
            inputContainer,
            inputStyle,
            label,
            placeholder,
            placeholderTextColor,
            numberOfLines,
            multiline,
            isRequired,
        } = props

    return (
        <Input
            containerStyle={[styles.containerStyle, containerStyle]}
            inputContainerStyle={[styles.inputContainer, inputContainer]}
            inputStyle={[styles.input, inputStyle]}
            labelStyle={styles.labelStyle}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            label={(
                <Text>{label}
                    {isRequired && (<Text style={styles.required}> *</Text>)}
                </Text>
            )}
            renderErrorMessage={false}
            numberOfLines={numberOfLines}
            multiline={multiline}
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
        lineHeight: 22,
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
    },
    required: {
        color: '#FF4D49'
    }
})