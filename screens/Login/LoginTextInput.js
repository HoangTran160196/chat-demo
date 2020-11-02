import React from 'react'
import { Input } from 'react-native-elements'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'

const LoginTextInput = props => {
    const { placeholder, source, style = {} } = props
    return (
        <Input
            containerStyle={[styles.containerStyle, style]}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            leftIconContainerStyle={styles.iconContainer}
            placeholder={placeholder}
            leftIcon={
                <Image
                    source={source}
                />
            }
            placeholderTextColor='#B0B0B0'
        />
    )
}

export default LoginTextInput

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 0,
        margin: 0,
        height: 48,
    },
    inputContainer: {
        backgroundColor: '#fff',
        borderRadius: 4,
        paddingHorizontal: 16,
        borderBottomWidth: 0,
    },
    input: {
       fontFamily: 'Lato_400Regular',
       fontStyle: 'normal',
       fontWeight: 'normal',
       fontSize: 16,
       lineHeight: 22,
       justifyContent: 'center',
       height: 48,
    },
    iconContainer: {
        padding: 0,
        marginRight: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
})