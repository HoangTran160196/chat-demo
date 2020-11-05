import React from 'react'
import { Input } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import TelveroValidateError from '../BroadCast/AddNewBroadCast/common/TelveroValidateError.js'

export default function LoginTextInput(props) {
    const { placeholder,
            source,
            inputMainContainer = {},
            styleComponentContainer,
            secureTextEntry,
            hasError,
            textError
          } = props
    return (
        <View style={styleComponentContainer}>
            <Input
                containerStyle={[styles.containerStyle, inputMainContainer]}
                inputContainerStyle={[styles.inputContainer, hasError && styles.errorStyle]}
                inputStyle={[styles.input, hasError && styles.valueErrorStyle]}
                leftIconContainerStyle={styles.iconContainer}
                placeholder={placeholder}
                leftIcon={
                    <SvgUri source={source} />
                }
                placeholderTextColor='#B0B0B0'
                secureTextEntry={secureTextEntry}
            />
            {hasError && <TelveroValidateError textError={textError}/>}
        </View>
    )
}

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
        width: 24,
        height: 24,
    },
    errorStyle: {
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#FF4D49',
        borderRadius: 4
    },
    valueErrorStyle: {
        color: '#FF4D49'
    }
})