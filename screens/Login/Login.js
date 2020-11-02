import React from 'react'
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
    EMAIL_ICON: require('../../assets/img/emailIcon.png'),
    PASSWORD_ICON: require('../../assets/img/passwordIcon.png'),
    BACKGROUND: require('../../assets/img/loginBackground.png'),
    CHECKBOX_UNCHECKED: require('../../assets/img/checkbox-uncheck.png'),
}

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            toScroll: false
        }
    }

    _keyboardDidShow () {
        this.setState({ toScroll: true });
    }

    _keyboardDidHide () {
        this.setState({ toScroll: false });
    }
    test() {
        console.log(this.props)
        return {}
    }

    render() {
        const { toScroll } = this.state
        return (
            <KeyboardAwareScrollView 
                style={styles.container}
                enableOnAndroid={true}
                scrollEnabled={toScroll}
                onKeyboardDidShow={() => this._keyboardDidShow()}
                onKeyboardDidHide={() => this._keyboardDidHide()}
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
                            <LoginCheckbox
                                title='Remember me'
                                checkedIcon={IMAGE.CHECKBOX_UNCHECKED}
                                uncheckedIcon={IMAGE.CHECKBOX_UNCHECKED}
                            />
                            <LoginTextLink text='Forgot password?'/>
                        </View>

                        <GreenButton title='Login' style={styles.buttonLogin}/>

                        <Text style={styles.bottomText}>
                            <Text style={styles.bottomLeftText}>Don’t have an account? </Text>
                            <LoginTextLink text='Signup'/>
                        </Text>
                    </View>
                    
                </ImageBackground>
            </KeyboardAwareScrollView>
        )
    }
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