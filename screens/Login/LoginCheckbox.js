import React from 'react'
import { Input } from 'react-native-elements'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'

const LoginCheckbox = props => {
    return (
        <CheckBox
            center
            title='Click Here'
            checkedIcon={<Image source={require('../../assets/img/checkbox-uncheck.png')} />}
            uncheckedIcon={<Image source={require('../../assets/img/checkbox-uncheck.png')} />}
            containerStyle={styles.containerStyle}
            textStyle={styles.textStyle}
            // checked={this.state.checked}
        />
    )
}

export default LoginCheckbox

const styles = StyleSheet.create({
    containerStyle: {
        // reset margin, padding default
        margin: 0,
        padding: 0,
        marginLeft: 0
    },
    textStyle: {
        color: '#fff',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 14,
        // reset margin left, right default
        marginLeft: 5,
        marginRight: 0
    }
})