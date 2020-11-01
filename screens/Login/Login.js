import React from 'react'
import { Dimensions, KeyboardAvoidingView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import LoginTextInput from './LoginTextInput.js'
import LoginTextLink from './LoginTextLink.js'
import GreenButton from './GreenButton.js'
import LoginCheckbox from './LoginCheckbox.js'

const height = Dimensions.get('window').height;
console.log(height)
const PADDING_HORIZONTAL = 48

export default class Login extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <Text style={styles.header}>Login to your account</Text>

                <LoginTextInput
                    style={styles.emailInputText}
                    placeholder='Enter email address'
                    source='../../assets/img/emailIcon.png'
                />
                <LoginTextInput
                    placeholder='Enter password'
                    source='../../assets/img/passwordIcon.png'
                />

                <View style={styles.rememberAndForgotPasswordArea}>
                    <LoginCheckbox
                    />
                    <LoginTextLink text='Forgot password?'/>
                </View>
                
                <GreenButton title='Login' style={styles.buttonLogin}/>
                <Text style={styles.bottomText}>
                    <Text>Don’t have an account? </Text>
                    <LoginTextLink text='Signup'/>
                </Text>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        paddingHorizontal: PADDING_HORIZONTAL
    },
    header: {
        fontFamily: 'Lato',
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 24,
        lineHeight: 28.8,
        color: '#fff',
        marginTop: 208,
        marginBottom: 32
    },
    rememberAndForgotPasswordArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 18,
        marginBottom: 26
    },
    emailInputText: {
        marginBottom: 16
    },
    buttonLogin: {
        height: 48
    },
    bottomText: {
    }
})