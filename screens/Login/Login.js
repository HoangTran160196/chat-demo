import React, { useState } from 'react'
import { StatusBar,
         Dimensions,
         View,
         Text,   
         ImageBackground,
         StyleSheet,
        } from 'react-native'
import LoginTextInput from './LoginTextInput.js'
import LoginTextLink from './LoginTextLink.js'
import GreenButton from './GreenButton.js'
import LoginCheckbox from './LoginCheckbox.js'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const {width, height} = Dimensions.get('window');
const ratioHeight = 278 / 667
const ratio = 375 / 667
const PADDING_HORIZONTAL = 48
const IMAGE = {
    EMAIL_ICON: require('../../assets/img/emailIcon.svg'),
    PASSWORD_ICON: require('../../assets/img/passwordIcon.svg'),
    BACKGROUND: require('../../assets/img/loginBackground.png'),
    CHECKBOX_UNCHECKED: require('../../assets/img/checkbox-uncheck.svg'),
    CHECKBOX_CHECKED: require('../../assets/img/checkbox-check.svg'),
}

export default function Login(props) {
    const [toScroll, setToScroll] = useState(false)
    const [serverError, getServerError] = useState('')
    const [emailInvalid, setEmailInvalid] = useState('Invalid email address')
    const [passwordInvalid, setPasswordInvalid] = useState('Invalid email address')
    const [isRememberMe, setRememberMe] = useState(false)
    
    const _keyboardDidShow = () => {
        setToScroll(true)
    }

    const _keyboardDidHide = () => {
        setToScroll(false)
    }

    return (
        <KeyboardAwareScrollView 
            style={styles.container}
            enableOnAndroid={true}
            scrollEnabled={toScroll}
            onKeyboardDidShow={() => _keyboardDidShow()}
            onKeyboardDidHide={() => _keyboardDidHide()}
            onContentSizeChange={(width, height) => console.log(width, height)}
        >
            <StatusBar hidden />
            <ImageBackground source={IMAGE.BACKGROUND} style={styles.background}> 
                <View style={styles.contentContainer}>
                    <Text style={styles.header}>Login to your account</Text>

                    {serverError !== '' && (
                        <View style={styles.serverErrorContainer}>
                            <Text style={styles.serverErrorContent}>{serverError}</Text>
                        </View>
                    )}
                    
                    <LoginTextInput
                        styleComponentContainer={
                            {   
                                marginTop: serverError !== '' ? 24 : 32,
                                marginBottom: emailInvalid !== '' ? 18 : 16
                            }
                        }
                        placeholder='Enter email address'
                        source={IMAGE.EMAIL_ICON}
                        hasError={emailInvalid !== ''}
                        textError='Invalid email address'
                    />
                    <LoginTextInput
                        styleComponentContainer={
                            {
                                marginBottom: passwordInvalid !== '' ? 18 : 16
                            }
                        }
                        placeholder='Enter password'
                        source={IMAGE.PASSWORD_ICON}
                        secureTextEntry={true}
                        hasError={passwordInvalid !== ''}
                        textError={passwordInvalid}
                    />

                    <View style={styles.rememberAndForgotPasswordArea}>
                        <LoginCheckbox
                            title='Remember me'
                            checkedIcon={IMAGE.CHECKBOX_CHECKED}
                            uncheckedIcon={IMAGE.CHECKBOX_UNCHECKED}
                            checked={isRememberMe}
                            onPress={() => setRememberMe(!isRememberMe)}
                        />
                        <LoginTextLink text='Forgot password?'/>
                    </View>

                    <GreenButton 
                        title='Login' 
                        style={styles.buttonLogin}
                        onPress={() => getServerError('The account is not existing')}    
                    />

                    <Text style={styles.bottomText}>
                        <Text style={styles.bottomLeftText}>Don’t have an account? </Text>
                        <LoginTextLink text='Signup'/>
                    </Text>
                </View>
                
            </ImageBackground>
        </KeyboardAwareScrollView>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#183C60'
    },
    background: {
        width,
        height: width / ratio,
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
        marginTop: (width / ratio) * ratioHeight, // background image height devide for ratio
    },
    rememberAndForgotPasswordArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 26
    },
    emailInputText: {
        // marginBottom: 16
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
    },
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