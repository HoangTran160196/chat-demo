import React from 'react'
import { StatusBar,
         Dimensions,
         KeyboardAvoidingView,
         View,
         Text,   
         ImageBackground,
         StyleSheet,
         TouchableOpacity
        } from 'react-native'
import LoginTextInput from './LoginTextInput.js'
import LoginTextLink from './LoginTextLink.js'
import GreenButton from './GreenButton.js'
import LoginCheckbox from './LoginCheckbox.js'

const {width, height} = Dimensions.get('window');
console.log(height)
const PADDING_HORIZONTAL = 48
const IMAGE = {
    EMAIL_ICON: require('../../assets/img/emailIcon.png'),
    PASSWORD_ICON: require('../../assets/img/passwordIcon.png'),
    BACKGROUND: require('../../assets/img/loginBackground.png'),
}

export default class Login extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <StatusBar hidden />
                <ImageBackground source={IMAGE.BACKGROUND} style={styles.background}> 
                    <View style={styles.contentContainer}>
                        <Text style={styles.header}>Login to your account</Text>

                        <LoginTextInput
                            style={styles.emailInputText}
                            placeholder='Enter email address'
                            source={IMAGE.EMAIL_ICON}
                        />
                        <LoginTextInput
                            placeholder='Enter password'
                            source={IMAGE.PASSWORD_ICON}
                        />

                        <View style={styles.rememberAndForgotPasswordArea}>
                            <LoginCheckbox title='Remember me'/>
                            <LoginTextLink text='Forgot password?'/>
                        </View>

                        <GreenButton title='Login' style={styles.buttonLogin}/>
                        <Text style={styles.bottomText}>
                            <Text style={styles.bottomLeftText}>Don’t have an account? </Text>
                            <LoginTextLink text='Signup'/>
                        </Text>
                    </View>
                    
                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#183C60',
    },
    background: {
        width,
        height,
        resizeMode: 'cover', 
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: PADDING_HORIZONTAL,
    },
    header: {
        fontFamily: 'Lato_700Bold',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 24,
        lineHeight: 28.8,
        color: '#fff',
        marginTop: 278,
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
        marginTop: 32,
    },
    bottomLeftText: {
        color: '#fff',
        fontFamily: 'Lato_400Regular',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'normal'
    }
})