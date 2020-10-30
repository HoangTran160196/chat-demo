import React from 'react'
import { Input, CheckBox } from 'react-native-elements'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import LoginTextInput from './LoginTextInput.js'
import LoginTextLink from './LoginTextLink.js'
import GreenButton from './GreenButton.js'

const PADDING_HORIZONTAL = 48

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Login to your account</Text>
                <LoginTextInput
                    placeholder='Enter email address'
                    source='../../assets/img/emailIcon.png'
                />
                <LoginTextInput
                    placeholder='Enter password'
                    source='../../assets/img/passwordIcon.png'
                />
                <View>
                    <CheckBox
                        center
                        title='Click Here'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        // checked={this.state.checked}
                    />
                    <LoginTextLink text='Forgot password?'/>
                </View>
                
                <GreenButton title='Login' style={styles.buttonLogin}/>
                <Text style={styles.bottomText}>
                    <Text>Don’t have an account? </Text>
                    <LoginTextLink text='Signup'/>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        flexDirection: 'column',
    },
    header: {

    },
    buttonLogin: {
        height: 48
    },
    bottomText: {
    }
})